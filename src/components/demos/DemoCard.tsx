import { motion } from "framer-motion";
import { Link } from "react-router";

type DemoCardProps = {
  title: string;
  description: string;
  href?: string;
  badge?: string;
  tags?: string[];
  note?: string;
};

function CardBody({ title, description, badge, tags, note }: Omit<DemoCardProps, "href">) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group relative h-full rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6"
    >
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
      <div className="relative z-10 h-full">
        {badge ? (
          <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-100">
            {badge}
          </span>
        ) : null}

        <h3 className="mt-3 text-lg font-semibold text-zinc-100">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-300">{description}</p>

        {tags?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-600 bg-slate-800/75 px-2.5 py-1 text-xs font-medium text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {note ? <p className="mt-4 text-xs text-zinc-400">{note}</p> : null}
      </div>
    </motion.div>
  );
}

export function DemoCard({ href, ...rest }: DemoCardProps) {
  if (!href) {
    return <CardBody {...rest} />;
  }

  return (
    <Link
      to={href}
      className="block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    >
      <CardBody {...rest} />
    </Link>
  );
}
