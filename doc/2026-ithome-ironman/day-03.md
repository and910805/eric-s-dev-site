# Day 3 - CNA、Root、MITRE 與 NVD：一筆 CVE 到底是誰在處理？

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理  
> 本週主題：CVE 與 CNA 基礎

## 先離題一下：昨天的煙火

昨天 8/5 去看大稻埕煙火。本來看到「大稻埕」三個字就有點怕，感覺是要去人群裡面練閃避技能；還好先看了脆上的建議，改去水庫停車場附近找位置，沒有硬擠到大稻埕現場。

結果真的不錯看。視野很好，人也相對舒服，算是有成功避開一場交通與人流的壓力測試。

![2026 年 8 月 5 日的大稻埕煙火](/blog-assets/ithome-2026/day-03-dadaocheng-fireworks.jpg)

看完煙火回來，本來要繼續整理今天的內容，結果腦中一直卡著一個很常見的問題。

「這個 CVE 是 MITRE 發的嗎？」

「要申請 CVE，是不是去 NVD 填資料？」

這兩句聽起來都滿合理，但其實都差了一點。問題不在於名詞太多，而是大家常常知道名字，卻不知道它們在流程裡各自站哪一站。

今天就不先背組織圖了，直接把 CNA、Root、MITRE 與 NVD 拆開來看。

![CNA、Root、MITRE 與 NVD 在 CVE 生態系中的角色關係](/blog-assets/ithome-2026/day-03-role-map.png)

## CVE 不是 MITRE 一個人處理完的

先講結論：CVE Program 不是由單一組織集中處理全世界所有漏洞。

它比較像一個分工網路。產品廠商、開源專案、安全組織與協調單位，只要被授權並且有對應的處理範圍，就能在自己的 scope 內指派 CVE ID、建立並發布 CVE Record。

所以遇到漏洞時，第一個問題通常不是「這個 CVSS 幾分」，而是：「這個問題該由誰處理？」

## CNA：真正會指派 ID、發布紀錄的人

CNA 是 **CVE Numbering Authority** 的縮寫。簡單說，就是被 CVE Program 授權、可以在特定範圍內處理 CVE 的組織。

但 CNA 不是拿到權限後就什麼漏洞都能接。每個 CNA 都有自己的 **scope**，可能是：

- 自己開發與維護的產品
- 特定開源專案或生態系
- 某個國家、產業或協調範圍
- 自己負責的漏洞揭露或協調服務

例如某個產品供應商是 CNA，最適合處理的通常就是自家產品的漏洞；研究者回報一個完全無關的產品問題，就不該因為「手上有 CVE ID」而直接接下來。

一份通報進來後，CNA 大致會做這些事：確認 scope、判斷是否符合指派規則、避免和其他 CNA 重複處理、保留或指派 CVE ID，再整理描述、受影響產品與版本、references 等資料，最後發布或更新 CVE Record。

所以 CNA 不只是發號碼。真正麻煩的地方通常在前面：這是不是同一個問題？版本範圍有沒有講清楚？有沒有更適合的 CNA？公開後別人讀不讀得懂？

## Root：不是逐筆寫 CVE，而是讓流程有人管

Root 位在 CNA 的管理層，負責的是某個範圍內的招募、訓練與治理。

它不一定要親自代寫每一筆 CVE Record，但要確保下面的 CNA 有規則可依、有問題可問，也有人能處理 scope 重疊、爭議或升級事項。

用比較生活化的說法，CNA 比較像第一線窗口；Root 則是負責把窗口、流程與規則維持住的人。

現行 CVE Program 架構還有 **Top-Level Root（TL-Root）**。TL-Root 直接對 CVE Board 負責，目前有 CISA 與 MITRE 兩個 TL-Root。它們各自管理底下的 Root、CNA 與 CNA of Last Resort（CNA-LR）階層。

這裡的重點不是把組織圖背下來，而是理解一件事：CVE 的處理路徑不是只有「丟給 MITRE」這一條。正常情況下，會先找最靠近產品或範圍的 CNA；真的沒有適合的窗口，才會依規則往 CNA-LR 或上層體系協調。

## MITRE：它同時戴了好幾頂帽子

MITRE 最容易被誤會，因為它不是只有一個身分。

在 CVE Program 裡，MITRE 目前同時擔任 Secretariat 與 TL-Root，也在自己的階層中承擔 CNA-LR 的角色。Secretariat 主要提供行政、後勤與基礎設施支援；TL-Root 則負責管理其下的階層。

所以「MITRE 維護 CVE Program」這句話沒有錯，但不能直接推論成「每一筆 CVE 都是 MITRE 發的」。

實際上，很多 CVE Record 是由各地的 CNA 直接發布。真的想知道某一筆是誰處理的，最可靠的方法不是猜，而是看該 Record 的 CNA container 或 provider metadata。

## NVD：收到 CVE 之後，才開始補資料

NVD 是 **National Vulnerability Database**，由美國 NIST 維護。它的工作不是受理漏洞通報，也不是替人指派 CVE ID。

比較好記的流程是：

```text
CNA 發布 CVE Record → CVE List → NVD 收錄並進行 enrichment
```

NVD 會根據 CVE Record 裡的 references 與公開資訊，補上比較適合弱點管理使用的資料，例如 CVSS v4.0、CVSS v3.1、CWE、CPE applicability statements，以及 reference tags。

因此 CVE 官網和 NVD 的欄位不完全一樣很正常。可能是 CVE Record 已經公開，但 NVD 還在補資料；也可能 CNA 與 NVD 對 CVSS 有不同評估。這不一定代表誰寫錯，而是資料來源與用途不同。

如果是想通報漏洞或申請 CVE ID，直接找 NVD 就是找錯窗口；NVD 是發布之後的下游資料服務。

## 沿著一筆通報走一次

假設研究者發現某個產品的漏洞，通報先送到該產品的 CNA。CNA 會先確認是不是自己的 scope，確認後才保留 ID、整理資料並發布 Record。

如果產品範圍不清楚、兩個 CNA 都可能處理，或流程上有爭議，才需要 Root 協調。真的找不到任何適合的 CNA，再由 CNA-LR 承接。Record 公開到 CVE List 後，NVD 才會從公開資料開始做 enrichment。

整條路線看起來有不少角色，但實務上只要先記住下面這句就夠了：

> 要申請或通報 CVE，先找 scope 合適的 CNA；要看公開後的 NIST 分析，再去 NVD。

## 下次別再找錯窗口

CVE Program 比較像一個分散合作的網路，不是一間把全球漏洞全部收進來處理的總公司。

CNA 在第一線處理指派與發布；Root 維持階層與治理；MITRE 同時扮演多個 Program 角色；NVD 則是在公開後把資料整理得更適合做弱點管理。把這四個角色拆開後，下次看到 CVE、MITRE 與 NVD 同時出現，至少不會再把它們當成同一個入口。

下一篇就沿著這條路繼續走：一個漏洞從被發現開始，到公開成 CVE Record，中間通常會經過哪些階段？

## 參考資料

- CVE Program Structure: https://www.cve.org/ProgramOrganization/Structure
- CVE Partner Roles: https://www.cve.org/PartnerInformation/ListofPartners
- MITRE Partner Information: https://www.cve.org/PartnerInformation/ListofPartners/partner/mitre
- CNA Operational Rules: https://www.cve.org/resourcessupport/allresources/cnarules
- NVD CVEs and the NVD Process: https://nvd.nist.gov/general/cve-process
- NVD General Information: https://nvd.nist.gov/general
