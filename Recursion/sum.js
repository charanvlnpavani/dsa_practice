// let n = 5;
// let sum = 0;
// for (let i = n; i>0 ; i--){
//    sum += i;
// }
// console.log(sum);

function sum(n){ 
    if(n === 0){ // base case
        return 0;
    }
    return n + sum(n-1);// recursive case
}
n = 10 
console.log(sum(n));// 55