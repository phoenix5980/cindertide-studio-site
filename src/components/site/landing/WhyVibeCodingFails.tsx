import { motion } from "framer-motion";

type IconProps = { className?: string };

function CopilotIcon({ className }: IconProps) {
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
        d="M4 8a3 3 0 013-3h10a3 3 0 013 3v7a3 3 0 01-3 3h-4l-3 3v-3H7a3 3 0 01-3-3V8z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 11h8M8 14h5" />
    </svg>
  );
}

function BookIcon({ className }: IconProps) {
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
        d="M4 6.5A2.5 2.5 0 016.5 4H20v14.5H6.5A2.5 2.5 0 004 21V6.5z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 11h8" />
    </svg>
  );
}

function ChartIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 14l3-3 3 2 4-5" />
    </svg>
  );
}

function ApiIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l-4 5 4 5M16 7l4 5-4 5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 4l-4 16" />
    </svg>
  );
}

const CAPABILITIES = [
  {
    title: "AI Copilot Systems",
    description:
      "Designing business-facing copilots for multi-step operational workflows and enterprise decision support.",
    Icon: CopilotIcon,
    color: "from-blue-600 to-sky-500",
    iconTone: "text-blue-200 bg-blue-500/15",
  },
  {
    title: "RAG Knowledge Systems",
    description:
      "Building retrieval pipelines for policy, SOP, and domain documents with grounded, traceable responses.",
    Icon: BookIcon,
    color: "from-sky-600 to-indigo-500",
    iconTone: "text-sky-200 bg-sky-500/15",
  },
  {
    title: "Data Analytics Interfaces",
    description:
      "Creating query-driven analytics surfaces that translate business questions into actionable insights.",
    Icon: ChartIcon,
    color: "from-indigo-600 to-blue-500",
    iconTone: "text-indigo-200 bg-indigo-500/15",
  },
  {
    title: "Backend & API Engineering",
    description:
      "Implementing robust service layers, integration contracts, and safety guardrails for production AI applications.",
    Icon: ApiIcon,
    color: "from-slate-600 to-blue-500",
    iconTone: "text-slate-200 bg-slate-500/20",
  },
] as const;

export function WhyVibeCodingFails() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-slate-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(96,165,250,0.4) 1px,transparent 1px),linear-gradient(to bottom,rgba(96,165,250,0.4) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -top-12 right-0 w-96 h-96 rounded-full bg-blue-500/8 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-100 text-sm font-medium">
            Capabilities
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.04 }}
          className="mt-4 text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-100"
        >
          Capabilities
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-4 text-center text-zinc-300 max-w-3xl mx-auto leading-relaxed"
        >
          Professional product engineering across enterprise AI systems, analytics workflows, and integration-ready
          application architecture.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CAPABILITIES.map(({ title, description, Icon, color, iconTone }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 + index * 0.06 }}
              className="group relative flex flex-col gap-3 p-6 rounded-2xl border border-slate-700 bg-slate-900/75"
            >
              <div
                className={`absolute -inset-px bg-gradient-to-br ${color} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
              />
              <div className="relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-slate-600">
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
