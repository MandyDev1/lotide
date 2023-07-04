const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log("✅✅✅ Assertion Passed: Arrays are equal");
  } else {
    console.log("🛑🛑🛑 Assertion Failed: Arrays are not equal");
  }
};

module.exports = assertArraysEqual;