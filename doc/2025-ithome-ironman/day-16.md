> 很多人以為一定要掃 IP、跑掃描器才看得到風險。 其實 **不碰對方資產**，只靠公開資訊與指標，也能把自家對外面貌、第三方風險、外洩跡象抓個七八成。 **完全被動、合法合規**

---

## 一、先決條件：先畫好「邊界地圖」

> 先把會代表公司的外部識別盤點好，後續所有工具都靠這些關聯：

- **網域／子網域**：`example.com`、`*.example.com`
- **公司名稱／品牌別名**、產品名
- **ASN／公網 IP 範圍**（向 ISP 或內部網管確認）
- **雲端帳號標識**：Azure tenant name、AWS Account Alias、GCP Project 名稱
- **官方社群／套件命名空間**：GitHub Org、npm、PyPI、Docker Hub

---

## 二、Scorecard vs ASM：兩個視角，互補使用

- [**Security Scorecard／外部評分**](https://www.ithome.com.tw/review/135314)：第三方「從外看內」的體檢分數，常含 DNS posture、憑證配置、開放服務指標、垃圾郵件名譽、外洩關聯等。
  **用途**：對標同業、第三方風險管理（供應商）。

[**ASM／EASM（Attack Surface Management）**](https://www.checkpoint.com/tw/cyber-hub/cyber-security/what-is-external-attack-surface-management-easm/what-is-attack-surface-management/)：以**資產為中心**的外部盤點（網域、IP、雲資產、SaaS），持續監控「新長出來的東西」。

- **用途**：建立／維護「外部資產清冊」、偵測影子 IT。

---

## 三、「完全被動」的關鍵觀測面

1. **DNS posture與郵件防護**
  - 檢查 `SPF / DKIM / DMARC` 是否存在與策略強度（最終建議走到 `p=reject`；可先以 `quarantine` 過渡）。
  - 檢視 MX／NS 是否在可信供應商；清理外曝測試或過期紀錄。
  - 常見記錄速查：A（IPv4）、AAAA（IPv6）、MX（郵件）、CNAME（別名）、NS（名稱伺服器）、SOA（權威起始）、PTR（反查）、TXT（含 SPF）。
  - 工具示例（僅查公開 DNS，非掃描）：
    `whois example.com`（註冊資訊）
  - `nslookup -type=MX example.com`（查郵件伺服器）
  - `nslookup -type=TXT example.com`（看 SPF／DMARC）
  - `host example.com`、`host 172.217.160.110`（正反向快查）
2. **外網服務指紋（搜尋引擎型）**
  - 用 **Shodan／Censys** 的「搜尋／監控」功能，追蹤與你 **ASN／網域** 相關的服務變動（這是被動索引，不是你主動掃；免費版有查詢限額，建議付費訂閱持續監控）。
  - 檢查是否出現 **不該對外** 的服務（如資料庫、遠端桌面）。
3. **資料外洩跡象（帳密／文件）**
  - **Have I Been Pwned** 企業網域監控（需域名驗證）查歷史外洩。
  - **GitHub／套件倉庫**：確認組織空間未被偽冒；開 **Secret Scanning／Dependabot**（公開庫免費）。
  - **套件命名空間**：監控品牌 typosquatting。
  - **擴大公開線索**（僅觀測、不互動）：搜尋引擎、公司官網與新聞稿、社群（LinkedIn、X〔Twitter〕、Facebook、Instagram）、論壇……可能間接洩露員工結構、供應商、VPN 品牌、帳號命名規則等。
4. **雲端足跡**
  - 依雲供應商公開命名慣例交叉 CT／DNS，盤點 **公開端點／網站**；標記是否有 **列目錄／錯誤洩漏** 痕跡（只看，不碰）。
5. **品牌／網域仿冒**
  - 監控 **近似域（look-alike）** 的註冊與憑證簽發；標記可疑登入頁與釣魚跡象（截圖存證，交法務或反詐窗口）。
6. **第三方依賴／SaaS 曝險**
  - 列出代發郵件、客服、行銷、CDN、分析 SDK 等供應商清單，對照其外部事件公告／評分。
  - 檢查是否出現在已知供應鏈事件波及清單。
7. **開放目錄／備份檔被索引**
  - 以一般搜尋引擎（**僅限自家品牌／網域**）查是否收錄 **備份檔、暫存頁、測試報表** 等線索（不嘗試下載）。
8. **郵件名譽與黑名單**
  - 觀測寄信網域與來源 IP 是否上主要黑名單；名譽差不僅影響投遞，亦提高被濫用風險。

> **If you can’t name it, you can’t protect it.**

---

---

原文連結：https://ithelp.ithome.com.tw/articles/10377098
