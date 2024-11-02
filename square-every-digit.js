// function squareDigits(num) {
//   const angka = num;
//   const array = angka.toString().split("").map(Number);
//   const result = array.map((val) => val * val).join("");
//   const resultNumber = Number(result);
//   return resultNumber;
// }

//* Cara lain
function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map((val) => {
        return val * val;
      })
      .join("")
  );
}
console.log(squareDigits(3212));
