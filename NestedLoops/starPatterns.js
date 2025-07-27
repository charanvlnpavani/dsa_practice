/**
 n = 4
  * * * *
  * * * *
  * * * *
 **/

function starSquare(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "*" + " ";
    }
    console.log(row);
  }
}

starSquare(5);

/**
 
    n= 4
 * 
 * *
 * * *
 * * * *
 */
console.log("\n");
function starRight(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + "* ";
    }
    console.log(row);
  }
}
starRight(10);

/**
 
    n= 4
                      *
                 *    *
           *     *    * 
    *      *     *    *
 */
console.log("\n");

function starLeft(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let space = 0; space < n - i; space++) {
      row += " ";
    }
    for (let j = 0; j < i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
starLeft(7);

/**
 
    n= 4
   
      * 
     * * 
    * * * 
   * * * * 
  * * * * * 
 * * * * * * 
 */

console.log("\n");

function starTriangle(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let space = 0; space < n - i; space++) {
      row += " ";
    }
    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
starTriangle(7);
