/**
 * value of the constant variable can not be change overtime if we change
 * it over time it will give us error
 * var let const
 */
const tax = 5000;
const eta = 5;

// default perameter
function addition(num1 = 0, num2 = 0) {
  return num1 + num2;
}
//template String known as the backtick
const student = {
  name: "Nayeem",
  marks: 50,
};

let dyanmicTax = `Value of the tax is ${tax} and the marks is ${
  student.marks + 1.2
}`;
console.log(dyanmicTax);

const friends = ["abul", "babul", "cabul", "dabul", "kabul"];
console.log(
  `Sakib Has Some friends naming with ${friends[0]}, ${friends[1]} and others`
);

const innerHtml = `
<div>
    <h1> Hellow : ${friends[0]} </h1>
</div>`;
console.log(innerHtml);

/**
 * Arrow Function
 */

const substraction = (numbberOne = 0, numberTwo = 0) => {
  const sub = numbberOne - numberTwo;
  return sub;
};
console.log(substraction(10, 23));

/**
 * Spread operator
 */
const newFriends = [...friends, "Munia ", "Sinthiya", "Others"];
console.log(newFriends);

/**
 * Destructuring
 */
const { marks: total_marks } = student;
// console.log(name);
// console.log(marks);
console.log(total_marks);
student.age = 28; //Inserting another property for the student object
const { age: student_age } = student;
console.log(student_age);

/**
 *Looping through an object
 */

const employee = {
  name: "Shakib",
  designation: "Junior Web Developer",
  age: 22,
  salary: 20000,
  experience: 1,
};

const keys = Object.keys(employee);
const value = Object.values(employee);
const keyValue = Object.entries(employee);

// way -1
for (let key in employee) {
  const value = employee[key];
  console.log(key, " : ", value);
}

// way - 2
for (let key of keys) {
  const value = employee[key];
  console.log(key, " : ", value);
}

// way - 3
const keyValues = Object.entries(employee);
for (let [key, value] of keyValues) {
  console.log(key, ":", value);
}
