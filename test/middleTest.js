const middle = require('../middle');
const assertArraysEqual= require('../assertArraysEqual');

assertArraysEqual(middle([1]), []); // Empty array for one element
assertArraysEqual(middle([1, 2]), []); // Empty array for two elements
assertArraysEqual(middle([1, 2, 3]), [2]); // Single middle element for odd number of elements
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Single middle element for odd number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Two middle elements for even number of elements
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Two middle elements for even number of elements
