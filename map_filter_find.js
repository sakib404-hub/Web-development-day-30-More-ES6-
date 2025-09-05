const students = [
  { id: 1, name: "abul", marks: 53 },
  { id: 2, name: "bulbul", marks: 55 },
  { id: 3, name: "cabul", marks: 80 },
  { id: 4, name: "dabul", marks: 50 },
];

const studentName = students.map((student) => {
  return student.name;
});
console.log(studentName);

//the whole value like id, name, marks
const goodStudent = students.filter((student) => {
  if (student.marks > 50) {
    return student.name;
  }
});
console.log(goodStudent);

//if i want to get the names only

const nameOfStudnet = students
  .filter((student) => student.marks > 50)
  .map((student) => student.name);

console.log(nameOfStudnet);
