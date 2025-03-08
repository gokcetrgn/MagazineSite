const express = require('express');
const ejs = require('ejs');

const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));

app.get('/addphoto', (req, res) => {
  res.render('addphoto');
});
app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda baslatıldı.`);
});
