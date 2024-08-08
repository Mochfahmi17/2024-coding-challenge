// function removeChar(str) {
//   const strSplit = str
//     .split("")
//     .slice(1, str.length - 1)
//     .join("");
//   return strSplit;
// }

//* Metode lain :
//! Note : slice() digunakan untuk "memotong" atau "mengiris" sebuah array.
// function removeChar(str) {
//   return str.slice(1, -1);
// }

//* Metode satu baris :
const removeChar = (str) => str.slice(1, -1);

console.log(removeChar("eloquent"));
