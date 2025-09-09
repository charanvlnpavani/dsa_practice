let s = ["H", "a", "n", "n", "a", "h"];
let n = s.length;
let halfN = Math.floor(n / 2);
console.log(halfN);
for (i = 0; i < halfN; i++) {
  [s[i], s[n - 1 - i]] = [s[n - 1 - i], s[i]];
}
console.log(s);
