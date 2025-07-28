//Write a function that returns the largest number in an array
const arr = [5, 0, 7, 10, 8, 17, 1, 66];
let highValue = -Infinity;
//let highValue = a[0];
//Logic
const largeValue = (function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highValue) {
      highValue = arr[i];
    }
  }
  return highValue;
})(arr);
//Result
console.log("Hightest Value is ", largeValue);
