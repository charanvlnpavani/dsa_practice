/**
 * Alternative Element without using methods
 * -----------------------------------------
 * I/P = [-5, 1, 4, 2, 12];
 * O/P = -5 4 12
 *
 * Corner Cases:-
 * --------------
 *  - is used array methods or not
 *  - Use in normal function or arrow Function or IIFE or anonymous Function
 *  - which loop you want like for, while or do While
 */

const arrValue = [-5, 1, 4, 2, 12];
const alternativeElement = (value) => {
  let temp = "";
  for (let i = 0; i < value.length; i++) {
    if (i % 2 === 0) temp += value[i] + " ";
  }
  return temp;
};
const result = alternativeElement(arrValue);
console.log("Result is ", result);

/**
 * Alternative Element with using methods
 * -----------------------------------------
 * I/P = [-5, 1, 4, 2, 12];
 * O/P = -5 4 12
 */

const arrValue1 = [-5, 1, 4, 2, 12];
const alterElement = (value) => {
  let temp = [];
  for (let i = 0; i < value.length; i++) {
    if (i % 2 === 0) temp.push(value[i]);
  }
  return temp.join();
};
console.log(alterElement(arrValue1));
