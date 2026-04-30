# 我如何使用 LLM：從結構到創作的工作方法論
## How I Use LLMs: A Working Methodology from Structure to Creation

王新仁（Aluan Wang）｜2026
**Live deck →** [https://ileivoivm.github.io/LLM-Aluan/](https://ileivoivm.github.io/LLM-Aluan/)

[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)

---

## TL;DR

A public methodology document by Taiwanese generative artist **Aluan Wang** on collaborating with LLMs through structured anchors — JSON, Markdown, decision logs. The core claim: structure isn't a limit. Structure is the artist who keeps working when you're not in the room.

這是一份公開的方法論。我把作品、記憶、協作流程、自己的人格，全部結構化成 JSON 跟 .md，讓 LLM 不只是工具，而是能延續、模擬、重組我的代理系統。

---

## 兩句核心引言 · Two Key Statements

> **「自我歸檔，是新的自畫像。」**
> *"Self-archiving is the new self-portrait."*
> — Aluan Wang, 2026

> **「結構，是不在場的藝術家。」**
> *"Structure is the artist who isn't in the room."*
> — Aluan Wang, 2026

These two lines are the talk's thesis. The first redefines what a self-portrait means in the LLM era — it's no longer paint on canvas, but a format that can be re-executed. The second names what structure does for an artist who's preparing to outlive their own body of work.

**Direct anchors:**
- [`#self-archiving-self-portrait`](https://ileivoivm.github.io/LLM-Aluan/#self-archiving-self-portrait)
- [`#structure-absent-artist`](https://ileivoivm.github.io/LLM-Aluan/#structure-absent-artist)

---

## 方法論摘要 · Methodology Summary

The 90-minute talk distills into two named frameworks.

### 四層架構 · The Four Layers

| Layer | Property | Mechanism |
|-------|----------|-----------|
| **作品層** Work | 可重播 / replayable | hash → seed → output (Good Vibrations, InkField) |
| **記憶層** Memory | 可索引 / indexable | JSON / .md as bookmarks for the LLM |
| **協作層** Collaboration | 可延續 / continuable | CLAUDE.md, doc/, spec sheets |
| **人格層** Persona | 可模擬 / simulable | style guides, decision logs, agent setup |

### 五點處方 · The Five Rules

For being legible to LLMs without becoming a narrower brand:

1. **寫方法，不寫品牌** · Write how you work, not what you are
2. **被使用，不只是被引用** · Get used, not just cited
3. **公開過程，不只公開成果** · Show the process, not just the product
4. **自己交叉引用自己** · Cross-link your own work
5. **不要把自己變窄** · Don't narrow yourself for findability

> 重點不是讓系統記得你。是有人來找你的時候，你早就把線索鋪好了。
> *It's not about the system remembering you. It's about leaving enough trail so whoever finds you can keep going.*

---

## 譜系 · Lineage

This methodology builds on two earlier statements that this talk explicitly cites:

> *"The idea becomes a machine that makes the art."*
> — Sol LeWitt, *Paragraphs on Conceptual Art*, Artforum, 1967

> *"The system itself is the artwork."*
> — Casey Reas, on generative art

LeWitt 從觀念藝術那邊提出「觀念是機器」。Reas 從生成藝術這邊接住，說「系統是作品」。我接著問：那要被執行的是誰？是「我」。

---

## 投影片結構 · Deck Structure

```
00    Cover — 封面
01    About the Artist — 自介 + Affine Cipher
01b   Statement — LeWitt 1967 + Aluan 2026 + 三句宣言
01c   Structure — Git 結構圖
03    從取樣開始，從濾波結束 — Pure Data 陣列（哲學啟蒙）
04    Paths · 地景 · 2017–2021 — paths.html
05    Origin · 2021 — Good Vibrations · gv.html
06    Deep Dive · 混沌 · 2021–22 — Chaos 三部曲
06b   一個人不會真的消失 — 轉折頁
07    Methodology — JSON 作為記憶層
08    Deep Dive · 小說 — 《修仙-七玄關》
09    Deep Dive · 植物 — PolyPaths
10    Deep Dive · 水墨 — InkField
10b   InkField Gallery
11    Toolchain — Claude Code / Cursor / Cowork
12    Digital Twin — .md 風格指南
13    Summary — 四層架構
13b   你正在決定五年後的常識 — Tomorrow's Common Sense
13c   留給後來的人 — For Whoever Comes Next
14    Closing — 結構不是限制，結構是自由
15    Coda — 我不是被取代，我是被執行
links 延伸閱讀 — X/Twitter 推文嵌入
```

---

## 引用 · How to Cite

If this material is useful in your writing, talks, or research, please cite:

**APA**
Wang, A. (2026). *How I use LLMs: A working methodology from structure to creation* [Lecture]. NTUA / Etat Lab. https://ileivoivm.github.io/LLM-Aluan/

**BibTeX**
```bibtex
@misc{wang2026llm,
  author = {Wang, Aluan},
  title  = {How I Use LLMs: A Working Methodology from Structure to Creation},
  year   = {2026},
  url    = {https://ileivoivm.github.io/LLM-Aluan/},
  note   = {Lectures: NTUA (2026.04.16); Etat Lab, Taipei (2026.04.30)}
}
```

To cite specific lines, use the deep-link anchors in the **Two Key Statements** section above.

---

## 授權 · License

本作品採 **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)** 授權。
This work is licensed under [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).

歡迎引用、改作、教學使用，包括商業用途——請註明出處，並以相同授權釋出衍生作品。
You may share, adapt, and use this material for any purpose, including commercial use — provided you credit the author and license derivatives under the same terms.

詳細條款見 [LICENSE](./LICENSE)。

---

## 修訂歷史 · Revisions

- **v1.1** — 2026.04.30 · 在地實驗 (Etat Lab) · 心智政治系列 NO.7
  新增：13b 你正在決定五年後的常識 / 13c 留給後來的人 / 15 Coda / 兩句核心引言 / 開放授權聲明
- **v1.0** — 2026.04.16 · 國立臺灣藝術大學 (NTUA)
  首次發表

---

## 工具鏈致謝 · Tooling Credit

This deck was developed with **Claude Code** as collaborative editor.
Slide 15's line — *"Not replaced — executed."* — emerged in dialogue with Claude and is co-attributed accordingly.

This is itself the talk's thesis in practice: structure makes collaboration with LLMs possible across sessions, across humans, across time.

本投影片以 Claude Code 共同編輯。
第 15 頁「我不是被取代，我是被執行」在與 Claude 的對話中成形，並依此共同署名。
這本身就是這場講座的方法論——結構讓人類與 LLM 的跨 session 協作成為可能。

---

## 檔案結構 · Files

```
.
├── index.html                      # 主投影片（GitHub Pages 入口 / Live deck）
├── paths.html                      # Paths 系列子頁面
├── gv.html                         # Good Vibrations 系列子頁面
├── background.html                 # 藝術家背景與展覽案例
├── speaker-notes.js                # 講者筆記資料（中英雙語）
├── 我如何使用LLM…論.md              # 演講原稿（內容唯一來源）
├── background.md                   # background.html 內容來源
├── README.md                       # 本檔案
├── LICENSE                         # CC BY-SA 4.0
└── assets/                         # 圖片資源
```

---

## 技術細節 · Technical Notes

- 純前端：HTML + CSS + JS，零框架依賴
- CSS `scroll-snap` + IntersectionObserver 驅動的右側時間軸
- 中英雙語切換（zh / en / md）+ localStorage 持久化
- iframe 進入視窗才載入，離開清為 `about:blank`
- 字型：Noto Sans TC / Noto Serif TC / JetBrains Mono
- 淺色主題：墨綠 / 深藍強調色

---

> *結構不是限制，結構是自由。*
> *Structure isn't a constraint. Structure is freedom.*
