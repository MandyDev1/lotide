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

const middle = function(array) {
  const length = array.length;
  if (length <= 2) {
    return [];
  }
  if (length % 2 === 0) {
    const midIndex = length / 2 - 1;
    return [array[midIndex], array[midIndex] - 1];
  } else {
    const midIndex = Math.floor(length / 2);
    return [array[midIndex]];
  }
}

// Test cases
assertArraysEqual(middle([1]), []); // Empty array for one element
assertArraysEqual(middle([1, 2]), []); // Empty array for two elements
assertArraysEqual(middle([1, 2, 3]), [2]); // Single middle element for odd number of elements
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Single middle element for odd number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Two middle elements for even number of elements
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Two middle elements for even number of elements