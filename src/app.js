const express = require('express');
const connectDB = require('./config/db');
const breakingNewsRoutes = require('./routes/breakingNewsRoutes');
const investigationRoutes = require('./routes/investigationRoutes');
const reportRoutes = require('./routes/reportRoutes');
const dataVisualizationRoutes = require('./routes/dataVisualizationRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const trendingTopicsRoutes = require('./routes/trendingTopicsRoutes');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const initDB = require('./initDB'); // 引入初始化脚本

const app = express();

// Connect to database
connectDB();

// 初始化数据库
if (process.env.NODE_ENV !== 'production') {
  initDB();
}

// Init middleware
app.use(express.json({ extended: false }));
app.use(cors());
app.use(fileUpload());

// Define routes
app.use('/api/breaking-news', breakingNewsRoutes);
app.use('/api/investigations', investigationRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/data-visualization', dataVisualizationRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/trending-topics', trendingTopicsRoutes);

// Define image upload route
app.post('/api/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const image = req.files.image;

  const uploadPath = __dirname + '/uploads/' + image.name;

  image.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send({ message: 'File uploaded!', path: `/uploads/${image.name}` });
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
