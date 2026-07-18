function calculateTotal(mark1, mark2, mark3) {
  return mark1 + mark2 + mark3;
}

function calculatePercentage(totalMarks) {
  return (totalMarks / 300) * 100;
}

function calculateGrade(percentage) {
  if (percentage >= 90) return 'A';
  if (percentage >= 80) return 'B';
  if (percentage >= 70) return 'C';
  if (percentage >= 60) return 'D';
  return 'F';
}

module.exports = { calculateTotal, calculatePercentage, calculateGrade };
