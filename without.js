const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("✅✅✅ Assertion Passed: Arrays are equal");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: Arrays are not equal");
  }
};

const without = function(source, itemsToRemove) {
  let filteredArray = [];
  for (let i = 0; i < source.length; i++) {
    let found;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      filteredArray.push(source[i]);
    }
  }
  return filteredArray;
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

/*
1. Initialize an empty array called `filteredArray` to store the elements that do not appear in `itemsToRemove`.
2. Start a loop to iterate over each element in the `source` array using the variable `i`.
3. Inside the outer loop, set the variable `found` to `undefined` or `false` to indicate that the current element has not been found in `itemsToRemove` yet.
4. Start a nested loop to iterate over each element in the `itemsToRemove` array using the variable `j`.
5. Inside the nested loop, check if the current element in the `source` array (`source[i]`) is equal to the current element in the `itemsToRemove` array (`itemsToRemove[j]`).
6. If the elements match, set the variable `found` to `true` and break out of the nested loop using the `break` statement.
7. If the elements do not match, the nested loop continues until all elements in `itemsToRemove` have been checked.
8. After the nested loop, check if the variable `found` is still `undefined` or `false`, indicating that the current element in the `source` array was not found in `itemsToRemove`.
9. If `found` is `false`, push the current element from the `source` array (`source[i]`) into the `filteredArray`.
10. Repeat steps 3-9 for each element in the `source` array.
11. After the outer loop has finished iterating over all elements in the `source` array, return the `filteredArray`.
*/