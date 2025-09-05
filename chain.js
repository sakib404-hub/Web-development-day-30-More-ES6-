const student = {
  name: "Rafid",
  1: 50,
  "home-address": "Kochukhet",
  marks: 90,
  family: {
    title: "bhuiyan",
    mother: {
      //   name: "Nur Jahan",
      //   age: 45,
    },
  },
};

console.log(student);
console.log(student.family);
console.log(student.family.mother);
console.log(student.family.mother?.name);
console.log(student.family.mother?.age);
