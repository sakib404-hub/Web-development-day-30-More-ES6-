/**
 * Map works on every elemenst of an array where as
 * Filter works on some basic and some needy condition
 * if the element of the array passes that condition
 * therefore the element is returned
 */
const numbers = [1, 5, 6, 10, 45, 2, 7];
const greaterThenTen = numbers.filter((number) => {
  if (number > 10) {
    return number;
  }
});
console.log(greaterThenTen);

const lessThenNine = numbers.filter((number) => {
  if (number < 50 && number > 2) {
    return number;
  }
});
console.log(lessThenNine);

const evenNumbers = numbers.filter((number) => {
  if (number % 2 == 0) {
    return number;
  }
});
console.log(evenNumbers);
