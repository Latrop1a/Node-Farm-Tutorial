module.exports = function (numLimit) {
  // 10 001st prime number
  let sumOfPrimes = 5;
  let hrstart = process.hrtime();

  for (let i = 5; i < numLimit; i = i + 2) {
    if (primeChecker(i)) sumOfPrimes += i;
  }
  hrend = process.hrtime(hrstart);
  console.log('Euler10: ', sumOfPrimes);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
};

const primeChecker = (num) => {
  for (let i = 3; i < Math.sqrt(num + 1); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
