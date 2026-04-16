# Future Signal Lab

陈浩的互动个人主页，风格定位为“未来实验台”：不是把 PDF 简历搬上网，而是把个人信号、连接入口、职业信息和最近在折腾的东西做成一张可以探索的主页。

## Included

- `/`：互动主站，包含 Hero Signal Board、Audience Switcher、Timeline Reactor、Build Deck、Vibe Console、Bonjour Guide Card
- `/resume`：职业版履历视图，适合招聘方或前辈快速扫读
- `app/opengraph-image.tsx`：分享卡图
- `app/not-found.tsx`、`app/sitemap.ts`、`app/robots.ts`
- `data/site-content.ts`：全站统一内容源，后续改文案主要改这里

## Tech stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Geist Sans / Geist Mono

## Local setup

1. 安装 Node.js 20.9+。
2. 在项目目录运行：

```bash
npm install
npm run dev
```

3. 打开 `http://localhost:3000`

## Deploy to Vercel

最短路径：

1. 新建 GitHub 仓库，并把这个目录推上去
2. 在 Vercel 里 `Add New Project`
3. 选择这个仓库，Framework Preset 保持 Next.js 默认即可
4. 如果你有正式域名，补上 `NEXT_PUBLIC_SITE_URL`

## Content notes

- 目前内容基于简历与补充描述整理，重点突出 `VC 实习 ing / coffee chat / vibe coding / 驯化 AI / 欧洲穷游`
- `Bonjour` 使用的是复制引导卡，而不是浏览器直接跳转
- 手机号默认未公开；如需公开，可直接在 `data/site-content.ts` 里新增一个 `contactAction`

## OMX Skill (Codex Desktop)

This repository now includes an OMX-first execution skill for Codex Desktop.

- Entry doc: [`OMX-SKILL.md`](./OMX-SKILL.md)
- Skill contract: [`skills/omx-cli-default/SKILL.md`](./skills/omx-cli-default/SKILL.md)
- Usage guide: [`skills/omx-cli-default/README.md`](./skills/omx-cli-default/README.md)

### Quick commands

```bash
omx setup --scope user
omx init
```

If `omx init` is unavailable in your OMX version:

```bash
omx deepinit .
# or
omx agents-init .
```

If `omx` is not on PATH:

```bash
npx omx <command>
```
