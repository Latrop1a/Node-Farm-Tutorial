const fs = require('fs');

module.exports = function (limit) {
  let hrstart = process.hrtime();
  let sum = 0;

  for (let i = 0; i < limit; i++) {
    if (checkMultiple(i)) sum += i;
  }

  hrend = process.hrtime(hrstart);
  console.log('Codewars: ', sum);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
};

const checkMultiple = num => {
  if (num % 3 == 0 || num % 5 == 0) {
    return true;
  } else {
    return false;
  }
};
