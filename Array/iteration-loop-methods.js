/**
 * foreach:
 * map:
 * reduce:
 * reduceRight:
 * fliter
 */
let a = [1, 2, 3, 4, 5];
a.forEach((item, index, array) => {
  array[index] = item ** 2;
});

console.log(a);

let b = [1, 2, 3, 4, 5];
c = b.map((item, index, arr) => {
  arr[index] = item ** 4;
  return arr[index];
});
console.log(c);

let d = [1, 2, 3, 4, 5];
let sum = d.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

let e = [1, 2, 3, 4, 5];
let prod = e.reduceRight((accumulator, currentValue, index, array) => {
  return accumulator * currentValue;
}, 1);
console.log(prod);

let f = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = f.filter((item, index, array) => {
  return item % 2 === 0;
});
console.log(evenNumbers);
