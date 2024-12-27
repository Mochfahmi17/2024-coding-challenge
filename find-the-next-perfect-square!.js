const findNextSquare = (sq) => {
  const sqrt = Math.sqrt(sq);
  return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
};

// Cara lain
// function findNextSquare(sq) {
//   return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
// }

console.log(findNextSquare(121));
