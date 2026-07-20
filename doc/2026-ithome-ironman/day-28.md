# Day 28 - 案例拆解：把漏洞報告整理成 CVE Record

> 系列：CVE 通報實務 30 天：從 CNA、CVSS 到 CWE/EPSS 的漏洞知識整理
>
> 本週主題：EPSS、風險排序與 CNA 實務

今天用一個虛構案例，走完從報告到公開 Record 的整理過程。案例不對應任何真實產品，重點是資料如何轉換。

## 原始報告

研究者回報 Acme Note Server 4.2.0 的匯入功能接受 ZIP 檔。封裝內的檔名若包含 `../`，解壓縮後可以把檔案寫到匯入目錄之外。功能僅限已登入的一般帳號使用；研究者以無害文字檔證明可以覆寫服務帳號有權寫入的位置。

報告附上測試環境、最小 ZIP、request、解壓前後檔案位置與服務日誌。沒有測試寫入 web root 或啟動目錄，因此尚未證明程式碼執行。

## 先確認這是不是一個可獨立修補的漏洞

維護者重現後，發現解壓函式只檢查封裝檔名是否為絕對路徑，沒有確認正規化後的輸出仍在目的目錄。修補是在寫檔前解析 canonical path，拒絕超出目錄的項目。

這裡已有明確的安全政策違反、受影響元件與獨立修補點。接著要確認是否已有 CVE、產品是否在該 CNA scope，以及公開時程。

## 補齊 affected versions

研究者只測 4.2.0。維護者追查後確認問題從 4.0.0 引入，4.2.1 修正；3.x 使用另一套匯入流程，不受影響。

Record 的 affected data 因而可以表達 4.0.0 起、4.2.1 之前受影響，而不是含糊寫成「4.2.0 and earlier」。版本範圍是調查結果，不是從單一測試版本外推。

## 選 CWE

輸入是封裝內路徑，失效點是解壓目的路徑未限制在指定目錄，符合 `CWE-22`。若要更貼近 Zip Slip 的實作情境，也仍應從官方允許用於 vulnerability mapping 的 weakness 與證據出發，不需自創分類。

## 寫描述

可以整理成：

> Acme Note Server 4.0.0 through 4.2.0 does not restrict the resolved path of entries extracted by its ZIP import function. An authenticated remote user can upload a crafted archive to write files outside the import directory with the privileges of the service account, potentially overwriting application-accessible files.

描述沒有宣稱 RCE，因為報告沒有證明可寫位置一定會被執行；也保留了服務帳號權限這個重要邊界。

## 評估與參考資料分開處理

CVSS 要依匯入功能的網路可達性、一般帳號權限、是否需他人互動及可寫範圍判斷，不能因為看到 Zip Slip 就套固定向量。

References 可放供應商公告、修補 release note 或 commit，以及協調後同意公開的研究報告。若 commit 在公告前會直接揭露 exploit 細節，發布時程需要一起安排。

## 最後做一致性檢查

產品名、版本、描述、CWE、CVSS 與 references 應講同一個故事。若描述寫一般帳號即可利用，CVSS 卻填 PR:N；或修補版本寫 4.2.1，affected data 又把 4.2.1 標成 affected，就需要在發布前修正。

把報告轉成 Record 不是濃縮文字而已，而是把每個主張放進可驗證、可供人與機器使用的欄位。

## 參考資料

- CVE Record Format: https://cveproject.github.io/cve-schema/schema/docs/
- CVE CNA Rules: https://www.cve.org/ResourcesSupport/AllResources/CNARules
- CWE-22: https://cwe.mitre.org/data/definitions/22.html
- CVSS v4.0 Calculator: https://www.first.org/cvss/calculator/4.0
