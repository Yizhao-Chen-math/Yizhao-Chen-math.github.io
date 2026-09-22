---
layout: post
title: Initiation to Convergence Theory(In Chinese)
date: 2024-06-09 20:49:16
description: A very brief introduction to notions in convergence theory.
tags:
categories: Notes
toc:
  beginning: true
---
## 引入

考虑下面的例子。

在泛函分析里，给了一个Banach空间$$\mathscr{X}$$后，它的对偶空间$$\mathscr{X}^*$$是$$\mathscr{X}$$上全体有界线性函数构成的空间。在$$\mathscr{X}$$上可以定义两种不同的收敛：依范数收敛和弱收敛。这两种不同的收敛方式实际上来源于$$\mathscr{X}$$上的两个不同拓扑$$\tau, \tau'$$，这里$$\tau$$以

$$
\{ B(x, r) \mid x \in \mathscr{X}, r > 0 \}
$$

为拓扑基，其中$$B(x, r)$$是以$$x$$为中心、半径为$$r$$的开球；$$\tau'$$以

$$
\{ f^{-1}(U) \mid f \in \mathscr{X}^*, U\text{为}\mathbb{R}\text{中开集}\}
$$

为子基(subbases)。换言之，点列$$\{x_n\}_{n \geq 1}$$依范数收敛到$$x$$当且仅当其在拓扑空间$$(\mathscr{X}, \tau)$$中收敛到$$x$$；$$\{x_n\}_{n \geq 1}$$弱收敛到$$x$$当且仅当其在拓扑空间$$(\mathscr{X}, \tau')$$中收敛到$$x$$。

不过一般来说，不能轻易地知道一种收敛方式是否来源于集合上的某个拓扑。比如考虑$$\mathbb{R}$$上的全体可测函数构成的空间，可以在上面定义几乎处处收敛、近一致收敛和依测度收敛。这时候不能直接知道这些收敛方式来源于哪个拓扑。

这启发了这样的想法：是否任何一种“极限”都可以由集合上的某个拓扑定义，而“极限”和集合上的拓扑是否又有某种一一对应关系。顺着这个想法往下走，就会得到收敛空间(convergence space)相关的理论。

由于作者对收敛空间的了解有限，本文只是给出收敛空间的定义和基本性质。想要了解更多的话，可以参考S. Dolecki的书籍[1] [2]。R. Frič的一篇文章[3]梳理了序列收敛空间(sequential convergence spaces)的发展历史，并提供了有关收敛空间理论一些调查文章和会议文章。

此外受限于作者的翻译水平，一些术语未必与主流的翻译相同，因此在第一次出现时，会附上对应的英文。

## 序列收敛

为了方便理解，我们从特殊的收敛——序列收敛(sequential convergence)——开始。数学分析（或者高等数学）里的序列极限就是一个例子。

我们先做一步准备工作。集合$$X$$中的一个序列$$\{x_n\}_{n \geq 0}$$看作一个映射$$S: \mathbb{N} \rightarrow X$$，满足$$S(n) = x_n$$.

> **例**：
>
> (1)常值序列$$x_n = x$$就可以看成一个常值映射$$S(n) \equiv x$$.
>
> (2)对一个序列$$\{x_n\}_{n \geq 0}$$可以取子列$$\{x_{n_k}\}_{k \geq 0}$$. 取严格单调递增的映射$$t: k \mapsto n_k$$，那么子列$$\{x_{n_k}\}_{k \geq 0}$$对应于映射$$S \circ t$$，这里$$S(n) = x_n$$.
>
> (3)集合$$X$$上全体序列构成的集合相当于所有从$$\mathbb{N}$$到$$X$$的映射构成的集合。我们将这个集合记为$$X^{\mathbb{N}}$$.

数学分析里面说，收敛的实数列$$\{x_n\}_{n \geq 0}$$存在唯一极限$$\lim_{n \to \infty} x_n$$. 换言之，求极限实际上是给每个收敛的数列指定了的一个实数。所以我们会这样给极限定性：

> 数列极限是一个映射：$$\lim: \{\text{全体收敛数列}\}\rightarrow \mathbb{R}$$.

或者更粗略地说：

> 数列极限是集合$$\mathbb{R}^{\mathbb{N}} = \{\text{全体实数列}\}$$与集合$$\mathbb{R}$$之间的一个关系（关系的定义在本文最后）。

一般的，可以给出序列收敛(sequential convergence)的定义：

> **定义**：集合$$X$$上的一个**序列收敛**是一个$$X^{\mathbb{N}}$$与$$X$$的一个关系$$\xi$$，在$$(S, x) \in \xi$$时，记$$x \in \lim_\xi S$$. 我们要求$$\xi$$满足：
>
> (1)对$$x \in \lim_\xi S$$以及任意的一个子列$$S \circ t$$，有$$x \in \lim_\xi S \circ t$$.
>
> (2)对常值序列$$S(n) \equiv x$$，有$$x \in \lim_\xi S$$.

一个具有序列收敛的集合被叫做一个**序列收敛空间(sequential convergence space)**。如果一个序列收敛还满足：

> 如果$$x, y \in \lim_\xi S$$，那么$$x = y$$.

我们就称这是个**单值序列收敛(single-valued sequential convergence)**。

Dolcher在1960年的时候就考虑了什么样的序列收敛可以通过集合上拓扑结构得到，目前最完整和最令人满意的结果由Koutník在1985年得到。

## 收敛空间

比序列收敛空间更一般的空间是收敛空间。

### 滤子

为了定义收敛空间，我们需要先定义什么是滤子(filter)。

> 定义：集合$$X$$上的一个**滤子**是$$X$$的一个子集族$$\mathcal{F}$$，满足：
> (1)对$$A, B \in \mathcal{F}$$，有$$A \cap B \in \mathcal{F}$$.
> (2)对$$A \in \mathcal{F}$$和$$A' \subseteq X$$，如果$$A \subseteq A'$$，那么$$A' \subseteq \mathcal{F}$$.

不难看出，$$X$$的全体子集$$2^X$$构成一个滤子，我们把它叫做**退化滤子(degenerate filter)**，并将其他滤子叫做**非退化滤子(non-degenerate filter)**。很容易证明，$$2^X$$是唯一一个包含空集的滤子，因此有时在定义滤子时，会要求$$\emptyset \notin \mathcal{F}$$.

很多时候，决定一个滤子性质的是滤子里那些“很小”的集合，这也是我们引入滤子的基(base)的原因之一：

> **定义**：对于一个滤子$$\mathcal{F}$$，称$$\mathcal{B} \subseteq \mathcal{F}$$是$$\mathcal{F}$$的**基**，如果对任意的$$F \in \mathcal{F}$$，存在$$B \in \mathcal{B}$$，使得$$B \subseteq F$$.
> 对于集合族$$\mathcal{B} \subseteq 2^X$$，称其为一个**滤子基(filter base)**，如果对$$\mathcal{B}$$中任意两个集合$$B_1, B_2$$，存在$$B_0 \in \mathcal{B}$$使得$$B_0 \subseteq B_1 \cap B_2$$. 称
>
> $$
> \mathcal{F} = \{ F \in 2^X \mid \exists B \in \mathcal{B}, \text{s.t.} B \subseteq F\}
> $$
>
> 为$$\mathcal{B}$$生成的滤子。

用$$\mathcal{B}_1 \approx \mathcal{B}_2$$表示两个滤子基$$\mathcal{B}_1, \mathcal{B}_2$$生成同一个滤子。注意到$$\mathcal{F}$$本身也是$$\mathcal{F}$$的基，所以$$\mathcal{B}$$是$$\mathcal{F}$$的基可以表示为$$\mathcal{B} \approx \mathcal{F}$$.

我们可以看一些滤子的例子：

> **例**：
> (1)对于$$A \subseteq X$$，$$A$$定义了一个**主滤子(principal filter)**：
>
> $$
> (A)_{\bullet}:=\{B \in 2^X \mid A \subseteq B\}
> $$
>
> 特别的，记$$(x)_{\bullet} := (\{x\})_{\bullet}$$.
>
> (2)对于一个序列$$A: \mathbb{N} \rightarrow X$$，记$$A_k = \{A(n) \mid n \geq k\}$$，称由集合族$$\{A_k\}$$生成的滤子
>
> $$
> \mathcal{S} = \{ B \in 2^X \mid \exists k \in \mathbb{N}, \text{s.t.} A_k \subseteq B\}
> $$
>
> 为$$S$$生成的**序列滤子(sequential filter)**，记作$$\mathcal{S} \approx A$$.
> 在收敛空间的理论中，可以认为序列滤子和序列收敛是对应的，关于序列收敛的讨论可以转化为对序列滤子的讨论。
>
> (3)对于一个拓扑空间$$(X, \tau)$$，可以定义上面的**邻域滤子(neighbourhood filter)**
>
> $$
> \mathcal{N}_\tau (x) := \{N \mid \exists U \in \tau, \text{s.t.} x \in U \subseteq N\}
> $$
>
> 换言之，邻域滤子$$\mathcal{N}_\tau (x)$$是由全体包含点$$x$$的开集生成的滤子。

### 收敛

在定义完滤子之后，我们可以定义集合$$X$$上的收敛(congvergence)：

> **定义**：集合$$X$$上的一个**收敛**是$$\{X上全体非退化滤子\}$$和$$X$$的一个关系$$\xi$$，对一个滤子$$\mathcal{F}$$，记
>
> $$
> \lim{_\xi} \mathcal{F} = \{x \in X \mid (\mathcal{F}, x) \in \xi\}
> $$
>
> 我们要求$$\xi$$满足：
>
> (1)对两个滤子$$\mathcal{F} \subseteq \mathcal{G}$$，有$$\lim{_\xi} \mathcal{F} \subseteq \lim{_\xi} \mathcal{G}$$.
>
> (2)对任意的$$x \in X$$，有$$x \in \lim{_\xi} (x)_{\bullet}$$.

我们称一个具有收敛结构的集合为一个**收敛空间(convergence space)**。下面的例子说明了拓扑空间一定是收敛空间：

> **例**：对于一个拓扑空间$$(X, \tau)$$，之前定义了邻域滤子$$\mathcal{N}_\tau (x)$$，我们定义其上的收敛为：
>
> $$
> x \in \lim{_\tau} \mathcal{F} \iff \mathcal{N}_{\tau}(x) \subseteq \mathcal{F}
> $$
>
> 经过一点简单的论证可以知道，$$X$$上不同的拓扑定义了不同的收敛（因为不同拓扑给出不同的邻域滤子），所以这样的定义方式将拓扑空间和连续映射构成的范畴嵌入到收敛空间和连续映射构成的范畴。

后面我们提到空间上的拓扑时，始终指由拓扑诱导的收敛结构；而提到拓扑空间时，始终指传统意义的拓扑空间。

类似于拓扑的粗细，集合$$X$$上的两个收敛也可以比较粗细：

> **定义**：
> 对于两个收敛$$\xi, \eta$$，称$$\xi$$细于(finer than)$$\eta$$（或$$\eta$$粗于(coarser than)$$\xi$$），如果对任何一个滤子$$\mathcal{F}$$，有
>
> $$
> \lim{_\xi} \mathcal{F} \subseteq \lim{_\eta} \mathcal{F}
> $$
>
> 记作$$\xi \geq \eta$$.

一个集合上的所有收敛在粗细关系下构成一个偏序集，且任意一族收敛$$\Xi = \{\xi_i \mid i \in I\}$$的上确界和下确界分别为：

$$
\bigcap_{\xi \in \Xi}\lim{_\xi} \mathcal{F}, 
\bigcup_{\xi \in \Xi}\lim{_\xi} \mathcal{F}
$$

## 用收敛构造拓扑

由极限诱导的拓扑有一种非常快的定义方式：给定集合$$X$$上的收敛$$\xi$$后，取出所有粗于$$\xi$$的拓扑，将它们中最细的那个记作$$T\xi$$. （如果想要使用这种定义，我们还需要证明$$T\xi$$的存在性和唯一性——这不是件很困难的事。）

为了方便理解，我们使用$$T\xi$$的另一种定义方式。在拓扑空间里，开集满足下面的性质：

> 对于一个集合$$U$$，$$U$$是开集当且仅当
>
> $$
> U \in \mathcal{N}_\tau (x), \forall x \in U
> $$

结合拓扑空间中收敛的定义可以得到：

> 在拓扑空间$$(X,\tau)$$中，$$U \subseteq X$$是开集当且仅当对任意的滤子$$\mathcal{F}$$，如果$$x \in U \cap \lim{_\tau}\mathcal{F}$$，那么$$U \in \mathcal{F}$$.

所以在给定了一个收敛空间$$(X, \xi)$$之后，称$$X$$的子集$$U$$是开集，如果对任意一个滤子$$\mathcal{F}$$，有

$$
U \cap \lim{_\xi} \mathcal{F} \neq \emptyset \Rightarrow U \in \mathcal{F}
$$

将所有开集构成的集合族记作$$\mathcal{O}_\xi$$. 利用滤子的定义可以证明，$$\mathcal{O}_{\xi}$$满足开集的三条公理，因此$$(X, \mathcal{O}_{\xi})$$是一个拓扑空间。我们将这个拓扑空间给出的收敛定义为$$T\xi$$.

利用定义可以证明$$T\xi$$的一些基本性质：

> (1)$$(X, \mathcal{O}_{\xi})$$定义的收敛一定粗于$$\xi$$. 即$$T\xi \leq \xi$$.
>
> (2)如果$$\xi \leq \eta$$，那么$$T\xi \leq T\eta$$.

根据前面列出的开集的性质，对一个拓扑$$\tau$$，有$$T\tau = \tau$$. 所以对任何一个粗于$$\xi$$的拓扑$$\tau$$，有：$$\tau = T\tau \leq T\xi$$. 换言之，$$T\xi$$是所有比$$\xi$$粗的拓扑里最细的。这样我们就知道了$$T\xi$$的两个定义是等价的。

$$T\xi$$的定义还告诉了我们一件事：如果一个收敛$$\xi$$严格细于$$T\xi$$，那么$$\xi$$不可能是一个拓扑。下面是一个例子：

> **例**：设$$\nu$$是$$\mathbb{R}$$上的标准拓扑，我们定义一个新的收敛$$\mathrm{Seq}\ \nu$$：对滤子$$\mathcal{F}$$，$$x \in \lim{_{\mathrm{Seq}\ \nu}} \mathcal{F}$$当且仅当存在一个序列滤子$$\mathcal{S}$$，使得$$x \in \lim{_\nu} \mathcal{S}$$.
>
> 可以验证，$$T\mathrm{Seq}\ \nu$$恰好是$$\nu$$，因为$$\mathbb{R}$$中一个集合是闭的当且仅当它相对于取点列极限是闭的。注意到$$\mathcal{N}_{\nu}(0)$$相对于$$\nu$$的极限是$$x$$，而根据$$\nu$$中收敛点列的定义，任何一个序列滤子一定比$$\mathcal{N}_\tau(0)$$细，所以$$\mathcal{N}_{\tau}(0)$$中不含任何序列滤子，进而$$\mathcal{N}_{\tau}$$在$$\mathrm{Seq}\ \nu$$中的极限是空集。这表明$$\mathrm{Seq}\ \nu$$一定严格细于$$\nu$$，所以$$\mathrm{Seq}\ \nu$$不可能由某个拓扑空间得到。

另一个更有实际意义的例子是，可以证明在大部分时候，函数空间$$C(X, \mathbb{R})$$中的几乎处处收敛和依测度收敛不能由某个拓扑得到。

## 附：映射的定义

一种对映射的定义是：

> 设$$A, B$$是非空的集合，如果按照某种确定的对应关系$$f$$，使对于集合$$A$$中的任意一个元素$$x$$，在集合$$B$$中都有唯一确定的元素$$y$$和它对应，那么就称$$f: A \rightarrow B$$为从集合A到集合B的一个映射。

但本文中采取另一种更加抽象的定义方式。我们先定义两个集合之间的“关系”：

> 集合$$A, B$$之间的**关系**是
>
> $$
> A \times B = \{ (a, b) \mid a \in A, b \in B\}
> $$
>
> 的一个子集$$L$$.

那么映射就可以被定义为

> 从集合$$A$$到集合$$B$$的**映射**是$$A, B$$之间的一个关系$$f$$，满足：
>
> 对任意的$$a \in A$$，如果$$(a, b_1), (a, b_2) \in f$$，那么$$b_1 = b_2$$
>
> 当$$(a, b) \in f$$时，记$$f(a) = b$$.

和上一种定义比起来，这种定义使用的几乎全是集合论的语言，不需要额外解释什么叫做“对应关系”。

---

## 参考文献

[1] Dolecki, S., 2009. An initiation into convergence theory, in: Mynard, F., Pearl, E. (Eds.), Contemporary Mathematics. American Mathematical Society, Providence, Rhode Island, pp. 115–161. https://doi.org/10.1090/conm/486/09509

[2]: Dolecki, S., Mynard, F., 2016. Convergence Foundations of Topology. WORLD SCIENTIFIC. https://doi.org/10.1142/9012

[3] Frič, R., 1997. History of Sequential Convergence Spaces, in: Aull, C.E., Lowen, R. (Eds.), Handbook of the History of General Topology, History of Topology. Springer Netherlands, Dordrecht, pp. 343–355. https://doi.org/10.1007/978-94-017-0468-7_16

[4] Beattie, R., Butzmann, H.-P., 2002. Convergence Structures and Applications to Functional Analysis. Springer Netherlands, Dordrecht. https://doi.org/10.1007/978-94-015-9942-9
