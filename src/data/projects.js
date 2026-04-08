export const projects = [
  {
    title: 'APT29 ATT&CK Simulation',
    category: 'Red Team / ATT&CK',
    year: '2023',
    description:
      '以 MITRE ATT&CK 為骨架整理的紅隊模擬流程，涵蓋初始入侵、資料蒐集、持久化與橫向移動，並整合 Pupy、PoshC2、WebDAV 與 ELK/Kibana 等實作環境。',
    tech: ['MITRE ATT&CK', 'Pupy', 'PoshC2', 'Kibana', 'Red Team'],
    github: 'https://github.com/and910805/APT29',
    demo: null,
  },
  {
    title: 'RAT 2.0 Security Research Demo',
    category: 'Malware Research',
    year: '2024',
    description:
      '用於資安研究的 Python RAT 範例，模擬 C2 通道、檔案傳輸、螢幕截圖、鍵盤側錄與持久化機制，幫助從攻防視角理解惡意程式行為與偵測點。',
    tech: ['Python', 'Socket', 'Windows', 'mss', 'pynput'],
    github: 'https://github.com/and910805/Rat2.0',
    demo: null,
  },
  {
    title: 'Nessus Vulnerability Dashboard',
    category: '資安分析',
    year: '2025',
    description:
      '將 Nessus 掃描結果整理成可視化儀表板，協助快速掌握弱點分布、風險等級與修補優先順序，適合內部追蹤與向管理層彙報。',
    tech: ['Python', 'Streamlit', 'Plotly', 'SQLite', 'Nessus'],
    github: 'https://github.com/and910805/Nessus-Vulnerability-Dashboard',
    demo: null,
  },
  {
    title: 'CEH LINE Quiz Bot',
    category: '自動化工具',
    year: '2025',
    description:
      '整合 Google Sheet 與 LINE API 建立測驗機器人，支援題庫管理、互動測驗與學習流程自動化，用在證照學習與內部訓練都很實用。',
    tech: ['Google Apps Script', 'LINE API', 'Automation'],
    github: 'https://github.com/and910805/CEH-robot',
    demo: null,
  },
  {
    title: 'Shipping Photo Manager',
    category: '業務工具',
    year: '2024',
    description:
      '為現場作業設計的照片管理工具，串接上傳流程與資料整理，降低人工命名與交付成本，讓非工程背景同仁也能穩定使用。',
    tech: ['Flask', 'Tkinter', 'REST API', 'Python'],
    github: 'https://github.com/and910805/image-upload',
    demo: null,
  },
  {
    title: 'TaskGo',
    category: '全端開發',
    year: '2024',
    description:
      '以任務協作為核心的全端專案，包含登入驗證、任務狀態管理與前後端串接，展現從資料結構到 UI 流程的完整實作能力。',
    tech: ['React', 'Flask', 'SQLite', 'JWT', 'Tailwind CSS'],
    github: null,
    demo: null,
  },
  {
    title: 'Wedding Site',
    category: '前端設計',
    year: '2024',
    description:
      '客製化活動網站，重點在視覺節奏、互動動態與行動裝置體驗，使用 React、Vite 與 Framer Motion 完成細緻的品牌式呈現。',
    tech: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/and910805/wedding-front',
    demo: 'https://and910805.github.io/wedding-front',
  },
  {
    title: 'Binary Search Game',
    category: '教學互動',
    year: '2024',
    description:
      '將二分搜尋概念做成互動遊戲，讓學習者透過操作理解搜尋策略，適合作為基礎演算法教學的暖身教材。',
    tech: ['React', 'Game UX', 'Teaching'],
    github: 'https://github.com/and910805/Binary-Search-game',
    demo: 'https://and910805.github.io/Binary-Search-game/',
  },
  {
    title: 'FarmGame',
    category: '前端實驗',
    year: '2024',
    description:
      '以遊戲化互動練習前端狀態管理與畫面流程，使用 React 與 Zustand 做出輕量但有回饋感的互動原型。',
    tech: ['React', 'Zustand', 'Game Prototype'],
    github: 'https://github.com/and910805/farmgame',
    demo: 'https://and910805.github.io/FarmGame/',
  },
]
