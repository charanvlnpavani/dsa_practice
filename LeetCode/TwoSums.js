let nums = [3, 2, 4];
let target = 5;
let temp, isTemp;
// temp = target - num[i];

for (let i = 0; i < nums.length; i++) {
  let numsToIndex = {};
  temp = target - nums[i];
  console.log(temp);
  if (nums.hasOwnProperty(temp)) {
    return [nums[temp], i];
  }
  numsToIndex[nums[i]] = i;
}
