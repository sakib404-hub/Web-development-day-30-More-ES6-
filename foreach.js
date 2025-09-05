const numbers = [1, 5, 6, 10, 45, 2, 7];

/**
 * if we need results we would be using the mapping
 * but if we do not need any result depending on the current
 * array therefore we would be using thr FOREACH
 */

// numbers.forEach((number) => number * 2);

//foreach will not provide any answer or return any value
numbers.forEach((number) => {
  const double = number * 2;
  console.log(double);
});

// For each with multiple peraeter

numbers.forEach((number, index) => {
  const multiplicationvalue = number * index;
  console.log(multiplicationvalue);
});
