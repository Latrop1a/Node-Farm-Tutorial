const fs = require('fs');

module.exports = function (limit) {
  let hrstart = process.hrtime();

  hrend = process.hrtime(hrstart);
  checkOutKata([2, 2, 3, 3, 4, 4, 3, 7], 3);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
};

//checkkOut time kata
const checkOutKata = (customers, n) => {
  let maxQueueTime = 0;
  //creates array with n-elements and fills with initial value to reduce
  let queues = new Array(n).fill([0]);
  console.log(queues, 'test1');

  //func to put customer time into smalles of n-arrays
  const putIntoSmallestArray = num => {
    let smallestQueueTime = queues[0].reduce((a, b) => a + b);
    let smallestQueue = 0;

    // iterating over all the inner arrays to get minTime
    for (let i = 1; i < queues.length; i++) {
      const ele = queues[i];
      const eleTime = ele.reduce((a, b) => a + b);
      //checks if current queue is smaller than the others
      if (eleTime < smallestQueueTime) {
        smallestQueueTime = eleTime;
        smallestQueue = i;
      }
    }
    queues[smallestQueue].push(num);
  };

  //putting customers into queues
  customers.forEach(ele => {
    putIntoSmallestArray(ele);
  });
  console.log(queues, 'final');

  //checking for max QueueTime
  queues.forEach(ele => {
    const time = ele.reduce((a, b) => a + b);
    if (maxQueueTime < time) maxQueueTime = time;
  });
  console.log(maxQueueTime);
  return maxQueueTime;
};

// Check mutiples kata
const checkMultiples2 = limit => {
  let sum = 0;

  for (let i = 0; i < limit; i++) {
    if (checkMultiple(i)) sum += i;
  }
  console.log('Codewars: ', sum);
  return;
};

const checkMultiple = num => {
  if (num % 3 == 0 || num % 5 == 0) {
    return true;
  } else {
    return false;
  }
};
