s = "dfa12321afd";
var secondLargestDigit = () => {
  let digits = new Set();
  for (let char of s) {
    if (char >= "0" && char <= "9") {
      digits.add(parseInt(char));
    }
  }
  let uniqueDigits = Array.from(digits).sort((a, b) => b - a);
  return uniqueDigits.length < 2 ? -1 : uniqueDigits[1];
};
console.log(secondLargestDigit());
