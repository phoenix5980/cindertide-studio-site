export type TrendPoint = {
  label: string;
  value: number;
};

export type OverviewMetric = {
  label: string;
  value: string;
  delta: string;
  tone: "positive" | "warning" | "neutral";
  helper: string;
};

export type RiskBucket = {
  segment: string;
  patients: number;
  ratio: number;
  action: string;
};

export type InsightItem = {
  title: string;
  severity: "high" | "medium" | "low";
  description: string;
  recommendation: string;
};

export type GovernanceItem = {
  title: string;
  detail: string;
  status: "active" | "scheduled";
};

export const overviewMetrics: OverviewMetric[] = [
  {
    label: "Monitored Population",
    value: "128,440",
    delta: "+2.8%",
    tone: "positive",
    helper: "30-day active records in the care management network",
  },
  {
    label: "30-Day Readmission Risk",
    value: "11.6%",
    delta: "-0.9 pts",
    tone: "positive",
    helper: "Model-calibrated estimate vs previous month",
  },
  {
    label: "Care Gap Alerts",
    value: "1,284",
    delta: "+6.1%",
    tone: "warning",
    helper: "Open follow-up tasks across chronic care cohorts",
  },
  {
    label: "Average Length of Stay",
    value: "4.2 days",
    delta: "-0.3 days",
    tone: "neutral",
    helper: "Adjusted for case-mix and transfer activity",
  },
];

export const riskBuckets: RiskBucket[] = [
  {
    segment: "High Risk",
    patients: 8420,
    ratio: 0.33,
    action: "Escalate nurse outreach within 24h",
  },
  {
    segment: "Rising Risk",
    patients: 10980,
    ratio: 0.43,
    action: "Schedule medication adherence review",
  },
  {
    segment: "Stable",
    patients: 6140,
    ratio: 0.24,
    action: "Continue routine digital monitoring",
  },
];

export const trendSeries: { admissions: TrendPoint[]; readmissions: TrendPoint[]; occupancy: TrendPoint[] } = {
  admissions: [
    { label: "W1", value: 4120 },
    { label: "W2", value: 4265 },
    { label: "W3", value: 4388 },
    { label: "W4", value: 4304 },
    { label: "W5", value: 4412 },
    { label: "W6", value: 4479 },
  ],
  readmissions: [
    { label: "W1", value: 13.2 },
    { label: "W2", value: 12.8 },
    { label: "W3", value: 12.4 },
    { label: "W4", value: 12.1 },
    { label: "W5", value: 11.8 },
    { label: "W6", value: 11.6 },
  ],
  occupancy: [
    { label: "W1", value: 81 },
    { label: "W2", value: 82 },
    { label: "W3", value: 83 },
    { label: "W4", value: 84 },
    { label: "W5", value: 83 },
    { label: "W6", value: 82 },
  ],
};

export const insightItems: InsightItem[] = [
  {
    title: "COPD + CHF cohort shows elevated readmission probability",
    severity: "high",
    description:
      "Risk model flagged 1,126 patients with compounding respiratory and cardiac signals in the last 14 days.",
    recommendation:
      "Prioritize telehealth triage and medication reconciliation for post-discharge week one.",
  },
  {
    title: "Weekend discharge handoff lag correlated with ED returns",
    severity: "medium",
    description:
      "Discharges after 18:00 on Fridays have 1.4x higher callback volume within 72 hours.",
    recommendation:
      "Add a weekend discharge checklist and automated callback slot allocation.",
  },
  {
    title: "Preventive screening completion improving in diabetic cohort",
    severity: "low",
    description:
      "A1C and retinal screening completion improved to 78%, up from 72% last quarter.",
    recommendation:
      "Maintain current outreach cadence and monitor overdue appointments weekly.",
  },
];

export const governanceItems: GovernanceItem[] = [
  {
    title: "Model lineage & version governance",
    detail:
      "All risk scores include model version, feature set hash, and inference timestamp for audit review.",
    status: "active",
  },
  {
    title: "Role-based access and PHI minimization",
    detail:
      "Clinical teams view patient-level detail; operations users view de-identified aggregate views by default.",
    status: "active",
  },
  {
    title: "Bias and drift monitoring",
    detail:
      "Monthly fairness checks across age bands and payer segments with automated drift threshold alerts.",
    status: "scheduled",
  },
];
