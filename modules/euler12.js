const fs = require('fs');

module.exports = function () {
  // biggest product of 2d grid
  let hrstart = process.hrtime();
  let biggestProduct = 0;

  hrend = process.hrtime(hrstart);
  console.log('Euler11: ');
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
};

/* In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc. */

/* function validatePIN(pin) {
  if (pin.length === 4 || pin.length === 6) {
    let a = pin.split('').map(e => {
      return parseInt(e);
    });
    console.log(a);
    if (a.length === pin.length && !a.includes(NaN))
      return a.length === 4 || a.length === 6;
  }
  return false;
}

console.log(validatePIN('118801'));
console.log(parseInt(0)); */

/* Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"] */

const whichAreIn = (array1, array2) => {
  let retArray = [];
  array1.forEach(e => {
    array2.forEach(k => {
      if (k.includes(e) && !retArray.includes(e)) {
        retArray.push(e);
      }
    });
  });
  return retArray.sort();
};

a1 = ['arp', 'live', 'strong'];
a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

console.log(whichAreIn(a1, a2));
