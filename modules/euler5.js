module.exports = function (limit1, limit2) {
  // smallest positive number evenly divisible by 1-20
  let hrstart = process.hrtime();
  let finalNum = 0;
  let num = 21;
  do {
    num++;
    if (divisionCheckerRange(num, limit1, limit2)) finalNum = num;
  } while (finalNum === 0);
  hrend = process.hrtime(hrstart);
  console.log('Euler5: ', finalNum);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
};

const divisionCheckerRange = (num, limit1, limit2) => {
  for (let i = limit1; i <= limit2; i++) {
    if (num % i !== 0) {
      return false;
    }
  }
  return true;
};
