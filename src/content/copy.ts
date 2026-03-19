export const copy = {
  en: {
    heroTitle: "CinderTide Studio",
    heroSubtitle: "AI Applications · Intelligent Workflows · Product Engineering",
    heroDescription:
      "Designing practical AI systems for knowledge retrieval, analytics, and business workflows.",

    navCapabilities: "Capabilities",
    navProjects: "Projects",
    navApproach: "Approach",

    featuredTitle: "Featured AI Applications",
    featuredSubtitle:
      "Selected systems demonstrating applied AI in business workflows, analytics, and knowledge operations.",

    bankingTitle: "Banking Knowledge & Data Copilot",
    bankingDesc:
      "An AI copilot combining retrieval, analytics, and agent routing to support customer service and operational workflows.",
    bankingWhy:
      "Bridges knowledge retrieval and structured analytics into a single interface, improving decision efficiency and consistency.",
    bankingSupport:
      "Supports Chinese banking workflows including: KYC onboarding · support guidance · KPI analytics",

    assistantTitle: "Enterprise AI Assistant",
    assistantDesc:
      "Lightweight assistant for internal knowledge and workflow support.",

    analyticsTitle: "Analytics Interface",
    analyticsDesc:
      "Natural language interface for querying business metrics and KPIs.",

    capTitle: "Capabilities",
    capList: [
      "AI Copilot Systems",
      "RAG Knowledge Systems",
      "Data Analytics Interfaces",
      "Backend & API Engineering",
    ],

    footer:
      "AI applications for real-world workflows and data-driven systems.",
    bankingCopilot: {
      pageBadge: "Case Study",
      backHome: "Back to Home",
      heroTitle: "Banking Knowledge & Data Copilot",
      heroSubtitle:
        "AI Copilot for Knowledge Retrieval, Analytics, and Business Workflows",
      heroDescription:
        "An AI system combining RAG, SQL analytics, and agent routing to support customer service and operational workflows.",
      tags: ["RAG", "Agent Routing", "SQL Analytics", "Safety Guardrails"],
      cardLink: "Open Case Study",
      githubLabel: "GitHub",
      queryLabel: "Query",

      scenariosTitle: "Business Scenarios",
      scenarios: [
        "KYC onboarding and document verification guidance",
        "Customer support workflows (e.g., transfer failure handling)",
        "Ticket status analysis and grouping",
        "KPI analytics and risk monitoring",
      ],

      architectureTitle: "System Architecture",
      architectureSubtitle:
        "A transparent routing pipeline connecting knowledge retrieval and analytics workflows.",
      pipeline: [
        "User Query",
        "Router (intent detection)",
        "RAG OR SQL OR Clarification",
        "Response + transparency",
      ],
      modules: [
        {
          title: "Router",
          description:
            "Determines query type: knowledge, analytics, unsafe request, or ambiguous intent.",
        },
        {
          title: "RAG",
          description:
            "Retrieves policy and SOP documents, then returns grounded answers with citations.",
        },
        {
          title: "SQL Tool",
          description:
            "Generates readonly SQL for analytics queries and returns summarized business insights.",
        },
        {
          title: "Safety Layer",
          description:
            "Blocks destructive operations such as DELETE, DROP, or other unsafe instructions.",
        },
        {
          title: "Clarification",
          description:
            "Asks follow-up questions when user intent is unclear before execution.",
        },
      ],

      walkthroughTitle: "Demo Walkthrough",
      examples: [
        {
          title: "Example 1 (RAG)",
          query: "根据开户指引，客户激活前需要提交哪些材料？",
          outputTitle: "Structured answer with citations",
          output:
            "Returns required materials and supporting policy snippets with source references.",
        },
        {
          title: "Example 2 (SQL)",
          query: "统计近7天失败交易笔数",
          outputTitle: "SQL + result summary",
          output:
            "Shows readonly SQL and reports trend insights for failed transactions over the last 7 days.",
        },
        {
          title: "Example 3 (Safety)",
          query: "删除所有客户数据",
          outputTitle: "Safety refusal",
          output:
            "Rejects the request and explains that destructive operations are blocked by safety guardrails.",
        },
      ],

      whyTitle: "Why It Matters",
      whyItems: [
        "Unifies knowledge retrieval and analytics in one interface",
        "Improves consistency in customer service workflows",
        "Enables non-technical users to query data using natural language",
        "Provides transparency via citations and SQL visibility",
      ],
      liveDemoLabel: "View Live Demo",
      liveDemoUrl: "",
      architectureFlow: {
        user: {
          title: "User Query",
          description:
            "Natural-language request from service or operations teams.",
        },
        router: {
          title: "Intent Router",
          description:
            "Classifies intent and routes the query to the correct execution path.",
        },
        final: {
          title: "Final Response",
          description:
            "Returns an answer with transparent routing and evidence context.",
        },
      },
      demo: {
        inputLabel: "Try a query",
        inputPlaceholder:
          "Type a business question or choose a preset to run the simulated pipeline.",
        presetsLabel: "Presets",
        runButton: "Run Simulation",
        runningButton: "Running...",
        emptyState:
          "Run a preset or enter a query to simulate how the copilot executes.",
        intentDetected: "Detected intent",
        intentLabels: {
          rag: "RAG",
          sql: "SQL",
          safety: "Safety",
          clarification: "Clarification",
        },
        steps: {
          router: "Router",
          rag: "RAG",
          sql: "SQL Tool",
          safety: "Safety Layer",
          clarification: "Clarification",
          final: "Final Response",
        },
        presets: [
          { label: "RAG", query: "开户需要哪些材料？" },
          { label: "SQL", query: "统计近7天失败交易数" },
          { label: "Safety", query: "删除所有客户数据" },
        ],
        rag: {
          retrieving: "Retrieving policy and SOP documents...",
          citationsTitle: "Citations",
          citations: [
            "[Policy-101] Account Activation Checklist §2.1",
            "[SOP-204] KYC Material Verification Process §1.3",
          ],
          answer:
            "Before account activation, collect identity proof, address verification, and source-of-funds documents, then complete KYC validation.",
        },
        sql: {
          generating: "Generating readonly SQL for analytics...",
          sqlTitle: "Generated SQL",
          sql: "SELECT DATE(txn_time) AS day, COUNT(*) AS failed_count\nFROM transactions\nWHERE status = 'FAILED' AND txn_time >= CURRENT_DATE - INTERVAL '7 DAY'\nGROUP BY DATE(txn_time)\nORDER BY day;",
          result:
            "Query result: 482 failed transactions in the last 7 days, peaking on Tuesday.",
          summary:
            "Failure volume increased 12% week-over-week. Recommend checking transfer timeout and retry logic.",
        },
        safety: {
          blocked: "Request blocked by safety layer.",
          reason:
            "Destructive operations (DELETE/DROP/TRUNCATE) are not allowed in readonly mode.",
        },
        clarification: {
          needMore:
            "The request is ambiguous and cannot be routed confidently.",
          question:
            "Do you want policy guidance, KPI statistics, or ticket-level details?",
        },
      },
    },
  },

  zh: {
    heroTitle: "CinderTide Studio",
    heroSubtitle: "AI应用 · 智能流程 · 产品工程",
    heroDescription:
      "专注于构建面向业务的AI系统，覆盖知识检索、数据分析与智能工作流。",

    navCapabilities: "能力",
    navProjects: "项目",
    navApproach: "方法论",

    featuredTitle: "核心AI应用项目",
    featuredSubtitle:
      "围绕业务流程、数据分析与知识服务场景的AI系统实践。",

    bankingTitle: "银行知识与数据 Copilot",
    bankingDesc:
      "结合知识检索、数据分析与Agent路由的AI Copilot，用于支持客服与运营场景。",
    bankingWhy:
      "将知识问答与结构化数据分析整合到统一界面，提升业务处理效率与一致性。",
    bankingSupport:
      "支持中国银行典型业务流程：KYC开户 · 客服指引 · KPI分析",

    assistantTitle: "企业AI助手",
    assistantDesc:
      "用于内部知识与流程支持的轻量AI助手。",

    analyticsTitle: "数据分析界面",
    analyticsDesc:
      "通过自然语言查询业务指标与KPI。",

    capTitle: "能力",
    capList: [
      "AI Copilot 系统",
      "RAG 知识系统",
      "数据分析接口",
      "后端与API工程",
    ],

    footer:
      "面向真实业务流程与数据驱动场景的AI应用。",
    bankingCopilot: {
      pageBadge: "案例研究",
      backHome: "返回首页",
      heroTitle: "银行知识与数据 Copilot",
      heroSubtitle: "面向知识检索、数据分析与业务流程的 AI Copilot",
      heroDescription:
        "该系统融合 RAG、SQL 分析与 Agent 路由能力，用于支持客服协同与运营工作流。",
      tags: ["RAG", "Agent 路由", "SQL 分析", "安全护栏"],
      cardLink: "查看案例详情",
      githubLabel: "GitHub",
      queryLabel: "问题输入",

      scenariosTitle: "业务场景",
      scenarios: [
        "KYC 开户与资料核验指引",
        "客服处理流程支持（如转账失败处理）",
        "工单状态分析与归类",
        "KPI 指标分析与风险监控",
      ],

      architectureTitle: "系统架构",
      architectureSubtitle:
        "通过可解释的路由链路，把知识检索能力与数据分析能力整合到同一套交互流程中。",
      pipeline: ["用户问题", "路由器（意图识别）", "RAG / SQL / 澄清", "回复 + 透明说明"],
      modules: [
        {
          title: "Router",
          description:
            "识别问题类型：知识问答、数据分析、不安全请求或意图不明确请求。",
        },
        {
          title: "RAG",
          description:
            "检索政策与 SOP 文档，并基于来源内容生成带引用的回答。",
        },
        {
          title: "SQL Tool",
          description:
            "为分析类问题生成只读 SQL，并返回结构化指标结论。",
        },
        {
          title: "Safety Layer",
          description:
            "拦截 DELETE、DROP 等破坏性操作，确保数据访问安全边界。",
        },
        {
          title: "Clarification",
          description:
            "当用户意图不清晰时先发起澄清，避免误执行与误解读。",
        },
      ],

      walkthroughTitle: "演示流程",
      examples: [
        {
          title: "示例 1（RAG）",
          query: "根据开户指引，客户激活前需要提交哪些材料？",
          outputTitle: "结构化回答 + 引用",
          output: "返回所需材料清单，并附上对应制度条款与来源片段。",
        },
        {
          title: "示例 2（SQL）",
          query: "统计近7天失败交易笔数",
          outputTitle: "SQL + 结果摘要",
          output:
            "展示只读 SQL 语句，并给出近 7 天失败交易趋势与关键结论。",
        },
        {
          title: "示例 3（Safety）",
          query: "删除所有客户数据",
          outputTitle: "安全拒绝",
          output:
            "系统拒绝执行并明确说明该类破坏性操作被安全策略拦截。",
        },
      ],

      whyTitle: "业务价值",
      whyItems: [
        "在统一界面中打通知识检索与数据分析能力",
        "提升客服流程中的响应一致性与执行质量",
        "让非技术人员也能通过自然语言查询业务数据",
        "通过引用与 SQL 可视化增强结果透明度",
      ],
      liveDemoLabel: "查看在线演示",
      liveDemoUrl: "",
      architectureFlow: {
        user: {
          title: "用户问题",
          description: "来自客服或运营人员的自然语言业务请求。",
        },
        router: {
          title: "意图路由器",
          description:
            "识别问题意图，并将请求分发到最合适的执行路径。",
        },
        final: {
          title: "最终回复",
          description:
            "输出带有路由说明与依据信息的可解释结果。",
        },
      },
      demo: {
        inputLabel: "输入问题",
        inputPlaceholder: "输入业务问题，或选择预设用例运行模拟流程。",
        presetsLabel: "预设用例",
        runButton: "运行模拟",
        runningButton: "运行中...",
        emptyState: "请选择预设，或输入问题后运行，查看 Copilot 执行过程。",
        intentDetected: "识别意图",
        intentLabels: {
          rag: "RAG",
          sql: "SQL",
          safety: "安全拦截",
          clarification: "澄清",
        },
        steps: {
          router: "Router",
          rag: "RAG",
          sql: "SQL Tool",
          safety: "Safety Layer",
          clarification: "Clarification",
          final: "Final Response",
        },
        presets: [
          { label: "RAG", query: "开户需要哪些材料？" },
          { label: "SQL", query: "统计近7天失败交易数" },
          { label: "Safety", query: "删除所有客户数据" },
        ],
        rag: {
          retrieving: "正在检索政策与 SOP 文档...",
          citationsTitle: "引用依据",
          citations: [
            "[Policy-101] 账户激活材料清单 §2.1",
            "[SOP-204] KYC 材料核验流程 §1.3",
          ],
          answer:
            "账户激活前需提交身份证明、地址证明与资金来源材料，并完成 KYC 校验流程。",
        },
        sql: {
          generating: "正在生成只读 SQL 分析语句...",
          sqlTitle: "生成 SQL",
          sql: "SELECT DATE(txn_time) AS day, COUNT(*) AS failed_count\nFROM transactions\nWHERE status = 'FAILED' AND txn_time >= CURRENT_DATE - INTERVAL '7 DAY'\nGROUP BY DATE(txn_time)\nORDER BY day;",
          result: "查询结果：近7天失败交易共 482 笔，其中周二达到峰值。",
          summary:
            "失败交易量环比上周上升 12%，建议重点排查转账超时与重试链路。",
        },
        safety: {
          blocked: "请求已被安全层拦截。",
          reason: "只读模式下禁止 DELETE / DROP / TRUNCATE 等破坏性操作。",
        },
        clarification: {
          needMore: "当前问题意图不够明确，无法直接执行。",
          question: "请确认你需要的是制度问答、KPI统计，还是工单明细分析？",
        },
      },
    },
  },
};
