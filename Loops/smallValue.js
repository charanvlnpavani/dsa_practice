//Write a function that returns the smallest number in an array
const arr = [5, 0, 7, 10, 8, -17, 1, 66];
let smallest = Infinity;
//Logic
const result = (function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
})(arr);
// Result
console.log("Result is ", result);
