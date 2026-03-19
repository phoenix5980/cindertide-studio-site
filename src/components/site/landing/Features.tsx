import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { copy } from "../../../content/copy";

type IconProps = { className?: string };
type Lang = "en" | "zh";

type Project = {
  title: string;
  description: string;
  supportLine?: string;
  tags: string[];
  highlights?: string[];
  whyItMatters?: string;
  Icon: ComponentType<IconProps>;
  gradient: string;
  featured?: boolean;
};

function ShieldChartIcon({ className }: IconProps) {
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
        d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 13.5l2-2 2 1.5 3-3" />
    </svg>
  );
}

function DatabaseIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5v6c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-6" />
      <path d="M5 11.5v6c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-6" />
    </svg>
  );
}

function WorkflowIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <rect x="3" y="4" width="7" height="5" rx="1" />
      <rect x="14" y="4" width="7" height="5" rx="1" />
      <rect x="8.5" y="15" width="7" height="5" rx="1" />
      <path d="M10 6.5h4M12 9v6" />
    </svg>
  );
}

function getProjects(lang: Lang): Project[] {
  const t = copy[lang];

  const bankingHighlights =
    lang === "zh"
      ? [
          "基于 RAG 的政策与SOP问答",
          "SQL 驱动的数据分析查询",
          "显式 Agent 路由（RAG / SQL / 澄清）",
          "只读安全控制",
        ]
      : [
          "RAG-based policy & SOP question answering",
          "SQL-powered analytics queries",
          "Explicit agent routing (RAG / SQL / clarification)",
          "Readonly safety controls",
        ];

  return [
    {
      title: t.bankingTitle,
      description: t.bankingDesc,
      supportLine: t.bankingSupport,
      highlights: bankingHighlights,
      whyItMatters: t.bankingWhy,
      tags: ["RAG", "Agent Routing", "SQL Analytics", "Safety Guardrails"],
      Icon: ShieldChartIcon,
      gradient: "from-blue-600 to-sky-500",
      featured: true,
    },
    {
      title: t.assistantTitle,
      description: t.assistantDesc,
      tags:
        lang === "zh"
          ? ["流程自动化", "可审计性", "内部工具"]
          : ["Workflow Automation", "Auditability", "Internal Tools"],
      Icon: WorkflowIcon,
      gradient: "from-slate-600 to-blue-500",
    },
    {
      title: t.analyticsTitle,
      description: t.analyticsDesc,
      tags:
        lang === "zh"
          ? ["数据体验", "仪表盘", "产品工程"]
          : ["Data UX", "Dashboards", "Product Engineering"],
      Icon: DatabaseIcon,
      gradient: "from-indigo-600 to-blue-500",
    },
  ];
}

function ProjectCard({
  title,
  description,
  supportLine,
  tags,
  highlights,
  whyItMatters,
  Icon,
  gradient,
  featured,
  lang,
}: Project & { lang: Lang }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
      className={`relative h-full rounded-2xl border ${
        featured
          ? "border-blue-300/55 bg-slate-900/92 shadow-lg shadow-blue-900/30"
          : "border-slate-700/70 bg-slate-900/68"
      }`}
    >
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${gradient}`} />

      <div className={`relative z-20 flex flex-col h-full ${featured ? "p-7 md:p-8" : "p-6"}`}>
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} shadow-lg shadow-blue-900/35`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="mt-4 text-xl font-semibold text-zinc-100">{title}</h3>
        <p className="mt-3 text-zinc-300 leading-relaxed text-sm">{description}</p>
        {supportLine ? (
          <p className="mt-3 text-sm text-blue-100/90 leading-relaxed">{supportLine}</p>
        ) : null}

        {highlights ? (
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {whyItMatters ? (
          <div className="mt-5 rounded-xl border border-blue-400/25 bg-blue-500/10 p-3">
            <p className="text-xs font-semibold tracking-wide uppercase text-blue-200">
              {lang === "zh" ? "价值说明" : "Why it matters"}
            </p>
            <p className="mt-1 text-sm text-blue-100/90 leading-relaxed">{whyItMatters}</p>
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border border-slate-600 bg-slate-800/80 text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Features({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const projects = getProjects(lang);
  const featuredProject = projects.find((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-24 left-0 w-80 h-80 bg-blue-500/8 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/8 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-zinc-100">{t.featuredTitle}</h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-3xl mx-auto">{t.featuredSubtitle}</p>
        </motion.div>

        <div className="space-y-8">
          {featuredProject ? (
            <motion.div
              key={featuredProject.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42 }}
              className="w-full"
            >
              <ProjectCard {...featuredProject} lang={lang} />
            </motion.div>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.38, delay: 0.05 + index * 0.06 }}
              >
                <ProjectCard {...project} lang={lang} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
