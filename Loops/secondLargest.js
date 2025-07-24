//Write a function that returns the second Largest number in an array

const arr = [4, 9, 0, 2, 8, 7, 1];
let largest = -Infinity;
let secondLarge = -Infinity;
const secondLargest = (function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLarge = largest;
      largest = arr[i];
    } else if (arr[i] > secondLarge) {
      secondLarge = arr[i];
    }
  }
  return secondLarge;
})(arr);

console.log(secondLargest);
