// Write a function that returns the count of digits in a number

let n = 200000;
let count = 0;
const result = (n) => {
  if (n === 0) return 1;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
};

console.log("Result is ", result(Math.abs(n)));

/**
 * Corner Cases
 * ------------------
 * 1. When  n = 0 than also count should be work
 * 2. In Negative value also work or not , while that negative number of digits also work then we used  Math.abs()
 *
 */
