# Vivi Lu Portfolio

依 Figma 設計稿實作的個人作品集網站（Next.js 16 + TypeScript + Tailwind CSS v4）。

## 開發

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 正式建置
npm run lint
```

## 內容維護

- 作品、連結：`src/lib/site-data.ts`（每個作品可填 `href` 連到內頁）
- 設計 token：`src/app/globals.css`
- 圖片素材：`public/images/`

## 部署

到 [Vercel](https://vercel.com) → Add New → Project → Import 此 repo → Deploy。
