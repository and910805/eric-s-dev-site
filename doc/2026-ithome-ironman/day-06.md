# Day 6 - 同一個 CVE 一堆網站，到底該看哪一個？

> 系列：一個漏洞的公開旅程：從 CVE 編號到風險判讀
>
> 本週主題：CVE 與 CNA 基礎

## 前言

> 昨天 Day 5 最後才說要去買點乾糧，今天先不管乾糧到底有沒有買到，繼續回來看 CVE。
>
> 原本以為把 CVE JSON 拆完後，今天應該會輕鬆一點。結果隨便拿一組 CVE ID 丟進搜尋引擎，瀏覽器分頁馬上又開了一整排。
>
> 好，看來今天也沒有比較輕鬆。

搜尋一組 CVE ID 時，通常不會只看到一個網站。

CVE.org、NVD、廠商公告、CISA、資安新聞和各種商業情資平台，可能全部一起出現。查著查著，還會一路跑去看 FIRST、EPSS 或 GitHub 上的修補 commit。

每個頁面看起來都很專業，問題是內容不一定完全一樣。

這邊寫 CVSS 8.1，那邊寫 9.8；廠商說只有某些版本受影響，另一個網站列出的版本範圍卻又不太一樣。

看著看著，腦袋很容易冒出一句：

> 所以到底該相信誰？

其實這個問題有點像走進五金行，指著架上的榔頭、螺絲起子和扳手問老闆：

> 哪一個才是正確的工具？

老闆大概也只能先反問：

> 你到底想修什麼？

查漏洞資料也是一樣。

不是這些網站正在搶著回答同一個問題，而是它們原本負責的事情就不一樣。

先用最簡單的方式整理：

| 想知道什麼 | 優先去哪裡看 |
| --- | --- |
| 這組 CVE ID 是誰發布的、目前是什麼狀態 | CVE.org |
| CVSS、CWE、CPE 等分析資料 | NVD |
| 是否已知遭到實際利用 | CISA KEV |
| CVSS 規格與 EPSS 資料 | FIRST |
| 哪些版本受影響、該升級到哪一版 | Vendor Advisory |

所以今天不是要選出「全世界最正確的漏洞網站」，而是要弄清楚：每個來源擅長回答什麼問題。

![漏洞資訊來源分工：CVE/MITRE、NIST/NVD、CISA/KEV、FIRST 與 Vendor Advisory](https://eric-s-dev-site.kuanlin.pro/blog-assets/ithome-2026/day-06-source-map.png)

## CVE.org：先確認我們在講哪一個洞

前幾天已經提過，CVE Program 最重要的工作，是提供共同的漏洞識別方式。

所以拿到一組 CVE ID 後，可以先到 CVE.org 確認：

- 這組 ID 是否存在？
- 目前是 `RESERVED`、`PUBLISHED` 還是 `REJECTED`？
- 由哪個 CNA 負責？
- CNA 提供了哪些漏洞描述、產品、版本和 references？

可以把 CVE.org 想成確認漏洞身分的地方。

它先幫你確定：

> 對，我們現在講的就是這一個洞。

不過，確認身分不代表所有問題都已經有答案。

CVE Record 不一定會有 CVSS，也不一定會附上完整的修補方式或 PoC。有些資料可能要往 NVD、廠商公告或其他來源繼續找。

### 那 MITRE 又在哪裡？

MITRE 目前在 CVE Program 裡負責 Secretariat、MITRE Top-Level Root，以及 CNA of Last Resort 等工作，也協助維護 CVE Program 的基礎服務。

但這不代表每一筆 CVE 都是 MITRE 發現、驗證、撰寫和評分的。

很多 CVE Record 實際上是由產品廠商、研究組織或協調單位等 CNA 發布。

這些角色 Day 3 已經拆過，今天只要記得一件事：

> 看到資料出現在 CVE.org，不代表每一個字都是 MITRE 寫的。

真正想知道資料是誰提供的，還是要看 CNA、assigner 和 `providerMetadata`。

簡單說，CVE.org 適合拿來確認「這是哪一個洞」；但今晚到底該升級哪一版，通常還要繼續往下查。

## NVD：幫 CVE 加上更多分析資料

NVD 是 National Vulnerability Database，由美國 NIST 維運。

Published CVE 通常會進入 NVD，但不代表每一筆都已經完成分析。

NVD 會依目前的處理範圍與優先順序，利用 CVE Record、公開 references 和其他公開資料進行 enrichment，可能補上：

- CVSS 評分與向量
- CWE 弱點分類
- CPE 產品與平台對應
- Reference tags
- 其他方便搜尋與分析的資料

如果說 CVE.org 先幫漏洞建立基本資料，NVD 就比較像拿到這筆資料後，再幫它分類、貼標籤和補充分析。

這些資料很適合拿來做搜尋、資產比對和自動化處理。

不過，打開 NVD 時可能會遇到幾種情況：

- CVE Record 已經發布，NVD 還沒完成 enrichment。
- CNA 和 NVD 都有 CVSS，但分數不一樣。
- NVD 的 CPE 沒有完整對應所有產品版本。
- 廠商公告已經更新，NVD 還沒反映最新內容。
- 這筆 CVE 暫時沒有排入 NVD 的 enrichment。

這些情況不一定代表網站壞掉，也不一定代表其中一方寫錯。

NVD 是根據分析當下能取得的公開資料進行判斷。如果後來廠商補充攻擊條件、修正版本範圍或更新公告，兩邊的內容就可能暫時不同。

所以看到 NVD 分數比較高，也不要立刻宣布：

> 好，NVD 比較嚴重，所以 NVD 一定比較對。

應該先比較評分時間、CVSS vector、受影響版本，以及雙方使用了哪些公開資料。

NVD 很適合拿來分析和串資料，但它不是每一款產品的原廠維修手冊。

## CISA KEV：這些洞真的有人拿來打

CISA 維護一份 Known Exploited Vulnerabilities Catalog，通常簡稱 KEV。

它關心的問題不是：

> 哪個漏洞理論上最嚴重？

而是：

> 哪些漏洞已經有實際遭利用的證據？

KEV 裡通常會看到：

- CVE ID
- 漏洞名稱
- 加入 KEV 的日期
- CISA 列出的 Required Action
- 美國聯邦民用行政部門的處理期限
- 是否與勒索軟體活動有關等補充資訊

這也是 KEV 和 CVSS 最大的差別。

CVSS 描述漏洞在特定條件下的技術嚴重程度；KEV 則告訴我們，這個漏洞已經有符合收錄標準的實際利用證據。

因此，CVSS 9.8 的漏洞不一定會出現在 KEV；分數沒有那麼高的漏洞，如果已經被攻擊者拿來使用，也可能需要優先處理。

可以把 KEV 想成有人真的踩過地雷後，留下來的警告牌。

看到警告牌，當然應該提高處理優先級。

不過反過來要注意：

> 沒有出現在 KEV，不代表保證沒有人利用。

它只代表這筆漏洞目前沒有被收錄在 CISA KEV，不能把「不在清單裡」直接翻譯成「很安全」。

CISA 也建議其他組織把 KEV 納入漏洞管理的優先排序，不只是美國聯邦機關才需要看。

## FIRST：提供尺，不是替每個漏洞量好答案

FIRST 是 Forum of Incident Response and Security Teams。

在漏洞管理裡，最常遇到的兩個 FIRST 項目，就是 CVSS 和 EPSS。

### CVSS：這個洞的技術嚴重程度

CVSS 透過一組 metrics 和 vector，描述漏洞的攻擊條件與可能影響，最後計算出分數和嚴重程度。

但 FIRST 的角色比較像制定尺的規格，而不是拿著尺，替全世界每一筆 CVE 都量出唯一答案。

實際的 CVSS 評分可能來自：

- CNA
- NVD
- 產品廠商
- 其他分析單位

因此，同一組 CVE ID 看到不同 CVSS 分數，是有可能發生的。

這時候應該回到 FIRST 的規格，檢查雙方對 Attack Vector、Privileges Required、User Interaction 等 metric 的判斷哪裡不同。

只拿 8.1 和 9.8 兩個數字互相比大小，看不出真正的差異。

### EPSS：未來 30 天有多可能被利用

EPSS 是一套資料驅動的預測模型，用來估計一筆已公開 CVE 在未來 30 天內遭到實際利用的機率。

它回答的問題和 CVSS 不一樣：

```text
CVSS：這個漏洞的技術影響有多嚴重？
EPSS：它近期有多可能被利用？
KEV：是否已有符合收錄標準的實際利用證據？
```

三個資料放在一起看，通常會比只按照 CVSS 分數由高排到低，更接近實際的修補需求。

不過 EPSS 畢竟是預測，不是預言。

分數低不代表絕對不會被利用；分數高也不代表明天早上一定會被攻擊。它是幫助排序的訊號，不是拿來代替所有判斷的答案。

EPSS 和 CVSS 的差異，第 22、23 天還會再詳細拆開。

## Vendor Advisory：到底該升級哪一版？

前面看了一圈，最後如果問題是：

> 我們家的系統到底有沒有中？

或者：

> 今天晚上到底要升級到哪一版？

通常還是得回到產品廠商或開源專案的官方 advisory。

Vendor advisory 通常最適合回答：

- 哪些產品和版本受影響？
- 哪個版本已經修補？
- 修補程式或 release notes 在哪裡？
- 有沒有 workaround 或 mitigation？
- 是否要開啟特定功能或設定才會受影響？
- 更新過程有沒有其他注意事項？

這些連結可能已經放在 CVE Record 的 references 裡，但實際處理資產時，最好還是把原始公告打開來看。

不要只看到資料庫摘要寫著「Upgrade to a newer version」，就瀟灑地把正式環境升到最新版。

最新版是哪一版？能不能跨版本升級？設定會不會壞掉？服務要不要重開？

這些問題通常不會只靠 CVE ID 自動回答。

當然，Vendor Advisory 也不是永遠不會改。

廠商可能在發布後重新確認版本範圍、補上修補方式，或調整 CVSS。閱讀時還是要注意公告的發布日期和更新時間。

如果使用的是 Linux 發行版重新封裝的套件，也要查看對應發行版的公告，不能只拿上游版本號直接比。

簡單說，CVE.org 幫你確認漏洞身分；真正要動手修時，原廠或專案公告通常才是操作說明書。

## 為什麼同一個 CVE 會有不同分數？

假設今天看到：

```text
CNA：CVSS 8.1
NVD：CVSS 9.8
```

先不要急著認定其中一邊算錯。

可能原因包括：

- 對攻擊者所需權限的判斷不同。
- 對是否需要使用者互動的理解不同。
- 對產品預設設定的掌握程度不同。
- 使用了不同的 CVSS 版本。
- 廠商或 CVE Record 後來更新，其中一邊還沒重新評估。

這有點像兩個人都在替同一間房子量大小，一個把陽台算進去，另一個沒有。

最後數字不一樣，不一定是有人連尺都不會拿，而是要先確認雙方怎麼量。

因此，比較 CVSS 時不能只看分數，還要看完整 vector，再回頭確認產品設定、漏洞描述和評分依據。

## 實際查一個 CVE，我會怎麼走？

如果今天拿到一組陌生的 CVE ID，我通常會這樣查：

1. 先到 CVE.org 確認 ID、Record 狀態、CNA 和 references。
2. 打開 Vendor Advisory，確認受影響版本與修補方式。
3. 到 NVD 看 CVSS、CWE、CPE 等 enrichment。
4. 查 CISA KEV，確認是否已有實際利用證據。
5. 查 EPSS，補充近期被利用的機率。
6. 如果不同來源的 CVSS 不一樣，再回 FIRST 規格比較 vector。

這個順序不是硬性規定。

如果現在正在處理攻擊事件，可能會先查 KEV 和廠商的 mitigation；如果只是研究 CVSS 為什麼不同，則會先打開 vector 和 FIRST 規格。

重點不是永遠按照同一條路走，而是每次引用資料時，都知道：

- 這份資料是誰提供的？
- 它想回答什麼問題？
- 最後一次更新是什麼時候？

## Day 6 先記住這張分工表

今天不用把每個組織的全名背起來，只要先記住：

```text
CVE.org：確認這是哪一個漏洞
NVD：補充分析與結構化資料
CISA KEV：確認是否已知遭到實際利用
FIRST：提供 CVSS 規格與 EPSS 資料
Vendor Advisory：確認版本、修補與操作方式
```

所以，看到不同網站的資料不一樣，先不用急著問誰對誰錯。

先問自己：

> 我現在到底想查什麼？

工具本來就各有用途。拿螺絲起子敲釘子不是完全不行，但旁邊明明有榔頭，實在沒必要把自己搞得那麼累。

下一篇會回到漏洞通報的起點：一封只寫著「這裡有漏洞」的信，為什麼通常還不夠讓廠商開始處理？

## 參考資料

- CVE Program Structure: https://www.cve.org/ProgramOrganization/Structure
- MITRE CVE Partner Information: https://www.cve.org/PartnerInformation/ListofPartners/partner/mitre
- NVD CVEs and the NVD Process: https://nvd.nist.gov/general/cve-process
- NVD General Information: https://nvd.nist.gov/general
- CISA Known Exploited Vulnerabilities Catalog: https://www.cisa.gov/known-exploited-vulnerabilities-catalog
- FIRST Standards: https://www.first.org/standards/
- FIRST CVSS: https://www.first.org/cvss/
- FIRST EPSS: https://www.first.org/epss/
