/**
 * speaker-notes.js
 * 講者筆記 — 每張投影片的口說內容
 *
 * 結構：{ "slide-id": { zh: "中文稿", en: "English" } }
 * 唯一來源：請同步更新 我如何使用LLM：從結構到創作的工作方法論.md
 */

window.SPEAKER_NOTES = {

  "slide-0": {
    zh: "",
    en: ""
  },

  "slide-1": {
    zh: "",
    en: ""
  },

  "slide-1b": {
    zh: `這頁有兩句引言，中間隔了 60 年。

1967 年 Sol LeWitt 寫下：
「The idea becomes a machine that makes the art.」
觀念，變成了製造藝術的機器。

那一年觀念藝術剛起來，他預言：藝術不需要藝術家親手做。
把觀念寫清楚，剩下的交給機器或執行者。
這句話 1967 年寫出來，現在聽起來像在預言 LLM。

2026 年我接著寫：
「自我歸檔，是新的自畫像。」

過去畫自畫像，是把自己畫進畫布。
現在畫自畫像，是把自己寫成一份可被執行、可被重新生成的格式。
.md 檔、決策日誌、寫作風格指南——這些是我這個世代的自畫像。

LeWitt 預言了「機器接手執行」。
我接著說：那執行什麼？執行的是一份結構化的『你』。
觀念是機器的程式碼。自我，是機器的人格 layer。

這條線中間還有一個橋——Casey Reas。Processing 共同創造者。
他講過：「系統本身就是作品。」每一次輸出只是這個系統的一個實例。
他用隨機性繞過自己的偏見，讓意想不到的形式從系統裡「湧現」。

LeWitt 給了觀念。Reas 給了系統。我接著說：那要被執行的是誰？
是『我』。

把這條線串起來——
我不創造圖像，我建構的是能記住決策如何發生的系統。
繪畫存在於時間之中，而不是形式之上。
你看到的，是人類意圖殘留下來的痕跡。`,
    en: `Two quotes on this page. Sixty years between them.

In 1967, Sol LeWitt wrote:
"The idea becomes a machine that makes the art."

That year, conceptual art was just emerging. He predicted: art doesn't need the artist to make it by hand. Write the idea clearly, and the rest can be handed to a machine — or an executor.
Written in 1967, this now sounds like a prediction of LLMs.

In 2026 I write:
"Self-archiving is the new self-portrait."

The old self-portrait painted yourself onto canvas.
The new self-portrait writes yourself into a format that can be executed, regenerated.
The .md file, the decision log, the writing-style guide — these are my generation's self-portrait.

LeWitt predicted "machine takes over execution."
I add: but what's being executed? A structured "you."
The idea is the program code. The self is the persona layer.

Between LeWitt and me there's a bridge — Casey Reas, co-creator of Processing.
He said: "The system itself is the artwork." Every output is just one instance of that system.
He uses randomness to bypass his own biases, letting unexpected forms "emerge" from the system.

LeWitt gave us idea. Reas gave us system. I'm asking: what gets executed?
It's "me."

Connecting the line —
I don't create images. I build systems that remember how decisions were made.
Painting exists in time, not in form.
What you see is the residue of human intention.`
  },

  "slide-1c": {
    zh: "",
    en: ""
  },

  "slide-3": {
    zh: "",
    en: ""
  },

  "slide-4": {
    zh: "",
    en: ""
  },

  "slide-5": {
    zh: "",
    en: ""
  },

  "slide-6": {
    zh: "",
    en: ""
  },

  "slide-6b": {
    zh: "",
    en: ""
  },

  "slide-7": {
    zh: "",
    en: ""
  },

  "slide-8": {
    zh: "",
    en: ""
  },

  "slide-9": {
    zh: "",
    en: ""
  },

  "slide-10": {
    zh: "",
    en: ""
  },

  "slide-10b": {
    zh: "",
    en: ""
  },

  "slide-11": {
    zh: "",
    en: ""
  },

  "slide-12": {
    zh: `我把這幾年在 Facebook、X、Threads 上發過的東西，全部下載下來。
丟進 LLM，請它幫我抽出寫作習慣——
常用什麼詞、句型怎麼跑、面對不同主題會切到哪種口氣。

抽出來之後，我整理成一份 .md。
分四塊：人格設定、寫作公式、口頭禪、句型風格。

這份 .md 不是給人看的，是給 LLM 看的。
它讀完之後，能模擬我的口氣回應問題、用我的方式組織想法。

到這一步，LLM 對我來說不再是助理。
它是一個 agent。一個模擬我自己的 agent。`,
    en: `I downloaded everything I'd written on Facebook, X, Threads — years of posts — and dumped it into an LLM.
I asked it to extract my writing habits.
Recurring words. Sentence shapes. How my tone shifts across topics.

Then I organized the output into an .md.
Four sections: persona, writing formulas, vocabulary, sentence style.

This .md isn't written for humans. It's written for the LLM.
After reading it, the model can mimic my voice. Structure thoughts the way I would.

At this point, the LLM isn't my assistant anymore.
It's an agent — an agent that simulates me.`
  },

  "slide-13": {
    zh: `四層架構。從上到下。

最上面，作品層，可重播。
hash 進去，同一首曲子出來。JSON 進去，同一幅水墨還原。

往下，記憶層，可索引。
JSON、.md，是我留給 LLM 的書籤。

再下，協作層，可延續。
CLAUDE.md、doc/、規格書。
換 session、換工作夥伴，工作流不會斷。

最底下，人格層，可模擬。
我的語氣、我的判斷、我的價值觀，被結構化下來。

四層都是同一件事——留下錨點。`,
    en: `Four layers. Top to bottom.

The work layer: replayable. Same hash, same song. Same JSON, same painting.

Beneath that, the memory layer: indexable. JSON and .md are bookmarks I leave for the LLM.

Beneath that, the collaboration layer: continuable. CLAUDE.md, doc/, specs. New session, new collaborator — the workflow doesn't break.

At the bottom, the persona layer: simulable. My voice, my judgments, my values — structured.

All four layers are the same act. Leaving anchors.`
  },

  "slide-13b": {
    zh: `這週我做了一個小實驗。
同一個問題，問了五個不同的 AI 模型。
答案不一樣。

不是細節不一樣，是整個世界觀不一樣。
每個模型有自己的偏好、自己的盲區、自己的「誰算重要」。

如果未來人們不再 Google，而是直接問 AI——
那誰被寫進那份答案，就是新的編輯權力。

所以——
你今天教的學生，五年後不會翻書、不會 Google。
他們會問 AI。

AI 給他們的答案，取決於今天你寫了什麼、發了什麼、留下什麼可被索引的東西。

你正在決定五年後的常識。`,
    en: `This week I ran a small experiment.
Same question, asked five different AI models.
The answers were different.

Not different in the details — different in worldview.
Every model has its own preferences, its own blind spots, its own "who matters."

If people stop using Google and start asking AI directly —
whoever gets written into that answer holds a new editorial power.

So —
your students, five years from now, won't open books or Google.
They'll ask AI.

What AI tells them depends on what you write, publish, and leave indexable today.

You're writing tomorrow's common sense.`
  },

  "slide-13c": {
    zh: `強連結，是你和你身邊的人。
學生、合作者、收藏家、圈內朋友。
他們知道你、記得你、在對話裡提到你。
但這一層 LLM 看不到。

弱連結，是散落在網路上的痕跡。
別人提到你的一篇文章、一個 repo、一段被截圖的對話、一句評論。
每一個都很小，加起來變成「存在訊號」。
這是 LLM 訓練語料吸收的層。

我把它整理成五點處方。
跟 ChatGPT 給我的不太一樣——
它的版本叫你變成更窄的品牌；
我的版本是叫你把工作整理清楚，讓它能被別人接住。

差別在哪——
ChatGPT 把這件事講成「請優化你自己以符合系統」。
我說的是「請好好整理你的工作，因為這件事本來就值得做」。

重點不是讓系統記得你。
是有人來找你的時候——
你早就把線索鋪好了。`,
    en: `Strong ties — you and the people around you.
Students, collaborators, collectors, friends in your circle.
They know you. They remember you. They mention you in conversation.
But this layer is invisible to the LLM.

Weak ties — traces scattered across the internet.
Someone's article that mentions you. A repo. A screenshotted conversation. A passing comment.
Each one is small. Together they become a "signal of existence."
This is what LLM training corpora absorb.

I organized this into five rules.
They're not the same as ChatGPT's —
its version asks you to become a narrower brand;
mine asks you to organize your work so others can pick it up.

The difference —
ChatGPT frames this as "optimize yourself for the system."
I frame it as "organize your work, because the work deserves it."

It's not about making the system remember you.
It's about — when someone finds you —
you've already laid the trail.`
  },

  "slide-15": {
    zh: `這場講座的最後一句。
跟 Claude 一起寫的。

「我不是被取代，我是被執行。」

「執行」這個詞兩個意思——
電腦的執行：run a program。
死刑的執行：put to death。

兩個意思我都收。
我把自己寫成 .md，意思是把自己變成可被執行的程式。
但也意思是——某一個我，已經死了；活下來的，是這份格式。

謝謝。`,
    en: `The final line.
Written with Claude.

"Not replaced — executed."

"Executed" carries two meanings —
to run a program;
to put to death.

I take both.
I wrote myself into .md — meaning I became an executable program.
But also meaning — a version of me has died; what survives is the format.

Thank you.`
  },

  "slide-14": {
    zh: `結構不是限制，結構是自由。

當我把自己寫成 .md，我能做的事更多，不是更少。
錨點越多，能延伸出去的方向越多。

所以——

「結構，是不在場的藝術家。」

我不在場的時候，這些 .md、這些 JSON、這些被 commit 進去的決策，替我繼續工作。
不是代理人——是字面意義上的：那個結構就是另一個我。
在我不在的時候，繼續做我會做的事。

整場講座，作品層、記憶層、協作層、人格層，最終都通到這一句。
當你結構化得夠好，你不在場時，結構在場。

但有一個問題我一直在想——
當我不在場，別人會怎麼重組我？

朋友走了，他在論壇上回答的問題還在。
我的 .md 還在 git 上，commit 還在留。
fork 出去的東西，會在別人手上長成另一個樣子。

大家都在問 AI 會不會取代藝術家。
我比較好奇的是——

你有沒有留下值得被取代的東西。`,
    en: `Structure isn't a constraint. Structure is freedom.

When I write myself into .md, I can do more — not less.
The more anchors I leave, the more directions to extend from.

So —

"Structure is the artist who isn't in the room."

When I'm not there, these .md files, these JSON, these committed decisions — they keep working for me.
Not as proxies — literally: the structure is another me.
Doing what I would do, when I'm not there.

The whole talk — work layer, memory layer, collaboration layer, persona layer — all leads to this single line.
When you've structured yourself well enough, when you're absent, the structure is present.

But there's one question I keep coming back to —
when I'm not in the room, how will others rebuild me?

A friend passed away. His answer on a forum is still there.
My .md is on git. The commits stay.
What gets forked travels into other hands and grows in another shape.

Everyone's asking whether AI will replace artists.
I'm more curious about —

whether you've left anything worth being replaced.`
  },

  "slide-links": {
    zh: "",
    en: ""
  }

};
