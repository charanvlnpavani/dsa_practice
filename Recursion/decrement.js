function decrement(n) {
  if (n <= 0) {
    return 0;
  } else {
    n = n + "," + decrement(n - 1);
    return n;
  }
}
let result = decrement(5);
console.log(result); // Output: 5,4,3,2,1,0
