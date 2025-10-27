export const projects = [
  {
    title: 'TaskGo',
    description:
      '多角色任務派工系統（Flask + React + SQLite）。支援工地即時派工、現場回報、拍照附件與權限控管。',
    details:
      '工人、自主管理員、HQ 管理員完整權限流程，含行動裝置相機上傳與 JWT 驗證。',
    tech: ['React', 'Flask', 'SQLite', 'JWT', 'Tailwind'],
    img: '/images/projects/taskgo.png',
    pendingImage: true,
    github: 'https://github.com/and910805/taskgo',
    demo: null,
  },
  {
    title: 'Nessus Dashboard',
    description:
      '把 Nessus/Tenable 掃描結果轉成儀表板 KPI，追蹤修補進度、責任單位與風險趨勢，協助資訊安全控管。',
    details:
      '自動排程匯入 CSV，轉成趨勢圖與 Slack 通知，協助資訊安全團隊掌握弱點。',
    tech: ['Python', 'Streamlit', 'Pandas', 'Security'],
    img: '/images/projects/nessus-dashboard.png',
    pendingImage: true,
    github: 'https://github.com/and910805/nessus_dashboard',
    demo: null,
  },
  {
    title: 'Shipping Photo Manager',
    description:
      '內部出貨照片存證平台。自動整理物流單、照片版本與客製水印，並整合搜尋與下載。',
    details:
      '每日處理 500+ 張出貨圖，串接 ERP 與 Azure Blob 儲存，提供快速查詢與匯出。',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Azure Blob'],
    img: '/images/projects/shipping-photo.png',
    pendingImage: true,
    github: null,
    demo: null,
  },
  {
    title: 'Wedding Site',
    description:
      '客製婚禮互動網站。動態邀請函、即時 RSVP、相簿瀏覽與浪漫視覺動效，桌機與手機皆優化。',
    details:
      '整合 Google Sheet 賓客回覆、Framer Motion 動畫與 PWA 線上/離線瀏覽。',
    tech: ['React', 'Vite', 'Framer Motion', 'Tailwind'],
    img: '/images/projects/wedding-site.png',
    pendingImage: true,
    github: 'https://github.com/and910805/wedding-front',
    demo: 'https://and910805.github.io/wedding-front',
  },
  {
    title: 'Binary Search Game',
    description:
      '將演算法變成遊戲！玩家用二分搜尋猜數字，體驗資料結構思維，並可觀察步驟記錄。',
    details:
      '提供教學模式、難度調整、每一步提示與統計圖表，讓新手理解演算法思維。',
    tech: ['React', 'TypeScript', 'Tailwind'],
    img: '/images/projects/binary-search-game.png',
    pendingImage: true,
    github: 'https://github.com/and910805/binary-search-game',
    demo: 'https://and910805.github.io/binary-search-game',
  },
  {
    title: 'FarmGame',
    description:
      '採用 Phaser 建立的即時小農遊戲，含作物種植、採收、等級養成與音效系統。',
    details:
      '自建道具素材、時間序列生長系統與音樂音效，部署至 GitHub Pages。',
    tech: ['Phaser', 'JavaScript', 'Game Dev'],
    img: '/images/projects/farmgame.png',
    pendingImage: true,
    github: 'https://github.com/and910805/FarmGame',
    demo: 'https://and910805.github.io/FarmGame',
  },
  {
    title: 'AI Quiz Bot',
    description:
      'LINE ChatBot 透過 OpenAI 產生測驗題庫，支援自訂主題、難度與成績統計。',
    details:
      '整合 RDB 儲存題庫與紀錄、推播複習提醒，以及後台題庫檢閱流程。',
    tech: ['Python', 'Flask', 'OpenAI API', 'LINE Messaging'],
    img: '/images/projects/ai-quiz-bot.png',
    pendingImage: true,
    github: null,
    demo: null,
  },
]
