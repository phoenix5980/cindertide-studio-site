import { motion } from "framer-motion";
import { DemoCard } from "@/components/demos/DemoCard";

type Lang = "en" | "zh";

export function DemosEntry({ lang }: { lang: Lang }) {
  const text =
    lang === "zh"
      ? {
          title: "演示中心",
          subtitle: "统一入口访问各行业 Demo，保留原有银行案例并扩展新场景。",
          cards: [
            {
              title: "银行知识与数据 Copilot",
              description:
                "保留原有银行案例，包含 RAG、SQL 分析与安全路由流程。",
              href: "/demo/banking",
              badge: "已保留",
              tags: ["Banking", "RAG", "SQL", "Agent Routing"],
              note: "旧内容已独立到 Demo 路由，方便持续访问。",
            },
            {
              title: "Healthcare Data Demo",
              description:
                "新增医疗数据产品演示，展示人群健康指标、风险分层与治理能力。",
              href: "/demo/healthcare",
              badge: "新增",
              tags: ["Healthcare", "Risk Stratification", "Compliance"],
              note: "面向医疗与政企汇报场景的演示页面。",
            },
            {
              title: "FGO Demo",
              description: "预留路线用于后续 FGO 相关业务展示模块。",
              href: "/demo/fgo",
              badge: "预留",
              tags: ["Scalable Route", "Portfolio"],
              note: "可按同一结构继续扩展更多垂直场景。",
            },
            {
              title: "Agent Demo",
              description: "预留路线用于后续多 Agent 协同能力展示。",
              href: "/demo/agent",
              badge: "预留",
              tags: ["Agent Workflow", "Operations"],
              note: "路由已就位，可直接补充内容。",
            },
          ],
        }
      : {
          title: "Demo Library",
          subtitle:
            "A shared entry point for vertical demos, preserving the original banking case while extending new showcases.",
          cards: [
            {
              title: "Banking Knowledge & Data Copilot",
              description:
                "Preserved original banking demo with RAG, SQL analytics, and safety-aware routing.",
              href: "/demo/banking",
              badge: "Preserved",
              tags: ["Banking", "RAG", "SQL", "Agent Routing"],
              note: "Original content is now accessible through a dedicated demo route.",
            },
            {
              title: "Healthcare Data Demo",
              description:
                "New healthcare data product showcase with population metrics, risk stratification, and governance.",
              href: "/demo/healthcare",
              badge: "New",
              tags: ["Healthcare", "Risk Stratification", "Compliance"],
              note: "Built for enterprise and stakeholder-facing presentations.",
            },
            {
              title: "FGO Demo",
              description:
                "Reserved route for upcoming FGO-specific workflow and analytics demonstrations.",
              href: "/demo/fgo",
              badge: "Reserved",
              tags: ["Scalable Route", "Portfolio"],
              note: "Follow the same page pattern to add content later.",
            },
            {
              title: "Agent Demo",
              description:
                "Reserved route for future multi-agent orchestration showcase content.",
              href: "/demo/agent",
              badge: "Reserved",
              tags: ["Agent Workflow", "Operations"],
              note: "Route is live and ready for extension.",
            },
          ],
        };

  return (
    <section id="demos" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute -left-20 top-8 h-72 w-72 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">{text.title}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-zinc-400">{text.subtitle}</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {text.cards.map((card, index) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36, delay: 0.04 * index }}
            >
              <DemoCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
