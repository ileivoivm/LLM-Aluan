# Algo Notes · 演算法教學筆記

> 這份檔案是 algo.html 左側筆記彈窗的內容源。
> 每個章節 / 卡片一個 `## algo-X` 區塊，內含 `### zh` 與 `### en` 雙語段落。
>
> Section id 對應：
> - `h2#chapter-N` → `algo-N`（章節封面，如 `chapter-0` → `algo-0`、`chapter-5-seed` → `algo-5-seed`、`coda` → `algo-coda`）
> - `article#ex-N-M` → `algo-N-M`（卡片，如 `ex-0-1` → `algo-0-1`、`ex-1-2` → `algo-1-2`、`ex-5-5-1` → `algo-5-5-1`）
>
> **寫作規則**（同 CLAUDE.md「講者筆記寫作規則」）：
>
> - 禁用破折號 `——`，改用正常標點
> - 不要詩化斷行，每段是邏輯完整的一塊
> - 每張卡片最多 4 段

---

# 章節零 · 亂數不是失控

## algo-0

### zh

在生成系統中，亂數不等於把結果交給運氣。常見做法是先定義不可變的部分，再讓特定參數產生變化。

確定性提供結構，機率提供變體。結構讓每一次生成共享同一套規則，變體則讓每個結果保有差異。

因此，亂數可以被理解為產生可控變化的工具。它負責在已設定的範圍內提供差異，而不是取代規則本身。

### en

In a generative system, randomness does not mean handing the result over to luck. A common approach is to define what stays fixed first, then allow selected parameters to vary.

Determinism provides structure, while probability provides variation. Structure lets every output share the same rule set, and variation keeps each result distinct.

Randomness can therefore be understood as a tool for arranging possibility. It provides variation within a defined range, rather than replacing the rules themselves.

---

*先定義可變範圍，再讓亂數進入系統。*

*Define the range of change first, then let randomness enter the system.*

## algo-0-1

### zh

生成系統通常先決定不可變的部分，例如畫布尺寸、座標系、迴圈次數、邊界處理，以及迴圈內部的規則。這一層是確定性的共同結構。

共同結構讓多次生成使用同一套條件。沒有共同結構，結果之間只是彼此分離的個案；有了共同結構，這些結果才形成一個系列。

因此，生成藝術不只處理隨機性，也處理確定性。隨機變化建立在共同結構上，風格的一致性通常來自不變的規則。

### en

A generative system usually begins by defining what cannot change: canvas size, coordinate system, loop count, boundary handling, and the rules inside the loop. This layer is the deterministic skeleton.

The skeleton lets many outputs share the same field. Without a shared skeleton, the results remain separate cases; with one, they can form a series.

Generative art therefore handles both randomness and determinism. Random variation grows on top of the skeleton, and a sense of consistent style often comes from the structure that does not move.

---

*共同結構建立後，機率開始發揮作用。*

*Once the skeleton is defined, probability begins to operate.*

## algo-0-2

### zh

同一套規則若搭配不同分布，會產生不同結果。共同結構沒有改變，但畫面的密度、節奏和視覺特徵會改變。

均勻分布讓每個位置的機會相同，效果接近平均散布的點群。高斯分布會讓機率往中心集中，外圍機率逐漸降低。長尾分布則保留少數較大、較遠或較罕見的事件。

分布不是事後附加的風格，而是生成結果的基礎形狀。即使程式碼中的 `randomGaussian` 不可見，畫面仍會呈現往中心集中的密度。

### en

The same rule set can produce different results when paired with different distributions. The skeleton stays the same, but the density, rhythm, and visual character of the image change.

A uniform distribution gives each position the same chance, creating an evenly scattered field. A Gaussian distribution concentrates probability toward the center, with probability tapering toward the edges. A long-tailed distribution preserves rare events that are larger, farther away, or less common.

Distribution is not a style applied afterward. It is the underlying shape of the generated result. Even if the line containing `randomGaussian` is not visible, the image can still show center-gathered density.

---

*分布影響視覺特徵。若結果需要重現，還需要另一層機制。*

*Distribution influences visual character. If the result needs to be reproduced, another mechanism is still needed.*

## algo-0-3

### zh

電腦中的亂數通常不是自然意義上的擲骰，而是由偽隨機數產生器，也就是 PRNG，依照 seed 產生數列。同一個 seed 會得到同一串看似不可預測、但可重複生成的數字。

seed 讓生成結果可以重現。圖像、聲音和 metadata 都可以從同一個 seed 產生。即使展示環境或瀏覽器版本改變，只要 seed 與規則仍在，結果就能回到同一個版本。

在 Good Vibrations 中，token hash 扮演 seed 的角色。鏈上的 hash 不變，作品版本也會保持一致。這形成區塊鏈生成藝術常見的結構：規則由作品提供，seed 由鏈上資料提供，每一次 mint 都是同一套規則的可重播版本。

### en

Randomness on a computer is usually not a natural dice roll. It is produced by a pseudorandom number generator, or PRNG, which generates a sequence from a seed. The same seed produces the same seemingly unpredictable but repeatable sequence.

A seed makes generated results reproducible. An image, a sound, and a set of metadata can all come from the same seed. Even if the exhibition environment or browser version changes, the result can return to the same version as long as the seed and rules remain available.

In Good Vibrations, the token hash functions as this seed. If the on-chain hash does not change, the version of the work stays consistent. This forms a common structure in blockchain-based generative art: the work provides the rules, on-chain data provides the seed, and every mint is a replayable version of the same system.

---

*seed 讓隨機結果變成固定版本。下一步是設定哪些結果常見、哪些結果稀有。*

*A seed turns a chance result into a fixed version. The next step is setting which results are common and which are rare.*

## algo-0-4

### zh

Rarity 可以在生成前就寫入機率，而不是在生成後再替結果貼上標籤。這種做法會先定義各種 trait 出現的門檻或權重。

在 Good Vibrations 中，有兩種色盤只有當隨機數通過 0.92 或 0.97 才會出現。多數 token 會得到 Ocean、Sunset、Forest，少數 token 則會得到 Cosmological 或 Monochromical。這是事前設定的機率分配，不是事後評分。

這也改變了選擇方式。當分布先被設定好，不能只挑選偏好的版本，而是需要讓每一個可能被 mint 出來的結果都成立。稀有因此成為一種事先寫入的機率設定。

### en

Rarity can be written into probability before generation, rather than added as a label after the results exist. This approach defines thresholds or weights for each trait in advance.

In Good Vibrations, two palettes only appear when a random value crosses 0.92 or 0.97. Most tokens receive Ocean, Sunset, or Forest, while a smaller number receive Cosmological or Monochromical. This is a probability assignment made beforehand, not a score applied afterward.

This also changes the selection process. Once the distribution is defined, preferred versions cannot simply be selected afterward. Every possible mint must be able to stand on its own. Rarity becomes a probability setting written in advance.

---

*四個基礎概念建立後，接著進入 random、Perlin，以及各種分布的用法。*

*With the four basic concepts in place, the next section moves into tools: random, Perlin, and different distributions.*

---

# 章節一 · 均勻亂數

## algo-1

### zh

章節一使用的主要工具是 `random()`。它的基本概念是讓指定範圍內的每個值有相同機會出現。在視覺生成中，「相同機會」仍可能產生不同的空間效果。

直接抽樣一萬次，畫面會接近均勻散布的點群。若使用 `random(random(N))`，機率會開始偏向某一側。若改成極座標抽樣，點也可能在不知不覺中集中到中心。

「均勻」有不同層次。每個數值機率相同，不等於畫面上每塊面積的點數相同。使用 `sqrt` 可以修正圓形面積造成的偏差，blue noise 可以改善人眼感知到的分布，rejection sampling 則提供另一種篩選樣本的方法。

選擇哪一種均勻，會直接影響作品的空間分布。

### en

Chapter one focuses on a single main tool: `random()`. Its basic idea is that every value inside a given range has the same chance of appearing. In visual generation, however, equal chance can still produce different spatial effects.

Sampling directly ten thousand times creates a field similar to evenly scattered dust. Using `random(random(N))` tilts the probability toward one side. Switching to polar coordinates can also cause points to gather near the center without being immediately obvious.

"Uniform" has multiple meanings. Equal probability per value is not the same as equal point density per area. `sqrt` can correct the area bias in circular sampling, blue noise can improve the perceived distribution, and rejection sampling offers another method for filtering samples.

The chosen form of uniformity directly affects the spatial rhythm of the work.

---

*均勻的差異釐清後，下一章把機率集中到中心。*

*After clarifying the differences within uniformity, the next chapter concentrates probability toward the center.*

---

# 章節二 · 高斯亂數／中心集中

## algo-2

### zh

`x = randomGaussian(50, 10); // 代表亂數多數落在 40–60 附近`

這一行可以拆成兩個部分：50 是中心位置，10 是擴散值。高斯分布會讓機率往中心集中，越接近中心越常出現，越遠離中心越少出現。大部分數值會靠近 50，常見範圍大約落在 40 到 60 附近，但並不是被鎖在這個範圍內，偶爾仍會出現更遠的值。

高斯亂數會讓畫面形成重心。它不像均勻亂數那樣平均分散，而是讓多數元素靠近中心，少數偏離中心的值形成變化。這種分布常用於集中、穩定的畫面。

- 中心不是單一點，而是數值最常回到的區域。
- 尺寸、亮度、位置，都可以受到同一個中心影響。
- 大部分變化集中在中心附近，因此畫面較穩定。
- 少數偏離值保留起伏，避免畫面過於平坦。

遠離中心的值變少，但不會完全消失。高斯分布因此同時保留穩定性與變化。

### en

`x = randomGaussian(50, 10); // most values fall near 40-60`

This line can be read in two parts: 50 is the center position, and 10 is the spread value. A Gaussian distribution concentrates probability toward the center. Values closer to the center appear more often, while values farther from the center appear less often. Most values stay near 50, commonly around 40 to 60, but they are not locked inside that range. Farther values can still appear occasionally.

Gaussian randomness gives an image a center of weight. Unlike uniform randomness, it does not spread elements evenly. Most elements stay near the center, while a smaller number of offset values create variation. This distribution is often used for soft, concentrated images with visual weight.

- The center is not a single point, but the region values return to most often.
- Size, brightness, and position can all be pulled toward the same center.
- Most variation stays near the center, so the image remains relatively stable.
- A small number of offset values preserve movement and prevent the image from becoming flat.

Values farther from the center become less common, but they do not disappear completely. Gaussian distribution therefore keeps both stability and variation.

---

*重心建立之後，下一章加入時間連續性，讓前一刻接到下一刻。*

*After the center of weight is established, the next chapter adds temporal continuity so one moment connects to the next.*

---

# 章節三 · 一維 Perlin Noise／跳動的音量柱

## algo-3

### zh

Perlin noise 讓亂數具有連續性。它不像每次重新抽樣的擲骰，而是從一張連續的噪聲場中取值。因此，前一刻和下一刻會自然銜接，畫面不會每一禎都突然跳動。

- `random()` 類似擲骰，每次呼叫都是新的抽樣，前後沒有關係。
- Perlin 類似讀取固定噪聲場，給同樣的 x 會得到同樣的值。
- 因為數值連續，動畫看起來較平滑，相鄰格子也會彼此相關。
- 疊加不同頻率的 noise，可以同時產生大尺度輪廓與小尺度細節。

在動畫中，Perlin noise 讓每一禎沿著同一個噪聲場慢慢移動，而不是形成彼此無關的格子。雲、火、地形、水紋等自然紋理效果，常來自多個尺度的連續噪聲疊加。

### en

Perlin noise gives randomness continuity. Instead of drawing a new value each time like a dice roll, it samples from a continuous noise field. As a result, one moment connects naturally to the next, and the image does not jump abruptly from frame to frame.

- `random()` is similar to rolling dice. Each call is a fresh sample with no relationship to the previous one.
- Perlin is similar to reading from a fixed map. The same x always returns the same value.
- Because the values are continuous, motion appears smoother, and neighboring cells influence one another.
- Stacking noise at different frequencies can create both large-scale shapes and small-scale details.

In animation, Perlin noise lets each frame move gradually through the same field instead of becoming an unrelated grid. Natural-looking clouds, fire, terrain, and water often come from layering continuous noise at multiple scales.

---

*一維 Perlin 建立時間連續性後，下一節把噪聲展開成二維表面。*

*After 1D Perlin establishes temporal continuity, the next section expands noise into a 2D surface.*

## algo-4

### zh

#### 二維 Perlin Noise：從線到面

二維 Perlin noise 會把連續亂數從一條時間軸展開成一整片表面。

- 一維 noise 可用在音量柱，沿著時間軸慢慢變化。
- 二維 noise 多了一個 y 軸，噪聲可以鋪滿整張畫布。
- 雲、石紋、地形不是每一點獨立跳動，而是鄰近像素彼此連續。
- 改變 scale、seed 和疊加層次，畫面可以呈現不同粗細與方向的紋理。

自然紋理效果常常來自連續性。每個點不需要獨立複雜，只要與鄰近點保持關聯，就能形成連續的視覺質地。

### en

#### 2D Perlin Noise: From Line to Surface

2D Perlin noise expands continuous randomness from a single time axis into a full surface.

- 1D noise is like a volume bar that changes gradually over time.
- 2D noise adds a y-axis, allowing noise to cover the entire canvas.
- Clouds, stone textures, and terrain do not jump independently at every point; neighboring pixels remain continuous.
- Changing scale, seed, and layer count can move the image from soft mist to mineral-like veins.

Natural-looking texture often comes from continuity. Each point does not need to be complex on its own. When nearby points remain related, the image can form an organic surface.

---

*從線到面之後，下一章把不同分布放在同一個畫面比較。*

*After moving from line to surface, the next chapter compares different distributions in the same frame.*

---

# 章節五 · 分布的形狀

## algo-5

### zh

章節五把前面幾章的工具放在同一個畫面比較。均勻、高斯、Perlin 等方法分別看時容易理解，並排比較時可以看出密度與質地的差異。

- 5.1 並排 Gaussian、Exponential、Perlin。中心集中、長尾、連續流動，三種效果可以直接比較。
- 5.2 比較 noise 內部的差異：Perlin、Worley、Curl。同樣被稱為 noise，但質地並不相同。
- 5.3 展開分布家族，從 Uniform 到 Power law 到 Poisson，觀察尾端如何下降。

選擇分布不是選擇最漂亮的數學形式，而是選擇哪一種機率分配最符合預期畫面。中心集中可以形成聚焦效果，長尾可以保留少數極端值，連續流動可以帶來時間連續性。系列的視覺特徵常常來自分布選擇。

### en

Chapter five compares the tools from the previous chapters in the same frame. Uniform, Gaussian, and Perlin are easier to understand separately, but placing them side by side reveals differences in density and texture.

- 5.1 compares Gaussian, Exponential, and Perlin: center concentration, long tail, and continuous flow.
- 5.2 compares different kinds of noise: Perlin, Worley, and Curl. They are all called noise, but their textures differ.
- 5.3 lays out a family of distributions, from Uniform to Power law to Poisson, and observes how their tails fall off.

Choosing a distribution is not about choosing the most elegant mathematical form. It is about choosing the probability assignment that best matches the intended image. Center concentration can create a halo, a long tail can preserve occasional bursts, and continuous flow can introduce a sense of time. The visual character of a series often comes from this distribution choice.

---

*分布提供視覺特徵。下一步是把具體版本固定下來，這需要 seed。*

*Distribution provides visual character. The next step is fixing a specific version, which requires a seed.*

---

# 章節六 · 轉成創作參數

## algo-6

### zh

章節六把分布轉成創作參數。前面幾章討論分布形狀，這裡將它們對應到常見的四個操作軸。選擇分布，也就是選擇某個參數要如何變化。

- 位置（6.1）：平均散開、靠近重心，或沿著場流動。
- 尺寸（6.2）：維持穩定範圍，或拉出長尾，讓少數物件突然變大。
- 顏色（6.3）：在主色附近變化，或用門檻切出少數不同色相。
- 稀缺（6.4）：設定哪些 trait 常見，哪些 trait 只在少數作品中出現。

主要決策不是是否使用 random，而是每個參數各自搭配哪一種分布。位置搭配 Gaussian 會產生聚焦，搭配 Perlin 會產生流動；尺寸搭配 Exponential 會產生少數爆發；顏色使用 weighted threshold，則可以自動分配稀有色。下一章的 Good Vibrations 會把這四個軸接上同一個 seed，使作品可以被重播。

### en

Chapter six translates distributions into creative parameters. The previous chapters discussed the shapes of distributions; this chapter maps them onto four common operational axes. Choosing a distribution means choosing how a parameter should change.

- Position (6.1): spread evenly, gather near a center, or flow along a field.
- Scale (6.2): stay within a stable range, or use a long tail so a few objects suddenly become large.
- Color (6.3): vary around a main hue, or use thresholds to create a small number of different hues.
- Rarity (6.4): define which traits are common and which appear only in a small fraction of works.

The main decision is not whether to use random, but which distribution should support each parameter. Gaussian on position creates focus, while Perlin creates flow. Exponential on scale creates occasional bursts. A weighted threshold on color can assign rare hues automatically. In the next chapter, Good Vibrations connects these four axes to the same seed so the work can be replayed.

---

*四個參數軸接上同一個 seed 後，下一章形成可重播的視覺與聲音系統。*

*Once the four parameter axes connect to the same seed, the next chapter forms a replayable visual and sonic system.*

---

# 章節七 · Good Vibrations：用機率控制圖像與聲音

## algo-7

### zh

#### Good Vibrations：同一組亂數的幾種讀法

Good Vibrations 使用同一個 hash 產生 seed，再由 seed 推導出圖像、聲音與 metadata。

- 圓形旋律物件的位置、顏色、線段和移動，都由同一串亂數推導。
- seed 讓作品可以重現同一個版本。同一個 token 會得到相同的圖像與聲音。
- 稀缺不是後來貼上的標籤，而是先寫好的門檻。有些顏色和狀態只會少數出現。
- 線段交點可以轉成聲音事件，features 則記錄作品特徵。

### en

#### Good Vibrations: Several Readings of the Same Random Sequence

Good Vibrations uses a single hash to generate a seed, then derives image, sound, and metadata from that seed.

- The position, color, line segments, and motion of circular melodic objects all branch out from the same random sequence.
- The seed allows the work to return to the same version. The same token receives the same image and sound.
- Rarity is not a label added afterward. It is defined through thresholds written in advance, so certain colors and states appear only in a small number of works.
- Line intersections can become sound events, while features record the traits of the work.

---

*各章工具整理完成後，可以回到頁首的核心命題。*

*After the tools are organized, the opening statement can be revisited.*

---

# Coda · 機率是材料

## algo-coda

### zh

回到頁首的命題：亂數不是失控。經過 random、Gaussian、Perlin、分布、seed、參數與稀缺的說明後，這句話可以被理解為一套具體的生成方法。

從 random 到 Perlin，從分布到 seed，從四個參數到稀缺，每一層都是設計選擇。選擇哪一種均勻、哪一個中心、哪一條長尾、哪些 trait 要常見，都會影響最終畫面。

機率不是省略決策，而是把決策從「每一筆畫在哪裡」移到「哪些事情被允許發生」。每一筆未必被手動指定，但每一筆能出現的範圍、密度與機率都可以被設計。

因此，機率可以視為生成系統中的材料。只要規則與 seed 保留，同一個版本就能被重播。Good Vibrations 使用的正是這種結構：畫面、聲音與 metadata 都是同一組決策被執行後的結果。

### en

The opening statement can now be revisited: randomness is not loss of control. After discussing random, Gaussian, Perlin, distributions, seeds, parameters, and rarity, the statement becomes a concrete method for generation.

From random to Perlin, from distribution to seed, from the four parameters to rarity, every layer is a design choice. The chosen form of uniformity, center, tail, and trait frequency all affect the final image.

Probability is not a shortcut. It moves the decision from "where each stroke goes" to "what is allowed to happen." Each stroke may not be manually placed, but the range, density, and probability of its appearance can be designed.

Probability can therefore be treated as material in a generative system. As long as the rules and seed remain, the same version can be replayed. Good Vibrations follows this structure: image, sound, and metadata are all results of the same decisions being executed.
