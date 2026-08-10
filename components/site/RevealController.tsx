"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const revealSelector = "[data-reveal]";

export default function RevealController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    );

    root.classList.remove("reveal-ready");

    if (
      elements.length === 0 ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const initialViewportEdge = window.innerHeight * 0.92;
    const initiallyVisible = new Set(
      elements.filter((element) => {
        const bounds = element.getBoundingClientRect();
        return bounds.top <= initialViewportEdge && bounds.bottom >= 0;
      }),
    );

    for (const element of elements) {
      if (initiallyVisible.has(element)) {
        element.dataset.revealed = "";
      } else {
        delete element.dataset.revealed;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          (entry.target as HTMLElement).dataset.revealed = "";
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    for (const element of elements) {
      if (!("revealed" in element.dataset)) observer.observe(element);
    }

    const animationFrame = window.requestAnimationFrame(() => {
      root.classList.add("reveal-ready");
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
