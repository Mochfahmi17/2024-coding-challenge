// Cara saya
var isSquare = function (n) {
  for (let i = 0; i <= n; i++) {
    if (i ** 2 == n) {
      return true;
    }
  }
  return false;
};

// Cara lain
// function isSquare(n) {
//   return Math.sqrt(n) % 1 === 0;
// }
console.log(isSquare(0));
