module.exports = function (number) {
  let hrstart = process.hrtime();

  const primeFactorArr = [];
  let curNum = number;
  let broken = false;

  while (!broken) {
    for (let i = 2; i <= curNum; i++) {
      if (curNum % i === 0) {
        primeFactorArr.push(i);
        curNum = curNum / i;
        break;
      }
    }
    if (curNum === 1) broken = true;
  }
  hrend = process.hrtime(hrstart);
  console.log('Euler3: ', primeFactorArr);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
};
