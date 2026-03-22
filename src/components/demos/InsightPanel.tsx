import { motion } from "framer-motion";

type InsightPanelItem = {
  title: string;
  severity: "high" | "medium" | "low";
  description: string;
  recommendation: string;
};

type InsightPanelProps = {
  title: string;
  subtitle: string;
  items: InsightPanelItem[];
  recommendationLabel?: string;
  severityLabels?: Partial<Record<InsightPanelItem["severity"], string>>;
};

const severityClasses: Record<InsightPanelItem["severity"], string> = {
  high: "border-rose-400/30 bg-rose-500/10 text-rose-100",
  medium: "border-amber-400/30 bg-amber-500/10 text-amber-100",
  low: "border-emerald-400/30 bg-emerald-500/10 text-emerald-100",
};

export function InsightPanel({
  title,
  subtitle,
  items,
  recommendationLabel = "Recommended Action",
  severityLabels,
}: InsightPanelProps) {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 md:p-8">
      <h3 className="text-2xl font-bold tracking-tight text-zinc-100">{title}</h3>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">{subtitle}</p>

      <div className="mt-6 space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.24, delay: index * 0.04 }}
            className="rounded-xl border border-slate-700/80 bg-slate-950/70 p-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-zinc-100">{item.title}</p>
              <span
                className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${severityClasses[item.severity]}`}
              >
                {severityLabels?.[item.severity] ?? item.severity}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.description}</p>
            <div className="mt-3 rounded-lg border border-blue-400/20 bg-blue-500/10 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                {recommendationLabel}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-blue-100/90">{item.recommendation}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
