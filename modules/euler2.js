module.exports = function () {
  let sum = 0;
  const fiboArr = [1, 2];
  let curNum = fiboArr[fiboArr.length - 1];
  let lastNum = fiboArr[fiboArr.length - 2];
  while (curNum + lastNum < 4000000) {
    fiboArr.push(curNum + lastNum);
    lastNum = fiboArr[fiboArr.length - 2];
    curNum = fiboArr[fiboArr.length - 1];
  }
  fiboArr.forEach((element) => {
    if (element % 2 === 0) sum += element;
  });
  console.log('Euler2:', sum);
};
