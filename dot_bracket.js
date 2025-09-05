const student = {
  name: "Rafid",
  marks: 90,
  "home-address": "kochukhet",
  1: 50,
};

//Dot Notation
const studentName = student.name;
console.log(student);
// console.log(student.1);

//Bracket Notation
const studentOne = student[1];
const studentMarks = student["marks"];
const studentAddress = student["home-address"];
console.log(studentOne);
console.log(studentMarks);
console.log(studentAddress);
