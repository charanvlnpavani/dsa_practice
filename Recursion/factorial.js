//Factorial function using recursion

function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    let result = n * factorial(n - 1);
    return result;
  }
}

let factorialResult = factorial(5);
console.log(factorialResult); // Output: 120

// initializing
let fact = 5;
let result = 1;

for (let i = fact; i > 1; i--) {
  result *= i; // result = result * i;
}
console.log(result); // Output: 120
