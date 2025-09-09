/**
 * Given an array arr[] of size n, the task is to find all the leaders in the array.
 * An element is a leader if it is greater than or equal to all the elements to right side.
 *
 * arr = [16, 17, 4, 3, 5, 2]
 * Output is [17, 5, 2]
 */

const arr = [16, 17, 4, 3, 5, 2];

const leaderElement = (value) => {
  const temp = [];
  const length = value.length;
  for (let i = 0; i < length; i++) {
    let j;
    for (j = i + 1; j < length; j++) {
      if (value[i] < value[j]) {
        break;
      }
    }
    console.log(j);
    if (j === length) {
      temp.push(arr[i]);
    }
  }
  return temp.join();
};

const result = leaderElement(arr);
console.log(result);
