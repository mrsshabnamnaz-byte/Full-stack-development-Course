const { calculateYearlySalary, calculateBonus } = require('./module.js');

const monthlySalary = 50000;

const yearlySalary = calculateYearlySalary(monthlySalary);
const bonus = calculateBonus(monthlySalary);

console.log('Monthly Salary:', monthlySalary);
console.log('Yearly Salary:', yearlySalary);
console.log('Bonus:', bonus);
