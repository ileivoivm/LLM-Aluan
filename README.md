# 我如何使用 LLM：從結構到創作的工作方法論

> 王新仁（阿亂）的演講投影片專案
> **Live:** [https://ileivoivm.github.io/LLM-Aluan/](https://ileivoivm.github.io/LLM-Aluan/)

---

## 專案概述

這是一份以純 HTML + CSS + JS 打造的演講投影片，主題為「我如何使用 LLM：從結構到創作的工作方法論」——從生成藝術實踐出發，闡述如何以結構化方法（JSON / Markdown）與 LLM 協作。

## 目前進度

### ✅ 已完成

| 項目 | 說明 |
|------|------|
| **基礎投影片** | 12 頁完整內容（開場 → 結語） |
| **右側時間軸導覽** | 固定於右側，顯示各頁標題，點選即滑動到對應頁面 |
| **自我介紹頁（Slide 1）** | 藝術家簡介、照片、經歷標籤、數據亮點 |
| **案例頁（Slide 2）** | 兩個藝術合作案例，圖文左右排版 |
| **案例一：Mercedes-Maybach × Art Taipei 2024** | 台灣賓士「Welcome to Beyond」主題，展出生成藝術作品《春分》，互動螢幕 + 鏡面裝置 |
| **案例二：總統就職典禮 × 生成式 NFT** | 2024 · 520 就職紀念，AI 風格轉換系統，akaSwap + Tezos 鏈上 NFT |
| **案例圖片本地化** | 縮圖存放於 `assets/` 目錄 |
| **內容頁面** | Good Vibrations、JSON 方法論、小說結構、InkField 水墨引擎、PolyPaths、工具鏈、數位分身、總結 |
| **Live Demo 嵌入** | Good Vibrations / InkField / PolyPaths 三個 iframe，捲動到該頁才載入 |
| **鍵盤導覽** | ↑↓ / PageUp/PageDown / Space |
| **GitHub Pages 部署** | `index.html` 為入口 |

### 🔲 待處理

- [ ] **GitHub Pages 啟用確認** — 需至 repo Settings → Pages → Source 選擇 `main` branch
- [ ] 行動裝置響應式優化（時間軸在小螢幕的處理）
- [ ] 更多案例擴充（如有需要）

## 投影片結構（12 頁）

```
00  開場 — 標題頁
01  About the Artist — 自我介紹
02  Selected Cases — 藝術合作案例（Maybach / 520 NFT）
03  Origin — Good Vibrations 與結構化思考的起源
04  Methodology — JSON 作為記憶層
05  Deep Dive · 小說 — JSON 故事結構實例
06  Deep Dive · 水墨 — InkField AI 用 JSON 畫水墨
07  Deep Dive · 植物 — PolyPaths 觀眾行為即 DNA
08  Toolchain — Claude Code / Cursor / Cowork
09  Digital Twin — 用 .md 建立數位分身
10  Summary — 四層架構總結
11  Closing — 結語
```

## 技術細節

- **純前端**：HTML + CSS + JS，零框架依賴
- **導覽**：CSS `scroll-snap` + 右側時間軸（IntersectionObserver 驅動）
- **字型**：Noto Sans TC / Noto Serif TC / JetBrains Mono（Google Fonts）
- **風格**：淺色主題，墨綠 / 深藍強調色，書籍排版風格

## 檔案結構

```
.
├── index.html          # 主投影片（GitHub Pages 入口）
├── CLAUDE.md           # Claude Code 專案指引
├── README.md           # 本文件
├── assets/             # 本地圖片資源
│   ├── mercedes-maybach-art-taipei-2024-banner.png
│   ├── inaugural-2024-nft-banner.png
│   ├── inkfield-banner.png
│   └── seven-gates-card.png
└── img/                # 其他圖片
```

## 授權

© 2026 王新仁（阿亂）。保留所有權利。
