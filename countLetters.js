const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {
  const count = {};

  for (const letter of sentence) {
    if (letter !== ' ') {
      if (count[letter]) { // To dynamically access object properties using a variable/string，use square bracket notation
        count[letter] += 1; 
      } else {
        count[letter] = 1;
      }
    }
  }
  return count;
};

// Test code
const result1 = countLetters("Lighthouse Labs");
assertEqual(result1.L, 2);
assertEqual(result1.h, 2);