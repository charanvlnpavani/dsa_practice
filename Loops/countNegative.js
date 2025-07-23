//Write a function that returns number of negative numbers in an array
const arr = [2, -9, 17, 0, 1, -10, -4, 8];
let count = 0;
//IIFE
(function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
})(arr);
//Result
console.log("Count of Negative is ", count);
