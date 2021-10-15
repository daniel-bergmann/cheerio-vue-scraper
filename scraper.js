const axios = require('axios');
const cheerio = require('cheerio');

const pageUrl = 'https://www.nytimes.com/section/world';

async function scraper() {
  const { data } = await axios.get(pageUrl);
  const $ = cheerio.load(data);
  const articles = [];
  $('article').each((i, el) => {
    const article = {};
    article.title = $(el).find('h2, .css-byk1jx').text().replace(/\s\s+/g, '');
    article.link = $(el).find('a').attr('href');
    article.pic = $(el).find('img').attr('src');
    articles.push(article);
  });
  return articles;
}

module.exports = scraper;
