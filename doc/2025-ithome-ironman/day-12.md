昨天我們討論了**資料（Data）**，這是企業最擔心外洩的核心資產。要有效守護資料，下一步必須確認：**員工是用什麼裝置來存取這些資料**。

想像一下：一台多年未更新的 Windows 筆記型電腦連上公司網路，充滿漏洞且未安裝 EDR（端點偵測與回應），攻擊者早已潛伏其中。**即使資料保護再嚴密，也擋不住一台失守的裝置**。

---

## 為什麼需要管理裝置？

- **BYOD 風險**：員工自帶手機或筆電雖然方便，但可能未安裝防毒軟體、未加密或未更新，增加安全隱患。
- **裝置遺失導致外洩**：未啟用全碟加密的筆電遺失，等於直接將資料拱手讓人。
- **漏洞與威脅**：未套用補丁或未部署 EDR，等於在內網開啟一道後門，讓攻擊輕易擴散。

---

## 企業如何落實裝置管理

### MDM（Mobile Device Management，行動/端點裝置管理）

以 **Microsoft Intune** 為例，這是常見的 MDM 工具，與 Microsoft 365 生態高度整合，從註冊到政策執行、應用程式發佈與報表，都能在同一平台完成。

- **註冊與接管**：支援 Windows Autopilot、Android Enterprise 或 Apple ADE；裝置一登入公司帳號，即自動納管。
- **合規性政策**：強制螢幕鎖定、磁碟加密（BitLocker for Windows / FileVault for macOS）、作業系統安全更新，以及安全開機機制。
- **應用程式政策**：自動部署 Teams、Outlook 或公司專屬 App，並封鎖未經授權的應用程式。
- **不合規即阻擋**：如果裝置未通過政策檢查，就無法存取郵件、OneDrive 或 ERP 等系統。

### 條件式存取（Conditional Access）

同時評估「**使用者身分 + 裝置狀態**」，整合 Microsoft Entra ID（前 Azure AD）：

- 合規且受管裝置 → 直接允許存取。
- 陌生或不合規裝置 → 要求 **MFA（多因素驗證）**、僅允許 **Web 限制存取**，或直接封鎖。
- 針對行動裝置，建議啟用 **Require approved client app** + **Require app protection policy**，確保僅使用經核准的應用程式，並保護其中的資料。

### 磁碟加密與資料防護

- **BitLocker（Windows）** 或 **FileVault（macOS）**：確保裝置遺失時，資料無法被讀取。
- **DLP（Data Loss Prevention，資料遺失防護）**：限制 USB 傳輸或第三方雲端上傳；檔案僅允許儲存到 OneDrive for Business 或 SharePoint，防止外洩。

### 週期性合規檢查

- 透過 Intune 的報表與警示，定期檢視補丁、防毒軟體、防火牆及 EDR 狀態。
- 配合條件式存取，**不合規就不給登入**，確保持續合規。

---

## BYOD vs. 公司配發裝置：兩套策略並行

企業裡通常會遇到兩種狀況：有人想用自己手機（BYOD），有人則拿公司發的標準機。這時候要是硬套同一套規則，就像拿制服去逼大家週末也穿出門一樣——不實際。真正的解法是：**靈活＋安全要同時顧**。

> 拿我們公司當例子。最近因為政策，我先上線了「公司機」專案。透過 **Intune + Android Enterprise**，員工的桌面就像吃了定心丸——只有核准的 App，桌面和選單都依角色自動排好，Wi-Fi 自動連上公司網路，其他網路想都別想，外面亂七八糟的 App 更是直接擋掉。
>
> 當然，人生（跟資安）不會永遠只有「公司機」。未來我們還會導入 **BYOD**，針對產線員工、辦公室員工設計不同規則。畢竟，有些人只想快點用手機看 Teams，有些人卻需要完全被控管。不同族群，菜單當然不能一樣。

### A. BYOD（自帶裝置）：重點在「保護公司資料、不干擾個人隱私」

BYOD 適合重視便利的員工，管理原則是只針對公司應用程式與資料，不接管整台裝置。

**Intune 建議做法**：

- **MAM-WE（Mobile Application Management without Enrollment，無需註冊裝置的應用程式保護）** 只管理 Outlook、Teams 或 OneDrive 等公司 App 及其資料。
  禁止公司內容複製到 LINE 或個人雲端。
- 檔案**僅限**儲存到 OneDrive for Business。
- App 內資料加密，並強制 PIN 或生物辨識解鎖。

**條件式存取** 啟用 **Require approved client app** + **Require app protection policy** + **MFA**； 針對高風險登入（如陌生地點或裝置），可限制為 Web 存取或直接封鎖。

**平台微調（選用）**

- **Android**：使用 Work Profile 分隔公私資料，無需重置裝置。
- **iOS/iPadOS**：採用 User Enrollment 輕量註冊，保護隱私。

> **要點**：BYOD 不接管整台手機或筆電，只將**公司資料隔離在 App 的沙盒中**，確保公私分明。

### B. 公司配發裝置：重點在「全面控管」

公司裝置由 IT 完全掌控，目標是從硬體到軟體的全方位管理，適用於高安全需求情境。

**Intune 建議做法**：

- **註冊與開箱即用**
  **Windows Autopilot**：新裝置開箱連網，即自動加入 Entra ID、安裝 App 並套用政策。
- **Android Enterprise Fully Managed / Dedicated**：依情境選擇（Fully Managed 適合全面工作用；Dedicated 適用公用裝置），通常需重置裝置。
- **Apple ADE（Automated Device Enrollment） + Apple Business Manager**：支援無人值守註冊，開箱即納管。

**合規與安全基線**

- 套用 **Security Baselines**：強制 BitLocker/FileVault、密碼/生物辨識、韌體與驅動程式更新。
- 使用 **Update Rings** 控制 Windows 或 macOS 更新節奏，避免影響業務。

**應用程式白名單與周邊控制**

- 設定 Allowlist（允許清單），封鎖高風險 App。
- 管控 **USB/藍牙/可移除儲存**（透過 Intune Endpoint Security 或 Defender for Endpoint Device Control）。

**條件式存取**

- 僅 **Compliant（合規）** 裝置可存取敏感系統。
- 對高敏感應用，再疊加 **MFA**、位置或風險條件。

> **要點**：公司裝置**全面納管**，若違規或不合規，即**直接禁止登入**。

---

> **Zero Trust** 不僅驗證「你是誰」，還要檢查「你用什麼上線」。**BYOD 以 MAM 隔離資料、尊重隱私；公司裝置以 MDM 全面納管、違規即擋**。兩套策略並行，才能平衡員工體驗與企業安全。

---

原文連結：https://ithelp.ithome.com.tw/articles/10376390
