module.exports = function (numOfPrimes) {
  // 10 001st prime number
  let hrstart = process.hrtime();

  const primeArr = [2, 3, 5];
  for (let i = 6; primeArr.length <= numOfPrimes; i++) {
    if (primeChecker(i)) primeArr.push(i);
  }
  hrend = process.hrtime(hrstart);
  console.log('Euler7: ', primeArr[primeArr.length - 2]);
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
