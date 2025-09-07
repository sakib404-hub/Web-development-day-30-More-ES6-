const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

//? ----> Doubling the numbers and returning a loop
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

//? ----> Looping through the numbers through the foreach loop
numbers.forEach((number) => {
  number += 2;
  console.log(number);
});

//? ----> Filtering the numbers and returning an array
const filterResult = numbers.filter(
  (number, index) => number > 20 && number < 90
);
console.log(filterResult);

//? ----> Find that gives only the first element of the matched condition

const firstEven = numbers.find((number) => number % 2 === 0 && number > 50);
console.log(firstEven);

const students = [
  { name: "Shakib", marks: 60, passed: true },
  { name: "Rahim", marks: 45, passed: false },
  { name: "Karim", marks: 80, passed: true },
  { name: "Sadman", marks: 70, passed: true },
];

const findingThefirstStudent = students.find((student) => {
  return student.marks > 67 && student.passed === true;
});
console.log(findingThefirstStudent);

//? ----> use of the reduce

const totalNumber = numbers.reduce((accumulator, number) => {
  return (accumulator += number);
}, 0);
console.log(totalNumber);
