# Day 29 - 從公開審查規則看：哪些報告最容易被要求補件

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

「有安全問題」和「目前資料足以完成 CVE 判定與發布」是兩件事。從 CVE Program 公開的 CNA Rules 與協調指引，可以整理出幾類最常需要來回確認的報告。

這些問題不代表研究沒有價值，只表示公開 Record 需要更多可驗證事實。

## 找不到產品與版本

產品有社群版、企業版、雲端版與多個 fork，報告卻只寫專案簡稱；或測試版本只標成 latest。接收方很難確認責任範圍，也無法搜尋 duplicate。

補件時通常需要完整產品名稱、取得來源、版本／commit、安裝模式與受影響元件。截圖可以輔助，但最好再有可複製的文字資訊。

## 無法從步驟重現安全影響

只有掃描器標題、沒有 request/response；只有 crash 畫面、沒有觸發檔案；或步驟依賴未說明的測試資料。這些都會讓重現停住。

報告應把環境、權限、前置資料、觸發輸入與觀察結果接起來。若漏洞不穩定，也要記錄成功率、時序或資源條件，而不是隱去失敗情況。

## 把預期功能當成漏洞

管理員原本就能執行系統命令、公開目錄原本就允許下載、使用者能修改自己建立的內容，單看結果未必違反安全政策。

要指出跨越了哪個信任邊界：一般帳號取得管理能力、A 租戶讀到 B 租戶資料，或輸入逃離原本限制。Expected 與 Actual 在這裡特別重要。

## Impact 過度延伸

錯誤訊息洩漏被寫成 full database compromise；可造成 crash 被寫成 remote code execution；需要管理員權限的功能被描述為 unauthenticated。

這類報告不是形容詞刪掉就好，還要回到證據。把已證明能力、合理後果與尚未驗證假設分開，反而更容易推進。

## 版本範圍靠猜

只測一版卻宣稱「所有版本」，或看到修補版後就假定所有舊版皆受影響。CVE Record 需要盡量準確的 affected status，但研究者與供應商掌握的資料可能不同。

報告可明確寫「confirmed on 4.2.0」；後續再由維護者檢查引入 commit 與各分支。這比先寫一個很大的範圍再縮回來可靠。

## Duplicate、scope 與聯絡對象

同一 root cause 可能已分配 CVE，也可能報到不負責該產品的 CNA。分配前搜尋既有公告、CVE List 與 issue tracker，可以減少重複；不確定窗口時，可依 CVE Program 的 CNA List 尋找產品 CNA 或適當的協調單位。

## 保持可回覆

很多補件最後卡在聯絡信箱失效、附件過期，或報告者未回覆關鍵問題。送出後保留原始測試環境與檔案，並明確告知公開期限或其他通報窗口。

一份報告是否被接受，不應只用「有沒有 CVE」衡量；但若目標是完成標準化通報，可重現性、scope、獨立修補點與清楚的產品資料確實不可少。

## 參考資料

- CVE CNA Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
- CVE CNA List: https://www.cve.org/PartnerInformation/ListofPartners
- CERT/CC Coordinated Vulnerability Disclosure: https://certcc.github.io/confluence/display/CVD/
