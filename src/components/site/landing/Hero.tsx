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

const MOBILE_VERTICAL_LINES: LineConfig[] = [{ row: 6, duration: 8.8, delay: 0.8 }];

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
    label: "AI Copilot Systems",
    color: "text-blue-200 bg-blue-500/10 border-blue-400/30",
  },
  {
    label: "RAG Workflows",
    color: "text-sky-200 bg-sky-500/10 border-sky-400/30",
  },
  {
    label: "SQL Analytics",
    color: "text-indigo-200 bg-indigo-500/10 border-indigo-400/30",
  },
  {
    label: "Enterprise APIs",
    color: "text-slate-200 bg-slate-500/10 border-slate-400/30",
  },
];

export function Hero() {
  const isMobileOrIOS = useIsMobileOrIOS();
  const horizontalLines = isMobileOrIOS
    ? MOBILE_HORIZONTAL_LINES
    : DESKTOP_HORIZONTAL_LINES;
  const verticalLines = isMobileOrIOS ? MOBILE_VERTICAL_LINES : DESKTOP_VERTICAL_LINES;
  const gridNodes = isMobileOrIOS ? MOBILE_NODES : DESKTOP_NODES;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 text-zinc-100">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div
        className={`absolute inset-0 ${
          isMobileOrIOS
            ? "bg-[radial-gradient(circle_at_75%_24%,rgba(59,130,246,0.14),transparent_45%)]"
            : "bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_42%),radial-gradient(circle_at_82%_34%,rgba(14,165,233,0.14),transparent_38%)]"
        }`}
      />

      {isMobileOrIOS ? (
        <>
          <FloatingOrb
            reducedMotion
            className="w-[340px] h-[340px] bg-blue-500/14 -top-20 -left-20"
            delay={0.2}
          />
          <FloatingOrb
            reducedMotion
            className="w-[320px] h-[320px] bg-sky-500/12 top-20 -right-24"
            delay={2}
          />
        </>
      ) : (
        <>
          <FloatingOrb className="w-[620px] h-[620px] bg-blue-500/16 -top-44 -left-36" delay={0} />
          <FloatingOrb className="w-[500px] h-[500px] bg-sky-500/14 top-24 -right-40" delay={2} />
          <FloatingOrb
            className="w-[440px] h-[440px] bg-indigo-500/12 bottom-10 left-1/4"
            delay={4}
          />
        </>
      )}

      <GridPattern className="text-slate-400" reducedMotion={isMobileOrIOS} />

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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobileOrIOS ? 0.35 : 0.45 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-100 text-sm font-medium"
        >
          Enterprise AI Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobileOrIOS ? 0.5 : 0.6, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
        >
          CinderTide Studio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobileOrIOS ? 0.5 : 0.6, delay: 0.12 }}
          className="mt-4 text-base sm:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed"
        >
          AI Applications · Intelligent Workflows · Product Engineering
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobileOrIOS ? 0.5 : 0.6, delay: 0.18 }}
          className="mt-6 text-base sm:text-lg text-zinc-300 max-w-3xl mx-auto leading-relaxed"
        >
          Designing practical AI systems for knowledge retrieval, analytics, and business workflows.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobileOrIOS ? 0.52 : 0.62, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            type="button"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            whileHover={isMobileOrIOS ? undefined : { scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-900/35 hover:shadow-blue-900/45 transition-shadow"
          >
            View Portfolio
          </motion.button>
          <motion.a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            whileHover={isMobileOrIOS ? undefined : { scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900/70 text-zinc-100 font-semibold border border-slate-700 hover:bg-slate-800 transition-colors shadow-sm"
          >
            GitHub Profile
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobileOrIOS ? 0.52 : 0.62, delay: 0.35 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-2"
        >
          {techItems.map((item, index) => (
            <motion.span
              key={item.label}
              initial={isMobileOrIOS ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: isMobileOrIOS ? 0.2 : 0.34,
                delay: isMobileOrIOS ? 0 : 0.4 + index * 0.05,
              }}
              className={`px-3 py-1 rounded-lg text-xs font-semibold border ${item.color}`}
            >
              {item.label}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
