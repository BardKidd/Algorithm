// 1 + 2 + 3 + .... n, then return sum value
// 紀念一下這個白癡寫法
function sum(n) {
  if (typeof n !== "number") throw Error("n must be a number");
  const isOdd = n % 2 !== 0;
  const firstNum = 1;
  const finalNum = n;
  let middleNum;
  let groupLength;
  let groupSum;
  if (isOdd) {
    middleNum = (1 + finalNum) / 2; // 中間值
    groupLength = middleNum - firstNum; // 總共可以分幾組
    groupSum = finalNum + firstNum; // 每組的值
    console.log("sum complete");
    return groupSum * groupLength + middleNum;
  } else {
    middleNum = (1 + (finalNum - 1)) / 2; // 中間值
    groupLength = middleNum - firstNum; // 總共可以分幾組
    groupSum = finalNum - 1 + firstNum; // 每組的值
    console.log("sum complete");
    return groupSum * groupLength + middleNum + finalNum;
  }
}

function sum2(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i;
  }
  return sum;
}

function sum3(n) {
  console.log('?')
  return ((1 + n) * n) / 2;
}

let time1 = window.performance.now();
sum(100000000);
let time2 = window.performance.now();
let timeDiff1 = (time2 - time1) / 1000;
console.log(`It takes ${timeDiff1} seconds`);

let time3 = window.performance.now();
sum2(100000000);
let time4 = window.performance.now();
let timeDiff2 = (time4 - time3) / 1000;
console.log(`It takes ${timeDiff2} seconds`);

let time5 = window.performance.now();
sum3(100000000);
let time6 = window.performance.now();
let timeDiff3 = (time6 - time5) / 1000;
console.log(`It takes ${timeDiff3} seconds`);
