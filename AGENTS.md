# 我如何使用 LLM：從結構到創作的工作方法論

## 專案概述

王新仁（阿亂）的演講投影片專案。90 分鐘講座，臺藝大 2026.04.16。
主線：十年來都在做同一件事——把重要的東西結構化，藏進去，讓有能力的人（或機器）解碼。
Live: https://ileivoivm.github.io/LLM-Aluan/

## 專案結構

```
.
├── index.html                                    # 主投影片（GitHub Pages 入口）
├── 我如何使用LLM：從結構到創作的工作方法論.md   # 演講原稿（唯一內容源）
├── background.html                               # 藝術家背景與展覽案例（子頁面）
├── background.md                                 # 藝術家簡歷文字稿（background.html 的內容來源）
├── gv.html                                       # Good Vibrations 系列子頁面（GV/序列機/鼓機）
├── paths.html                                    # Paths 系列子頁面（昨日/明日/邊界漫遊/地誌龐克）
├── speaker-notes.md                              # 講者口白唯一內容源（彈窗顯示）
├── speaker-prep.md                               # 戰術備忘：自我拆解 + 反擊話術（不對外）
├── 我如何使用LLM-slides.html                     # 舊版投影片（保留但不再使用）
├── assets/                                       # 本地圖片資源
├── AGENTS.md                                     # 本文件（不進版控）
└── README.md                                     # 專案說明
```

## 內容同步規則（重要）

**`.md` 是唯一的內容源。`index.html` 的所有文字必須來自 `.md`。**

- 修改文字內容時：**先改 .md，再同步到 index.html**
- index.html 額外包含：CSS 排版、iframe 嵌入、圖片、flow 流程圖、互動元素、中英雙語 `<span class="zh/en">`
- 這些佈局元素不在 .md 中，但文字內容必須一致
- 每次修改後，確認兩個檔案的文字內容同步
- 目前為手動同步（不從 .md 動態讀取），因為 HTML 佈局太複雜無法自動映射
- **background.md** 是 background.html 的內容來源，同理先改 .md 再同步 HTML
- .md 只維護中文版，英文版僅存在於 HTML 中

## 內容結構（slide 0–15 + 1b + 1c + 6a + 6b + 6c + 10b + 13b + 13c + links）

```
00   開場 — 標題頁（cover.jpeg 封面）
01   About the Artist — 自介 + Affine Cipher 密碼框
01b  Statement — 藝術家宣言（三段式，獨立一頁）
01c  Structure — Git 結構圖，LLM 協作架構示意
03   從取樣開始，從濾波結束 — Pure Data 陣列 + SoundCloud（哲學啟蒙）
04   Paths · 地景 · 2017–2021 — 卡片入口 → paths.html
05   Origin · 2021 — Good Vibrations 系列，卡片入口 → gv.html
06   Deep Dive · 混沌 · 2021–22 — Chaos 三部曲（三個 fxhash live demo）
06a  Peak 與防禦 — Ted Chiang JPEG 命題 + 防禦工事論點
06b  保護藝術家 — 大熊貓 meme（comic relief 頁）
06c  一個人不會真的消失 — 轉折頁
07   Methodology — JSON 作為記憶層（chapter divider：故事 筆觸 行為）
08   Deep Dive · 小說 — 《修仙-七玄關》JSON 場景資料庫
09   Deep Dive · 植物 — PolyPaths 行為 → hash → JSON
10   Deep Dive · 水墨 — InkField 事件序列
10b  InkField Gallery — 作品展示
11   Toolchain — Codex / Cursor / Cowork
12   Digital Twin — .md 風格指南
13   Summary — 四層架構（可重播/可索引/可延續/可模擬）
14   結語 — 結構不是限制，結構是自由 + 當我不在場時別人會怎麼重組我
links 延伸閱讀 — 三則 X/Twitter 推文嵌入
```

注意：無 slide-2（Selected Cases 已併入 background.html 子頁面）。slide 編號跳過 2。

## 子頁面架構

主投影片以卡片入口（project-card）連結到子頁面，子頁面獨立於 index.html：

- **paths.html** — Paths 系列四件作品（昨日/明日/邊界漫遊/地誌龐克），含 iframe 嵌入
- **gv.html** — Good Vibrations 系列三件作品，左側有 QR code（本地 assets），含 iframe 嵌入互動區塊
- **background.html** — 藝術家完整簡歷、獲獎、展覽、典藏記錄

子頁面共用相同設計語言（淺色主題、相同 CSS 變數、相同字型），但各自獨立維護 CSS。

## 技術細節

- 純 HTML + CSS + JS，無框架依賴
- CSS scroll-snap 實現投影片切換
- 右側時間軸導覽（19 個 `.timeline-item`，IntersectionObserver 驅動，從 `.section-label` 動態生成）
- iframe lazy loading：class `lazy-embed` + `data-src`，IntersectionObserver 進入 300px 前載入，離開清為 `about:blank`
- 中英雙語切換：右上角 `中文 | EN | MD` 按鈕，CSS `html[lang="en"]` 控制顯示，localStorage 持久化
- 講者筆記：左側固定按鈕 + popup 面板。內容源是 `speaker-notes.md`，由 `index.html` 內聯的 loader 在頁面載入時 fetch 並 parse 成 `window.SPEAKER_NOTES`。MutationObserver 同步語言切換
- 鍵盤導覽：↑↓ / PageUp/PageDown / Space，上下箭頭按鈕（邊界自動禁用）
- 響應式設計（768px + 480px 斷點）
  - 小螢幕隱藏右側時間軸
  - Chaos 三部曲 iframe 在行動裝置不載入（顯示「請於桌面裝置瀏覽」提示）
  - 延伸閱讀推文在行動裝置改為上下排列
- 字型：Noto Sans TC / Noto Serif TC / JetBrains Mono（Google Fonts）
- 淺色主題：#fafafa 背景，墨綠 `#2d6a4f` / 深藍 `#1a5276` 強調色

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
- `algo.html` 是教學／參考頁，語氣採理性、客觀、手冊/wiki 式說明；不要使用詩意比喻或藝術家宣言語氣，並與主投影片創作敘事區隔。

## 講者筆記寫作規則（speaker-notes.md · 藝術家 OS）

針對 `speaker-notes.md` 裡每張投影片的講者獨白，**額外**遵守：

- **禁用破折號 `——`**：這是 AI 寫作的常見 tell。改用正常標點（逗號、句號、冒號）。需要強烈停頓時用句號分句即可。
- **不要散文式詩化斷行**：不要為了「停頓感」每句話換行。寫成正常段落，自然斷句。讓朗讀的人自己決定停頓，而非由文本強制。
- **每頁最多 4 段**：一頁投影片的講者口白最多 4 個正常段落。每段是邏輯完整的一段話，內部用逗號／句號連起來，不要再切碎成更小的單位。
- **段落結構**：邏輯相關的句子用句號或逗號連起來組成段落。不要每句換行。

範例對比：

❌ AI 風格（禁止）：
> 我只是先按下第一個 commit 的人。
>
> 人類記載個體意識，記了兩千年。
> 從希臘哲人、文藝復興、到現代藝術——每個文明的高峰，都在歌頌「個體的獨特性」。

✅ 正常風格（採用）：
> 我只是先按下第一個 commit 的人。
>
> 人類記載個體意識，記了兩千年。從希臘哲人、文藝復興，到現代藝術，每個文明的高峰，都在歌頌「個體的獨特性」。

## 編輯注意事項

- 語言為繁體中文（zh-Hant），全頁支援中英切換
- 投影片中的 code block 使用 `<span>` 手動語法高亮（`.key` / `.str` / `.comment`）
- 新增 slide 時：更新 slide id 編號、section-label 編號、確認時間軸自動同步（timeline 從 section-label 動態生成，不需手動改 timeline）
- assets/ 圖片盡量壓縮（JPG < 300KB），避免 push 失敗
- 中英雙語：每段文字都要有 `<span class="zh">` 和 `<span class="en">` 兩個版本
- 新增 slide 時也要在 `speaker-notes.md` 加對應的 `## slide-XX` 區塊（含空白 `### zh` / `### en` 雙語區段）
- gv.html 的 QR code 使用本地 assets（qr-gv.png, qr-av11.png, qr-av23.png），不依賴外部 API

### ⚠️ 文字排版必須使用現有 CSS 元件（重要）

**新增或修改 slide 內容時，禁止用裸 `<p>` 放重點文字。必須使用以下現有 CSS 元件：**

- `highlight-box` — 金句、觀點、refrain（帶左邊框的引言卡片）
- `project-card` — 作品介紹卡片（含 `.pname` / `.psub` / `.pdesc` / `.ptag`）
- `code-block` — JSON / 程式碼展示（含 `.code-label` + `<pre>`）
- `flow` — 流程圖（`.flow-node` + `.flow-arrow`）
- `big-quote` — 大字引言
- `project-grid` — 多卡片網格容器

裸 `<p>` 只用於段落描述文字，不用於觀點或金句。

## 已知問題與已修正項目

### ✅ 已修正

1. **Slide 03 橋接** — 結尾加「後來我做的很多作品，本質上都在做同一件事：替同一份資料發明新的讀法。」04–06 各加 refrain 呼應
2. **07 改為 chapter divider** — 砍掉三張卡片預覽，只留「LLM 的上下文有限，記憶會斷。JSON 和 .md 就是錨點。」+ 三個詞（故事 筆觸 行為）
3. **總結頁精簡** — 刪時間軸表格，只留四層架構（作品層：可重播 / 記憶層：可索引 / 協作層：可延續 / 人格層：可模擬）
4. **Closing 強化** — 加入「當我不在場時，別人會怎麼重組我？」作為餘韻
5. **自介拆分** — 01 拆成三頁：About the Artist + Statement + Structure（Git 結構圖）
6. **iframe 效能** — 離開頁面時卸載 iframe（src 清為 about:blank），Chaos 在行動裝置不載入
7. **子頁面拆分** — Paths 系列 → paths.html、Good Vibrations → gv.html、藝術家背景 → background.html
8. **講者筆記** — 左側固定按鈕 + popup 面板，speaker-notes.js 獨立檔案
9. **QR code 本地化** — gv.html 三個互動區塊的 QR code 改為本地 assets
10. **slide-6c 轉折頁** — 「一個人不會真的消失」（原 6b，因 6a/6b 插入而改編號）
11. **slide-10b InkField Gallery** — 獨立作品展示頁

### 🔲 待處理

- 後半段（08–10）語氣仍偏教學——應改成「作品先，方法後」順序
- 部分頁面（04 / 05 / 08 / 10）在投影時偏滿，觀眾可能來不及讀
- speaker-notes.js 所有 entry 目前為空，尚未填入講者筆記

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
- 逐句掃描修正，建立寫作禁令寫入 AGENTS.md
- 關鍵原則：事實擺出來，觀眾自己會接。不替他們連

### 第四階段：哲學層補完
- 新增「從取樣開始，從濾波結束」（Slide 03）：Pure Data 陣列作為整套方法論的原型
- 建立內容同步規則：.md 是唯一內容源，先改 .md 再同步 HTML
- 封面改為 cover.jpeg，文字加白底提高識別度

### 第五階段：自我審查與結構修正
- 03 加橋接句 + 04–06 加 refrain
- 07 改為 chapter divider（故事 筆觸 行為）
- 總結頁精簡為四層架構垂直區塊
- Closing 加入餘韻句
- 自介拆成多頁（About + Statement + Structure）
- Chaos iframe 三個並排 + fxhash 連結
- iframe 離開頁面時卸載以釋放效能
- 行動裝置響應式（Chaos 不載入、推文改上下排列）

### 第六階段：中英雙語
- 全頁面加入 `<span class="zh">` / `<span class="en">` 雙語切換
- 右上角切換按鈕：中文 | EN | MD
- 英文版 en-flex class 處理 flex container 的 display 切換

### 第七階段：子頁面與互動強化
- 作品系列拆至獨立子頁面（paths.html, gv.html, background.html）
- 主投影片以 project-card 卡片入口連結
- 新增講者筆記功能（左側按鈕 + popup 面板 + speaker-notes.js）
- slide-14 以 git 圖語言重設計結語
- gv.html QR code 改為本地 assets
- 新增 slide-1c（Structure）、slide-6b（轉折）、slide-10b（InkField Gallery）
