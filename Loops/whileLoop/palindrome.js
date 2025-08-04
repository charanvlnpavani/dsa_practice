const value = -12321;
const palindrome = (value) => {
  const original = value;
  let revValue = 0;
  for (let i = value; i > 0; i = Math.floor(i / 10)) {
    let lastDigit = i % 10;
    revValue = revValue * 10 + lastDigit;
  }
  return original === revValue
    ? " is a palindrome Value"
    : " is not a Palindrome Value";
};

const result = palindrome(value);
console.log(value, result);
