console.log("\nExample 1\n");
function exampleNestedLoop(expValue) {
  for (let i = 0; i < expValue; i++) {
    for (let j = 0; j < expValue; j++) {
      console.log("i= ", i, " j=", j);
    }
    console.log("----------------");
  }
}

exampleNestedLoop(5);

//Example 2
console.log("\nExample 2\n");
function exampleNestedLoop1(expValue) {
  for (let i = 0; i < expValue; i++) {
    for (let j = 0; j <= i; j++) {
      console.log("i= ", i, " j=", j);
    }
    console.log("----------------");
  }
}

exampleNestedLoop1(5);

//Example 3
console.log("\nExample 3\n");
function exampleNestedLoop2(expValue) {
  for (let i = 0; i < expValue; i++) {
    for (let j = i; j > 0; j--) {
      console.log("i= ", i, " j=", j);
    }
    console.log("----------------");
  }
}

exampleNestedLoop2(3);

//Example 4
console.log("\nExample 4\n");
function exampleNestedLoop3(expValue) {
  for (let i = 0; i < expValue; i++) {
    for (let j = i; j >= 0; j--) {
      console.log("i= ", i, " j=", j);
    }
    console.log("----------------");
  }
}

exampleNestedLoop3(3);

//Example 5
console.log("\nExample 5\n");
function exampleNestedLoop4(expValue) {
  for (let i = expValue; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      console.log("i= ", i, " j=", j);
    }
    console.log("----------------");
  }
}

exampleNestedLoop4(3);
/**
 * OutPut 
 * 
 * Example 1
i=  0  j= 0
i=  0  j= 1
i=  0  j= 2
i=  0  j= 3
i=  0  j= 4
----------------
i=  1  j= 0
i=  1  j= 1
i=  1  j= 2
i=  1  j= 3
i=  1  j= 4
----------------
i=  2  j= 0
i=  2  j= 1
i=  2  j= 2
i=  2  j= 3
i=  2  j= 4
----------------
i=  3  j= 0
i=  3  j= 1
i=  3  j= 2
i=  3  j= 3
i=  3  j= 4
----------------
i=  4  j= 0
i=  4  j= 1
i=  4  j= 2
i=  4  j= 3
i=  4  j= 4
----------------

Example 2

i=  0  j= 0
----------------
i=  1  j= 0
i=  1  j= 1
----------------
i=  2  j= 0
i=  2  j= 1
i=  2  j= 2
----------------
i=  3  j= 0
i=  3  j= 1
i=  3  j= 2
i=  3  j= 3
----------------
i=  4  j= 0
i=  4  j= 1
i=  4  j= 2
i=  4  j= 3
i=  4  j= 4
----------------


Example 3

----------------
i=  1  j= 1
----------------
i=  2  j= 2
i=  2  j= 1
----------------

Example 4

i=  0  j= 0
----------------
i=  1  j= 1
i=  1  j= 0
----------------
i=  2  j= 2
i=  2  j= 1
i=  2  j= 0
----------------

Example 5

i=  3  j= 0
i=  3  j= 1
i=  3  j= 2
----------------
i=  2  j= 0
i=  2  j= 1
----------------
i=  1  j= 0
----------------


 * 
 * 
 * 
 */
