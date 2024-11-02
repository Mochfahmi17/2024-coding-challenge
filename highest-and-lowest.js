// function highAndLow(numbers) {
//   const digits = numbers.split(" ").sort((a, b) => a - b);
//   return `${digits[digits.length - 1]} ${digits[0]}`;
// }

//* cara lain
function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
