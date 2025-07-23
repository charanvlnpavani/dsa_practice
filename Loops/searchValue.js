//Write a function that searches for an element in an array and returns the index
// If the element is not present then just return -1

const arr = [2, 1, 4, 3, 55, 43, 61, 59];

const searchValue = (takeValue) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === takeValue) {
      return i;
    }
  }
  return -1;
};

const result = searchValue(59);
console.log("Result is ", result);
