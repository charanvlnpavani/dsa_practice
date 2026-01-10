/**
 * push() - adds one or more elements to the end of an array and returns the new length of the array.
 * pop() - removes the last element from an array and returns that element.
 * shift() - removes the first element from an array and returns that removed element.
 * unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
 * splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 * slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
 * concat() - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
 * fill() - changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
 * copyWithin() -
 */

let a = [];
a.push(1, 2, 3, 4, 5, 6);
console.log(a);
a.pop();
console.log(a);
a.shift();
console.log(a);
a.unshift(0, 1);
console.log(a);
let b = a.slice(2, 4);
console.log(b);
b.splice(1, 0, "chran");
console.log(b);
// c = a.concat(b)
// console.log(c)
