const value = 1234567890;

const countDigits = (value) => {
  let count = 0;
  for (let i = value; i > 0; i = Math.floor(i / 10)) {
    count++;
  }
  return count;
};

const result = countDigits(value);
console.log(result);
