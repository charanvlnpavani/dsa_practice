//Write a function that returns the largest number in an array
const arr = [5, 0, 7, 10, 8, 17, 1, 66];

const largeValue = (function (arr) {
  let highValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[highValue]) {
      highValue = i;
    }
  }
  return arr[highValue];
})(arr);

console.log("Hightest Value is ", largeValue);
