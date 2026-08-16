"use client";

import { useEffect, useRef } from "react";

const BADGE_RADIUS = 34;
const BADGE_SETTLE_DISTANCE = 0.1;
const BADGE_TRANSITION_MS = 140;
const TRAIL_CELL_COUNT = 50;
const TRAIL_DURATION_MS = 1000;
const TRAIL_GRID_SIZE = 5;
const POINTER_FIELD_QUERY =
  "(min-width: 1025px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";
const TRAIL_CELL_INDICES = Array.from(
  { length: TRAIL_CELL_COUNT },
  (_, index) => index,
);

type TrailCell = {
  activatedAt: number;
  activationOrder: number;
  coordinateKey: string | null;
  element: HTMLSpanElement;
};

type PointerEventWithCoalescedEvents = PointerEvent & {
  getCoalescedEvents?: () => PointerEvent[];
};

function getCursorTarget(target: EventTarget | null) {
  return target instanceof Element
    ? target.closest<HTMLElement>("[data-cursor]")
    : null;
}

export default function PointerField() {
  const badgeDiscRef = useRef<HTMLDivElement>(null);
  const badgeLabelRef = useRef<HTMLSpanElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const systemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const badge = badgeRef.current;
    const badgeDisc = badgeDiscRef.current;
    const badgeLabel = badgeLabelRef.current;
    const system = systemRef.current;
    const cellElements = cellRefs.current;

    if (
      !badge ||
      !badgeDisc ||
      !badgeLabel ||
      !system ||
      cellElements.length !== TRAIL_CELL_COUNT ||
      cellElements.some((cell) => cell === null)
    ) {
      return;
    }

    const cells: TrailCell[] = cellElements.map((element) => ({
      activatedAt: 0,
      activationOrder: 0,
      coordinateKey: null,
      element: element as HTMLSpanElement,
    }));
    const activeCoordinates = new Map<string, number>();
    const mediaQuery = window.matchMedia(POINTER_FIELD_QUERY);

    let activeCellCount = 0;
    let activeTarget: HTMLElement | null = null;
    let activeTargetRect: DOMRect | null = null;
    let activationOrder = 0;
    let badgeCurrentX = 0;
    let badgeCurrentY = 0;
    let badgeMoving = false;
    let badgePositioned = false;
    let badgeTargetX = 0;
    let badgeTargetY = 0;
    let badgeTransitionEndsAt = 0;
    let enabled = false;
    let frameId: number | null = null;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let pointerKnown = false;
    let poolCursor = 0;
    let trailAnchorX: number | null = null;
    let trailAnchorY: number | null = null;

    const hideCell = (index: number) => {
      const cell = cells[index];

      if (cell.coordinateKey === null) {
        return;
      }

      if (activeCoordinates.get(cell.coordinateKey) === index) {
        activeCoordinates.delete(cell.coordinateKey);
      }

      cell.coordinateKey = null;
      cell.element.style.opacity = "0";
      cell.element.style.visibility = "hidden";
      activeCellCount -= 1;
    };

    // The pool never grows: once full, the least-recently activated cell wins.
    const findAvailableCell = () => {
      for (let offset = 0; offset < TRAIL_CELL_COUNT; offset += 1) {
        const index = (poolCursor + offset) % TRAIL_CELL_COUNT;

        if (cells[index].coordinateKey === null) {
          poolCursor = (index + 1) % TRAIL_CELL_COUNT;
          return index;
        }
      }

      let oldestIndex = 0;

      for (let index = 1; index < TRAIL_CELL_COUNT; index += 1) {
        if (
          cells[index].activationOrder < cells[oldestIndex].activationOrder
        ) {
          oldestIndex = index;
        }
      }

      poolCursor = (oldestIndex + 1) % TRAIL_CELL_COUNT;
      return oldestIndex;
    };

    const activateCell = (x: number, y: number, now: number) => {
      const gridX = Math.round(x / TRAIL_GRID_SIZE);
      const gridY = Math.round(y / TRAIL_GRID_SIZE);
      const coordinateKey = `${gridX}:${gridY}`;

      if (activeCoordinates.has(coordinateKey)) {
        return;
      }

      const index = findAvailableCell();
      const cell = cells[index];
      const wasActive = cell.coordinateKey !== null;

      if (cell.coordinateKey !== null) {
        activeCoordinates.delete(cell.coordinateKey);
      }

      if (!wasActive) {
        activeCellCount += 1;
      }

      activationOrder += 1;
      cell.activatedAt = now;
      cell.activationOrder = activationOrder;
      cell.coordinateKey = coordinateKey;
      activeCoordinates.set(coordinateKey, index);
      cell.element.style.opacity = "0.84";
      cell.element.style.transform = `translate3d(${gridX * TRAIL_GRID_SIZE}px, ${gridY * TRAIL_GRID_SIZE}px, 0)`;
      cell.element.style.visibility = "visible";
    };

    const addTrailSample = (x: number, y: number, now: number) => {
      if (trailAnchorX === null || trailAnchorY === null) {
        trailAnchorX = x;
        trailAnchorY = y;
        activateCell(x, y, now);
        return;
      }

      let deltaX = x - trailAnchorX;
      let deltaY = y - trailAnchorY;
      let distance = Math.hypot(deltaX, deltaY);

      while (distance >= TRAIL_GRID_SIZE) {
        const ratio = TRAIL_GRID_SIZE / distance;
        trailAnchorX += deltaX * ratio;
        trailAnchorY += deltaY * ratio;
        activateCell(trailAnchorX, trailAnchorY, now);

        deltaX = x - trailAnchorX;
        deltaY = y - trailAnchorY;
        distance = Math.hypot(deltaX, deltaY);
      }
    };

    const hasFrameWork = (now: number) =>
      badgeMoving || activeCellCount > 0 || now < badgeTransitionEndsAt;

    // Badge interpolation and trail expiry share this single frame callback.
    const runFrame = (now: number) => {
      frameId = null;

      if (!enabled || document.hidden) {
        return;
      }

      if (badgeMoving) {
        badgeCurrentX += (badgeTargetX - badgeCurrentX) * 0.24;
        badgeCurrentY += (badgeTargetY - badgeCurrentY) * 0.24;

        const remainingX = badgeTargetX - badgeCurrentX;
        const remainingY = badgeTargetY - badgeCurrentY;

        if (
          Math.abs(remainingX) <= BADGE_SETTLE_DISTANCE &&
          Math.abs(remainingY) <= BADGE_SETTLE_DISTANCE
        ) {
          badgeCurrentX = badgeTargetX;
          badgeCurrentY = badgeTargetY;
          badgeMoving = false;
        }

        badge.style.transform = `translate3d(${badgeCurrentX - BADGE_RADIUS}px, ${badgeCurrentY - BADGE_RADIUS}px, 0)`;
      }

      for (let index = 0; index < TRAIL_CELL_COUNT; index += 1) {
        const cell = cells[index];

        if (cell.coordinateKey === null) {
          continue;
        }

        const progress = (now - cell.activatedAt) / TRAIL_DURATION_MS;

        if (progress >= 1) {
          hideCell(index);
          continue;
        }

        cell.element.style.opacity = `${0.84 * (1 - progress)}`;
      }

      if (hasFrameWork(now)) {
        frameId = window.requestAnimationFrame(runFrame);
      }
    };

    const ensureFrame = () => {
      const now = performance.now();

      if (
        enabled &&
        !document.hidden &&
        frameId === null &&
        hasFrameWork(now)
      ) {
        frameId = window.requestAnimationFrame(runFrame);
      }
    };

    const setBadgeActive = (target: HTMLElement) => {
      if (activeTarget === target) {
        return;
      }

      activeTarget = target;
      activeTargetRect = target.getBoundingClientRect();
      badgeLabel.textContent = target.dataset.cursor?.trim() || "View";
      badgeDisc.classList.add("pointer-field__badge-disc--active");
      badgeTransitionEndsAt = performance.now() + BADGE_TRANSITION_MS;
      ensureFrame();
    };

    const setBadgeInactive = (target?: HTMLElement) => {
      if (target && activeTarget !== target) {
        return;
      }

      if (activeTarget === null) {
        return;
      }

      activeTarget = null;
      activeTargetRect = null;
      badgeDisc.classList.remove("pointer-field__badge-disc--active");
      badgeTransitionEndsAt = performance.now() + BADGE_TRANSITION_MS;
      ensureFrame();
    };

    const positionBadgeTarget = (x: number, y: number) => {
      badgeTargetX = x;
      badgeTargetY = y;

      if (!badgePositioned) {
        badgeCurrentX = x;
        badgeCurrentY = y;
        badgePositioned = true;
        badge.style.transform = `translate3d(${x - BADGE_RADIUS}px, ${y - BADGE_RADIUS}px, 0)`;
        return;
      }

      badgeMoving =
        Math.abs(badgeTargetX - badgeCurrentX) > BADGE_SETTLE_DISTANCE ||
        Math.abs(badgeTargetY - badgeCurrentY) > BADGE_SETTLE_DISTANCE;
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!enabled || document.hidden) {
        return;
      }

      if (activeTarget && !activeTarget.isConnected) {
        setBadgeInactive(activeTarget);
      }

      const pointerEvent = event as PointerEventWithCoalescedEvents;
      const coalescedEvents = pointerEvent.getCoalescedEvents?.();
      const samples = coalescedEvents?.length ? coalescedEvents : [event];

      for (const sample of samples) {
        const now = performance.now();

        lastPointerX = sample.clientX;
        lastPointerY = sample.clientY;
        pointerKnown = true;
        positionBadgeTarget(sample.clientX, sample.clientY);
        addTrailSample(sample.clientX, sample.clientY, now);
      }

      ensureFrame();
    };

    const handlePointerOver = (event: PointerEvent) => {
      const nextTarget = getCursorTarget(event.target);

      if (!nextTarget) {
        return;
      }

      const previousTarget = getCursorTarget(event.relatedTarget);

      if (nextTarget === previousTarget) {
        return;
      }

      setBadgeActive(nextTarget);
    };

    const handlePointerOut = (event: PointerEvent) => {
      const previousTarget = getCursorTarget(event.target);

      if (!previousTarget) {
        return;
      }

      const nextTarget = getCursorTarget(event.relatedTarget);

      if (previousTarget === nextTarget) {
        return;
      }

      if (nextTarget) {
        setBadgeActive(nextTarget);
        return;
      }

      setBadgeInactive(previousTarget);
    };

    const handleDocumentLeave = () => {
      trailAnchorX = null;
      trailAnchorY = null;
      badgeMoving = false;
      setBadgeInactive();
    };

    const refreshActiveTargetRect = () => {
      if (!activeTarget) {
        return;
      }

      if (!activeTarget.isConnected) {
        setBadgeInactive(activeTarget);
        return;
      }

      activeTargetRect = activeTarget.getBoundingClientRect();

      if (
        pointerKnown &&
        (lastPointerX < activeTargetRect.left ||
          lastPointerX > activeTargetRect.right ||
          lastPointerY < activeTargetRect.top ||
          lastPointerY > activeTargetRect.bottom)
      ) {
        setBadgeInactive(activeTarget);
      }
    };

    const clearRuntime = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }

      activeCoordinates.clear();
      activeCellCount = 0;
      activeTarget = null;
      activeTargetRect = null;
      badgeMoving = false;
      badgePositioned = false;
      badgeTransitionEndsAt = 0;
      pointerKnown = false;
      trailAnchorX = null;
      trailAnchorY = null;
      badgeDisc.classList.remove("pointer-field__badge-disc--active");
      badge.style.transform = "translate3d(-100px, -100px, 0)";

      for (const cell of cells) {
        cell.coordinateKey = null;
        cell.element.style.opacity = "0";
        cell.element.style.visibility = "hidden";
      }
    };

    const pauseForVisibility = () => {
      if (document.hidden) {
        clearRuntime();
        return;
      }

      ensureFrame();
    };

    const addInteractionListeners = () => {
      document.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      document.addEventListener("pointerover", handlePointerOver);
      document.addEventListener("pointerout", handlePointerOut);
      document.documentElement.addEventListener(
        "pointerleave",
        handleDocumentLeave,
      );
      window.addEventListener("resize", refreshActiveTargetRect, {
        passive: true,
      });
      window.addEventListener("scroll", refreshActiveTargetRect, {
        passive: true,
      });
    };

    const removeInteractionListeners = () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.documentElement.removeEventListener(
        "pointerleave",
        handleDocumentLeave,
      );
      window.removeEventListener("resize", refreshActiveTargetRect);
      window.removeEventListener("scroll", refreshActiveTargetRect);
    };

    const syncEnabledState = () => {
      const shouldEnable = mediaQuery.matches;

      if (shouldEnable === enabled) {
        return;
      }

      enabled = shouldEnable;

      if (enabled) {
        system.style.visibility = "visible";
        addInteractionListeners();
        return;
      }

      removeInteractionListeners();
      clearRuntime();
      system.style.visibility = "hidden";
    };

    document.addEventListener("visibilitychange", pauseForVisibility);
    mediaQuery.addEventListener("change", syncEnabledState);
    syncEnabledState();

    return () => {
      mediaQuery.removeEventListener("change", syncEnabledState);
      document.removeEventListener("visibilitychange", pauseForVisibility);

      if (enabled) {
        removeInteractionListeners();
      }

      clearRuntime();
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-field" ref={systemRef}>
      <div className="pointer-field__trail">
        {TRAIL_CELL_INDICES.map((index) => (
          <span
            className="pointer-field__cell"
            key={index}
            ref={(element) => {
              cellRefs.current[index] = element;
            }}
          />
        ))}
      </div>
      <div className="pointer-field__badge" ref={badgeRef}>
        <div className="pointer-field__badge-disc" ref={badgeDiscRef}>
          <span className="pointer-field__badge-label" ref={badgeLabelRef}>
            View
          </span>
        </div>
      </div>
    </div>
  );
}
