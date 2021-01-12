const fs = require('fs');

module.exports = function (numOfChars = 13) {
  // 10 001st prime number
  let hrstart = process.hrtime();
  let string = fs.readFileSync(`./txt/start.txt`, 'utf-8');
  let newString = string.replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, '');

  let biggestProduct = 0;

  for (let i = 0; i < newString.length - numOfChars; i++) {
    let part = newString.substr(i, numOfChars);
    if (stringSequenceProduct(part) > biggestProduct)
      biggestProduct = stringSequenceProduct(part);
  }

  hrend = process.hrtime(hrstart);
  console.log('Euler8: ', biggestProduct);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
};

// calculates the product of string
const stringSequenceProduct = (string) => {
  let product = 1;
  for (let i = 0; i < string.length; i++) {
    product *= parseInt(string[i]);
  }
  return product;
};
