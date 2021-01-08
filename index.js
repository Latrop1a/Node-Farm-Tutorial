const fs = require('fs');
const http = require('http');
const url = require('url');

//////////////////////
//Files
/* 
// Blocking sync way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}. \nCreated on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written');

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
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// template building
const replaceTemplate = (template, product) => {
  let output = template.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  return output;
};

const server = http.createServer((req, res) => {
  const pathName = req.url;

  // OVERVIEW PAGE
  if (pathName === '/overview' || pathName === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const cardsHTML = dataObj
      .map((el) => replaceTemplate(tempCard, el))
      .join('');
    const overview = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHTML);
    res.end(overview);

    // PRODUCT PAGES
  } else if (pathName.includes('/product')) {
    const id = pathName.split('=');
    const productHTML = replaceTemplate(tempProduct, dataObj[id[1]]);
    res.end(productHTML);

    // API
  } else if (pathName === '/api') {
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
