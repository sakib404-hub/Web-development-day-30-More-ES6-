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
