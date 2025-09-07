const numbers = [12, 10, 7, 9, 19, 25];

let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log(`The Summiation of the number is : ${sum}`);

const total = numbers.reduce((total, element) => (total += element));
console.log(total);
