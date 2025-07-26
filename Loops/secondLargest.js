//Write a function that returns the second Largest number in an array

const arr = [1, 4, 5, 6, 5, 6, 3, 4, 4];

let largest = -Infinity;
let secondLarge = -Infinity;

const secondLargest = (function (arr) {
  if (arr.length < 2) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLarge = largest;
      largest = arr[i];
    } else if (arr[i] > secondLarge && arr[i] !== largest) {
      secondLarge = arr[i];
    }
  }

  return secondLarge;
})(arr);

console.log(secondLargest);
