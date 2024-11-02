// Cara saya
// function descendingOrder(n) {
//   const angka = n
//     .toString()
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
//   return parseInt(angka);
// }

// cara lain
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

console.log(descendingOrder(1021));
