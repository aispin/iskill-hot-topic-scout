/* ============================================================================
 * iskill-hot-topic-scout · 落地页内容
 * 事实来源：SKILL.md（五步流程 / 六平台 / 三维打分 / 输出路径）
 *           references/profile-template.md
 * 纯提示词技能，无脚本依赖；platform: "all"
 * ==========================================================================*/
window.PROMO = {
  name: "ISKILL-HOT-TOPIC-SCOUT",
  brand: "#f43f5e",
  brand2: "#fb923c",
  repo: "https://github.com/aispin/iskill-hot-topic-scout",
  repoLabel: "aispin/iskill-hot-topic-scout",

  platform: "all",
  license: "许可见仓库",

  lang: {
    zh: {
      meta: {
        title: "ISKILL-HOT-TOPIC-SCOUT · 每天的热点，变成能开的选题",
        description: "每日热点选题：多平台搜集 → 画像粗筛 → 三维打分 → 出 Top3 选题卡，直接喂给下游爆款文案工作流。纯 LLM 工作流，零脚本依赖。"
      },
      a11y: { skip: "跳到主要内容" },
      ui: { copy: "复制", copied: "已复制", failed: "复制失败" },
      nav: { features: "能力", shots: "截图", how: "上手", faq: "问答" },

      hero: {
        badge: "AI 技能",
        titlePre: "每天的热点，",
        titleAccent: "变成能开的选题",
        titlePost: "",
        sub: "多平台搜集 → 画像粗筛 → 三维打分 → 出 Top3 选题卡，交给下游爆款文案工作流直接开写。纯 LLM 工作流，零脚本依赖。",
        ctaPrimary: "复制安装提示词",
        ctaSecondary: "看源码",
        meta1: "纯提示词",
        meta2: "五步工作流",
        meta3: "零脚本依赖"
      },
      chat: {
        title: "AI Agent · 对话现场",
        status: "在线",
        userLabel: "你",
        agentLabel: "AI",
        messages: [
          { role: "user", text: "帮我选题：行业=母婴，产品=早教课，人群=0-3 岁宝妈" },
          { role: "agent", text: "出 Top10 选题清单 + Top3 选题卡，每张卡带钩子、痛点与差异化角度，下游写稿技能可以直接消费。", tag: "已读 画像 profile" },
          { role: "user", text: "只要 Top3 就行" },
          { role: "agent", text: "报告落盘，消息里只回 Top3 摘要；你点一个，我就接着写稿。" }
        ]
      },


      stats: [
        { value: "6", label: "个平台覆盖", note: "微博 / 抖音 / 知乎 / 小红书 / 百度 / B站" },
        { value: "3", label: "维打分矩阵", note: "热度势能 / 相关性 / 可蹭安全度，各 0–5 分" },
        { value: "Top 10", label: "候选清单", note: "总分排序，Top 3 出选题卡" },
        { value: "24h", label: "选题有效期", note: "当天出的选题当天用" }
      ],

      compare: {
        eyebrow: "对比",
        title: "凭感觉 vs 按流程",
        sub: "",
        before: {
          title: "凭感觉想选题",
          items: [
            "刷到什么算什么，热点早就凉了",
            "选题跟账号人群对不上，白做",
            "凭直觉下判断，容易踩违禁词"
          ]
        },
        after: {
          title: "按流程跑",
          items: [
            "多平台锚点搜集，每条带来源与热度证据",
            "先过画像粗筛，不相关的直接丢",
            "三维打分排序，风险提示一并交给下游"
          ]
        }
      },

      features: {
        eyebrow: "能力",
        title: "它能做什么",
        sub: "",
        items: [
          { icon: "monitor", title: "六平台热点搜集", desc: "微博 / 抖音 / 知乎 / 小红书 / 百度 / B站 各一套查询模板，再加 2–3 轮行业垂搜。" },
          { icon: "users", title: "先读画像再选题", desc: "工作区里的 hot-topic.profile.md 定义行业 / 产品 / 人群；没有就先建，临时关键词优先。" },
          { icon: "gauge", title: "三维打分矩阵", desc: "热度势能、相关性、可蹭安全度各 0–5 分排序，下降期热点自动减分。" },
          { icon: "shield", title: "粗筛带风险意识", desc: "纯天灾惨剧、政治敏感、与调性冲突的直接丢；健康 / 财经 / 医疗类强制写合规口径。" },
          { icon: "copy", title: "固定字段选题卡", desc: "来源热点、切入角度、3 个候选标题、开头钩子、人群痛点、内容形式、风险提示——逐项填满。" },
          { icon: "arrow", title: "直连下游工作流", desc: "选题卡是 iskill-viral-copywriter 的直接输入，一路接到拆解、去 AI 味、发布预检。" }
        ]
      },

      showcase: {
        eyebrow: "实拍",
        title: "看一眼真东西",
        sub: "",
        items: []
      },

      steps: {
        eyebrow: "上手",
        title: "三步跑起来",
        sub: "命令由 agent 跑，你只说要什么、看结果。",
        items: [
          { title: "交给 AI 装", desc: "把这句话粘进对话框，agent 会自己拉代码、读文档，再告诉你用法。", codeKey: "install" },
          { title: "给它画像", desc: "没有 profile 就把行业 / 产品 / 人群说清楚，临时输入优先。", codeName: "prompt", code: "帮我选题：行业=母婴，产品=早教课，人群=0-3 岁宝妈" },
          { title: "挑一个选题", desc: "报告落在这个路径，消息里只回 Top3 摘要；你点一个，接着让它写稿。", codeName: "path", code: "viral-video-team-output/选题/YYYY-MM-DD-选题.md" }
        ]
      },


      faq: {
        eyebrow: "问答",
        title: "常见问题",
        items: [
          { q: "需要 API key 或联网工具吗？", a: "不需要额外 key。技能本身是纯 LLM 工作流（无脚本依赖），热点靠 agent 的联网搜索（WebSearch）完成。" },
          { q: "热点会不会被编出来？", a: "规则要求每条热点记录来源平台与热度证据（榜单位次 / 讨论量）；搜不到好热点就明说，宁缺毋滥，不硬凑 10 条。" },
          { q: "选题能直接发吗？", a: "选题卡是给下游用的输入，不是成稿。接着跑 <code>iskill-viral-copywriter</code> 产出主播口播稿，再过去 AI 味、发布预检。" },
          { q: "profile 文件放哪？", a: "工作区根目录的 <code>hot-topic.profile.md</code>（也会查 <code>./config/</code>、<code>./docs/</code>）；没有就用 <code>references/profile-template.md</code> 建一个。" },
          { q: "报告写在哪？", a: "<code>{工作区}/viral-video-team-output/选题/YYYY-MM-DD-选题.md</code>，含 Top10 清单、全部选题卡与落选原因；消息里只回 Top3。" },
          { q: "哪些题材不碰？", a: "政治敏感、消费灾难惨剧、定性未明的争议社会事件；健康 / 财经 / 医疗类必须写明合规口径，交下游预检复核。" }
        ]
      },

      cta: { title: "今天的选题，今天就开写", desc: "粘一下安装提示词，让 agent 把热点跑成选题卡。", primary: "去 GitHub 看看", secondary: "复制安装提示词" },
      footer: { license: "许可见仓库", madeWith: "由 iskill-promo-page 生成" }
    },

    en: {
      meta: {
        title: "ISKILL-HOT-TOPIC-SCOUT · Daily trends into angles you can shoot",
        description: "Daily topic scouting: multi-platform gathering → persona filtering → three-axis scoring → Top3 topic cards, feeding the downstream viral-copy workflow. Pure prompt skill, no scripts."
      },
      a11y: { skip: "Skip to content" },
      ui: { copy: "Copy", copied: "Copied", failed: "Copy failed" },
      nav: { features: "Features", shots: "Screens", how: "Get started", faq: "FAQ" },

      hero: {
        badge: "AI skill",
        titlePre: "Turn today's trends into ",
        titleAccent: "angles you can shoot",
        titlePost: "",
        sub: "Gather across platforms → filter by persona → score on three axes → Top3 topic cards, ready to feed the downstream viral-copy workflow. Pure LLM, no scripts.",
        ctaPrimary: "Copy install prompt",
        ctaSecondary: "View source",
        meta1: "Prompt only",
        meta2: "Five-step flow",
        meta3: "No script deps"
      },
      chat: {
        title: "AI Agent · live session",
        status: "online",
        userLabel: "You",
        agentLabel: "AI",
        messages: [
          { role: "user", text: "Find me topics: industry = baby care, product = early-education course, audience = moms of 0-3 year olds" },
          { role: "agent", text: "You get a Top 10 list plus Top 3 topic cards, each with a hook, a pain point and a differentiating angle — ready for the copywriter skill downstream.", tag: "read profile" },
          { role: "user", text: "Just the Top 3 is enough" },
          { role: "agent", text: "The full report goes to disk; chat only shows the Top 3 summary. Point at one and I'll write the script next." }
        ]
      },


      stats: [
        { value: "6", label: "platforms covered", note: "Weibo / Douyin / Zhihu / RED / Baidu / Bilibili" },
        { value: "3", label: "scoring axes", note: "momentum / relevance / safety, each 0–5" },
        { value: "Top 10", label: "shortlist", note: "ranked by score, Top 3 get topic cards" },
        { value: "24h", label: "shelf life", note: "today's topics are for today" }
      ],

      compare: {
        eyebrow: "Comparison",
        title: "Gut feel vs a process",
        sub: "",
        before: {
          title: "Picking topics by feel",
          items: [
            "Whatever you happen to scroll past — often already cold",
            "Topics that do not match your audience, wasted effort",
            "Judging on instinct, easy to trip on banned wording"
          ]
        },
        after: {
          title: "Running the process",
          items: [
            "Multi-platform anchors, every hit carrying a source and evidence",
            "Persona filtering first; irrelevant hits dropped",
            "Three-axis ranking, with risk notes handed downstream"
          ]
        }
      },

      features: {
        eyebrow: "Features",
        title: "What it does",
        sub: "",
        items: [
          { icon: "monitor", title: "Six-platform gathering", desc: "A query template each for Weibo / Douyin / Zhihu / RED / Baidu / Bilibili, plus 2–3 rounds of niche search." },
          { icon: "users", title: "Persona before topics", desc: "hot-topic.profile.md in the workspace defines niche / product / audience; build one if missing, ad-hoc keywords win." },
          { icon: "gauge", title: "Three-axis scoring", desc: "Momentum, relevance and safety scored 0–5 and ranked; topics past their peak lose points automatically." },
          { icon: "shield", title: "Filtering with risk sense", desc: "Disasters, political sensitivities and off-tone topics are dropped outright; health / finance / medical topics must carry compliance wording." },
          { icon: "copy", title: "Fixed-field topic cards", desc: "Source, angle, three candidate titles, opening hook, audience pain point, format and risk notes — every field filled." },
          { icon: "arrow", title: "Wired to downstream", desc: "Topic cards are the direct input to iskill-viral-copywriter, on through teardown, de-AI-ing and pre-publish checks." }
        ]
      },

      showcase: {
        eyebrow: "Screens",
        title: "See the real thing",
        sub: "",
        items: []
      },

      steps: {
        eyebrow: "Get started",
        title: "Up and running in three steps",
        sub: "The agent runs the commands. You say what you want and check the result.",
        items: [
          { title: "Let your agent install it", desc: "Paste the line into the chat — it clones the repo, reads the docs, and tells you how to use it.", codeKey: "install" },
          { title: "Give it your profile", desc: "No profile file? Spell out industry / product / audience — ad-hoc input wins.", codeName: "prompt", code: "Find me topics: industry = baby care, product = early-education course, audience = moms of 0-3 year olds" },
          { title: "Pick one topic", desc: "The report lands at this path; chat only shows the Top 3 summary. Point at one and let it write the script.", codeName: "path", code: "viral-video-team-output/选题/YYYY-MM-DD-topics.md" }
        ]
      },


      faq: {
        eyebrow: "FAQ",
        title: "Frequently asked",
        items: [
          { q: "Does it need an API key or extra tooling?", a: "No extra key. The skill is a pure LLM workflow (no script dependencies); trends come from the agent's web search (WebSearch)." },
          { q: "Will the trends be made up?", a: "The rules require every hit to record its source platform and evidence (rank, discussion volume). If nothing good turns up it says so rather than padding to 10." },
          { q: "Can I publish the topics as-is?", a: "A topic card is input for the next step, not a finished script. Run <code>iskill-viral-copywriter</code> next to produce the voice-over, then de-AI and pre-check." },
          { q: "Where does the profile live?", a: "At the workspace root as <code>hot-topic.profile.md</code> (also checked in <code>./config/</code> and <code>./docs/</code>); create one from <code>references/profile-template.md</code> if absent." },
          { q: "Where is the report written?", a: "<code>{workspace}/viral-video-team-output/选题/YYYY-MM-DD-选题.md</code>, containing the Top10 list, all topic cards and rejection reasons; only the Top3 is echoed in chat." },
          { q: "What topics are off-limits?", a: "Political sensitivities, exploiting disasters, and undecided social disputes; health / finance / medical topics must state compliance wording for the downstream pre-check." }
        ]
      },

      cta: { title: "Today's topics, written today", desc: "Paste the install prompt and let your agent turn trends into cards.", primary: "Open on GitHub", secondary: "Copy install prompt" },
      footer: { license: "License: see repo", madeWith: "Built with iskill-promo-page" }
    }
  }
};
