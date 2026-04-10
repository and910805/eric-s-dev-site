> 原本以為微軟不就 **Word、Excel** 而已？ 公司導入 M365 才發現：微軟的 **Security** 其實很全。 先聲明我沒買它股票（笑），但也必須說：**全＝好複雜(上手難)**。 有講錯再請修正啦~

> 明天會講微軟的**Zero Trust**到底在搞甚麼!

## Microsoft Security 家族速覽

- **Microsoft Entra**：身分與網路存取（Entra ID、MFA、CA、PIM、Identity Protection…）
- **Microsoft Defender**：威脅防護 / XDR（Defender for Endpoint / Office 365 / Identity / Cloud Apps、Defender for Cloud、Defender for IoT、EASM…）
- **Microsoft Intune**：端點與 App 管理（合規、MAM、端點安全原則，與 MDE/CA 聯動）
- **Microsoft Purview**：資料保護與合規（敏感度標籤、DLP、eDiscovery、Audit、Records、Insider Risk）
- **Microsoft Sentinel**： **SIEM + SOAR**
- **Microsoft Priva**：隱私與個資請求（DSR、隱私風險）
- **橫向能力**：**Secure Score / Defender XDR / Security Copilot**（態勢、事件關聯、AI 協助）

## 主要 M365 安全性方案分類

身分識別與存取管理、防護（威脅防禦）、資訊保護、端點安全，以及雲端安全性。

---

### 1) 身分識別與存取管理（門口保全）

- **Microsoft Entra ID（原 Azure AD）**：公司大門的門禁系統。管帳號、群組、應用授權；開啟 **MFA**、**條件式存取（CA）**、**封鎖舊式驗證**（POP/IMAP/SMTP AUTH/Basic），才像真的有保全在看門。
- **Entra ID Protection（風險式原則）**：偵測異常登入（異地／非常用裝置／已知洩漏帳密），必要時自動提高驗證強度或直接阻擋。＊
- **Privileged Identity Management（PIM）**：高權限 **Just-In-Time**（臨時升權＋審批＋逾時收回），讓全域管理員不常駐。＊
- **Passwordless**：Microsoft Authenticator、**FIDO2**、**Windows Hello for Business**，把密碼退居備援。
- **SSPR／Access Reviews**：**自助重設密碼**與**存取複核**，把帳號生命週期與權限健檢自動化。

> 上面這些都是 **Entra ID** 的內容；基礎沒打好，後面所有 M365 安全都進不去。依公司架構（純雲、混合 AD、B2B 協作）設計基線，別忘了 **兩個 break-glass 帳號**（長密碼、監控、從 CA 排除）與**全域封鎖舊式驗證**。 ＊註：Entra ID Protection／PIM 等屬進階功能，通常需要 **P2** 授權。

![https://ithelp.ithome.com.tw/upload/images/20250826/20171891QaAr1hc8Lf.png](https://ithelp.ithome.com.tw/upload/images/20250826/20171891QaAr1hc8Lf.png)

---

### 2) 威脅防護（城牆＋陷阱）

> Q：**Microsoft Defender 跟家用的是一樣的嗎？** A：不一樣。家用的「Microsoft Defender」是**個人/家用防護 App**；下面列的是**企業級 Defender 家族**（for Endpoint/Office 365/Identity/Cloud Apps…），有 **EDR、威脅情報、進階獵威、事件關聯** 等企業功能與管理主控台（security.microsoft.com）。

- **Microsoft Defender（企業）**：一套可串聯的防線，從**端點 → 信箱/協作 → 身分 → 雲端 App** 接力應戰。
- **Exchange Online Protection（EOP）**：信件進租戶的第一道關卡，**內建反垃圾／反惡意** 的基礎過濾。
- **Defender for Office 365（MDO）**：信箱與協作的保鑣；**Safe Links／Safe Attachments**、進階反詐騙，補上釣魚與**零時差（0-day）**。
- **Defender for Endpoint（MDE）**：端點 **NGAV + EDR**，外加 **ASR（攻擊面縮減）**、弱點曝險/修補建議、隔離與自動修復。
- **Defender for Identity（MDI）**：專盯 **On-prem AD** 的側門攻擊（Pass-the-Ticket、橫向移動等），像在走道埋紅外線。
- **Defender for Cloud Apps（CASB）**：雲端應用的交通警察；**Shadow IT** 探勘、OAuth App 風險、即時會話控管（可搭**條件式存取**）。

> 補充：**信箱的「垃圾信/惡意信」基礎防護主要由 EOP 負責；Defender for Office 365 是在 EOP 之上提供進階釣魚與 0-day 防護。**

## ![https://ithelp.ithome.com.tw/upload/images/20250826/20171891WRgLvFHTaZ.png](https://ithelp.ithome.com.tw/upload/images/20250826/20171891WRgLvFHTaZ.png)

---

### 3) 資訊保護（倉庫鎖＋盤點表）

- **Microsoft Purview**（資訊保護 + DLP + 治理 + 合規）：
  **資訊保護（敏感度標籤／加密）**：在文件與郵件貼「內部／機密」等標籤，可強制加密、限制轉寄/外傳，亦可條件式自動套用＊。
- **資料外洩防護（DLP）**：偵測信用卡/個資等敏感資訊並採取動作（警告、封鎖、加密）；涵蓋 Exchange、SharePoint、OneDrive、Teams，亦可延伸到端點＊。
- **治理與合規**：保留/刪除原則與記錄管理（Records）、審核追蹤（Audit）、電子蒐證（eDiscovery）、通訊稽核與**內部風險管理**（Insider Risk），讓「誰、何時、對什麼做了什麼」有跡可循。

＊註：部分進階功能（如自動標籤、Endpoint DLP、eDiscovery Premium、Insider Risk）需較高階授權。

![https://ithelp.ithome.com.tw/upload/images/20250826/201718910zAiHjnhoM.png](https://ithelp.ithome.com.tw/upload/images/20250826/201718910zAiHjnhoM.png)

[微軟 Purview 文件](https://learn.microsoft.com/zh-tw/purview/purview)

---

> 再來幾天稍微講一下各別產品是在做啥吧?

---

原文連結：https://ithelp.ithome.com.tw/articles/10375925
