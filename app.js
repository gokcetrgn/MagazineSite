const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const magazine = {
    id: 1,
    title: 'Magazine title',
    description: 'Magazine description',
  };
  res.send(magazine);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda baslatıldı.`);
});
