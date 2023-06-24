const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results = map(words, word => word[0]);
console.log(results);

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

// Test case 1
const numbers = [1, 2, 3, 4];
const expected1 = [1, 4, 9, 16];
const result1 = map(numbers, num => num * num);
assertArraysEqual(result1, expected1);

// Test case 2
const words2 = ["apple", "banana", "cherry", "date"];;
const expected2 = [5, 6, 6, 4];
const result2 = map(words2, word => word.length);
assertArraysEqual(result2, expected2);

// Test case 3
const students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
const expected3 = [25, 30, 35];
const results3 = map(students, student => student.age);
assertArraysEqual(results3, expected3);
