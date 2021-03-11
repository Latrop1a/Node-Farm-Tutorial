const fs = require('fs');

module.exports = function (limit) {
  let hrstart = process.hrtime();

  hrend = process.hrtime(hrstart);
  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
};

// finds the sequence with max sum in an array
const maxSequence = arr => {
  let maxSequence = [0];
  let tempMaxSequence;
  //looping through sub array startpoints
  for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    tempMaxSequence = [ele];
    if (checkBiggerArr(tempMaxSequence, maxSequence)) {
      maxSequence = tempMaxSequence;
    }
    //looping every sequence length
    for (let k = i + 1; k < arr.length; k++) {
      tempMaxSequence.push(arr[k]);
      // checking if temp sequence is bigger
      if (checkBiggerArr(tempMaxSequence, maxSequence)) {
        maxSequence = tempMaxSequence;
      }
    }
  }
  console.log(
    maxSequence,
    maxSequence.reduce((a, b) => a + b)
  );
  return maxSequence.reduce((a, b) => a + b);
};

const checkBiggerArr = (arr1, arr2) => {
  let arr1Sum = 0;
  let arr2Sum = 0;
  arr1.forEach(ele => (arr1Sum += ele));
  arr2.forEach(ele => (arr2Sum += ele));
  return arr1Sum > arr2Sum;
};

//checkkOut time kata
const checkOutKata = (customers, n) => {
  let maxQueueTime = 0;
  //creates array with n-elements and fills with initial value to reduce
  let queues = new Array(n).fill([0]);

  //func to put customer time into smalles of n-arrays
  const putIntoSmallestArray = num => {
    let smallestQueueTime = queues[0].reduce((a, b) => a + b);
    let smallestQueue = 0;

    // iterating over all the inner arrays to get minTime
    for (let i = 1; i < queues.length; i++) {
      //getting queue time
      const eleTime = queues[i].reduce((a, b) => a + b);
      //checks if current queue is smaller than the others
      if (eleTime < smallestQueueTime) {
        smallestQueueTime = eleTime;
        smallestQueue = i;
      }
    }
    //push into smallest queue
    queues[smallestQueue].push(num);
  };

  //putting customers into queues
  customers.forEach(ele => putIntoSmallestArray(ele));
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
