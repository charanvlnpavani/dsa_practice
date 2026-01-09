//power of 2

function powerOfTwo(n) {
  if(n=== 1){
    return true;
  }
  return n % 2 === 0 && powerOfTwo(n / 2);
}
console.log(powerOfTwo(4))