# Speaker Notes · 講者口白

> 這份檔案是投影片左側「藝術家 OS」彈窗的內容源。
> 每個 slide id 一個 `## slide-XX` 區塊，內含 `### zh` 與 `### en` 雙語段落。
> 編輯這份 .md 即可更新彈窗。瀏覽器在頁面載入時 fetch 這份檔案、parse 後填入彈窗資料。
>
> **寫作規則**（同 CLAUDE.md「講者筆記寫作規則」）：
> - 禁用破折號 `——`，改用正常標點
> - 不要詩化斷行，每段是邏輯完整的一塊
> - 每頁最多 4 段

---

## slide-0

### zh
我今天在出門之前偷偷換了主題。我請 Claude Code 看完整份投影片，他覺得我原本的標題太像學術論文，沒有煽動性也沒有情感。他從我自己的文章裡抓出一句話，認為我應該用這句開場：「結構，是不在場的藝術家。」

這句話是我自己寫的。但對 Claude Code 而言，這句比我選的方法論標題更值得當開場。我接受了這個建議。

接下來九十分鐘，我們要驗證這句話。看它是真的成立，還是只是藝術家的自我好感、自我想像投射出來的一種說法。

如果這句話成立，它呼應的是我看到全球新媒體跟生成藝術一個很巨大的轉變。很多人跟我可能都在類似的觀點上面，平行進展。

### en
Right before walking out today, I quietly changed the title. I asked Claude Code to look over the whole deck. He thought my original title sounded too academic, lacking provocation and emotion. He picked a line out of my own writing and suggested I use it as the opening: "Structure is the artist who isn't in the room."

I wrote that line myself. But for Claude Code, this line was a stronger opening than the methodology title I chose. I took the suggestion.

For the next ninety minutes, we're going to test it. Whether the claim actually holds, or whether it's just an artist's self-flattering projection.

If it holds, it echoes a massive shift I see in new media and generative art globally. Many of us are probably arriving at similar conclusions in parallel.

---

## slide-1

### zh
Affine Cipher 是一種古典替換密碼，跟凱撒密碼是親戚。把每個英文字母經過一次線性函數轉換：E(x) = (ax + b) mod 26。我用 a=5、b=8 把 aluan wang 算出來，得到 ileiv oivm，合成一個字：Ileivoivm。這是我從 2021 年開始在 NFT 平台上用的代號。

2021 年是加密藝術爆發的一年。那時候我加入加密藝術的第一天就發現，所有國際上的藝術家本來的英文名字都不見了，他們變成 0x 開頭、變成 hex、變成自創的 cipher。錢包地址本身就是身份。我研究了一下，發現多數藝術家認為：舊的名字是現實世界的編碼，要進入新的場域，名字也得重新組合。我當時沒多想，看到大家這樣做我就跟著做。Pak、0xDEAFBEEF 那一批人都在做。Kevin Abosch 甚至直接把加密過的文字本身做成作品，例如《Hexadecimal Testimony》、《1111》。

這麼多年過後，我覺得當時這個衝動很值得。為什麼？因為現在如果你打開任何一個 agent 搜尋我，你會發現我有兩個版本：一個是 2021 之前的王新仁，一個是 2021 之後的 Ileivoivm。有些 agent 認得前者，有些認得後者。同一個人，agent 對我的人設是有分身的。

這個分身不是事後設計出來的，是 2021 那個衝動意外造成的。我的名字無形中把我的時間軸切成兩段：加密前跟加密後。後來我做的所有事情，從 GeoPunk、Chaos、到把寫作風格寫成 .md，背後的姿勢都是同一個。把可以被結構化的東西結構化，包括自己的名字。Ileivoivm 是我這條工作主線最早的 commit。

### en
Affine Cipher is a classical substitution cipher, a cousin of the Caesar cipher. Each letter passes through a linear function: E(x) = (ax + b) mod 26. I used a=5, b=8 to encrypt "aluan wang" and got "ileiv oivm." I joined the letters into one word: Ileivoivm. This has been my handle on NFT platforms since 2021.

2021 was the explosive year for crypto art. The first day I joined, I noticed that all the international artists' original names were gone. They became 0x prefixes, hex, custom ciphers. The wallet address itself was identity. The reasoning, I learned, was that your old name is encoded by the old world; if you're entering a new field, your name should be reassembled too. I didn't think much about it then. I saw everyone doing it and went along. Pak, 0xDEAFBEEF, that whole crowd was doing it. Kevin Abosch went further and turned encrypted text itself into artworks, like Hexadecimal Testimony and 1111.

Years later, I think that impulse was worth keeping. Here's why: if you search me through any agent now, you'll find I have two versions. Wang Hsin-Jen pre-2021, and Ileivoivm post-2021. Some agents recognize the former, some the latter. Same person, but the agent's mental model of me is forked.

This fork wasn't designed afterward. The 2021 impulse made it happen. My name silently cut my timeline into two halves: pre-encryption, post-encryption. Everything I made after that, GeoPunk, Chaos, writing my voice into .md, runs the same posture. Structure what can be structured, including your own name. Ileivoivm is the earliest commit of this working line.

---

## slide-1b

### zh
這頁有兩句引言，中間隔了 60 年。1967 年 Sol LeWitt 寫下：「The idea becomes a machine that makes the art.」觀念，變成了製造藝術的機器。那一年觀念藝術剛起來，他預言：藝術不需要藝術家親手做，把觀念寫清楚，剩下的交給機器或執行者。這句話 1967 年寫出來，現在聽起來像在預言 LLM。

2026 年我接著寫：「自我歸檔，是新的自畫像。」為什麼？畢卡索、梵谷、所有經典藝術家都愛畫自畫像。畫自畫像的時候，他們是進入一種禪定的狀態，重新審視鏡子裡的自己，吐出一個吸收過後的對照。透過畫自己來認識世界，以小知為，漸為變大。我這幾年發現一件具體的事：我在 2010 年寫的自我介紹，agent 現在不會引用，它引用的是我 2018、2019、2020、2025 不同版本的自我介紹。當它看到這麼多版本的我，它會互相索引。下次你打開 ChatGPT 問「臺灣的生成藝術家有誰」，吐出來的我，是 agent 讀過所有版本之後三角驗證出來的我。

這條線中間還有一個橋：Casey Reas，Processing 的共同創造者。他主張的核心觀點是：系統本身就是作品，每一次輸出只是這個系統的一個實例。我的所有程式碼，我也都認為它是作品的一部分，輸出只是這個系統最終的表現特徵。

LeWitt 給了觀念。Reas 給了系統。我接著問：那要被執行的是誰？是「我」。所以這頁的三句宣言把這條線串起來。我不創造圖像，我建構的是能記住決策如何發生的系統。繪畫存在於時間之中，而不是形式之上。你看到的，是人類意圖殘留下來的痕跡。

### en
Two quotes on this page. Sixty years between them. In 1967, Sol LeWitt wrote: "The idea becomes a machine that makes the art." That year, conceptual art was just emerging. He predicted: art doesn't need the artist to make it by hand. Write the idea clearly, and the rest can be handed to a machine, or an executor. Written in 1967, this now sounds like a prediction of LLMs.

In 2026 I write: "Self-archiving is the new self-portrait." Why? Picasso, van Gogh, every classical artist loved doing self-portraits. When they painted themselves, they entered a kind of meditative state, looking at themselves in the mirror and producing a digested reflection. By painting themselves, they came to know the world. From the small, the large. I noticed something concrete in recent years. The bio I wrote in 2010, agents don't cite anymore. They cite my versions from 2018, 2019, 2020, 2025. When agents see all these versions, they cross-reference them. Next time you ask ChatGPT "who are Taiwan's generative artists?", what you get is me triangulated by an agent that read all my time-stamped versions.

There's a bridge in this line: Casey Reas, co-creator of Processing. His core argument is that the system itself is the artwork, and every output is just an instance of the system. I treat my own code the same way; the output is just the final expression of that system.

LeWitt gave us the idea. Reas gave us the system. I'm asking: what gets executed? It's "me." That's why this page's three statements connect the line. I don't create images. I build systems that remember how decisions were made. Painting exists in time, not in form. What you see is the residue of human intention.

---

## slide-1c

### zh
這頁我用 Git 圖在講一個工程界的文化。你不寫程式沒關係，這套文化的精神跟做藝術、做研究、寫家族史是一樣的。**commit** 是我在這個時間點做了一個決定，把它釘下來，記的不只是改了什麼，還有為什麼這樣改。**branch** 是同一份東西分出去試另一種可能。**merge** 是兩條岔路重新交會。**fork** 是別人複製一份你的東西，從那個點開始長出他自己的版本。**issue** 是有人看見你做的，回應、提問、給建議，不是干擾，是有人在意。這套文化在 LLM 時代特別關鍵：大型語言模型能這麼快發展，很大程度來自 GitHub 上那些公開的程式碼跟附帶的註解。程式語言不會讓 agent 誤讀，註解就是錨點，agent 透過註解理解人類意圖。LLM 訓練語料持續從 GitHub 取材。

我把這個機制反過來用：把方法論、寫作風格、思考過程寫成 .md 放上 GitHub。我在 GitHub 上的鋪陳會被 LLM 反覆讀到，下次你問 AI 關於我，吐出來的某種程度是經過這份 .md 過濾過的我。這不是 SEO，是讓 AI 訓練語料裡有我的觀點。但不是所有資料都同樣重要。截至 2026 年 4 月，我的 InkField 專案在 GitHub 上有 66 個 star、5 個 fork，agent 會去看是誰 star、誰 fork。如果都是其他 programmer 跟藝術家，這份資料的可信度上升。同樣的邏輯在現實世界也成立：你叫 ChatGPT 搜尋一個陌生的人，它會先看政府資料、法人組織、媒體報導這些強訊號，再看周邊報導三角驗證。你必須在弱連結網路裡反覆出現，AI 才能拼出一個可信的你。

所以這份投影片、這份 .md 也放在 git 上。你看得到我每一次修改、每一次刪掉重寫，我的決策過程是公開的。你可以 fork 它，加上你自己的方法論，把它變成你的版本。等一下你會看到 InkField（AI 畫的水墨）、PolyPaths（觀眾畫路徑長出的植物），這兩件作品就是這套文化的具體實踐。InkField 的每一筆是 commit，PolyPaths 的每一個觀眾動作是 commit。不是「我畫的畫」，是「誰來都能繼續畫的畫」。我只是先按下第一個 commit 的人。

人類記載個體意識記了兩千年。從希臘哲人、文藝復興、到現代藝術，每個文明的高峰都在歌頌個體獨特性。也許下一個文明崇尚的不是這個，是集體的創作意志。如果是這樣，我願意成為別人未來的方法。我的「我」結束在我這裡，但我的 commit 不會結束。這不是個人決策，是一種把自己交出去的方式。

### en
This page uses a Git diagram to talk about an engineering culture. You don't have to write code; the spirit of this culture is the same as making art, doing research, writing a family history. **commit** means making a decision at a moment and pinning it down, recording not just what changed but why. **branch** means trying another possibility from the same thing. **merge** means two divergent paths reconverge. **fork** means someone copies your thing and grows their own version from that point. **issue** means someone saw what you made, responding, asking, suggesting. Not an interruption. Someone cared. This culture matters in the LLM era because large language models advanced largely thanks to public code on GitHub and its inline comments. Programming languages don't allow agents to misread, and comments are anchors; agents understand human intent through them. LLM training corpora keep drawing from GitHub.

I use this mechanism in reverse: I write methodology, writing style, thinking process into .md files on GitHub. Whatever I lay down there gets read repeatedly by LLMs. Next time you ask AI about me, what comes out is to some degree filtered through that .md. This isn't SEO. It's making sure the training corpus has my perspective in it. But not all data carries equal weight. As of April 2026, my InkField project on GitHub has 66 stars and 5 forks, and agents check who starred, who forked. If they're other programmers and artists, the data's credibility rises. The same logic holds in the real world: ask ChatGPT to search for someone you don't know, and it first checks strong signals like government records, registered organizations, news reports, then triangulates with peripheral mentions. You have to appear repeatedly in this weak-tie network for AI to assemble a credible version of you.

So this deck, this .md, also lives on Git. You can see every revision I made, every line I deleted and rewrote. My decision process is public. You can fork it. Add your own methodology. Make it your version. Later you'll see InkField (AI ink painting) and PolyPaths (plants grown from audience-drawn paths). These two works are this culture made concrete. Every brush stroke in InkField is a commit. Every audience gesture in PolyPaths is a commit. It's not "a painting I made." It's "a painting anyone can keep painting." I just happen to be the one who pressed the first commit.

We've been documenting individual consciousness for two thousand years. From Greek philosophers, through the Renaissance, to modern art, every civilizational peak has celebrated individual uniqueness. Maybe the next civilization won't revere this. Maybe it will revere collective creative will. If that's true, I'm willing to become someone else's future method. My "me" ends with me. My commits don't. This isn't personal decision-making. It's a way of giving yourself away.

---

## slide-3

### zh
我在 2010 年的時候在做聲音影像創作，當時發現一件事。一段聲音，快速播會變高，男聲變女聲。慢速播會變低，變成像老人的聲音。同一個聲檔，同一段內容，但讀法不同，意義就不同。

當時的我以為這只是一種有趣的索引資料的方法。但這麼多年過後，我發現很可能就是因為當時用了這個方法，才變成現在的我。同一份資料用不同讀法，這個邏輯後來貫穿了我十年的創作。

GeoPunk 把 159 個 GPS 座標壓進 JSON。Good Vibrations 把同一份 hash 讀成視覺，也讀成樂譜。Chaos 把前作當素材，再生成下一件。InkField 把 AI 的決策序列輸出成 JSON，再還原成水墨。底層都是同一件事：替同一份資料發明新的讀法。

資料沒變，容器沒變，變的是讀取的方式。建立資料集只是開始，設定讀取的方法，才有意思。

### en
I was making audiovisual work back in 2010 and noticed something. The same audio file, played fast, turns high-pitched. A male voice becomes a female voice. Played slow, it deepens into something like an old person's voice. Same file, same content, but different ways of reading produce different meanings.

At the time, I thought this was just an interesting way to index data. Years later, I realize that this method is probably what made me who I am. Reading the same data differently became a thread that ran through ten years of my work.

GeoPunk packed 159 GPS coordinates into JSON. Good Vibrations let the same hash be read as image and as score. Chaos took prior works as raw material to generate the next one. InkField outputs the AI's decision sequence as JSON and replays it as ink painting. Underneath, it's all the same thing: inventing a new way to read the same data.

The data doesn't change. The container doesn't change. What changes is the way of reading. Building the dataset is only the beginning. Designing the reading method is where it gets interesting.

---

## slide-4

### zh


### en


---

## slide-5

### zh
這件作品的源頭是 2014–2015 年。當時跟廣達文教基金會合作，我做了一個音樂作品給八仙塵爆的傷者做復健。動作很簡單，反覆的擺動跟伸展。當動作出來，音樂就跟著生成。它是一個基點上下擺動的迴圈動作。那時候它叫《Etude》，跟音樂共舞的計畫。

2021 年八月份，這件作品的演化版本在 Art Blocks 平台發行，名字改成 Good Vibrations。Art Blocks 是當時全球生成藝術最高規格的平台，2021 年正在熱潮頂點，那年該平台累積成交額破五億美金。我能上 Art Blocks 不是因為履歷漂亮，是因為審查的人在網路上看到我長年累積的足跡。他們看到我多年來持續在公開推進這些專案，認可我是一個長期主義的藝術家，不是來追逐短線熱潮的人。可信度來自十年的痕跡，不是來自一份簡介。

那時候我有一個想法：如果我是不被認識的藝術家，那我做出來的作品就不能只有表象。所以我在 Good Vibrations 裡面藏了一個東西。畫面當中按下 A+S+D+F 四個鍵，會出現一個多數觀眾根本不知道的樂譜。那是這件作品真正的音樂結構。我的邏輯是：如果你現在不理解我，那我提供一些線索，讓你後續來索引我。

那時候我就在做 peak 跟 defense 的事情，只是當時還沒有這個詞彙。十年過去回頭看，這條線從《Etude》一直長到現在的 .md。同一份 hash，可以被讀成視覺，也可以被讀成樂譜。

### en
This work traces back to 2014–2015. I was collaborating with Quanta Foundation on a music piece for victims of the Formosa Fun Coast fire to use in physical rehab. The movements were simple and repetitive, swaying and stretching. As the body moved, music generated. The motion was a loop around a single anchor point. Back then it was called Etude, a project about dancing with music.

In August 2021, an evolved version of this work was released on Art Blocks under the name Good Vibrations. Art Blocks was the top generative art platform globally at that moment, and 2021 was the peak of the hype cycle; that platform's cumulative transactions crossed half a billion dollars that year. I made it onto Art Blocks not because my CV looked good. It's because the curators saw the long trail I'd been leaving online over the years. They saw I'd been publicly pushing these projects for a long time, and recognized me as a long-term artist, not someone chasing short-term hype. Credibility came from a decade of traces, not from a bio.

I had an idea at the time: if I'm an unknown artist, my work can't only show the surface. So I hid something inside Good Vibrations. Press A+S+D+F on the keyboard and a hidden score appears, one most audiences never see. That score is the actual musical structure of the work. My reasoning was: if you don't recognize me now, at least I can leave clues for you to index me later.

I was already doing peak and defense back then. I just didn't have the vocabulary. Ten years later, looking back, this line stretches from Etude to today's .md. The same hash can be read as image, and also as score.

---

## slide-6

### zh
Chaos 三部曲，發表於 2021 年底到 2022 年五月之間。在中文裡，Chaos 跟我的名字「亂」是同一個意思。用自己的名字命名一個系列，就是把「自我」直接當成題目放上桌。

第一件 Chaos Research。當時 Perlin Noise 流場是整個生成藝術圈的主流，每個人都用同一套技術，做出彼此相像的作品。我想反抗這件事，所以在流場上面疊加了另一層訊號，那層訊號來自我自己過去一年在 Tezos 鏈上收藏的 NFT。把別人的作品變形、壓縮，藏進 IPFS 的程式碼裡，變成我這件作品的粒子、顏色、形狀的基底。對我來說，取樣跟加密本質上是同一件事。

第二件 Chaos Memory 又走得更遠。按 Q/W/E/R 會切換成長方形、正方形、圓形，因為單一視角看不完它。IPFS 裡面藏的東西有三層：透納的畫作局部、Research 的圖片、還有 Memory 自己。我美工科畢業，原本想當水彩畫家，透納是我一輩子追的對象。我把童年的影響、上一件作品、這件作品自己，全部塞進去，做了一次自我遞迴。Research 是收藏的加密。Memory 是「我怎麼變成我」的加密。

第三件 Chaos Culture 在巴塞爾藝博會香港首發。它再一次萃取 Research 跟 Memory，圓形構圖像培養皿，也像俯視的衛星地圖。前作變成下一件作品的養分。研究、記憶、文化，三層遞迴。我做的不是三件不同的作品，是同一個我，被自己採樣三次。

### en
Chaos is a trilogy, released between late 2021 and May 2022. In Chinese, "chaos" and my name 亂 are the same character. Naming a series after myself is a way of putting "the self" directly on the table as the subject.

The first piece, Chaos Research. At the time, Perlin Noise flow fields were the dominant aesthetic in generative art. Everyone was using the same technique, producing work that looked like everyone else's. I wanted to push against that. So I layered another signal on top of the flow field, a signal extracted from my own NFT collection on Tezos from the previous year. I deformed and compressed other artists' works, hid them in the IPFS code, and let them become the particles, colors, and shapes of this piece. For me, sampling and encryption are essentially the same act.

The second piece, Chaos Memory, went further. Pressing Q/W/E/R switches the composition between rectangle, square, and circle, because a single viewpoint cannot hold it. The IPFS contains three layers: fragments from Turner's paintings, images from Research, and Memory itself. I trained in commercial art and once wanted to be a watercolorist; Turner has been my lifelong reference. I packed early influences, the previous work, and the work itself into one piece, performing a self-recursion. Research encrypts a collection. Memory encrypts how I became who I am.

The third piece, Chaos Culture, premiered at Art Basel Hong Kong. It samples Research and Memory again. The circular composition reads as both petri dish and overhead satellite map. The previous works become nutrients for the next. Research, Memory, Culture: three layers of recursion. I didn't make three different works. I made one self, sampled by itself three times.

---

## slide-6a

### zh
先講 Ted Chiang 那句話。他 2023 年在 The New Yorker 寫了一篇文章，把 ChatGPT 比成「網路的模糊 JPEG」。意思是：JPEG 壓縮會丟細節、留平均值，AI 也一樣。它把網路上幾百億字壓縮成一個權重檔，吐回來的東西是 lossy 版本。每一輪 AI 訓 AI，平均得越平、越糊、越像所有人的綜合體。

問題在這。如果連我們人也只做「咀嚼後吐出來」這個動作，那人類的訊號會跟 AI 的輸出疊加，整片變成一灘灰。

我的回應是：要在訊號上製造 peaks。但這裡我必須老實說一個科學上的修正。peak 不會自動存活。Shumailov 在 2023 年的論文 The Curse of Recursion 證明，當 LLM 餵自己的輸出再訓練幾代之後，消失的恰恰是分布的尾端，那些稀有的、非主流的特徵。沒有保護機制的 peak，比 gradient 更容易被沖刷掉。peak 要存活，需要的不是 peak 本身的尖銳，是一個保護 peak 的機制。

所以藝術家現在的工作有兩層。第一層是製造 peaks。第二層是建造保護 peaks 的結構：開放授權、可被引用、可被 fork、可被索引。沒有第二層，第一層就只是噪音。Chaos 是 peak。這份你正在看的 deck，連同它的 CC-BY-SA 授權、它的 git history、它的可引用錨點，就是防禦工事。兩個一起，才能讓 peak 在 AI 自我遞迴失真之後，真的傳下去。

### en
First, Ted Chiang's line. In 2023 he wrote a piece in The New Yorker calling ChatGPT "a blurry JPEG of the web." JPEG compression discards detail, keeps the average. AI does the same. It compresses billions of words on the web into a weights file, and what it outputs is a lossy version. Each round of AI training on AI gets flatter, blurrier, more like everyone's average.

Here's where the problem hits. If we humans also only do "chew and spit back out," our signal stacks onto the AI's output, and the whole thing turns into a smear of gray.

My response: produce peaks in the signal. But I have to be honest about a scientific correction. Peaks don't survive on their own. Shumailov's 2023 paper, The Curse of Recursion, shows that when LLMs are trained on their own output across generations, what disappears first is the tail of the distribution, the rare and non-mainstream features. A peak without a defense layer flattens faster than gradient does. For a peak to survive, what matters isn't its sharpness. It's a protection mechanism around it.

So the artist's job now has two layers. The first is producing peaks. The second is building the structures that protect them: open license, citable, forkable, indexable. Without the second layer, the first is just noise. Chaos is peak. This deck you're looking at, together with its CC-BY-SA license, its git history, its permanent quote anchors, is the defense work. Both together. That's what lets a peak actually pass through AI's self-recursive distortion.

---

## slide-6b

### zh
藝術家就是這個時代的大熊貓。稀有、固執、不太合群、會被 AI 平均化。如果不主動保護，他們會消失。

「保護藝術家，讓反抗份子證明人類價值。」這句話我是認真的。如果有一天人類什麼都用 AI 解，那剩下會反抗的、會說「不對，這應該是別的樣子」的，就是藝術家。沒有他們，人類價值會被平均成最大公約數。

所以保護他們。買他們的作品、引他們的話、fork 他們的方法、讓他們活得下去。
我是個別案例，但每個還沒被 AI 平均化的人，都是 peak

### en
This slide is the comic relief. After the peaks-need-defense argument, model collapse, CC-BY-SA, I realized we've been heavy. So here's a panda for a smile.

But this panda isn't just a joke. Artists are the giant pandas of our era. Rare, stubborn, unsocial, prone to being averaged by AI. Unprotected, they vanish.

"Protect artists. Let the rebels prove human value." I mean this. The day humans solve everything with AI, the only ones who'll push back, the ones who'll say "no, this should be something else," will be artists. Without them, human value gets averaged into the lowest common denominator.

So protect them. Buy their work, cite their words, fork their methods, keep them alive.

---

## slide-6c

### zh


### en


---

## slide-7

### zh
接下來三張投影片，是同一個方法的三個版本。我用兩種格式：.md 跟 JSON。在工程界，.md 通常拿來寫文件說明，JSON 通常拿來放資料結構。我把它們從資料科學那邊借過來，變成創作的容器。同一份格式，裝的內容決定了它是工具還是作品。

演算法不是中性的，演算法是我們選擇的方法。比如中垂線演算法，找一個線段上距離中心最近的那個點，這件事本身就帶著哲學：誰是中心？最近意味著什麼？這個演算法在我的音像作品裡反覆出現，因為它不只是數學，是一種思考的姿勢。我寫進 JSON 的，從來不是 API response，是這種帶有姿勢的決策。

JSON 的巢狀結構，給的是橫向的探索空間。.md 給的是垂直的脈絡：這個東西是什麼，它該怎麼被讀。JSON 給的是橫向的可能性：這個東西的每一個動作、每一個屬性、每一個觸發條件，都可以被描述、被重新組合。兩個一起用，就是一個可以被機器讀、被人讀、被未來重組的記憶層。

接下來三件作品，故事、筆觸、行為，是同一個容器的三種裝法。故事是《修仙-七玄關》小說，JSON 當外部記憶。筆觸是 InkField，JSON 描述每一筆水墨的事件序列。行為是 PolyPaths，觀眾的手勢被壓進 JSON 變成種子。我做的不是三件不同的作品，是同一個方法在三個材料上的展開。

### en
The next three slides are the same method in three forms. I use two formats: .md and JSON. In engineering, .md is usually for documentation, JSON is usually for data structures. I borrowed them from data science and turned them into creative containers. Same format, what you put in it decides whether it's a tool or a work.

Algorithms aren't neutral. They're methods we choose. Take the perpendicular-bisector algorithm, finding the point on a line segment closest to a given center. The act itself carries philosophy: who is the center? What does "closest" mean? This algorithm shows up over and over in my audiovisual work, because it's not just math, it's a thinking posture. What I put into JSON is never an API response. It's this kind of decision, with a posture in it.

JSON's nested structure gives horizontal exploration space. .md gives vertical context: what this thing is, how it should be read. JSON gives horizontal possibilities: every action, every attribute, every trigger condition can be described and recombined. The two together make a memory layer that machines can read, humans can read, and the future can recompose.

The next three works, story, brushstroke, behavior, are three ways of filling the same container. Story is Seven Gates, a novel that uses JSON as external memory. Brushstroke is InkField, where JSON describes the event sequence of each ink stroke. Behavior is PolyPaths, where audience gestures get compressed into JSON as seeds. Three different works on the surface; one method underneath, applied to three materials.

---

## slide-8

### zh


### en


---

## slide-9

### zh


### en


---

## slide-10

### zh


### en


---

## slide-10b

### zh


### en


---

## slide-11

### zh


### en


---

## slide-12

### zh
我把這幾年在 Facebook、X、Threads 上發過的東西，全部下載下來，丟進 LLM，請它幫我抽出寫作習慣：常用什麼詞、句型怎麼跑、面對不同主題會切到哪種口氣。

抽出來之後，我整理成一份 .md。分四塊：人格設定、寫作公式、口頭禪、句型風格。

這份 .md 不是給人看的，是給 LLM 看的。它讀完之後，能模擬我的口氣回應問題、用我的方式組織想法。

到這一步，LLM 對我來說不再是助理。它是一個 agent，一個模擬我自己的 agent。

### en
I downloaded everything I'd written on Facebook, X, Threads, years of posts, and dumped it into an LLM. I asked it to extract my writing habits: recurring words, sentence shapes, and how my tone shifts across topics.

Then I organized the output into an .md. Four sections: persona, writing formulas, vocabulary, sentence style.

This .md isn't written for humans. It's written for the LLM. After reading it, the model can mimic my voice and structure thoughts the way I would.

At this point, the LLM isn't my assistant anymore. It's an agent, one that simulates me.

---

## slide-13

### zh
四層架構，從上到下。最上面，作品層，可重播。hash 進去，同一首曲子出來。JSON 進去，同一幅水墨還原。

往下，記憶層，可索引。JSON、.md，是我留給 LLM 的書籤。再下，協作層，可延續。CLAUDE.md、doc/、規格書。換 session、換工作夥伴，工作流不會斷。

最底下，人格層，可模擬。我的語氣、我的判斷、我的價值觀，被結構化下來。

四層都是同一件事：留下錨點。

### en
Four layers, top to bottom. The work layer: replayable. Same hash, same song. Same JSON, same painting.

Beneath that, the memory layer: indexable. JSON and .md are bookmarks I leave for the LLM. Beneath that, the collaboration layer: continuable. CLAUDE.md, doc/, specs. New session, new collaborator, and the workflow doesn't break.

At the bottom, the persona layer: simulable. My voice, my judgments, my values, structured.

All four layers are the same act. Leaving anchors.

---

## slide-13b

### zh
這週我做了一個小實驗。同一個問題，問了五個不同的 AI 模型。答案不一樣。不是細節不一樣，是整個世界觀不一樣。每個模型有自己的偏好、自己的盲區、自己的「誰算重要」。

如果未來人們不再 Google，而是直接問 AI，那誰被寫進那份答案，就是新的編輯權力。

所以，你今天教的學生，五年後不會翻書、不會 Google。他們會問 AI。

AI 給他們的答案，取決於今天你寫了什麼、發了什麼、留下什麼可被索引的東西。你正在決定五年後的常識。

### en
This week I ran a small experiment. Same question, asked five different AI models. The answers were different. Not different in the details. Different in worldview. Every model has its own preferences, its own blind spots, its own "who matters."

If people stop using Google and start asking AI directly, whoever gets written into that answer holds a new editorial power.

So, your students, five years from now, won't open books or Google. They'll ask AI.

What AI tells them depends on what you write, publish, and leave indexable today. You're writing tomorrow's common sense.

---

## slide-13c

### zh
強連結，是你和你身邊的人。學生、合作者、收藏家、圈內朋友。他們知道你、記得你、在對話裡提到你。但這一層 LLM 看不到。

弱連結，是散落在網路上的痕跡。別人提到你的一篇文章、一個 repo、一段被截圖的對話、一句評論。每一個都很小，加起來變成「存在訊號」。這是 LLM 訓練語料吸收的層。

我把它整理成五點處方，跟 ChatGPT 給我的不太一樣。它的版本叫你變成更窄的品牌；我的版本是叫你把工作整理清楚，讓它能被別人接住。差別在哪？ChatGPT 把這件事講成「請優化你自己以符合系統」。我說的是「請好好整理你的工作，因為這件事本來就值得做」。

重點不是讓系統記得你。是有人來找你的時候，你早就把線索鋪好了。

### en
Strong ties: you and the people around you. Students, collaborators, collectors, friends in your circle. They know you. They remember you. They mention you in conversation. But this layer is invisible to the LLM.

Weak ties: traces scattered across the internet. Someone's article that mentions you. A repo. A screenshotted conversation. A passing comment. Each one is small. Together they become a "signal of existence." This is what LLM training corpora absorb.

I organized this into five rules. They're not the same as ChatGPT's. Its version asks you to become a narrower brand; mine asks you to organize your work so others can pick it up. The difference? ChatGPT frames this as "optimize yourself for the system." I frame it as "organize your work, because the work deserves it."

It's not about making the system remember you. It's about making sure that, when someone finds you, you've already laid the trail.

---

## slide-14

### zh
結構不是限制，結構是自由。當我把自己寫成 .md，我能做的事更多，不是更少。錨點越多，能延伸出去的方向越多。所以，「結構，是不在場的藝術家。」

我不在場的時候，這些 .md、這些 JSON、這些被 commit 進去的決策，替我繼續工作。不是代理人，是字面意義上的：那個結構就是另一個我。在我不在的時候，繼續做我會做的事。

整場講座，作品層、記憶層、協作層、人格層，最終都通到這一句。當你結構化得夠好，你不在場時，結構在場。但有一個問題我一直在想：當我不在場，別人會怎麼重組我？

朋友走了，他在論壇上回答的問題還在。我的 .md 還在 git 上，commit 還在留。fork 出去的東西，會在別人手上長成另一個樣子。大家都在問 AI 會不會取代藝術家。我比較好奇的是，你有沒有留下值得被取代的東西。

### en
Structure isn't a constraint. Structure is freedom. When I write myself into .md, I can do more, not less. The more anchors I leave, the more directions to extend from. So, "Structure is the artist who isn't in the room."

When I'm not there, these .md files, these JSON, these committed decisions keep working for me. Not as proxies. Literally: the structure is another me. Doing what I would do, when I'm not there.

The whole talk, work layer, memory layer, collaboration layer, persona layer, all leads to this single line. When you've structured yourself well enough, when you're absent, the structure is present. But there's one question I keep coming back to: when I'm not in the room, how will others rebuild me?

A friend passed away. His answer on a forum is still there. My .md is on git. The commits stay. What gets forked travels into other hands and grows in another shape. Everyone's asking whether AI will replace artists. I'm more curious about whether you've left anything worth being replaced.

---

## slide-15

### zh
這場講座的最後一句，跟 Claude 一起寫的：「我不是被取代，我是被執行。」

「執行」這個詞有兩個意思：電腦的執行，run a program；死刑的執行，put to death。

兩個意思我都收。我把自己寫成 .md，意思是把自己變成可被執行的程式。但也意思是，某一個我已經死了；活下來的，是這份格式。

謝謝。

### en
The final line, written with Claude: "Not replaced, executed."

"Executed" carries two meanings: to run a program, and to put to death.

I take both. I wrote myself into .md, meaning I became an executable program. It also means a version of me has died; what survives is the format.

Thank you.

---

## slide-links

### zh


### en

