type ComplianceItem = {
  title: string;
  detail: string;
  status: "active" | "scheduled";
};

type ComplianceBlockProps = {
  title: string;
  description: string;
  items: ComplianceItem[];
  statusLabels?: {
    active: string;
    scheduled: string;
  };
};

export function ComplianceBlock({
  title,
  description,
  items,
  statusLabels,
}: ComplianceBlockProps) {
  const labels = statusLabels ?? { active: "active", scheduled: "scheduled" };

  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 md:p-8">
      <h3 className="text-2xl font-bold tracking-tight text-zinc-100">{title}</h3>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-300">{description}</p>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-700/80 bg-slate-950/70 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-zinc-100">{item.title}</p>
              <span
                className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
                  item.status === "active"
                    ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-100"
                    : "border-amber-400/30 bg-amber-500/10 text-amber-100"
                }`}
              >
                {labels[item.status]}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
