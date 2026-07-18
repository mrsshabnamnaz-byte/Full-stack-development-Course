function findSum(array) {
  return array.reduce((sum, num) => sum + num, 0);
}

function findMaximum(array) {
  return Math.max(...array);
}

function findMinimum(array) {
  return Math.min(...array);
}

module.exports = { findSum, findMaximum, findMinimum };
