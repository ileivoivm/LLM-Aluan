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
- index.html 額外包含：CSS 排版、iframe 嵌入、圖片、flow 流程圖、互動元素、中英雙語 `<span class="zh/en">`
- 這些佈局元素不在 .md 中，但文字內容必須一致
- 每次修改後，確認兩個檔案的文字內容同步
- 目前為手動同步（不從 .md 動態讀取），因為 HTML 佈局太複雜無法自動映射

## 內容結構（17 頁，slide 0–14 + 1b + links）

```
00   開場 — 標題頁（cover.jpeg 封面）
01   About the Artist — 自介 + Affine Cipher 密碼框
01b  Statement — 藝術家宣言（三段式，獨立一頁）
02   Selected Cases — Maybach × Art Taipei / 520 就職 NFT
03   從取樣開始，從濾波結束 — Pure Data 陣列 + SoundCloud（哲學啟蒙）
04   GeoPunk — 地誌龐克（2021，最早區塊鏈作品，IPFS live demo）
05   Good Vibrations — Art Blocks + B-side 空投（OpenProcessing live demo）
06   Chaos 三部曲 — Research → Memory → Culture（三個 fxhash live demo）
07   Methodology — JSON 作為記憶層（chapter divider：故事 筆觸 行為）
08   Deep Dive · 小說 — 《修仙-七玄關》JSON 場景資料庫
09   Deep Dive · 水墨 — InkField 事件序列
10   Deep Dive · 植物 — PolyPaths 行為 → hash → JSON
11   Toolchain — Claude Code / Cursor / Cowork
12   Digital Twin — .md 風格指南
13   Summary — 四層架構（可重播/可索引/可延續/可模擬）
14   Closing — 結構不是限制，結構是自由 + 當我不在場時別人會怎麼重組我
links 延伸閱讀 — 三則 X/Twitter 推文嵌入
```

## 技術細節

- 純 HTML + CSS + JS，無框架依賴
- CSS scroll-snap 實現投影片切換
- 右側時間軸導覽（IntersectionObserver 驅動，從 .section-label 動態生成）
- iframe 載入/卸載：進入視窗載入，離開視窗清除 src 為 about:blank 以釋放效能
- 中英雙語切換：右上角 `中文 | EN | MD` 按鈕，MD 連結到 .md 原稿
- 鍵盤導覽：↑↓ / PageUp/PageDown / Space
- 響應式設計（768px + 480px 斷點）
  - 小螢幕隱藏右側時間軸
  - Chaos 三部曲 iframe 在行動裝置不載入（顯示「請於桌面裝置瀏覽」提示）
  - 延伸閱讀推文在行動裝置改為上下排列
- 字型：Noto Sans TC / Noto Serif TC / JetBrains Mono（Google Fonts）
- 淺色主題：#fafafa 背景，墨綠/深藍強調色

## 寫作風格規則

- 第一人稱藝術家語氣，短句，不解釋太多
- **禁止**：替觀眾劃重點、自我辯護、防禦性結論
- **禁止**：「表面是X，骨子裡是Y」「不只是A，更是B」「如果…那…→ 這成為…」
- **禁止**：「關鍵心得：」「同樣的模式：」等教學標籤
- **禁止**：「連名字都是加密的人，當然…」「方法論從沒變過」等自貼標籤句型
- **禁止**：預設不存在的反對聲音再急著澄清（「不是最近才開始…它一直都在」）
- 事實擺出來，觀眾自己會接。不替他們連
- highlight-box 裡的文字要精煉，不要收束性結論
- 04–06 各有一句 refrain：「同一份 X，可以被讀成 Y，也可以被讀成 Z。」——這是講座的韻律，重複是好的

## 已知問題與已修正項目

### ✅ 已修正

1. **Slide 03 橋接** — 結尾加「後來我做的很多作品，本質上都在做同一件事：替同一份資料發明新的讀法。」04–06 各加 refrain 呼應
2. **07 改為 chapter divider** — 砍掉三張卡片預覽，只留「LLM 的上下文有限，記憶會斷。JSON 和 .md 就是錨點。」+ 三個詞（故事 筆觸 行為）
3. **總結頁精簡** — 刪時間軸表格，只留四層架構（作品層：可重播 / 記憶層：可索引 / 協作層：可延續 / 人格層：可模擬）
4. **Closing 強化** — 加入「當我不在場時，別人會怎麼重組我？」作為餘韻
5. **自介拆分** — 01 拆成兩頁：About the Artist（基本資料）+ Statement（藝術家宣言）
6. **iframe 效能** — 離開頁面時卸載 iframe（src 清為 about:blank），Chaos 在行動裝置不載入

### 🔲 待處理

- 後半段（08–10）語氣仍偏教學——應改成「作品先，方法後」順序
- 部分頁面（04 / 05 / 08 / 10）在投影時偏滿，觀眾可能來不及讀

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
- 刪除的典型句型：「連名字都是加密的人，當然用結構來創作」「方法論從沒變過」「表面是X骨子裡是Y」「不只是A更是B」「結構化思考不是 LLM 時代才開始的，它一直都在」

### 第四階段：哲學層補完
- 新增「從取樣開始，從濾波結束」（Slide 03）：Pure Data 陣列作為整套方法論的原型
- 位置：案例之後、所有作品之前（哲學啟蒙，先給框架再看作品）
- 建立內容同步規則：.md 是唯一內容源，先改 .md 再同步 HTML
- 封面改為 cover.jpeg，文字加白底提高識別度

### 第五階段：自我審查與結構修正
- 完整重讀全文，列出正反面分析
- 使用者確認方向後實施修正：
  - 03 加橋接句 + 04–06 加 refrain（「同一份X，可以被讀成Y，也可以被讀成Z」）
  - 07 改為 chapter divider（故事 筆觸 行為）
  - 總結頁精簡為四層架構垂直區塊
  - Closing 加入餘韻句
  - 自介拆成兩頁（About + Statement）
  - Chaos iframe 三個並排 + fxhash 連結
  - iframe 離開頁面時卸載以釋放效能
  - 行動裝置響應式（Chaos 不載入、推文改上下排列）

### 第六階段：中英雙語
- 全頁面加入 `<span class="zh">` / `<span class="en">` 雙語切換
- 右上角切換按鈕：中文 | EN | MD
- 英文版 en-flex class 處理 flex container 的 display 切換

## 編輯注意事項

- 語言為繁體中文（zh-Hant），全頁支援中英切換
- 投影片中的 code block 使用 `<span>` 手動語法高亮（`.key` / `.str` / `.comment`）
- 新增 slide 時：更新 slide id 編號、section-label 編號、確認時間軸自動同步
- assets/ 圖片盡量壓縮（JPG < 300KB），避免 push 失敗
- 中英雙語：每段文字都要有 `<span class="zh">` 和 `<span class="en">` 兩個版本
- .md 只維護中文版，英文版僅存在於 HTML 中
