/**
 * Reverse the digits of a number
 * Original Value = -1234
 * Reverse Value = -4321
 *
 * Original Value = 1234
 * Reverse Value = 4321
 */

const givenValue = -134;
const givenValueCopy = givenValue;
const reverseDigit = (value) => {
  let revValue = 0;
  for (let i = Math.abs(value); i > 0; i = Math.floor(i / 10)) {
    revValue = revValue * 10 + (i % 10);
  }
  givenValueCopy < 0 ? (revValue = -revValue) : (revValue = revValue);
  return revValue;
};

const result = reverseDigit(givenValue);
console.log("Original Value : ", givenValue, "\nReverse Value : ", result);
