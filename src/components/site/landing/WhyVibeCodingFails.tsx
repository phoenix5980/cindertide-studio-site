import { motion } from "framer-motion";

function GamepadIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 9.75h10.5A4.5 4.5 0 0121.75 14v.75a3 3 0 01-3 3h-.65a2.25 2.25 0 01-2.122-1.5l-.38-1.125a1.5 1.5 0 00-1.423-1.02h-4.35a1.5 1.5 0 00-1.423 1.02l-.38 1.125a2.25 2.25 0 01-2.122 1.5H5.25a3 3 0 01-3-3V14a4.5 4.5 0 014.5-4.25zM7.5 12h3m-1.5-1.5v3m7.5 0h.015v.015H16.5V13.5zm1.5-1.5h.015v.015H18V12z"
      />
    </svg>
  );
}

function LayoutIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5v13.5H3.75V5.25zm5.25 0v13.5"
      />
    </svg>
  );
}

function CpuIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9h6v6H9V9zm-3 3H3m18 0h-3M12 3v3m0 15v-3m5.657-10.657l2.121-2.121M4.222 19.778l2.121-2.121m0-11.314L4.222 4.222m15.556 15.556-2.121-2.121M7.5 4.5h9A3 3 0 0119.5 7.5v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3z"
      />
    </svg>
  );
}

const FOCUS_AREAS = [
  {
    title: "Game experiences",
    description: "Interactive mechanics, player-facing flows, and tooling loops that stay practical.",
    Icon: GamepadIcon,
    color: "from-orange-500 to-red-500",
    iconTone: "text-orange-300 bg-orange-500/15",
  },
  {
    title: "Interface systems",
    description: "Design systems and product surfaces with strong hierarchy, motion intent, and readability.",
    Icon: LayoutIcon,
    color: "from-cyan-500 to-blue-500",
    iconTone: "text-cyan-300 bg-cyan-500/15",
  },
  {
    title: "AI-native tooling",
    description: "Workflows that use AI as infrastructure while keeping control, quality, and observability.",
    Icon: CpuIcon,
    color: "from-violet-500 to-indigo-500",
    iconTone: "text-violet-300 bg-violet-500/15",
  },
] as const;

export function WhyVibeCodingFails() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-zinc-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(59,130,246,0.5) 1px,transparent 1px),linear-gradient(to bottom,rgba(59,130,246,0.5) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-12 right-0 w-96 h-96 rounded-full bg-violet-500/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/35 bg-violet-500/10 text-violet-200 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-violet-300" />
            About CinderTide
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-4 text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100"
        >
          About CinderTide
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-4 text-center text-zinc-300 max-w-3xl mx-auto leading-relaxed"
        >
          CinderTide Studio explores the intersection of game experiences,
          interface systems, and AI-native tooling. We care about technical
          sharpness, visual atmosphere, and products that feel deliberate at
          every layer.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {FOCUS_AREAS.map(({ title, description, Icon, color, iconTone }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
              className="group relative flex flex-col gap-3 p-6 rounded-2xl border border-zinc-800 bg-zinc-900/70 shadow-sm"
            >
              <div
                className={`absolute -inset-px bg-gradient-to-br ${color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
              />
              <div className="relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-zinc-700">
                <div className={`absolute inset-0 rounded-xl ${iconTone}`} />
                <Icon className="relative w-5 h-5" />
              </div>
              <p className="relative font-semibold text-zinc-100 text-sm">{title}</p>
              <p className="relative text-zinc-400 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
