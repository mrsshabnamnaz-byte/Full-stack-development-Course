const { calculateTotal, calculatePercentage, calculateGrade } = require('./module.js');

const mark1 = 85;
const mark2 = 90;
const mark3 = 78;

const total = calculateTotal(mark1, mark2, mark3);
const percentage = calculatePercentage(total);
const grade = calculateGrade(percentage);

console.log('Total Marks:', total);
console.log('Percentage:', percentage.toFixed(2) + '%');
console.log('Grade:', grade);
