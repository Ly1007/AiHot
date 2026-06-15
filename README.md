# AI Hot

AI Hot 是一个中文 AI 新闻与知识入口网站，目标是帮助你每天用 20 分钟快速了解全球最新、最热、最值得深读的 AI 信息。

网站目前是一个 Astro 静态站点，不接入第三方 API，不需要数据库，也不包含账号系统。所有信息源都维护在本地 TypeScript 数据文件中，适合作为个人每日阅读看板或后续自动聚合站的基础版本。

## 功能概览

- 杂志感首页首屏：展示 AI Hot 的定位和今日阅读入口。
- 20 分钟阅读流程：按快讯、产业、项目、深读四步组织每日输入。
- 精选 AI 信息源：按每日快讯、全球媒体、技术深度、论文开源、一手官方、产品社区、中文源分组。
- 热度观察区：用几个判断信号过滤“看起来很热但价值不明”的信息。
- 收藏记录模板：把新闻链接转成可复盘的判断记录。

## 技术栈

- [Astro](https://astro.build/)：静态站点框架。
- TypeScript：维护本地渠道数据和类型。
- Tailwind CSS v4：页面布局与视觉样式。
- `@fontsource/noto-sans-sc`：本地加载中文字体。
- `@lucide/astro`：图标组件。

## 目录结构

```text
/
├── public/
│   └── assets/
│       └── ai-hot-cover.png      # 首页横幅视觉资产
├── src/
│   ├── data/
│   │   └── sources.ts            # AI 信息源数据与类型
│   ├── pages/
│   │   └── index.astro           # 首页
│   └── styles/
│       └── global.css            # 全局样式与 Tailwind 主题
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 本地运行

先安装依赖：

```sh
npm install
```

启动开发服务器：

```sh
npm run dev
```

默认访问地址：

```text
http://localhost:4321/
```

构建静态产物：

```sh
npm run build
```

本地预览构建结果：

```sh
npm run preview
```

## 维护信息源

AI 渠道列表维护在 `src/data/sources.ts`。

每个渠道包含这些字段：

```ts
{
  title: string;
  url: string;
  category: 'briefs' | 'media' | 'deep-dive' | 'research' | 'official' | 'products' | 'chinese';
  language: 'zh' | 'en' | 'mixed';
  cadence: string;
  why: string;
  priority: 'daily' | 'weekly' | 'reference';
}
```

如果要新增渠道，直接在 `sources` 数组中添加一条记录即可。分类名称来自 `SourceCategory`，优先级来自 `SourcePriority`。

## 后续可扩展方向

- 接入 RSS 或 API，自动抓取每日 AI 新闻。
- 增加搜索、标签、收藏和已读状态。
- 增加每周回顾页面，把收藏内容按模型、产品、论文、开源项目重新归档。
- 部署到 Vercel、Netlify 或任意静态托管服务。
