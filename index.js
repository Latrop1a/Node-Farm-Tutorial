const fs = require('fs');
const http = require('http');
const url = require('url');
const replaceTemplate = require('./modules/replaceTemplate');
const slugify = require('slugify');

const euler1 = require('./modules/euler1');
const euler2 = require('./modules/euler2');
const euler3 = require('./modules/euler3');
const euler4 = require('./modules/euler4');
const euler5 = require('./modules/euler5');
const euler6 = require('./modules/euler6');
const euler7 = require('./modules/euler7');
const euler8 = require('./modules/euler8');
const euler9 = require('./modules/euler9');
const euler10 = require('./modules/euler10');
const euler11 = require('./modules/euler11');

//////////////////////
//Files
/* 
// Blocking sync way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written');
no
// Non-blocking async
fs.readFile('./txt/start.txt', (err, data1) => {
  if (err) return console.log(err);
  fs.readFile(`./txt/${data1}.txt`, (err, data2) => {
    fs.readFile('./txt/append.txt', (err, data3) => {
      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, (err) => {});
    });
  });
});
 */

///Server

// data loading
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  'utf-8'
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  'utf-8'
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  'utf-8'
);
const data = fs.readFileSync(`${__dirname}/dev-data/data2.json`, 'utf-8');
const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));

const addSlugs = (slugArray) => {
  let x = 0;
  slugArray.forEach((element) => {
    dataObj[x].slug = element;
    x++;
  });
};

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // OVERVIEW PAGE
  if (pathname === '/overview' || pathname === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHTML = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const overview = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTML);
    res.end(overview);

    // PRODUCT PAGES
  } else if (pathname === '/product') {
    const product = dataObj[slugs.indexOf(query.id)];
    const productHTML = replaceTemplate(tempProduct, product);
    res.end(productHTML);

    // API
  } else if (pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);

    // NOT FOUND
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});

//euler1();
//euler2();
//euler3(600851475143);
//euler4(2);
//euler5(1, 20);
//euler6();
//euler7(10001);
//euler8(13);
//euler9(1000);
//euler10(2000000);
euler11();
