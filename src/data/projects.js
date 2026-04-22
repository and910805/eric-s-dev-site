export const projects = [
  {
    title: 'APT29 ATT&CK Simulation',
    slug: 'apt29-attack-simulation',
    category: 'Red Team / ATT&CK',
    year: '2023',
    description:
      '依照 MITRE ATT&CK 技術鏈整理 APT29 模擬流程，包含 Pupy、PoshC2、WebDAV 與 ELK/Kibana 偵測紀錄。',
    tech: ['MITRE ATT&CK', 'Pupy', 'PoshC2', 'Kibana', 'Red Team'],
    github: 'https://github.com/and910805/APT29',
    demo: null,
  },
  {
    title: 'RAT 2.0 Security Research Demo',
    slug: 'rat-2-security-research',
    category: 'Malware Research',
    year: '2024',
    description:
      'Python RAT 研究展示，聚焦 C2 連線、螢幕擷取、鍵盤監控與防禦視角，用於理解惡意程式行為。',
    tech: ['Python', 'Socket', 'Windows', 'mss', 'pynput'],
    github: 'https://github.com/and910805/Rat2.0',
    demo: null,
  },
  {
    title: 'Nessus Vulnerability Dashboard',
    slug: 'nessus-vulnerability-dashboard',
    category: 'Vulnerability Management',
    year: '2025',
    description:
      '把 Nessus 弱掃結果整理成可視化儀表板，協助追蹤風險等級、修補狀態與資產弱點分布。',
    tech: ['Python', 'Streamlit', 'Plotly', 'SQLite', 'Nessus'],
    github: 'https://github.com/and910805/Nessus-Vulnerability-Dashboard',
    demo: null,
  },
  {
    title: 'CEH LINE Quiz Bot',
    slug: 'ceh-line-quiz-bot',
    category: 'Learning Automation',
    year: '2025',
    description:
      '串接 Google Sheet 與 LINE API 的題庫機器人，用聊天方式練習 CEH 題目與資安觀念。',
    tech: ['Google Apps Script', 'LINE API', 'Automation'],
    github: 'https://github.com/and910805/CEH-robot',
    demo: null,
  },
  {
    title: 'Shipping Photo Manager',
    slug: 'shipping-photo-manager',
    category: 'Internal Tooling',
    year: '2024',
    description:
      '協助整理出貨照片與資料流程的小工具，降低人工命名、上傳與查找的摩擦。',
    tech: ['Flask', 'Tkinter', 'REST API', 'Python'],
    github: 'https://github.com/and910805/image-upload',
    demo: null,
  },
  {
    title: 'TaskGo',
    slug: 'taskgo',
    category: 'Productivity',
    year: '2024',
    description:
      '任務管理練習專案，結合 React、Flask、SQLite 與 JWT，實作基本登入與任務 CRUD。',
    tech: ['React', 'Flask', 'SQLite', 'JWT', 'Tailwind CSS'],
    github: null,
    demo: null,
  },
  {
    title: 'Wedding Site',
    slug: 'wedding-site',
    category: 'Frontend Experience',
    year: '2024',
    description:
      '婚禮網站前端作品，使用 React、Vite 與 Framer Motion 做出流暢的頁面互動。',
    tech: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/and910805/wedding-front',
    demo: 'https://wedding-front.kuanlin.pro/',
  },
  {
    title: 'Binary Search Game',
    slug: 'binary-search-game',
    category: 'Teaching / Game UX',
    year: '2024',
    description:
      '用遊戲方式解釋二分搜尋，把抽象演算法變成可以互動理解的學習流程。',
    tech: ['React', 'Game UX', 'Teaching'],
    github: 'https://github.com/and910805/Binary-Search-game',
    demo: 'https://binary-search-game.kuanlin.pro/',
  },
  {
    title: 'FarmGame',
    slug: 'farmgame',
    category: 'Game Prototype',
    year: '2024',
    description:
      '農場遊戲原型，練習 React 狀態管理、資源循環與輕量互動設計。',
    tech: ['React', 'Zustand', 'Game Prototype'],
    github: 'https://github.com/and910805/farmgame',
    demo: 'https://farmgame.kuanlin.pro/',
  },
]
