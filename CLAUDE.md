# 我如何使用 LLM：從結構到創作的工作方法論

## 專案概述

這是王新仁（阿亂）的演講專案，主題為「我如何使用 LLM：從結構到創作的工作方法論」。內容涵蓋從 2021 年生成藝術實踐到 LLM 協作方法論的完整論述。

## 專案結構

```
.
├── 我如何使用LLM：從結構到創作的工作方法論.md   # 演講原稿（Markdown）
├── 我如何使用LLM-slides.html                    # 投影片版本（深色主題，scroll-snap）
├── slides.html                                   # 投影片版本（淺色主題，書籍排版風格）
└── img/                                          # 圖片資源目錄
```

## 技術細節

### 投影片（HTML）
- 純 HTML + CSS + JS，無框架依賴
- 使用 CSS scroll-snap 實現投影片切換
- 鍵盤導覽（↑/↓/PageUp/PageDown/Space）
- IntersectionObserver 驅動導覽列狀態
- 頂部固定導覽列（nav dots + counter）
- 響應式設計（768px 斷點）
- 字型：Noto Sans TC / Noto Serif TC / JetBrains Mono（Google Fonts）

### 兩個版本差異
- `我如何使用LLM-slides.html`：深色主題（#0a0a0a 背景），橘色強調色（#f97316），無襯線風格
- `slides.html`：淺色主題（#fafafa 背景），墨綠/深藍強調色，襯線字搭配書籍感排版

## 內容結構（7 張投影片）

0. 標題頁
1. Origin — Good Vibrations 與結構化思考的起源
2. Methodology — JSON 作為記憶層（三個專案案例）
3. Deep Dive — 小說 JSON 結構實例
4. Toolchain — Claude Code / Cursor / Cowork
5. Digital Twin — 用 .md 建立數位分身
6. Summary — 四層架構總結表格
7. Closing — 結語與 hashtags

## 編輯注意事項

- 語言為繁體中文（zh-Hant）
- 保持兩個 HTML 版本的內容一致性
- 修改內容時同步更新 .md 原稿與對應的 HTML 投影片
- 投影片中的 code block 使用 `<span>` 標籤手動語法高亮（`.key` / `.str` / `.comment` / `.arrow`）
