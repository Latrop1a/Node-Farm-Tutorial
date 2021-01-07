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

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === '/overview' || pathName === '/') {
    res.end('This is the Overview');
  } else if (pathName === '/product') {
    res.end('This is the Product');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
