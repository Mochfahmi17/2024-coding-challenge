function sumTwoSmallestNumbers(numbers) {
  const number = numbers.sort((a, b) => a - b);
  const sum = number[0] + number[1];

  return sum;
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
