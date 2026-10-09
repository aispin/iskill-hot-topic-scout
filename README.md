# iskill-hot-topic-scout

当用户要做短视频/内容选题、找热点、问「今天有什么值得做的选题」「帮我选题」「蹭热点」「出选题清单」时使用。触发词：热点选题、每日选题、找热点、蹭热点、选题清单、hot topics。产出 Top10 选题清单 + Top3 选题卡，供下游爆款文案工作流（iskill-viral-copywriter）直接消费；维护跨天累积的选题库，同一热点/已发布选题不重出。

完整用法见 [SKILL.md](SKILL.md)。

> 依赖同步：本仓库含 iskill 共享真源的 vendored 副本（清单见 `package.json` 的 `iskillDeps`），**不要手改**。使用前请同时安装 iskill-dep-sync：对 agent 说「请帮我安装 Skill：aispin/iskill-dep-sync」；用法见 SKILL.md「依赖同步」节。
