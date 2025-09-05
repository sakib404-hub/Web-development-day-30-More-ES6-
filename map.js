const numbers = [4, 8, 2, 3, 5];
/**
 * now my task is to double every number and store again to the array
 */

const doubles = [];
for (let number of numbers) {
  const result = number * 2;
  doubles.push(result);
}
console.log(numbers);
console.log(doubles);

//we can do it with the mapping also
// Way - 1
const doubleit = (x) => {
  return x * 2;
};
const doubled = numbers.map(doubleit);

// Way - 2
const doubled2 = numbers.map((x) => x * 2);

console.log(doubled);
console.log(doubled2);

const fiveTimes = numbers.map((num) => num * 5);
console.log(fiveTimes);

const squareOfFiveTimes = fiveTimes.map((num) => num * num);
console.log(squareOfFiveTimes);

const friends = ["Shuvo", "Badsha", "Rohan", "Batal", "Rafi"];
const nameLength = friends.map((name) => name.length);
const firstLatter = friends.map((name) => name[0].toLocaleLowerCase());
console.log(firstLatter);
console.log(nameLength);

//multiline mapping
const result = numbers.map((number, index) => {
  console.log(number * index);
});
