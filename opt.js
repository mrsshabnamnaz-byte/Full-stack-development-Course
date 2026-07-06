function checkGrade() {
  // Variable
  let marks = document.getElementById("marks").value;
  marks = Number(marks);

  let grade;

  // if - else if - else Statements
  if (marks >= 90) {
    grade = "A";
  } else if (marks >= 80) {
    grade = "B";
  } else if (marks >= 70) {
    grade = "C";
  } else if (marks >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  document.getElementById("result").innerHTML = "Marks: " + marks + " | Grade: " + grade;
}
