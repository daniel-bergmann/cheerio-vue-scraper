const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const scraper = require('./scraper');

const port = 5000;

app.get('/api/nyt', async (req, res) => {
  const articles = await scraper();
  res.json(articles);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/api/nyt`);
});
