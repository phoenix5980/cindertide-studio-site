import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { copy } from "../../../content/copy";
import { useIsMobileOrIOS } from "../../../hooks/useIsMobileOrIOS";
import { LandingFooter } from "../landing/LandingFooter";

type Lang = "en" | "zh";
type DemoIntent = "rag" | "sql" | "safety" | "clarification";
type DemoStepTone = "default" | "success" | "warning";

type DemoStep = {
  id: number;
  title: string;
  content: string;
  tone?: DemoStepTone;
  code?: boolean;
};

type FlowNodeProps = {
  title: string;
  description: string;
  emphasized?: boolean;
};

const GITHUB_URL = "https://github.com/phoenix5980";
const LANG_STORAGE_KEY = "portfolio-lang";

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

function detectIntent(query: string): DemoIntent {
  const q = query.toLowerCase();

  if (/(删除|drop|delete|truncate)/i.test(q)) {
    return "safety";
  }
  if (/(统计|sql|近7天|kpi|失败交易|count|analysis|analytics|query)/i.test(q)) {
    return "sql";
  }
  if (/(开户|材料|指引|policy|sop|kyc|activation|document)/i.test(q)) {
    return "rag";
  }
  return "clarification";
}

function FlowNode({ title, description, emphasized }: FlowNodeProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18 }}
      className={`rounded-xl border p-4 transition-colors ${
        emphasized
          ? "border-blue-400/35 bg-blue-500/10"
          : "border-slate-700/80 bg-slate-900/70 hover:border-slate-600"
      }`}
    >
      <p className="text-sm font-semibold text-zinc-100">{title}</p>
      <p className="mt-1 text-xs leading-relaxed text-zinc-300">{description}</p>
    </motion.div>
  );
}

export function BankingCopilotPage() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLang = window.localStorage.getItem(LANG_STORAGE_KEY);
    return savedLang === "zh" ? "zh" : "en";
  });
  const isMobileOrIOS = useIsMobileOrIOS();
  const t = copy[lang].bankingCopilot;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    }
  }, [lang]);

  const routerModule = t.modules[0] ?? {
    title: t.architectureFlow.router.title,
    description: t.architectureFlow.router.description,
  };
  const branchModules = [t.modules[1], t.modules[2], t.modules[4], t.modules[3]].filter(
    (module): module is { title: string; description: string } => Boolean(module),
  );

  const [demoQuery, setDemoQuery] = useState(
    copy.en.bankingCopilot.demo.presets[0].query,
  );
  const [demoSteps, setDemoSteps] = useState<DemoStep[]>([]);
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const runTokenRef = useRef(0);

  useEffect(() => {
    setDemoQuery(copy[lang].bankingCopilot.demo.presets[0]?.query ?? "");
    setDemoSteps([]);
    setIsDemoRunning(false);
    runTokenRef.current += 1;
  }, [lang]);

  const pushStep = (runToken: number, step: Omit<DemoStep, "id">) => {
    if (runToken !== runTokenRef.current) {
      return false;
    }
    setDemoSteps((prev) => [
      ...prev,
      { id: Date.now() + Math.round(Math.random() * 1000), ...step },
    ]);
    return true;
  };

  const pushStepWithDelay = async (
    runToken: number,
    step: Omit<DemoStep, "id">,
    delayMs = 360,
  ) => {
    await wait(delayMs);
    return pushStep(runToken, step);
  };

  const runDemo = async (overrideQuery?: string) => {
    const input = (overrideQuery ?? demoQuery).trim();
    if (!input) return;

    const runToken = runTokenRef.current + 1;
    runTokenRef.current = runToken;
    setIsDemoRunning(true);
    setDemoSteps([]);

    const intent = detectIntent(input);

    try {
      const routerOk = await pushStepWithDelay(
        runToken,
        {
          title: t.demo.steps.router,
          content: `${t.demo.intentDetected}: ${t.demo.intentLabels[intent]}`,
        },
        220,
      );
      if (!routerOk) return;

      if (intent === "rag") {
        const ragStart = await pushStepWithDelay(runToken, {
          title: t.demo.steps.rag,
          content: t.demo.rag.retrieving,
        });
        if (!ragStart) return;

        const ragCitations = await pushStepWithDelay(runToken, {
          title: `${t.demo.steps.rag} · ${t.demo.rag.citationsTitle}`,
          content: t.demo.rag.citations.join("\n"),
          code: true,
        });
        if (!ragCitations) return;

        await pushStepWithDelay(runToken, {
          title: t.demo.steps.final,
          content: t.demo.rag.answer,
          tone: "success",
        });
      } else if (intent === "sql") {
        const sqlStart = await pushStepWithDelay(runToken, {
          title: t.demo.steps.sql,
          content: t.demo.sql.generating,
        });
        if (!sqlStart) return;

        const sqlCode = await pushStepWithDelay(runToken, {
          title: t.demo.sql.sqlTitle,
          content: t.demo.sql.sql,
          code: true,
        });
        if (!sqlCode) return;

        const sqlResult = await pushStepWithDelay(runToken, {
          title: t.demo.steps.sql,
          content: t.demo.sql.result,
        });
        if (!sqlResult) return;

        await pushStepWithDelay(runToken, {
          title: t.demo.steps.final,
          content: t.demo.sql.summary,
          tone: "success",
        });
      } else if (intent === "safety") {
        const safetyBlocked = await pushStepWithDelay(runToken, {
          title: t.demo.steps.safety,
          content: t.demo.safety.blocked,
          tone: "warning",
        });
        if (!safetyBlocked) return;

        const safetyReason = await pushStepWithDelay(runToken, {
          title: t.demo.steps.safety,
          content: t.demo.safety.reason,
          tone: "warning",
        });
        if (!safetyReason) return;

        await pushStepWithDelay(runToken, {
          title: t.demo.steps.final,
          content: `${t.demo.safety.blocked} ${t.demo.safety.reason}`,
          tone: "warning",
        });
      } else {
        const clarify = await pushStepWithDelay(runToken, {
          title: t.demo.steps.clarification,
          content: t.demo.clarification.needMore,
        });
        if (!clarify) return;

        await pushStepWithDelay(runToken, {
          title: t.demo.steps.final,
          content: t.demo.clarification.question,
        });
      }
    } finally {
      if (runToken === runTokenRef.current) {
        setIsDemoRunning(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-zinc-100">
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/70 ${
          isMobileOrIOS ? "bg-zinc-950/88" : "backdrop-blur-xl bg-zinc-950/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-black text-white shadow-sm">
                C
              </span>
              <Link
                to="/"
                className="text-sm font-semibold text-zinc-200 hover:text-zinc-100 transition-colors"
              >
                {t.backHome}
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex items-center rounded-md border border-zinc-700/80 bg-zinc-900/70 p-0.5">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`w-10 rounded px-0 py-1 text-xs font-semibold transition-colors ${
                    lang === "en"
                      ? "bg-blue-500/30 text-blue-100"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("zh")}
                  className={`w-10 rounded px-0 py-1 text-xs font-semibold transition-colors ${
                    lang === "zh"
                      ? "bg-blue-500/30 text-blue-100"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  中文
                </button>
              </div>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {t.githubLabel}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <section className="relative overflow-hidden py-24 sm:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute -top-20 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />
          <div className="absolute right-0 top-16 h-96 w-96 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-100"
            >
              {t.pageBadge}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.04 }}
              className="mt-5 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl"
            >
              {t.heroTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.08 }}
              className="mx-auto mt-4 max-w-4xl text-lg text-slate-200 leading-relaxed"
            >
              {t.heroSubtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, delay: 0.12 }}
              className="mx-auto mt-4 max-w-4xl text-base text-zinc-300 leading-relaxed"
            >
              {t.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-2"
            >
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-slate-600 bg-slate-900/70 px-3 py-1 text-xs font-medium text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
              {t.scenariosTitle}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              {t.scenarios.map((scenario) => (
                <div
                  key={scenario}
                  className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6"
                >
                  <p className="text-sm leading-relaxed text-zinc-200">
                    {scenario}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
              {t.architectureTitle}
            </h2>
            <p className="mt-3 max-w-3xl text-zinc-300 leading-relaxed">
              {t.architectureSubtitle}
            </p>

            <div className="mt-8 rounded-2xl border border-blue-400/20 bg-slate-900/80 p-6 md:p-8">
              <div className="mx-auto max-w-md">
                <FlowNode
                  title={t.architectureFlow.user.title}
                  description={t.architectureFlow.user.description}
                />
              </div>
              <div className="my-3 flex justify-center text-slate-500">↓</div>
              <div className="mx-auto max-w-md">
                <FlowNode
                  title={routerModule.title}
                  description={routerModule.description}
                  emphasized
                />
              </div>
              <div className="mt-3 flex justify-center text-slate-500">↓</div>

              <div className="hidden md:block">
                <div className="mx-auto w-[94%] border-t border-slate-700/70" />
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-4">
                {branchModules.map((module) => (
                  <div key={module.title} className="flex flex-col">
                    <div className="mb-2 hidden justify-center text-slate-500 md:flex">
                      ↓
                    </div>
                    <FlowNode title={module.title} description={module.description} />
                  </div>
                ))}
              </div>

              <div className="mt-4 hidden md:block">
                <div className="mx-auto w-[94%] border-t border-slate-700/70" />
              </div>

              <div className="my-3 flex justify-center text-slate-500">↓</div>
              <div className="mx-auto max-w-md">
                <FlowNode
                  title={t.architectureFlow.final.title}
                  description={t.architectureFlow.final.description}
                  emphasized
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
              {t.walkthroughTitle}
            </h2>

            <div className="mt-8 rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6">
              <label className="text-sm font-semibold text-zinc-100">
                {t.demo.inputLabel}
              </label>
              <textarea
                value={demoQuery}
                onChange={(event) => setDemoQuery(event.target.value)}
                placeholder={t.demo.inputPlaceholder}
                className="mt-3 min-h-24 w-full rounded-xl border border-slate-700 bg-slate-950/70 p-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-blue-400/60 focus:outline-none"
              />

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                  {t.demo.presetsLabel}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {t.demo.presets.map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => {
                        setDemoQuery(preset.query);
                        void runDemo(preset.query);
                      }}
                      className="rounded-lg border border-slate-600 bg-slate-800/80 px-3 py-1.5 text-xs font-semibold text-zinc-200 transition-colors hover:border-slate-500 hover:bg-slate-800"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    void runDemo();
                  }}
                  disabled={isDemoRunning || !demoQuery.trim()}
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isDemoRunning ? t.demo.runningButton : t.demo.runButton}
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {demoSteps.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-5 text-sm text-zinc-400">
                  {t.demo.emptyState}
                </div>
              ) : (
                demoSteps.map((step) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.24 }}
                    className={`rounded-2xl border p-5 ${
                      step.tone === "warning"
                        ? "border-amber-400/35 bg-amber-500/10"
                        : step.tone === "success"
                          ? "border-blue-400/30 bg-blue-500/10"
                          : "border-slate-700/80 bg-slate-900/70"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      {step.title}
                    </p>
                    {step.code ? (
                      <pre className="mt-2 overflow-x-auto rounded-xl border border-slate-700 bg-slate-950/80 p-3 text-xs leading-relaxed text-zinc-200">
                        <code>{step.content}</code>
                      </pre>
                    ) : (
                      <p className="mt-2 text-sm leading-relaxed text-zinc-200">
                        {step.content}
                      </p>
                    )}
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
              {t.whyTitle}
            </h2>
            <div className="mt-8 rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6">
              <ul className="space-y-3">
                {t.whyItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-300" />
                    <span className="text-sm leading-relaxed text-zinc-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {t.liveDemoUrl ? (
              <div className="mt-8">
                <a
                  href={t.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/35"
                >
                  {t.liveDemoLabel}
                </a>
              </div>
            ) : null}
          </div>
        </section>
      </main>

      <LandingFooter lang={lang} />
    </div>
  );
}
