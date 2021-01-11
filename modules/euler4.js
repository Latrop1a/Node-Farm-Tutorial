module.exports = function (numOfDigits) {
  // LARGEST PALINDROM  - Product of 2 3-digit numbers

  let hrstart = process.hrtime();
  let limit = Math.pow(10, numOfDigits);
  let largestNum = 0;

  for (let i = limit * 0.66; i < limit; i++) {
    for (let j = limit * 0.66; j < limit; j++) {
      if (palindromeChecker(i * j) && largestNum < i * j) {
        largestNum = i * j;
      }
    }
  }
  hrend = process.hrtime(hrstart);
  console.log('Euler4: ', largestNum);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
};

const palindromeChecker = (number) => {
  numStr = number.toString();
  for (let i = 0; i <= numStr.length / 2 - 1; i++) {
    if (numStr[i] !== numStr[numStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
