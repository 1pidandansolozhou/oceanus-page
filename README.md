# Future Signal Lab

闄堟旦鐨勪簰鍔ㄤ釜浜轰富椤碉紝椋庢牸瀹氫綅涓衡€滄湭鏉ュ疄楠屽彴鈥濓細涓嶆槸鎶?PDF 绠€鍘嗘惉涓婄綉锛岃€屾槸鎶婁釜浜轰俊鍙枫€佽繛鎺ュ叆鍙ｃ€佽亴涓氫俊鎭拰鏈€杩戝湪鎶樿吘鐨勪笢瑗垮仛鎴愪竴寮犲彲浠ユ帰绱㈢殑涓婚〉銆?

## Included

- `/`锛氫簰鍔ㄤ富绔欙紝鍖呭惈 Hero Signal Board銆丄udience Switcher銆乀imeline Reactor銆丅uild Deck銆乂ibe Console銆丅onjour Guide Card
- `/resume`锛氳亴涓氱増灞ュ巻瑙嗗浘锛岄€傚悎鎷涜仒鏂规垨鍓嶈緢蹇€熸壂璇?
- `app/opengraph-image.tsx`锛氬垎浜崱鍥?
- `app/not-found.tsx`銆乣app/sitemap.ts`銆乣app/robots.ts`
- `data/site-content.ts`锛氬叏绔欑粺涓€鍐呭婧愶紝鍚庣画鏀规枃妗堜富瑕佹敼杩欓噷

## Tech stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Geist Sans / Geist Mono

## Local setup

1. 瀹夎 Node.js 20.9+銆?
2. 鍦ㄩ」鐩洰褰曡繍琛岋細

```bash
npm install
npm run dev
```

3. 鎵撳紑 `http://localhost:3000`

## Deploy to Vercel

鏈€鐭矾寰勶細

1. 鏂板缓 GitHub 浠撳簱锛屽苟鎶婅繖涓洰褰曟帹涓婂幓
2. 鍦?Vercel 閲?`Add New Project`
3. 閫夋嫨杩欎釜浠撳簱锛孎ramework Preset 淇濇寔 Next.js 榛樿鍗冲彲
4. 濡傛灉浣犳湁姝ｅ紡鍩熷悕锛岃ˉ涓?`NEXT_PUBLIC_SITE_URL`

## Content notes

- 鐩墠鍐呭鍩轰簬绠€鍘嗕笌琛ュ厖鎻忚堪鏁寸悊锛岄噸鐐圭獊鍑?`VC 瀹炰範 ing / coffee chat / vibe coding / 椹寲 AI / 娆ф床绌锋父`
- `Bonjour` 浣跨敤鐨勬槸澶嶅埗寮曞鍗★紝鑰屼笉鏄祻瑙堝櫒鐩存帴璺宠浆
- 鎵嬫満鍙烽粯璁ゆ湭鍏紑锛涘闇€鍏紑锛屽彲鐩存帴鍦?`data/site-content.ts` 閲屾柊澧炰竴涓?`contactAction`


## Codex x OMX Bridge

I maintain a separate open-source project for an execution-mode routing skill:

- Repo: [1pidandansolozhou/omx-cli-default-skill](https://github.com/1pidandansolozhou/omx-cli-default-skill)
- README: [Codex x OMX Bridge](https://github.com/1pidandansolozhou/omx-cli-default-skill#readme)
- Pitch: [PITCH.md](https://github.com/1pidandansolozhou/omx-cli-default-skill/blob/main/PITCH.md)

### Why this matters

This skill helps Codex automatically choose execution mode.
Small tasks stay conversational.
Complex tasks are upgraded to OMX orchestration.

### 中文说明

这是我单独维护的一个 skill 项目（已与主页仓库分离）。
它的价值不是“能启动 OMX”，而是“能在合适的时候自动切换到更合适的执行方式”。

- 小任务：Codex 直跑
- 复杂任务：自动升级 OMX
- 用户始终只需要一个自然语言入口
