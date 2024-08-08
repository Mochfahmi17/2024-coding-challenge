function squareSum(numbers) {
  const total = numbers
    .map((item) => item ** 2)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  return total;
}
console.log(squareSum([0, 3, 4, 5]));
