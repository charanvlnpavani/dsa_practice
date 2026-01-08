// input is abcdef
// output is bacdef

let a = "abcdefg";
let k = 2;

function reverseString2(str, k) {
    if (str.length < k){
        return str.slice(0,k).split('').reverse().join('');
    }
    if (str.length < 2*k){
        return (str.slice(0,k).split('').reverse().join('') + str.slice(k));
    }
    return (str.slice(0,k).split('').reverse().join('') + str.slice(k, 2*k) + reverseString2(str.slice(2*k), k));
}

console.log(reverseString2(a, k));
