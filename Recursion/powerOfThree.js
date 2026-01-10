let x = 81;
function powerOfThree(n){

 if(n === 1){
  return true;
 }
 return n % 3 === 0 && powerOfThree(n / 3)
}
console.log(powerOfThree(x));