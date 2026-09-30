# vivi-portfolio

## Project overview
Vivi Lu 的個人作品集網站（UI/UX 設計師），依 Figma 設計稿 Portfolio-Design 實作。
設計稿：https://www.figma.com/design/2cQqLfKM05hECFS4QoL16k/Portfolio-Design

## Tech stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deploy:** Vercel

## Code conventions
- 元件用 PascalCase 命名（例如 UserCard, NavBar）
- 檔案用 kebab-case 命名（例如 user-card.tsx）
- 功能模組放在 src/features/ 下
- 共用元件放在 src/components/
- 工具函式放在 src/lib/
- 使用 Tailwind utility classes，不寫自定義 CSS
- 中文註解，英文變數名

## Project structure
```
src/
├── app/                    # Next.js 頁面
│   ├── page.tsx            # 首頁
│   ├── layout.tsx          # 全域 layout（字型、語系 Provider）
│   └── globals.css         # 設計 token（@theme）
├── features/home/          # 首頁：Hero、作品列表
├── components/             # 共用 UI 元件：Header、Footer、語系切換
└── lib/                    # site-data（連結、作品資料）、i18n
public/images/              # 從 Figma 匯出的素材
```

## Breakpoints（對應 Figma 三個 frame）
- Mobile：< 768px（設計稿 375）
- Tablet：md ≥ 768px（設計稿 800）
- Desktop：xl ≥ 1280px（設計稿 1280）

## Design system
- 色彩 token 定義在 src/app/globals.css 的 @theme：`brand` / `content-*` / `bg-*`
- Typography：`font-display`（Raleway，英文標題／導覽）、`font-body`（Noto Sans TC，中文內文）
- 永遠用 token，禁止 hard-code 色碼

## Key behaviors
- 所有互動元素需要有 hover 和 focus 狀態
- 頁面切換使用 Next.js Link 元件
- 表單送出要有 loading 和 error 狀態
- Mobile-first 設計

## Do NOT
- 不要用 inline style，全部用 Tailwind
- 不要安裝不必要的套件，保持 dependencies 精簡
- 不要把 API key 寫在程式碼裡
- 不要忽略 TypeScript 的型別錯誤
- 不要用 alert() 或 confirm()，用自定義 Modal

## Quality standards
- Lighthouse 分數 > 90
- 元件要有基本的無障礙標籤（aria-label）

## References
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
