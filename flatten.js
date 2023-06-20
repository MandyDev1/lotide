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

const flatten = function(array) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattened = flattened.concat(array[i]);
    } else {
      flattened.push(array[i]);
    }
  } 
  return flattened;
}

// Test cases
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]

const inputArray1 = [1, 2, [3, 4], 5, [6]];
const expectedOutput1 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(flatten(inputArray1), expectedOutput1);