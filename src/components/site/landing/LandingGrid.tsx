/**
 * LandingGrid — Landing page background animation component
 */

import { motion } from "framer-motion";
import React from "react";

const GRID_SIZE = 60;

type PerformanceProps = {
  reducedMotion?: boolean;
};

// ── Glowing lines moving along grid lines ──────────────────────────────────────────
export function GridLine({
  delay = 0,
  duration = 4,
  row,
  isHorizontal = true,
  reducedMotion = false,
}: {
  delay?: number;
  duration?: number;
  row: number;
  isHorizontal?: boolean;
} & PerformanceProps) {
  const position = row * GRID_SIZE;
  const [hasCompletedFirst, setHasCompletedFirst] = React.useState(false);
  const [screenSize, setScreenSize] = React.useState(1920);

  React.useEffect(() => {
    const update = () => {
      setScreenSize(isHorizontal ? window.innerWidth : window.innerHeight);
    };

    update();
    window.addEventListener("resize", update, { passive: true });

    return () => {
      window.removeEventListener("resize", update);
    };
  }, [isHorizontal]);

  const lineLength = reducedMotion ? 84 : 120;
  const lineThickness = reducedMotion ? 1 : 2;
  const loopDuration = reducedMotion ? duration * 1.45 : duration;
  const initialPosition = -lineLength;
  const firstDuration = loopDuration;

  const handleAnimationComplete = React.useCallback(() => {
    if (!hasCompletedFirst) {
      setHasCompletedFirst(true);
    }
  }, [hasCompletedFirst]);

  const gradient = isHorizontal
    ? reducedMotion
      ? "linear-gradient(90deg, transparent, rgba(99,102,241,0.55), rgba(139,92,246,0.35), transparent)"
      : "linear-gradient(90deg, transparent, rgba(99,102,241,0.8), rgba(139,92,246,0.6), transparent)"
    : reducedMotion
      ? "linear-gradient(180deg, transparent, rgba(99,102,241,0.55), rgba(139,92,246,0.35), transparent)"
      : "linear-gradient(180deg, transparent, rgba(99,102,241,0.8), rgba(139,92,246,0.6), transparent)";

  const shadow = reducedMotion
    ? "0 0 10px rgba(99,102,241,0.28)"
    : "0 0 20px rgba(99,102,241,0.5), 0 0 40px rgba(99,102,241,0.3)";

  if (isHorizontal) {
    return (
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: position,
          left: 0,
          width: lineLength,
          height: lineThickness,
          background: gradient,
          boxShadow: shadow,
        }}
        initial={{ x: initialPosition }}
        animate={{
          x: hasCompletedFirst
            ? [`-${lineLength}px`, `${screenSize + lineLength}px`]
            : `${screenSize + lineLength}px`,
        }}
        transition={{
          duration: hasCompletedFirst ? loopDuration : firstDuration,
          delay: hasCompletedFirst ? 0 : delay,
          repeat: hasCompletedFirst ? Number.POSITIVE_INFINITY : 0,
          ease: "linear",
        }}
        onAnimationComplete={handleAnimationComplete}
      />
    );
  }

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: position,
        top: 0,
        width: lineThickness,
        height: lineLength,
        background: gradient,
        boxShadow: shadow,
      }}
      initial={{ y: initialPosition }}
      animate={{
        y: hasCompletedFirst
          ? [`-${lineLength}px`, `${screenSize + lineLength}px`]
          : `${screenSize + lineLength}px`,
      }}
      transition={{
        duration: hasCompletedFirst ? loopDuration : firstDuration,
        delay: hasCompletedFirst ? 0 : delay,
        repeat: hasCompletedFirst ? Number.POSITIVE_INFINITY : 0,
        ease: "linear",
      }}
      onAnimationComplete={handleAnimationComplete}
    />
  );
}

// ── Grid intersection node flicker ──────────────────────────────────────────────────
export function GridNode({
  row,
  col,
  delay = 0,
  reducedMotion = false,
}: {
  row: number;
  col: number;
  delay?: number;
} & PerformanceProps) {
  const nodeSize = reducedMotion ? 5 : 8;
  const offset = nodeSize / 2;

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: col * GRID_SIZE - offset,
        top: row * GRID_SIZE - offset,
        width: nodeSize,
        height: nodeSize,
        background: reducedMotion
          ? "radial-gradient(circle, rgba(99,102,241,0.58) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(99,102,241,0.8) 0%, transparent 70%)",
        boxShadow: reducedMotion
          ? "0 0 6px rgba(99,102,241,0.3)"
          : "0 0 10px rgba(99,102,241,0.6)",
      }}
      animate={{
        opacity: reducedMotion ? [0, 0.72, 0] : [0, 1, 0],
        scale: reducedMotion ? [0.8, 1.15, 0.8] : [0.5, 1.5, 0.5],
      }}
      transition={{
        duration: reducedMotion ? 3.6 : 2,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  );
}

// ── Gradient floating glow orbs ──────────────────────────────────────────────────
export function FloatingOrb({
  className,
  delay = 0,
  reducedMotion = false,
}: {
  className?: string;
  delay?: number;
} & PerformanceProps) {
  return (
    <motion.div
      className={`absolute rounded-full ${
        reducedMotion ? "blur-xl opacity-20" : "blur-3xl opacity-30"
      } ${className}`}
      animate={
        reducedMotion
          ? {
              y: [0, -14, 0],
              opacity: [0.16, 0.24, 0.16],
            }
          : {
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }
      }
      transition={{
        duration: reducedMotion ? 13 : 8,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  );
}

// ── Static CSS grid background ────────────────────────────────────────────────
export function GridPattern({
  className = "",
  reducedMotion = false,
}: {
  className?: string;
} & PerformanceProps) {
  return (
    <div
      className={`absolute inset-0 ${
        reducedMotion ? "opacity-[0.025] dark:opacity-[0.05]" : "opacity-[0.03] dark:opacity-[0.08]"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
        backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
      }}
    />
  );
}
