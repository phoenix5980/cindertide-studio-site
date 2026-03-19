import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { copy } from "../../../content/copy";
import { useIsMobileOrIOS } from "../../../hooks/useIsMobileOrIOS";
import { LandingFooter } from "../landing/LandingFooter";

type Lang = "en" | "zh";

const GITHUB_URL = "https://github.com/phoenix5980";
const LANG_STORAGE_KEY = "portfolio-lang";

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

            <div className="mt-8 rounded-2xl border border-blue-400/25 bg-slate-900/80 p-6">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-[repeat(4,minmax(0,1fr))]">
                {t.pipeline.map((step, index) => (
                  <div key={step} className="flex items-center gap-2 text-sm text-zinc-200">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-400/40 bg-blue-500/10 text-xs font-semibold text-blue-100">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              {t.modules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6"
                >
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {module.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    {module.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
              {t.walkthroughTitle}
            </h2>
            <div className="mt-8 space-y-5">
              {t.examples.map((example) => (
                <div
                  key={example.title}
                  className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6"
                >
                  <h3 className="text-lg font-semibold text-zinc-100">
                    {example.title}
                  </h3>
                  <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950/70 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      {t.queryLabel}
                    </p>
                    <p className="mt-2 text-sm text-zinc-200">{example.query}</p>
                  </div>
                  <div className="mt-4 rounded-xl border border-blue-400/20 bg-blue-500/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                      {example.outputTitle}
                    </p>
                    <p className="mt-2 text-sm text-blue-100/90 leading-relaxed">
                      {example.output}
                    </p>
                  </div>
                </div>
              ))}
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
