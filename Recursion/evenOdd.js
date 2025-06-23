//recursion
function evenF(n) {
  if (n === 0) {
    return "";
  }
  if (n % 2 === 0) {
    let prev = evenF(n - 1);
    return prev ? prev + "," + n : "" + n;
  }
  return evenF(n - 1);
}
function oddF(n) {
  if (n === 0) {
    return "";
  }
  if (n % 2 === 1) {
    let prev = oddF(n - 1);
    return prev ? prev + "," + n : "" + n;
  }
  return oddF(n - 1);
}
let resultEven = evenF(10);
let resultOdd = oddF(10);
console.log(resultEven);
console.log(resultOdd);

// Initializing
let even = 0;
let odd = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    even = even + "," + i;
  }
}
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    odd = odd + "," + i;
  }
}

console.log(even);
console.log(odd);
