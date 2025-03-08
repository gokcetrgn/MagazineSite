const express = require('express');
const ejs = require('ejs');

const app = express();

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('../view/index');
});
app.get('/add_post', (req, res) => {
  res.render('../view/add_post');
});
app.get('/about', (req, res) => {
  res.render('../view/about');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda baslatıldı.`);
});
