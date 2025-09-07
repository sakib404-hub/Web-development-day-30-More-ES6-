/**
 * Find is like the filter we learned previously
 * but it only will return the first element if the condition is matched
 */
const numbers = [1, 5, 6, 10, 45, 2, 7];
const firstEven = numbers.find((number) => {
  if (number % 2 == 0) {
    return number;
  }
});
console.log(firstEven);

const students = [
  { name: "Shakib", marks: 60, passed: true },
  { name: "Rahim", marks: 45, passed: false },
  { name: "Karim", marks: 80, passed: true },
];

// Find first student who scored above 50 AND passed
const goodStudent = students.find(
  (student) => student.marks > 50 && student.passed
);

console.log(goodStudent);
// { name: "Shakib", marks: 60, passed: true }
