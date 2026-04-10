### 前言

> 講到 ZT（Zero Trust），就會想到大學時期的大專生計劃，我還拿這個當主題，但後來沒過

昨天說到 M365 不只是辦公室套件，今天要聊聊現在最流行的資安策略：**Zero Trust（零信任）**。 一句話總結：**「永不信任，始終驗證」**

![https://ithelp.ithome.com.tw/upload/images/20250827/20171891gAGsA9HlG5.jpg](https://ithelp.ithome.com.tw/upload/images/20250827/20171891gAGsA9HlG5.jpg)

---

### 1. 什麼是 Zero Trust？

- 不是單一產品，而是一套 **安全理念＋實作方法論**。
- 三大原則：
  **明確驗證（Verify explicitly）** → 每次登入都要檢查身份、裝置狀態、地點、異常行為。
- **最低權限存取（Least privilege access）** → 用到什麼權限就給多少，Just-in-time / Just-enough。
- **假設有缺口（Assume breach）** → 預設系統已經被滲透，重點是降低橫向移動的風險。

---

### 2. Zero Trust 的六大支柱

零信任拆成六大面向，組合起來就像一個完整的安全堡壘：

![https://ithelp.ithome.com.tw/upload/images/20250827/20171891fc37LuSgR7.png](https://ithelp.ithome.com.tw/upload/images/20250827/20171891fc37LuSgR7.png)

1. **身分（Identities）** → 誰在存取？帳號驗證、MFA、風險評估。
2. **端點（Endpoints）** → 從哪台裝置來？裝置合規性、Defender for Endpoint 偵測風險。
3. **應用程式（Applications）** → 存取哪些系統？SSO、Shadow IT 管控、條件式存取。
4. **資料（Data）** → 保護公司最重要的資產，Purview 敏感度標籤、DLP、自動加密。
5. **網路（Network）** → 確保傳輸過程安全，微分段、全流量加密、ML 偵測。
6. **基礎設施（Infrastructure）** → 後端伺服器與雲端服務，JIT 權限、異常行為即時阻擋。

---

### 3. 為什麼微軟版本的 Zero Trust 特別？

- 現代工作環境已經不再有「安全邊界」這種東西： 遠端上班、個人筆電、手機、跨組織協作，全部都是風險點。
  > 想想疫情的時候，大部分的人都居家上班 台 X 電，資料就是遠端時候被拍照！
- 微軟的優勢在於：它手上握有 **Entra ID（身份）、Intune + Defender for Endpoint（端點）、M365 全家桶（應用）、Purview（資料）**，幾乎能把六大支柱全部串起來。
- 簡單講：**你的帳號、電腦、郵件、雲端文件，微軟都有工具幫你驗證與控管。**

![https://ithelp.ithome.com.tw/upload/images/20250827/20171891oVDsOSVmud.jpg](https://ithelp.ithome.com.tw/upload/images/20250827/20171891oVDsOSVmud.jpg)

---

### 4. 零信任成熟度模型

零信任不是一蹴可幾，而是有不同的階段。分成 **傳統、進階、最佳** 三種層次，套用到六大支柱來看：

#### 身份（Identity）

- **傳統**：地端 AD，沒有 SSO，風險看不到。
- **進階**：混合身分、MFA、BYOD 也能套 DLP。
- **最佳**：即時風險分析，走向無密碼驗證（FIDO2、WHfB）。

#### 端點（Endpoint）

- **傳統**：電腦要插公司網路才算安全。
- **進階**：Intune、條件式存取檢查合規性。
- **最佳**：Defender for Endpoint 監控風險，異常就封鎖。

#### 應用程式（Applications）

- **傳統**：VPN 或內網存取。
- **進階**：雲端應用 SSO，開始管 Shadow IT。
- **最佳**：最低權限 + 持續驗證。

#### 基礎設施（Infrastructure）

- **傳統**：權限人工分配，VM 分散管理。
- **進階**：工作負載監控、JIT 權限。
- **最佳**：自動化存取分段，異常即時阻擋。

#### 網路（Network）

- **傳統**：內網平坦，流量未加密。
- **進階**：微分段、內網加密。
- **最佳**：全流量加密 + ML 偵測可疑流量。

#### 資料（Data）

- **傳統**：只靠邊界控制，檔案離開公司就失控。
- **進階**：敏感度標籤、DLP。
- **最佳**：AI 自動分類，標籤 + 加密 + 追蹤共享。

**換句話說，從「誰都能進公司大門」 → 「有守衛＋刷卡」 → 「還要人臉辨識＋AI 偵測你是不是在裝乖」的進化。**

---

> 越寫越像業配了…😅 不過微軟的好處就是：工具都在 M365 裡，剩下的就是你該如何去整合。 **「零信任不是不相信同事，而是幫大家多一層保險。」**

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10376085
