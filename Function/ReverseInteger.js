x = -123023;
function reverse(x) {
  const isNegative = x < 0;
  const str = parseInt(Math.abs(x).toString().split("").reverse().join(""));
  const result = isNegative ? -str : str;
  // Check for 32-bit signed integer overflow
  if (result < -2147483648 || result > 2147483647) {
    return 0;
  }
  return result;
}
console.log(reverse(x));
