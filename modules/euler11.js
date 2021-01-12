const fs = require('fs');

module.exports = function () {
  // biggest product of 2d grid
  let hrstart = process.hrtime();
  let biggestProduct = 0;
  let string = fs.readFileSync(`./txt/euler11.txt`, 'utf-8');

  //splits matrix into 20 strings on linebreak
  //then splits those into 20 values creating a 2d array 20x20
  let stringArr = string.split('\n');
  let stringArr2 = stringArr.map((ele) => {
    return ele.split(' ');
  });

  //calc biggest Product of 2d array, 4 numbers
  biggestProduct = array2dCalc(stringArr2, 4);

  hrend = process.hrtime(hrstart);
  console.log('Euler11: ', biggestProduct);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
};

// calculates diagonal, vertical and horizontal pairs of xx 2darray
const array2dCalc = (array2d, countOfnumbers) => {
  let biggestProduct = 1;

  //begin looping through all x and y values
  //then get products by going the countOfnumbers in the directions
  //check via if clauses if its still inside array
  for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d.length; j++) {
      // ready for the 4 possible products
      let productHorizontal = 1;
      let productVertical = 1;
      let productDiagonal1 = 1;
      let productDiagonal2 = 1;
      //loop for going countOfnumbers in the directions
      for (let k = 0; k < countOfnumbers; k++) {
        // HORIZONTAL
        // checks if its inside array
        if (array2d[i][j + k]) {
          productHorizontal *= parseInt(array2d[i][j + k]);
        }
        // VERTICAL
        if (i + k < array2d.length) {
          productVertical *= parseInt(array2d[i + k][j]);
        }
        // DIAGONALS
        if (i + k < array2d.length && array2d[i + k][j + k]) {
          productDiagonal1 *= parseInt(array2d[i + k][j + k]);
        }
        if (i - k >= 0 && array2d[i - k][j + k]) {
          productDiagonal2 *= parseInt(array2d[i - k][j + k]);
        }
      }
      //check if we got new biggest Product
      biggestProduct = Math.max(
        biggestProduct,
        productHorizontal,
        productVertical,
        productDiagonal1,
        productDiagonal2
      );
    }
  }

  return biggestProduct;
};
