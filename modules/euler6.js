module.exports = function (num1, num2) {
  // difference between sum of the squares of the first one hundred natural numbers and square of sum
  let hrstart = process.hrtime();

  let sumOfSquares = 0,
    squareOfSum = 0,
    difference;

  for (let i = 1; i <= 100; i++) {
    sumOfSquares += Math.pow(i, 2);
  }

  for (let i = 1; i <= 100; i++) {
    squareOfSum += i;
  }
  squareOfSum = Math.pow(squareOfSum, 2);
  difference = Math.abs(squareOfSum - sumOfSquares);

  hrend = process.hrtime(hrstart);
  console.log('Euler6: ', difference);
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
