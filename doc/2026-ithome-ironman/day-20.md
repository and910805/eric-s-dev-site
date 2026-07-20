# Day 20 - Scope 與 C／I／A：影響到底落在哪個系統

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：CVSS 評分核心

漏洞成功後「影響很大」，還不夠拿來完成 CVSS。要先分清楚被攻擊的元件、承受後果的系統，以及機密性、完整性、可用性各自損失多少。

這也是 v3.1 Scope 經常產生歧見，而 v4.0 決定換一種表達方式的原因。

## v3.1 Scope 在看 security authority

v3.1 的 Scope Unchanged 表示受漏洞影響的元件，與受到衝擊的資源由同一個 security authority 管理。Changed 則表示漏洞利用能影響另一個安全授權範圍內的資源。

虛擬機逃逸是常見例子：漏洞位於 guest，後果進入 hypervisor 或 host 管理的範圍。瀏覽器 renderer 突破 sandbox 影響更高權限元件，也可能符合 Changed。

但權限提升不一定等於 Scope Changed。如果同一作業系統的授權機制本來就管理低權限與 root 資源，仍需依元件與 authority 邊界判斷。影響多台主機也不會只因數量增加就自動 Changed。

## v4.0 改成直接描述兩端影響

v4.0 不再使用 Scope，而是分成 Vulnerable System 的 `VC/VI/VA`，以及 Subsequent System 的 `SC/SI/SA`。

評分者可以把漏洞所在系統的影響，與後續系統承受的影響分開。Stored XSS 位於網站應用，但後果可能發生在另一位使用者的瀏覽器安全情境；v4.0 能直接表示兩端，不必先把關係壓成一個 S:C。

Subsequent System 不是「任何間接商業損失」。仍要是漏洞利用造成、且可由技術安全屬性描述的後續系統影響。

## Confidentiality：能看到什麼

C:N 表示沒有機密性損失；Low 通常是部分資訊受到限制性影響；High 則是全面或嚴重的資訊揭露。

評估應以可存取資料的性質與範圍為依據。錯誤訊息洩漏一個安裝路徑，和下載整份客戶資料庫，不應只因都叫 information disclosure 就給一樣的值。

## Integrity：能改變什麼

Integrity 看攻擊者能否修改受保護資料或系統行為。只能更改自己原本就有權修改的內容，不是漏洞帶來的完整性影響；能竄改其他使用者資料、設定或執行流程，才是要評估的部分。

High 通常表示完整性保護遭到重大或全面破壞。不要因 payload 最後可以「執行一個命令」，就略過命令實際執行權限與可控制範圍。

## Availability：壞多久、壞多大

一次 request crash、單一 worker 重啟、整個服務無限期中斷，影響層次不同。若服務有自動復原且只有短暫資源消耗，A:L 可能比 A:H 合理；若攻擊可持續阻斷核心功能或需要人工重建，才更支持 High。

CVSS Base 評估合理最壞結果，但仍要是攻擊者可達成的結果，不是任意延伸的災難故事。

## 一個實用寫法

先寫兩句話：「漏洞位於哪個元件？成功後直接控制或破壞哪些資源？」再分別檢查 C、I、A。v3.1 接著判斷這些影響是否跨越 authority；v4.0 則把它們放到 vulnerable 或 subsequent system。

若無法清楚寫出受影響資源，分數通常也還沒有足夠依據。

## 參考資料

- CVSS v3.1 Specification, Scope and Impact: https://www.first.org/cvss/v3.1/specification-document
- CVSS v3.1 Scope Examples: https://www.first.org/cvss/v3-1/examples
- CVSS v4.0 Specification, Impact Metrics: https://www.first.org/cvss/v4-0/specification-document
