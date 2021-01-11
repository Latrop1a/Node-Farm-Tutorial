const fs = require('fs');

module.exports = function (numOfPrimes) {
  // 10 001st prime number
  let hrstart = process.hrtime();
  let string = fs.readFileSync(`./txt/start.txt`, 'utf-8');
  let newString = string.replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, '');

  let biggestProduct;

  for (let i = 0; i < newString[newString.length - 14]; i++) {
    let part = newString.substr(i, i + 13);
  }

  hrend = process.hrtime(hrstart);
  console.log('Euler8: ', newString);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
};

const primeChecker = (num) => {
  for (let i = 3; i < num * 0.51; i += 2) {
    if (num % i === 0 || num % 2 === 0) {
      return false;
    }
  }
  return true;
};
