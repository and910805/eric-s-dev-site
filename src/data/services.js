export const serviceSiteUrl = 'https://chiayicity.zeabur.app/'

export const services = [
  {
    title: 'Microsoft 365 顧問',
    command: 'm365ctl consult',
    description:
      '協助企業整理 Microsoft 365 權限、裝置、資料保護與郵件管理，讓雲端環境更好管理也更安全。',
    items: ['Entra ID 身分與權限規劃', 'Intune 裝置與政策管理', 'Purview 資料保護與稽核', 'Exchange 郵件設定與安全性'],
  },
  {
    title: 'ISO 27001 顧問',
    command: 'iso27001 prepare',
    description:
      '協助建立資安管理制度的文件、風險盤點與控制措施，讓導入 ISO 27001 的過程更有方向。',
    items: ['資產與風險盤點', '控制措施落差分析', '文件制度整理', '導入與稽核準備建議'],
  },
  {
    title: '網站服務',
    command: 'webctl deploy',
    description:
      '提供形象網站、作品集、活動頁與小型系統開發，重視可維護性、部署流程與基礎安全設定。',
    items: ['形象網站與 Landing Page', 'React / Vite 前端開發', 'API 與後台功能串接', '部署、網域與基礎維運'],
  },
]
