import { motion } from "framer-motion";

const GITHUB_URL = "https://github.com/phoenix5980";
type Lang = "en" | "zh";

export function LandingCTA({ lang }: { lang: Lang }) {
  const text =
    lang === "zh"
      ? {
          badge: "方法论",
          title: "交付方法",
          description:
            "聚焦可落地的AI应用，把知识系统、分析流程和稳定工程能力整合为可交付产品。",
          primary: "查看核心项目",
          secondary: "联系 / GitHub",
        }
      : {
          badge: "Approach",
          title: "Delivery Approach",
          description:
            "We focus on practical AI applications that connect knowledge systems, analytics workflows, and reliable engineering foundations for business teams.",
          primary: "View Featured Work",
          secondary: "Contact / GitHub",
        };

  return (
    <section id="vision" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/12 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] bg-slate-400/8 rounded-full blur-2xl pointer-events-none" />

      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="cta-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-zinc-200 border border-white/20 mb-5">
            {text.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            {text.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-200 max-w-3xl mx-auto leading-relaxed">
            {text.description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              type="button"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-zinc-900 font-semibold shadow-lg shadow-black/30 hover:bg-zinc-100 transition-colors"
            >
              {text.primary}
            </motion.button>
            <motion.a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 text-white font-semibold border border-white/30 hover:bg-white/20 transition-colors"
            >
              {text.secondary}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
