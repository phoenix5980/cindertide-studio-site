import { motion } from "framer-motion";
import { Link } from "react-router";

type DemoHeroAction = {
  label: string;
  to: string;
  variant?: "primary" | "secondary";
};

type DemoHeroProps = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  actions?: DemoHeroAction[];
};

export function DemoHero({ badge, title, subtitle, description, tags, actions }: DemoHeroProps) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
      <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-100"
        >
          {badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.04 }}
          className="mt-5 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.08 }}
          className="mx-auto mt-4 max-w-4xl text-lg leading-relaxed text-slate-200"
        >
          {subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 0.12 }}
          className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-zinc-300"
        >
          {description}
        </motion.p>

        {tags?.length ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        ) : null}

        {actions?.length ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {actions.map((action) => (
              <Link
                key={action.to}
                to={action.to}
                className={
                  action.variant === "secondary"
                    ? "inline-flex items-center rounded-xl border border-slate-600 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition-colors hover:border-slate-500 hover:bg-slate-800"
                    : "inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30"
                }
              >
                {action.label}
              </Link>
            ))}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
