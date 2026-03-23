# 我如何使用 LLM：從結構到創作的工作方法論

## 專案概述

王新仁（阿亂）的演講投影片專案。90 分鐘講座。
主線：十年來都在做同一件事——把重要的東西結構化，藏進去，讓有能力的人（或機器）解碼。

## 專案結構

```
.
├── 我如何使用LLM：從結構到創作的工作方法論.md   # 演講原稿（唯一內容源）
├── index.html                                    # 投影片（淺色主題，GitHub Pages 入口）
├── assets/                                       # 本地圖片資源
├── CLAUDE.md                                     # 本文件
└── README.md                                     # 專案說明
```

## 內容同步規則（重要）

**`.md` 是唯一的內容源。`index.html` 的所有文字必須來自 `.md`。**

- 修改文字內容時：**先改 .md，再同步到 index.html**
- index.html 額外包含：CSS 排版、iframe 嵌入、圖片、flow 流程圖、互動元素
- 這些佈局元素不在 .md 中，但文字內容必須一致
- 每次修改後，確認兩個檔案的文字內容同步

## 內容結構（15 頁，slide 0–14）

```
00  開場 — 標題頁
01  About the Artist — 自介 + Affine Cipher 密碼框
02  Selected Cases — Maybach × Art Taipei / 520 就職 NFT
03  從取樣開始，從濾波結束 — Pure Data 陣列 + SoundCloud（哲學啟蒙）
04  GeoPunk — 地誌龐克（2021，最早區塊鏈作品）
05  Good Vibrations — Art Blocks + B-side 空投
06  Chaos 三部曲 — Research → Memory → Culture
07  Methodology — JSON 作為記憶層（三個專案總覽）
08  Deep Dive · 小說 — JSON 場景資料庫
09  Deep Dive · 水墨 — InkField 事件序列
10  Deep Dive · 植物 — PolyPaths 行為 → hash → JSON
11  Toolchain — Claude Code / Cursor / Cowork
12  Digital Twin — .md 風格指南
13  Summary — 時間軸表格 + 四層架構表格
14  Closing — 結構不是限制，結構是自由
```

## 技術細節

- 純 HTML + CSS + JS，無框架依賴
- CSS scroll-snap 實現投影片切換
- 右側時間軸導覽（IntersectionObserver 驅動，從 .section-label 動態生成）
- iframe lazy loading：IntersectionObserver，root: null，rootMargin: 200px
- 鍵盤導覽：↑↓ / PageUp/PageDown / Space
- 響應式設計（768px 斷點，小螢幕隱藏時間軸）
- 字型：Noto Sans TC / Noto Serif TC / JetBrains Mono（Google Fonts）
- 淺色主題：#fafafa 背景，墨綠/深藍強調色

## 寫作風格規則

- 第一人稱藝術家語氣，短句，不解釋太多
- **禁止**：替觀眾劃重點、自我辯護、防禦性結論
- **禁止**：「表面是X，骨子裡是Y」「不只是A，更是B」「如果…那…→ 這成為…」
- **禁止**：「關鍵心得：」「同樣的模式：」等教學標籤
- 事實擺出來，觀眾自己會接。不替他們連
- highlight-box 裡的文字要精煉，不要收束性結論

## 已知問題與待修方向

自我審查後發現的結構性問題（尚未修正）：

1. **Slide 03（Pd 陣列）沒有連接到後面的作品** — 04–06 應各加一句呼應「讀取方式」的短語，讓觀眾自動把 Pd 框架套上去
2. **07（Methodology）跟 08–10 重複** — 07 的三張卡片是 08–10 的預覽，觀眾看兩遍。考慮砍卡片只留一句過渡，或直接刪 07
3. **後半（07–12）語氣變回教學模式** — 前半是藝術家講世界觀，後半變工程師做教學。應該用作品的張力帶方法論，不是用方法論解釋作品
4. **總結頁兩張表格太重** — 刪時間軸表格（前面每頁已講過），只留四層架構表格
5. **Closing 太單薄** — 「#當我不在場時別人會怎麼重組我」比正文更有力，應提升到結語正文

## 開發歷程

### 第一階段：基礎建設
- 從既有 .md 原稿和舊版 slides.html 出發
- slides.html 改名 index.html 部署 GitHub Pages
- 導覽從頂部小圓點改為右側時間軸（IntersectionObserver + .section-label 動態生成）
- iframe lazy loading 從 root: slidesRoot 改為 root: null 修復不載入問題

### 第二階段：內容擴充
- 新增自介頁（Slide 01）：Affine Cipher 密碼框（aluan wang → ileiv oivm）
- 新增案例頁（Slide 02）：Mercedes-Maybach × Art Taipei 2024、520 就職典禮 NFT
- 新增 GeoPunk 作品頁：從案例移為獨立 slide，補摩斯電碼、Paths 系列脈絡、地緣政治
- 新增 Chaos 三部曲頁：Research → Memory → Culture，三幕劇結構，自我取樣概念
- 強化 Good Vibrations：補 B-side 空投機制
- 參考豆泥文章（matters.town）補充 Chaos 系列細節、恩尼格瑪（後修正為 Affine Cipher）

### 第三階段：語氣校正
- 使用者指出大量 AI 味文字：自我辯護、替觀眾劃重點、防禦性結論
- 逐句掃描修正，建立寫作禁令寫入 CLAUDE.md
- 關鍵原則：事實擺出來，觀眾自己會接。不替他們連
- 刪除的典型句型：「連名字都是加密的人，當然用結構來創作」「方法論從沒變過」「表面是X骨子裡是Y」「不只是A更是B」

### 第四階段：哲學層補完
- 新增「從取樣開始，從濾波結束」（Slide 03）：Pure Data 陣列作為整套方法論的原型
- 位置：案例之後、所有作品之前（哲學啟蒙，先給框架再看作品）
- 建立內容同步規則：.md 是唯一內容源，先改 .md 再同步 HTML
- 封面改為 cover.jpeg，文字加白底提高識別度

### 第五階段：自我審查
- 完整重讀全文，列出正面（主線清晰、語氣統一、有 live demo）和反面（Pd 未連接、07 重複、後半教學化、總結太重、Closing 單薄）
- 解決方案已列出，待使用者確認後實施

## 編輯注意事項

- 語言為繁體中文（zh-Hant）
- 投影片中的 code block 使用 `<span>` 手動語法高亮（`.key` / `.str` / `.comment`）
- 新增 slide 時：更新 slide id 編號、section-label 編號、確認時間軸自動同步
- assets/ 圖片盡量壓縮（JPG < 300KB），避免 push 失敗
