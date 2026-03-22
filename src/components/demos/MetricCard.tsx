import { motion } from "framer-motion";

type MetricCardProps = {
  label: string;
  value: string;
  delta: string;
  helper: string;
  tone?: "positive" | "warning" | "neutral";
};

const toneClasses: Record<NonNullable<MetricCardProps["tone"]>, string> = {
  positive: "border-emerald-400/30 bg-emerald-500/10 text-emerald-100",
  warning: "border-amber-400/30 bg-amber-500/10 text-amber-100",
  neutral: "border-blue-400/30 bg-blue-500/10 text-blue-100",
};

export function MetricCard({
  label,
  value,
  delta,
  helper,
  tone = "neutral",
}: MetricCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18 }}
      className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{label}</p>
      <p className="mt-3 text-3xl font-bold tracking-tight text-zinc-100">{value}</p>
      <span
        className={`mt-3 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${toneClasses[tone]}`}
      >
        {delta}
      </span>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{helper}</p>
    </motion.div>
  );
}
