const value = 12321;
const palindrome = (value) => {
  const original = value;
  let revValue = 0;
  while (value > 0) {
    let lastDigit = value % 10;
    value = Math.floor(value / 10);
    revValue = revValue * 10 + lastDigit;
  }
  return original === revValue
    ? " is a panlindrome Value"
    : " is not a Palindrome Value";
};

const result = palindrome(value);
console.log(value, result);
