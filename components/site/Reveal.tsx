"use client";

import { LazyMotion, m, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

const loadMotionFeatures = () =>
  import("@/components/site/motion-features").then(
    (module) => module.default,
  );

const subscribeToBrowserCapability = () => () => {};
const getBrowserCapability = () =>
  typeof window !== "undefined" && "IntersectionObserver" in window;
const getServerCapability = () => false;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  distance = 22,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const canAnimateInView = useSyncExternalStore(
    subscribeToBrowserCapability,
    getBrowserCapability,
    getServerCapability,
  );

  if (!canAnimateInView || prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <m.div
        className={className}
        initial={{ opacity: 0, y: distance }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.65,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
