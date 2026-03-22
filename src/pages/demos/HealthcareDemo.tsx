import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { DemoHero } from "@/components/demos/DemoHero";
import { MetricCard } from "@/components/demos/MetricCard";
import { InsightPanel } from "@/components/demos/InsightPanel";
import { ComplianceBlock } from "@/components/demos/ComplianceBlock";
import { LandingFooter } from "@/components/site/landing/LandingFooter";
import { useIsMobileOrIOS } from "@/hooks/useIsMobileOrIOS";
import { healthcareCopy } from "@/content/healthcareCopy";
import {
  governanceItems,
  insightItems,
  overviewMetrics,
  riskBuckets,
  trendSeries,
  type TrendPoint,
} from "@/data/healthcareMock";

type Lang = "en" | "zh";

const GITHUB_URL = "https://github.com/phoenix5980";
const LANG_STORAGE_KEY = "portfolio-lang";

function formatPatients(value: number) {
  return value.toLocaleString("en-US");
}

function getTrendPath(points: TrendPoint[], width: number, height: number) {
  if (points.length === 0) {
    return "";
  }

  const values = points.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const valueRange = max - min || 1;
  const xStep = points.length > 1 ? width / (points.length - 1) : width;

  return points
    .map((point, index) => {
      const x = index * xStep;
      const y = height - ((point.value - min) / valueRange) * height;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

function TrendCard({
  title,
  subtitle,
  points,
  strokeClass,
}: {
  title: string;
  subtitle: string;
  points: TrendPoint[];
  strokeClass: string;
}) {
  const path = useMemo(() => getTrendPath(points, 300, 120), [points]);

  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5">
      <p className="text-sm font-semibold text-zinc-100">{title}</p>
      <p className="mt-1 text-xs text-zinc-400">{subtitle}</p>

      <div className="mt-4 rounded-xl border border-slate-700/80 bg-slate-950/70 p-3">
        <svg viewBox="0 0 300 120" className="h-32 w-full" preserveAspectRatio="none">
          <path d={path} className={`fill-none stroke-2 ${strokeClass}`} />
        </svg>

        <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-500">
          {points.map((point) => (
            <span key={point.label}>{point.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HealthcareDemoPage() {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const savedLang = window.localStorage.getItem(LANG_STORAGE_KEY);
    return savedLang === "zh" ? "zh" : "en";
  });

  const isMobileOrIOS = useIsMobileOrIOS();
  const t = healthcareCopy[lang];

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    }
  }, [lang]);

  const translatedOverview = overviewMetrics.map((metric, index) => ({
    ...metric,
    label: t.overview.cards[index]?.label ?? metric.label,
    helper: t.overview.cards[index]?.helper ?? metric.helper,
  }));

  const translatedRiskBuckets = riskBuckets.map((bucket, index) => ({
    ...bucket,
    segment: t.risk.buckets[index]?.segment ?? bucket.segment,
    action: t.risk.buckets[index]?.action ?? bucket.action,
  }));

  const translatedInsights = insightItems.map((item, index) => ({
    ...item,
    title: t.insights.items[index]?.title ?? item.title,
    description: t.insights.items[index]?.description ?? item.description,
    recommendation: t.insights.items[index]?.recommendation ?? item.recommendation,
  }));

  const translatedGovernance = governanceItems.map((item, index) => ({
    ...item,
    title: t.governance.items[index]?.title ?? item.title,
    detail: t.governance.items[index]?.detail ?? item.detail,
  }));

  const totalRiskPopulation = translatedRiskBuckets.reduce(
    (sum, bucket) => sum + bucket.patients,
    0,
  );

  return (
    <div className="min-h-screen bg-slate-950 text-zinc-100">
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/70 ${
          isMobileOrIOS ? "bg-zinc-950/88" : "backdrop-blur-xl bg-zinc-950/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-black text-white shadow-sm">
                C
              </span>
              <Link
                to="/"
                className="text-sm font-semibold text-zinc-200 transition-colors hover:text-zinc-100"
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
                className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {t.githubLabel}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <DemoHero
          badge={t.pageBadge}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          description={t.heroDescription}
          tags={t.tags}
          actions={[
            { label: t.heroActions.openBanking, to: "/demo/banking" },
            { label: t.heroActions.viewDemos, to: "/#demos", variant: "secondary" },
          ]}
        />

        <section className="relative py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 md:p-8">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
                {t.executive.title}
              </h2>

              {t.executive.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-sm leading-relaxed text-zinc-300">
                  {paragraph}
                </p>
              ))}

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {t.executive.callouts.map((callout, index) => (
                  <div
                    key={callout.title}
                    className={
                      index === 0
                        ? "rounded-xl border border-blue-400/25 bg-blue-500/10 p-4"
                        : "rounded-xl border border-indigo-400/25 bg-indigo-500/10 p-4"
                    }
                  >
                    <p
                      className={
                        index === 0
                          ? "text-xs font-semibold uppercase tracking-wide text-blue-200"
                          : "text-xs font-semibold uppercase tracking-wide text-indigo-200"
                      }
                    >
                      {callout.title}
                    </p>
                    <p
                      className={
                        index === 0
                          ? "mt-2 text-sm text-blue-100/90"
                          : "mt-2 text-sm text-indigo-100/90"
                      }
                    >
                      {callout.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold text-zinc-100">{t.executive.snapshotTitle}</p>
              <div className="mt-4 space-y-3">
                {t.executive.snapshotStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-700/80 bg-slate-950/70 p-4"
                  >
                    <p className="text-xs uppercase tracking-wide text-zinc-400">{stat.label}</p>
                    <p className="mt-1 text-2xl font-bold text-zinc-100">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
              {t.targetUsers.title}
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-zinc-300">
              {t.targetUsers.subtitle}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {t.targetUsers.cards.map((card) => (
                <div
                  key={card.role}
                  className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5"
                >
                  <p className="text-sm font-semibold text-zinc-100">{card.role}</p>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-lg border border-slate-700/80 bg-slate-950/70 p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                        {t.targetUsers.scenarioLabel}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                        {card.scenario}
                      </p>
                    </div>

                    <div className="rounded-lg border border-blue-400/20 bg-blue-500/10 p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-blue-200">
                        {t.targetUsers.valueLabel}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-blue-100/90">
                        {card.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100">{t.overview.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300">
              {t.overview.subtitle}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {translatedOverview.map((metric) => (
                <MetricCard
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  delta={metric.delta}
                  helper={metric.helper}
                  tone={metric.tone}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
              {t.workflow.title}
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-zinc-300">
              {t.workflow.subtitle}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {t.workflow.steps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-4"
                >
                  <span className="inline-flex rounded-full border border-slate-600 bg-slate-950/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-300">
                    {t.workflow.stepLabel} {index + 1}
                  </span>
                  <p className="mt-3 text-sm font-semibold text-zinc-100">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{step.description}</p>
                  <div className="mt-3 rounded-lg border border-indigo-400/20 bg-indigo-500/10 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-indigo-200">
                      {t.workflow.outputLabel}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-indigo-100/90">
                      {step.output}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-blue-400/20 bg-blue-500/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                {t.workflow.loopLabel}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-blue-100/90">
                {t.workflow.loopNote}
              </p>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 md:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-100">{t.risk.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{t.risk.subtitle}</p>

              <div className="mt-6 space-y-4">
                {translatedRiskBuckets.map((bucket) => (
                  <div
                    key={bucket.segment}
                    className="rounded-xl border border-slate-700/80 bg-slate-950/70 p-4"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-zinc-100">{bucket.segment}</p>
                      <p className="text-xs font-semibold text-zinc-400">
                        {formatPatients(bucket.patients)} {t.risk.patientsLabel}
                      </p>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                        style={{ width: `${Math.max(6, Math.round(bucket.ratio * 100))}%` }}
                      />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-300">{bucket.action}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-blue-400/20 bg-blue-500/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                  {t.risk.triageTitle}
                </p>
                <p className="mt-2 text-sm text-blue-100/90">
                  {t.risk.triageDescription.replace(
                    "{count}",
                    formatPatients(totalRiskPopulation),
                  )}
                </p>
              </div>
            </div>

            <InsightPanel
              title={t.insights.title}
              subtitle={t.insights.subtitle}
              items={translatedInsights}
              recommendationLabel={t.insights.recommendationLabel}
              severityLabels={t.insights.severityLabels}
            />
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100">{t.trends.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300">
              {t.trends.subtitle}
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              <TrendCard
                title={t.trends.cards[0].title}
                subtitle={t.trends.cards[0].subtitle}
                points={trendSeries.admissions}
                strokeClass="stroke-blue-300"
              />
              <TrendCard
                title={t.trends.cards[1].title}
                subtitle={t.trends.cards[1].subtitle}
                points={trendSeries.readmissions}
                strokeClass="stroke-amber-300"
              />
              <TrendCard
                title={t.trends.cards[2].title}
                subtitle={t.trends.cards[2].subtitle}
                points={trendSeries.occupancy}
                strokeClass="stroke-indigo-300"
              />
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 md:p-8">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100">{t.aiLogic.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{t.aiLogic.subtitle}</p>

              <div className="mt-6 space-y-3">
                {t.aiLogic.blocks.map((block) => (
                  <div
                    key={block.label}
                    className="rounded-xl border border-slate-700/80 bg-slate-950/70 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      {block.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">{block.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 md:p-8">
              <p className="text-sm font-semibold text-zinc-100">{t.aiLogic.flowTitle}</p>
              <div className="mt-4 space-y-3">
                {t.aiLogic.flowSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-xl border border-slate-700/80 bg-slate-950/70 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-blue-400/25 bg-blue-500/15 text-[11px] font-semibold text-blue-100">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-zinc-100">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ComplianceBlock
              title={t.governance.title}
              description={t.governance.description}
              items={translatedGovernance}
              statusLabels={t.governance.statusLabels}
            />
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100">{t.outcomes.title}</h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-zinc-300">
              {t.outcomes.subtitle}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {t.outcomes.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-5"
                >
                  <p className="text-sm font-semibold text-zinc-100">{item.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.description}</p>
                  <div className="mt-4 rounded-lg border border-blue-400/20 bg-blue-500/10 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-blue-200">
                      {t.outcomes.metricLabel}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-blue-100/90">{item.metric}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 text-center md:p-8">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100">{t.cta.title}</h2>
              <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-zinc-300">
                {t.cta.description}
              </p>
              <div className="mx-auto mt-5 max-w-3xl rounded-lg border border-slate-700/80 bg-slate-950/70 p-3 text-left">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-zinc-500">
                  {t.disclaimer.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">{t.disclaimer.text}</p>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/demo/banking"
                  className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30"
                >
                  {t.cta.banking}
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center rounded-xl border border-slate-600 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition-colors hover:border-slate-500 hover:bg-slate-800"
                >
                  {t.cta.home}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LandingFooter lang={lang} />
    </div>
  );
}
