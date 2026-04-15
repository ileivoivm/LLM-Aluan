# 我如何使用 LLM：從結構到創作的工作方法論

> 王新仁（阿亂）｜臺藝大講座｜2026.04.16
> **Live:** [https://ileivoivm.github.io/LLM-Aluan/](https://ileivoivm.github.io/LLM-Aluan/)

---

## 專案概述

純 HTML + CSS + JS 演講投影片。主題：以結構化方法（JSON / Markdown）與 LLM 協作，從生成藝術實踐出發。

## 投影片結構

```
00   開場 — 封面
01   About the Artist — 自介 + Affine Cipher
01b  Statement — 藝術家宣言
02   Selected Cases — Maybach × Art Taipei / 520 就職 NFT
03   從取樣開始，從濾波結束 — Pure Data 陣列（哲學啟蒙）
04   Paths 系列 — 卡片入口 → paths.html
05   Good Vibrations 系列 — 卡片入口 → gv.html
06   Chaos 三部曲 — Research → Memory → Culture
06b  轉折 — 一個人不會真的消失
07   JSON 作為記憶層 — chapter divider
08   Deep Dive · 小說 — 《修仙-七玄關》
09   Deep Dive · 水墨 — InkField
10   Deep Dive · 植物 — PolyPaths
11   Toolchain — Claude Code / Cursor / Cowork
12   Digital Twin — .md 風格指南
13   Summary — 四層架構
14   Closing — 結構不是限制，結構是自由
links 延伸閱讀 — X/Twitter 推文嵌入
```

## 檔案結構

```
.
├── index.html        # 主投影片（GitHub Pages 入口）
├── paths.html        # Paths 系列子頁面（昨日/明日/邊界漫遊/地誌龐克）
├── gv.html           # Good Vibrations 系列子頁面（GV/序列機/鼓機）
├── background.html   # 藝術家背景與展覽
├── CLAUDE.md         # Claude Code 專案指引
├── README.md         # 本文件
├── assets/           # 本地圖片資源
└── 我如何使用LLM….md # 演講原稿（唯一內容源）
```

## 技術細節

- **純前端**：HTML + CSS + JS，零框架依賴
- **導覽**：CSS `scroll-snap` + 右側時間軸（IntersectionObserver）
- **中英雙語**：右上角切換按鈕（中文 / EN / MD）
- **子頁面**：系列作品拆至獨立 HTML，主投影片以卡片入口連結
- **iframe 管理**：進入視窗載入，離開清為 `about:blank`
- **字型**：Noto Sans TC / Noto Serif TC / JetBrains Mono
- **風格**：淺色主題，墨綠 / 深藍強調色

## 授權

© 2026 王新仁（阿亂）。保留所有權利。
