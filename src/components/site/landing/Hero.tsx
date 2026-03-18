import { motion } from "framer-motion";
import { useIsMobileOrIOS } from "../../../hooks/useIsMobileOrIOS";
import { FloatingOrb, GridLine, GridNode, GridPattern } from "./LandingGrid";

const GITHUB_URL = "https://github.com/phoenix5980";

type LineConfig = {
  row: number;
  duration: number;
  delay: number;
};

type NodeConfig = {
  row: number;
  col: number;
  delay: number;
};

const DESKTOP_HORIZONTAL_LINES: LineConfig[] = [
  { row: 2, duration: 5, delay: 0 },
  { row: 4, duration: 6, delay: 1.5 },
  { row: 6, duration: 4.5, delay: 3 },
  { row: 8, duration: 5.5, delay: 0.8 },
  { row: 10, duration: 6.5, delay: 2.2 },
];

const DESKTOP_VERTICAL_LINES: LineConfig[] = [
  { row: 4, duration: 5, delay: 0.5 },
  { row: 8, duration: 6, delay: 2 },
  { row: 12, duration: 4.5, delay: 1 },
  { row: 16, duration: 5.5, delay: 3.5 },
  { row: 20, duration: 6, delay: 1.8 },
];

const MOBILE_HORIZONTAL_LINES: LineConfig[] = [
  { row: 3, duration: 8.4, delay: 0.2 },
  { row: 8, duration: 9.1, delay: 1.7 },
];

const MOBILE_VERTICAL_LINES: LineConfig[] = [
  { row: 6, duration: 8.8, delay: 0.8 },
];

const DESKTOP_NODES: NodeConfig[] = [
  { row: 3, col: 5, delay: 0 },
  { row: 5, col: 12, delay: 1 },
  { row: 7, col: 8, delay: 2 },
  { row: 4, col: 18, delay: 0.5 },
  { row: 9, col: 3, delay: 1.5 },
  { row: 6, col: 22, delay: 2.5 },
];

const MOBILE_NODES: NodeConfig[] = [
  { row: 4, col: 5, delay: 0.3 },
  { row: 8, col: 10, delay: 1.5 },
  { row: 6, col: 16, delay: 2.4 },
];

const techItems = [
  {
    label: "AI-native Systems",
    color: "text-cyan-300 bg-cyan-500/10 border-cyan-500/30",
  },
  {
    label: "Game Tools",
    color: "text-orange-300 bg-orange-500/10 border-orange-500/30",
  },
  {
    label: "Interactive Web",
    color: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30",
  },
  {
    label: "Design Engineering",
    color: "text-violet-300 bg-violet-500/10 border-violet-500/30",
  },
  {
    label: "Experimental Interfaces",
    color: "text-amber-200 bg-amber-500/10 border-amber-500/30",
  },
];

export function Hero() {
  const isMobileOrIOS = useIsMobileOrIOS();
  const horizontalLines = isMobileOrIOS
    ? MOBILE_HORIZONTAL_LINES
    : DESKTOP_HORIZONTAL_LINES;
  const verticalLines = isMobileOrIOS
    ? MOBILE_VERTICAL_LINES
    : DESKTOP_VERTICAL_LINES;
  const gridNodes = isMobileOrIOS ? MOBILE_NODES : DESKTOP_NODES;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 text-zinc-100">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-black" />
      <div
        className={`absolute inset-0 ${
          isMobileOrIOS
            ? "bg-[radial-gradient(circle_at_78%_24%,rgba(6,182,212,0.14),transparent_42%)]"
            : "bg-[radial-gradient(circle_at_25%_20%,rgba(249,115,22,0.14),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.16),transparent_35%)]"
        }`}
      />

      {isMobileOrIOS ? (
        <>
          <FloatingOrb
            reducedMotion
            className="w-[360px] h-[360px] bg-orange-500/16 -top-20 -left-20"
            delay={0.2}
          />
          <FloatingOrb
            reducedMotion
            className="w-[320px] h-[320px] bg-cyan-500/14 top-20 -right-24"
            delay={2}
          />
        </>
      ) : (
        <>
          <FloatingOrb
            className="w-[640px] h-[640px] bg-orange-500/20 -top-44 -left-36"
            delay={0}
          />
          <FloatingOrb
            className="w-[500px] h-[500px] bg-cyan-500/18 top-24 -right-40"
            delay={2}
          />
          <FloatingOrb
            className="w-[460px] h-[460px] bg-indigo-500/14 bottom-10 left-1/4"
            delay={4}
          />
        </>
      )}

      <GridPattern className="text-zinc-400" reducedMotion={isMobileOrIOS} />

      {horizontalLines.map((line) => (
        <GridLine
          key={`h-${line.row}-${line.delay}`}
          row={line.row}
          duration={line.duration}
          delay={line.delay}
          isHorizontal
          reducedMotion={isMobileOrIOS}
        />
      ))}

      {verticalLines.map((line) => (
        <GridLine
          key={`v-${line.row}-${line.delay}`}
          row={line.row}
          duration={line.duration}
          delay={line.delay}
          isHorizontal={false}
          reducedMotion={isMobileOrIOS}
        />
      ))}

      {gridNodes.map((node) => (
        <GridNode
          key={`n-${node.row}-${node.col}`}
          row={node.row}
          col={node.col}
          delay={node.delay}
          reducedMotion={isMobileOrIOS}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <motion.div
          initial={{ opacity: 0, scale: isMobileOrIOS ? 0.96 : 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: isMobileOrIOS ? 0.42 : 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/35 bg-cyan-500/10 text-cyan-200 text-sm font-medium"
        >
          <span
            className={`w-2 h-2 rounded-full bg-cyan-300 ${
              isMobileOrIOS ? "" : "animate-pulse"
            }`}
          />
          AI-native Game Studio · Systems · Interfaces
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobileOrIOS ? 0.58 : 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
        >
          CinderTide Studio builds intelligent game-facing products, tools, and
          interactive systems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobileOrIOS ? 0.58 : 0.7, delay: 0.15 }}
          className="mt-6 text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed"
        >
          We design and engineer polished digital experiences across game
          tooling, AI-native interfaces, and experimental interactive products -
          with a focus on clarity, atmosphere, and technical depth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobileOrIOS ? 0.58 : 0.7, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            type="button"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={isMobileOrIOS ? undefined : { scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold shadow-lg shadow-orange-500/30 hover:shadow-orange-500/45 transition-shadow"
          >
            View Projects
          </motion.button>
          <motion.a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            whileHover={isMobileOrIOS ? undefined : { scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-900/70 text-zinc-100 font-semibold border border-zinc-700 hover:bg-zinc-800 transition-colors shadow-sm"
          >
            Visit GitHub
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobileOrIOS ? 0.62 : 0.8, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-2"
        >
          {techItems.map((item, index) => (
            <motion.span
              key={item.label}
              initial={isMobileOrIOS ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: isMobileOrIOS ? 0.25 : 0.4,
                delay: isMobileOrIOS ? 0 : 0.45 + index * 0.06,
              }}
              className={`px-3 py-1 rounded-lg text-xs font-semibold border ${item.color}`}
            >
              {item.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}
