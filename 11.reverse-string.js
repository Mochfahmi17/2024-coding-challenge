// function solution(str) {
//   const splitString = str.split("");
//   const reverseString = splitString.reverse();
//   const joinArray = reverseString.join("");
//   return joinArray;
//   //! Note : 1. function reverse() Digunakan untuk membalikkan kata pada array
//   //!        2. function join() ini digunakan untuk menggabungkan array menjadi string
// }

//* Cara lain :
//! Note : ini menggunakan metode nested
// function solution(str) {
//   return str.split("").reverse().join("");
// }

//! Note : ini cara penulisan satu baris
const solution = (str) => str.split("").reverse().join("");

console.log(solution("world"));
