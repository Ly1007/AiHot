export type SourceCategory =
	| 'briefs'
	| 'media'
	| 'deep-dive'
	| 'research'
	| 'official'
	| 'products'
	| 'chinese';

export type SourceLanguage = 'zh' | 'en' | 'mixed';
export type SourcePriority = 'daily' | 'weekly' | 'reference';

export interface AiSource {
	title: string;
	url: string;
	category: SourceCategory;
	language: SourceLanguage;
	cadence: string;
	why: string;
	priority: SourcePriority;
}

export const categories: Record<
	SourceCategory,
	{ label: string; deck: string; accent: string }
> = {
	briefs: {
		label: '每日快讯',
		deck: '5 分钟扫清今天发生了什么',
		accent: 'cyan',
	},
	media: {
		label: '全球媒体',
		deck: '看公司、资本、监管和行业事件',
		accent: 'red',
	},
	'deep-dive': {
		label: '技术深度',
		deck: '理解模型、开源生态和工程判断',
		accent: 'ink',
	},
	research: {
		label: '论文开源',
		deck: '发现值得复现的论文与项目',
		accent: 'cyan',
	},
	official: {
		label: '一手官方',
		deck: '模型、API、价格、能力变化以这里为准',
		accent: 'red',
	},
	products: {
		label: '产品社区',
		deck: '追踪新工具、新需求和真实热度',
		accent: 'ink',
	},
	chinese: {
		label: '中文源',
		deck: '国内产业、公司动态和本土化解读',
		accent: 'cyan',
	},
};

export const sources: AiSource[] = [
	{
		title: 'TLDR AI',
		url: 'https://tldr.tech/ai',
		category: 'briefs',
		language: 'en',
		cadence: '每日',
		why: '快速浏览 AI 公司、产品、论文和工具动态，适合晨间第一屏。',
		priority: 'daily',
	},
	{
		title: "Ben's Bites",
		url: 'https://bensbites.co/',
		category: 'briefs',
		language: 'en',
		cadence: '每日',
		why: '覆盖新产品和实用工具，标题密度高，适合发现可试用的东西。',
		priority: 'daily',
	},
	{
		title: 'Last Week in AI',
		url: 'https://lastweekin.ai/',
		category: 'briefs',
		language: 'en',
		cadence: '每周',
		why: '周维度回看，适合过滤日更噪音，补齐遗漏的大事件。',
		priority: 'weekly',
	},
	{
		title: 'TechCrunch AI',
		url: 'https://techcrunch.com/category/artificial-intelligence/',
		category: 'media',
		language: 'en',
		cadence: '每日',
		why: '创业公司、融资、产品发布和平台变化比较及时。',
		priority: 'daily',
	},
	{
		title: 'The Verge AI',
		url: 'https://www.theverge.com/ai-artificial-intelligence',
		category: 'media',
		language: 'en',
		cadence: '每日',
		why: '消费科技视角强，适合判断 AI 产品如何进入大众市场。',
		priority: 'daily',
	},
	{
		title: 'MIT News AI',
		url: 'https://news.mit.edu/topic/artificial-intelligence2',
		category: 'media',
		language: 'en',
		cadence: '每周',
		why: '研究机构视角，适合看长期技术方向和学术进展。',
		priority: 'weekly',
	},
	{
		title: 'The Batch',
		url: 'https://www.deeplearning.ai/the-batch/',
		category: 'deep-dive',
		language: 'en',
		cadence: '每周',
		why: 'Andrew Ng 团队出品，解释清楚，适合建立基础判断。',
		priority: 'weekly',
	},
	{
		title: 'Import AI',
		url: 'https://importai.substack.com/',
		category: 'deep-dive',
		language: 'en',
		cadence: '每周',
		why: '从研究、政策、安全和产业综合观察 AI 进展。',
		priority: 'weekly',
	},
	{
		title: 'Latent Space',
		url: 'https://www.latent.space/',
		category: 'deep-dive',
		language: 'en',
		cadence: '每周',
		why: '开发者和 AI 工程视角浓，适合跟进 agent、infra、模型应用。',
		priority: 'weekly',
	},
	{
		title: 'Hugging Face Daily Papers',
		url: 'https://huggingface.co/papers',
		category: 'research',
		language: 'en',
		cadence: '每日',
		why: '论文热度和社区讨论集中，适合快速筛选值得精读的方向。',
		priority: 'daily',
	},
	{
		title: 'Papers with Code',
		url: 'https://paperswithcode.com/',
		category: 'research',
		language: 'en',
		cadence: '每周',
		why: '论文、任务、代码和榜单关联清楚，方便判断可复现性。',
		priority: 'reference',
	},
	{
		title: 'GitHub Trending',
		url: 'https://github.com/trending',
		category: 'research',
		language: 'mixed',
		cadence: '每日',
		why: '开源项目热度雷达，适合发现突然爆发的 AI repo。',
		priority: 'daily',
	},
	{
		title: 'OpenAI News',
		url: 'https://openai.com/news/',
		category: 'official',
		language: 'en',
		cadence: '按需',
		why: 'OpenAI 模型、产品和平台变化的一手来源。',
		priority: 'reference',
	},
	{
		title: 'Anthropic News',
		url: 'https://www.anthropic.com/news',
		category: 'official',
		language: 'en',
		cadence: '按需',
		why: 'Claude、模型安全和企业产品更新的一手来源。',
		priority: 'reference',
	},
	{
		title: 'Google DeepMind Blog',
		url: 'https://deepmind.google/blog/',
		category: 'official',
		language: 'en',
		cadence: '按需',
		why: '模型研究、科学应用和 Google AI 进展的核心入口。',
		priority: 'reference',
	},
	{
		title: 'Product Hunt AI',
		url: 'https://www.producthunt.com/topics/artificial-intelligence',
		category: 'products',
		language: 'en',
		cadence: '每日',
		why: '新产品发布密集，适合观察应用层创意和包装方式。',
		priority: 'daily',
	},
	{
		title: 'Hacker News',
		url: 'https://news.ycombinator.com/',
		category: 'products',
		language: 'en',
		cadence: '每日',
		why: '工程师社区反馈直接，适合验证技术热度是否真实。',
		priority: 'daily',
	},
	{
		title: "There's An AI For That",
		url: 'https://theresanaiforthat.com/',
		category: 'products',
		language: 'en',
		cadence: '每周',
		why: '工具目录覆盖面广，适合查找某个任务是否已有 AI 产品。',
		priority: 'reference',
	},
	{
		title: '机器之心',
		url: 'https://www.jiqizhixin.com/',
		category: 'chinese',
		language: 'zh',
		cadence: '每日',
		why: '中文 AI 研究和产业报道覆盖面广，适合快速补国内语境。',
		priority: 'daily',
	},
	{
		title: '量子位',
		url: 'https://www.qbitai.com/',
		category: 'chinese',
		language: 'zh',
		cadence: '每日',
		why: '国内外 AI 热点更新快，标题敏感度高，适合做中文雷达。',
		priority: 'daily',
	},
	{
		title: 'Founder Park',
		url: 'https://founderpark.net/',
		category: 'chinese',
		language: 'zh',
		cadence: '每周',
		why: '创业者访谈和 AI 产品思考较多，适合看应用与商业化。',
		priority: 'weekly',
	},
];

export const readingFlow = [
	{
		time: '00-05',
		title: '扫快讯',
		body: 'TLDR AI、Ben’s Bites 各看标题和首段，只标记 3 条。',
	},
	{
		time: '05-10',
		title: '看产业',
		body: 'TechCrunch、The Verge 找大厂、融资、监管和产品发布。',
	},
	{
		time: '10-15',
		title: '找项目',
		body: 'Product Hunt、GitHub Trending 看能不能今天试一个。',
	},
	{
		time: '15-20',
		title: '深读一条',
		body: '回到官方博客、论文或 The Batch，写下自己的判断。',
	},
];

export const watchSignals = [
	'新模型发布后，开发者 48 小时内有没有复现和 benchmark',
	'一个 AI 工具是否出现明确付费用户，而不只是社媒传播',
	'大厂 API 价格、上下文、延迟、工具调用能力是否变化',
	'中文社区有没有把英文趋势转译成真实行业场景',
];
