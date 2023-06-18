// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, "2");


/* 在 JavaScript 中，可以使用单引号（''）、双引号（""）或反引号（``）来创建字符串。然而，只有在使用反引号时，才可以在字符串中使用${}语法来插入变量或表达式的值。

使用单引号或双引号创建的字符串是普通的字符串字面量，不能包含${}语法。

console.log("My name is " + name + " and I am " + age + " years old.");  // 使用拼接字符串的方式
console.log(`My name is ${name} and I am ${age} years old.`);  // 使用模板字符串

const result = 5 * 7;
console.log("The result is: " + result);  // 使用拼接字符串的方式
console.log(`The result is: ${result}`);  // 使用模板字符串
*/
