const BreakingNews = require('./models/BreakingNews');
const InvestigationArticle = require('./models/InvestigationArticle');
const Report = require('./models/Report');
const mongoose = require('mongoose');

const breakingNewsData = [
  {
    title: "火線新聞：清大校園地震最新進展",
    summary: "今日清晨，清華大學校園發生里氏6.5級地震，造成多處建築受損。目前，救援工作正在緊鑼密鼓地進行中。據初步統計，已有超過50人受傷，其中5人重傷。地震還導致部分校區電力中斷和交通瘫痪。學校已啟動緊急響應機制，調動各方資源展開救援。專家提醒師生注意餘震，並呼籲大家保持冷靜，聽從校方指示。",
    content: "今日清晨，清華大學校園發生里氏6.5級地震，造成多處建築受損。目前，救援工作正在緊鑼密鼓地進行中。據初步統計，已有超過50人受傷，其中5人重傷。地震還導致部分校區電力中斷和交通瘫痪。學校已啟動緊急響應機制，調動各方資源展開救援。專家提醒師生注意餘震，並呼籲大家保持冷靜，聽從校方指示。",
    author: "張三",
    timestamp: new Date().toISOString(),
    category: "災害",
    trending: 8000,
    likes: 500,
    comments: 150,
    showInBar: true,
    relatedNews: []
  },
  // 添加更多 BreakingNews 数据项
];

const investigationData = Array.from({ length: 20 }, (_, i) => ({
  title: `深度調查：${['校園食品安全問題', '學生心理健康危機', '高等教育改革困境', '校園欺凌現象剖析', '學術不端行為調查'][i % 5]}`,
  summary: `這是一篇關於${['校園食品安全', '學生心理健康', '高等教育改革', '校園欺凌', '學術不端'][i % 5]}的深度調查報告，揭示了一些令人震驚的發現...`,
  content: `這是文章 ${i + 1} 的完整內容。它包含了詳細的調查過程、數據分析、專家訪談和結論。`,
  image: `https://picsum.photos/seed/${i + 1}/800/400`,
  author: ['張三', '李四', '王五', '趙六', '錢七'][i % 5],
  date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split('T')[0],
  readTime: Math.floor(Math.random() * 20) + 10,
  views: Math.floor(Math.random() * 50000) + 10000,
  category: ['社會', '教育', '健康', '科技', '文化'][i % 5],
  tags: ['調查報導', '深度分析', '社會議題', '教育改革', '健康安全'][i % 5].split(' '),
  isFeatured: i < 6, // 將前6篇文章設為精選報導
  isBreaking: i % 11 === 0,
  likes: Math.floor(Math.random() * 1000),
  relatedArticles: []
}));

const reportData = [
  {
    title: "2024年台灣大學生學習模式調查",
    summary: "本報告深入分析了台灣大學生的學習習慣、偏好和挑戰，為教育政策制定提供了寶貴參考。",
    content: `
      <h1 class="text-3xl font-bold mb-6">2024年台灣大學生學習模式調查</h1>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">調查背景</h2>
        <p class="mb-4">隨著科技的快速發展和社會的變遷，大學生的學習模式也在不斷演變。為了更好地了解當前台灣大學生的學習狀況，我們進行了這項全面的調查研究。</p>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">主要發現</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>線上學習的普及</strong>：超過 80% 的受訪者表示每週至少使用一次線上學習平台。</li>
          <li><strong>跨學科學習的趨勢</strong>：約 65% 的學生正在修讀主修以外的課程，以擴展知識面。</li>
          <li><strong>實踐性學習的重要性</strong>：超過 70% 的學生認為實習和項目式學習對其未來職業發展至關重要。</li>
          <li><strong>學習壓力問題</strong>：約 55% 的學生報告經常感到學習壓力過大，需要更多的心理健康支持。</li>
        </ul>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4>建議</h2>
        <ol class="list-decimal pl-6 space-y-2">
          <li>加強線上和線下學習的融合，提供更靈活的學習選擇。</li>
          <li>鼓勵跨學科學習，培養學生的綜合能力。</li>
          <li>增加實踐性學習機會，加強產學合作。</li>
          <li>加強學生心理健康服務，幫助學生更好地管理學習壓力。</li>
        </ol>
      </section>
      <section class="mb-8">
        <h2 class="text-2xl font-semibold mb-4">結論</h2>
        <p class="mb-4">本次調查為我們提供了寶貴的洞察，有助於教育機構和政策制定者更好地理解和滿足當代大學生的學習需求。我們建議相關方面根據這些發現，適時調整教育策略和政策，以培養出更適應未來社會需求的人才。</p>
      </section>
    `,
    author: "張三",
    date: new Date().toISOString(),
    category: "教育研究",
    trending: 5000,
    likes: 1200,
    comments: 350,
    relatedReports: []
  },
  // 添加更多 Report 数据项
];

const initDB = async () => {
  try {
    // 清空现有数据
    await BreakingNews.deleteMany();
    await InvestigationArticle.deleteMany();
    await Report.deleteMany();

    // 插入新数据
    await BreakingNews.insertMany(breakingNewsData);
    await InvestigationArticle.insertMany(investigationData);
    await Report.insertMany(reportData);

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    mongoose.disconnect();
  }
};

module.exports = initDB;
