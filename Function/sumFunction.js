function sum(...args) {
  // Your implementation
  let result = args.reduce((acc, val) => acc + val, 0);
  return result;
}

//For the purpose of user debugging.
let result =sum(100, 200, 300, 400);
console.log("The sum is: " + result);
module.exports = sum;
