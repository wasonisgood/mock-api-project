const breakingNews = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `火線新聞：${['台灣地震最新進展', '總統大選辯論激烈交鋒', '新冠病毒新變種現蹤', '科技巨頭宣布重大裁員', '國際油價暴跌'][i % 5]}`,
    summary: `最新消息：${['地震造成多處建築受損，救援工作持續進行', '候選人就經濟政策展開激烈辯論', '專家呼籲密切關注新變種病毒傳播情況', '裁員計劃影響全球數千員工', '油價下跌或將影響全球經濟'][i % 5]}`,
    timestamp: new Date(Date.now() - Math.floor(Math.random() * 3600000)).toISOString(),
    category: ['災害', '政治', '健康', '科技', '經濟'][i % 5],
    trending: Math.floor(Math.random() * 10000) + 1000,
    showInBar: i % 2 === 0 // 偶数新闻显示在Bar中
  }));
  
  const investigationArticles = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `深度調查：${['校園食品安全問題', '學生心理健康危機', '高等教育改革困境', '校園欺凌現象剖析', '學術不端行為調查'][i % 5]}`,
    summary: `這是一篇關於${['校園食品安全', '學生心理健康', '高等教育改革', '校園欺凌', '學術不端'][i % 5]}的深度調查報告，揭示了一些令人震驚的發現...`,
    image: `https://picsum.photos/seed/${i + 1}/800/400`,
    author: ['張三', '李四', '王五', '趙六', '錢七'][i % 5],
    date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0],
    readTime: Math.floor(Math.random() * 20) + 10,
    views: Math.floor(Math.random() * 50000) + 10000,
    category: ['社會', '教育', '健康', '科技', '文化'][i % 5],
    tags: ['調查報導', '深度分析', '社會議題', '教育改革', '健康安全'][i % 5].split(' '),
    isFeatured: i < 6, // 將前6篇文章設為精選報導
    isBreaking: i % 11 === 0,
  }));
  
  const reportsData = [
    { id: 1, title: "2024年台灣大學生學習模式調查", date: "2024-03-15", summary: "本報告深入分析了台灣大學生的學習習慣、偏好和挑戰，為教育政策制定提供了寶貴參考。" },
    { id: 2, title: "校園社交媒體使用趨勢分析", date: "2024-02-28", summary: "這份報告探討了社交媒體對大學生學習和社交生活的影響，並提出了相關建議。" },
    { id: 3, title: "大學生心理健康狀況調查", date: "2024-01-20", summary: "本報告通過大規模問卷調查，揭示了當前大學生面臨的主要心理健康問題和壓力來源。" },
  ];
  
  const topicsData = ['學生權益', '教育公平', '科研誠信', '校園文化', '就業形勢'];
  const dataVisualizationData = [
    { name: '學術不端', value: 65 },
    { name: '校園欺凌', value: 45 },
    { name: '就業壓力', value: 80 },
    { name: '心理健康', value: 70 },
  ];
  
  module.exports = {
    breakingNews,
    investigationArticles,
    reportsData,
    topicsData,
    dataVisualizationData
  };
  