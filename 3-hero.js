// function hero(bullets, dragons) {
//   //* Note : Pengkondisian itu memiliki nilai thruthy / falsy
//   if (bullets / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

//* Short Codenya
// function hero(bullets, dragons) {
//   return bullets / 2 >= dragons;
// }

//* Lebih singkat lagi
const hero = (bullets, dragons) => bullets / 2 >= dragons;
console.log(hero(10, 5));
