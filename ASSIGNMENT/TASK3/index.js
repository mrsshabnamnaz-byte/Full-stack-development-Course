const { findSum, findMaximum, findMinimum } = require('./module.js');

const numbers = [10, 25, 3, 47, 18, 6];

console.log('Array:', numbers);
console.log('Sum:', findSum(numbers));
console.log('Maximum:', findMaximum(numbers));
console.log('Minimum:', findMinimum(numbers));
