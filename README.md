# Eric's Dev Portfolio

這是一個用 React + Vite + TailwindCSS 建的作品集網站。
UI 是高質感粉紅金 / 柔亮灰白 / 玻璃霧面，主打「我很專業、可以接案」。

## 🚀 開發啟動

```bash
npm install
npm run dev
```

## 🚢 部署到 GitHub Pages

```bash
npm run build
npm run deploy
```

`npm run deploy` 會透過 [`gh-pages`](https://github.com/tschaub/gh-pages) 套件將 `dist/` 目錄發布到 GitHub Pages（`https://and910805.github.io/eric-s-dev-site/`）。

## 🔧 你要改的地方

1. 聯絡資訊：`src/data/contact.js`
2. 專案列表：`src/data/projects.js`
3. 網站標題 / Navbar 名稱：`src/components/Navbar.jsx`
4. Hero 區塊文案：`src/pages/Home.jsx`

## 📂 頁面說明

- `/` Home：自我介紹、接案中 banner、快速聯絡按鈕
- `/projects` Projects：作品卡片（圖 / GitHub / Demo / 技術標籤）
- `/about` About：你的背景 / 技能堆疊
- `/contact` Contact：Email / GitHub / LINE / 地點

## 🧱 技術堆疊

- React 18 + Vite
- React Router DOM
- TailwindCSS
- Framer Motion (動畫)
- Lucide React Icons (icons)
