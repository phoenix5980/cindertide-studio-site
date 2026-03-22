export const healthcareCopy = {
  en: {
    backHome: "Back to Home",
    githubLabel: "GitHub",
    pageBadge: "Healthcare Data Demo",
    heroTitle: "Healthcare Intelligence Command Center",
    heroSubtitle:
      "AI-assisted population health monitoring for clinical operations and care quality teams",
    heroDescription:
      "A simulated enterprise healthcare data product that combines risk stratification, operational metrics, and governance-ready AI insight workflows.",
    tags: [
      "Population Health",
      "Clinical Operations",
      "Risk Intelligence",
      "Audit-ready AI",
    ],
    heroActions: {
      openBanking: "Open Banking Demo",
      viewDemos: "View All Demos",
    },
    executive: {
      title: "Executive Summary",
      paragraphs: [
        "The platform unifies patient risk surveillance, care pathway alerts, and hospital throughput indicators in a single workspace. Care teams get patient-level prioritization while leadership sees de-identified trend performance across service lines.",
        "Workflow outcome: fewer avoidable readmissions, improved discharge follow-through, and clearer escalation playbooks backed by transparent model evidence.",
      ],
      callouts: [
        {
          title: "Primary Value",
          description:
            "Prioritize intervention resources where clinical and operational risk overlap.",
        },
        {
          title: "Deployment Lens",
          description:
            "Designed for regulated healthcare environments with strong audit and governance requirements.",
        },
      ],
      snapshotTitle: "Operational Snapshot",
      snapshotStats: [
        { label: "Active Facilities", value: "22" },
        { label: "Care Teams Connected", value: "198" },
        { label: "Model Refresh Cadence", value: "Every 6 hours" },
      ],
    },
    overview: {
      title: "Population Health Overview",
      subtitle:
        "Simulated, de-identified metrics illustrating daily monitoring coverage and quality performance.",
      cards: [
        {
          label: "Monitored Population",
          helper: "30-day active records in the care management network",
        },
        {
          label: "30-Day Readmission Risk",
          helper: "Model-calibrated estimate vs previous month",
        },
        {
          label: "Care Gap Alerts",
          helper: "Open follow-up tasks across chronic care cohorts",
        },
        {
          label: "Average Length of Stay",
          helper: "Adjusted for case-mix and transfer activity",
        },
      ],
    },
    risk: {
      title: "Risk Stratification",
      subtitle: "Current model classification across monitored high-acuity cohorts.",
      buckets: [
        {
          segment: "High Risk",
          action: "Escalate nurse outreach within 24h",
        },
        {
          segment: "Rising Risk",
          action: "Schedule medication adherence review",
        },
        {
          segment: "Stable",
          action: "Continue routine digital monitoring",
        },
      ],
      patientsLabel: "patients",
      triageTitle: "AI Triage Coverage",
      triageDescription:
        "{count} patients currently mapped into active risk tiers for guided intervention planning.",
    },
    insights: {
      title: "AI Insight Panel",
      subtitle:
        "Prioritized observations surfaced from simulated model and operational event streams.",
      recommendationLabel: "Recommended Action",
      severityLabels: {
        high: "high",
        medium: "medium",
        low: "low",
      },
      items: [
        {
          title: "COPD + CHF cohort shows elevated readmission probability",
          description:
            "Risk model flagged 1,126 patients with compounding respiratory and cardiac signals in the last 14 days.",
          recommendation:
            "Prioritize telehealth triage and medication reconciliation for post-discharge week one.",
        },
        {
          title: "Weekend discharge handoff lag correlated with ED returns",
          description:
            "Discharges after 18:00 on Fridays have 1.4x higher callback volume within 72 hours.",
          recommendation:
            "Add a weekend discharge checklist and automated callback slot allocation.",
        },
        {
          title: "Preventive screening completion improving in diabetic cohort",
          description:
            "A1C and retinal screening completion improved to 78%, up from 72% last quarter.",
          recommendation:
            "Maintain current outreach cadence and monitor overdue appointments weekly.",
        },
      ],
    },
    trends: {
      title: "Trend Metrics",
      subtitle:
        "Weekly trend views for admission load, readmission risk, and inpatient occupancy.",
      cards: [
        {
          title: "Admissions Throughput",
          subtitle: "Weekly admitted patient volume",
        },
        {
          title: "Readmission Risk",
          subtitle: "30-day projected percentage",
        },
        {
          title: "Bed Occupancy",
          subtitle: "Median facility occupancy rate",
        },
      ],
    },
    governance: {
      title: "Explainability, Compliance, and Governance",
      description:
        "Controls designed to support healthcare regulatory review, internal governance, and safe operational rollout.",
      statusLabels: {
        active: "active",
        scheduled: "scheduled",
      },
      items: [
        {
          title: "Model lineage & version governance",
          detail:
            "All risk scores include model version, feature set hash, and inference timestamp for audit review.",
        },
        {
          title: "Role-based access and PHI minimization",
          detail:
            "Clinical teams view patient-level detail; operations users view de-identified aggregate views by default.",
        },
        {
          title: "Bias and drift monitoring",
          detail:
            "Monthly fairness checks across age bands and payer segments with automated drift threshold alerts.",
        },
      ],
    },
    cta: {
      title: "Explore More Demos",
      description:
        "The demo architecture now supports multiple vertical showcases under a shared visual and routing system.",
      banking: "Banking Demo",
      home: "Back to Home",
    },
  },
  zh: {
    backHome: "返回首页",
    githubLabel: "GitHub",
    pageBadge: "医疗数据演示",
    heroTitle: "医疗智能数据指挥中心",
    heroSubtitle: "面向临床运营与质量团队的人群健康 AI 监测平台",
    heroDescription:
      "该演示展示了一个企业级医疗数据产品：将风险分层、运营指标与合规治理能力整合到统一工作台。",
    tags: ["人群健康", "临床运营", "风险智能", "可审计 AI"],
    heroActions: {
      openBanking: "查看银行 Demo",
      viewDemos: "查看全部 Demo",
    },
    executive: {
      title: "执行摘要",
      paragraphs: [
        "平台将患者风险监测、照护路径告警与医院运营吞吐指标整合到同一界面。临床团队可获得患者级优先级，管理层可查看脱敏后的趋势表现。",
        "预期效果：降低可避免再入院率、提升出院随访执行质量，并通过可解释证据支持分级干预决策。",
      ],
      callouts: [
        {
          title: "核心价值",
          description: "在临床风险与运营风险重叠处优先投入干预资源。",
        },
        {
          title: "部署视角",
          description: "面向强监管医疗场景设计，支持审计与治理要求。",
        },
      ],
      snapshotTitle: "运营快照",
      snapshotStats: [
        { label: "接入机构数", value: "22" },
        { label: "连接护理团队", value: "198" },
        { label: "模型刷新频率", value: "每 6 小时" },
      ],
    },
    overview: {
      title: "人群健康总览",
      subtitle: "基于模拟脱敏数据，展示日常监测覆盖与质量表现。",
      cards: [
        {
          label: "监测人群规模",
          helper: "近 30 天纳入管理网络的活跃记录",
        },
        {
          label: "30 天再入院风险",
          helper: "相较上月的模型校准结果",
        },
        {
          label: "照护缺口告警",
          helper: "慢病队列中的待跟进任务",
        },
        {
          label: "平均住院日",
          helper: "按病例结构与转诊因素调整",
        },
      ],
    },
    risk: {
      title: "风险分层",
      subtitle: "当前高重点人群的模型分层结果。",
      buckets: [
        {
          segment: "高风险",
          action: "24 小时内升级护士主动触达",
        },
        {
          segment: "上升风险",
          action: "安排用药依从性复核",
        },
        {
          segment: "稳定",
          action: "保持常规数字化随访",
        },
      ],
      patientsLabel: "人",
      triageTitle: "AI 分诊覆盖",
      triageDescription: "当前有 {count} 名患者被纳入主动风险分层与干预规划。",
    },
    insights: {
      title: "AI 洞察面板",
      subtitle: "由模拟模型流与运营事件流联动产生的优先级洞察。",
      recommendationLabel: "建议动作",
      severityLabels: {
        high: "高",
        medium: "中",
        low: "低",
      },
      items: [
        {
          title: "COPD + CHF 复合人群再入院概率上升",
          description: "近 14 天内，模型识别出 1,126 名呼吸与心脏信号叠加风险患者。",
          recommendation: "优先安排远程分诊与出院后第一周用药核对。",
        },
        {
          title: "周末出院交接时效与急诊回流相关",
          description: "周五 18:00 后出院患者在 72 小时内回访需求提升至 1.4 倍。",
          recommendation: "补充周末出院清单并自动分配回访时段。",
        },
        {
          title: "糖尿病队列预防性筛查完成率改善",
          description: "A1C 与眼底筛查完成率提升至 78%，较上季度提升 6 个百分点。",
          recommendation: "维持当前触达节奏并按周跟踪逾期预约。",
        },
      ],
    },
    trends: {
      title: "趋势指标",
      subtitle: "按周展示入院负载、再入院风险与住院床位占用趋势。",
      cards: [
        {
          title: "入院吞吐",
          subtitle: "每周入院患者数量",
        },
        {
          title: "再入院风险",
          subtitle: "30 天预测占比",
        },
        {
          title: "床位占用",
          subtitle: "机构中位床位占用率",
        },
      ],
    },
    governance: {
      title: "可解释性、合规与治理",
      description: "用于支持医疗监管审查、内部治理与安全落地的控制能力。",
      statusLabels: {
        active: "已启用",
        scheduled: "计划中",
      },
      items: [
        {
          title: "模型血缘与版本治理",
          detail: "每条风险评分均保留模型版本、特征集哈希与推理时间戳，支持审计复盘。",
        },
        {
          title: "基于角色的访问与 PHI 最小化",
          detail: "临床团队可见患者级细节，运营角色默认查看脱敏聚合视图。",
        },
        {
          title: "偏差与漂移监控",
          detail: "按月执行年龄层与支付人群公平性检查，并对漂移阈值触发预警。",
        },
      ],
    },
    cta: {
      title: "查看更多 Demo",
      description: "当前 Demo 架构已支持在统一视觉与路由体系下扩展更多行业场景。",
      banking: "银行 Demo",
      home: "返回首页",
    },
  },
} as const;
