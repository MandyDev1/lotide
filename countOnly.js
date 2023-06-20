const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // inside the loop:
    if (itemsToCount[item]) {
      // increment the counter for each item:
      //   set a property with that string key to:
      //     the value that was already there (or zero if nothing there) with 1 added to it.
      if (results[item]) { //What value Fang is in the results object? If it is a truthly value it will enter the if block(line20), if it's falsly it will go to the else block.
        results[item] += 1; //second time compuer sees Fang then add 1
      } else { //computer won't look at Karl, Salima because they are not itemsToCount
        results[item] = 1; //first time computer sees Fang it will become 1: Fang {Fang: 1}
      }
    }
    /*console.log(item);*/ console.log(item, results);

  }

  return results;
};

/*
这个函数的作用是统计指定数组中特定项出现的次数，并返回一个包含统计结果的对象。

函数的参数为两个：`allItems`和`itemsToCount`。`allItems`是一个包含字符串项的数组，
我们需要对其中的项进行统计。`itemsToCount`是一个对象，用于指定需要统计的项。
函数首先创建了一个空对象 `counts`，用于存储统计结果。

然后，函数使用`for...of`循环遍历`allItems`数组中的每一项。对于每一项，它检查`itemsToCount`
对象中是否存在该项，并且其对应的值为真（truthy）。

如果当前项应该被统计，则进入条件语句块。首先检查 `counts`对象中是否已经存在该项的属性。
如果已经存在，说明之前已经统计过该项，将对应的计数值加1。如果不存在，说明是第一次统计该项，将该项的计数值设置为1。

经过循环遍历后，函数返回统计结果的对象 `counts`。

简单来说，这个函数的功能是对给定数组中的特定项进行统计，并返回统计结果的对象。
*/

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
/*{
  Jason: 1,
  Fang: 2,
} */
const result1 = countOnly(firstNames/*allItems*/, {
  "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false /*itemsToCount*/
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);