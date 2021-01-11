module.exports = () => {
  const multiplesArr = [];
  let sumOf = 0;
  for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplesArr.push(i);
    }
  }
  multiplesArr.forEach((i) => (sumOf += i));
  console.log(sumOf);
};
