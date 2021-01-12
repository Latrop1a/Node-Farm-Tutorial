const fs = require('fs');

//a < b < c, for which, aa + bb = cc

module.exports = function (number) {
  // 10 001st prime number
  let hrstart = process.hrtime();
  let product = 1;

  for (let c = 3; c < number / 2; c++) {
    for (let b = 2; b < c; b++) {
      for (let a = 1; a < b; a++) {
        if (tripletChecker(a, b, c, number)) {
          product = a * b * c;
        }
      }
    }
  }

  hrend = process.hrtime(hrstart);
  console.log('Euler9: ', product);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
};

// calculates
const tripletChecker = (a, b, c, number) => {
  if (
    Math.pow(a, 2) + Math.pow(b, 2) !== Math.pow(c, 2) ||
    a + b + c !== number
  ) {
    return false;
  }
  return true;
};
