// function countSheeps(sheep) {
//   const count = sheep.filter((item) => item === true);
//   return count.length;
// }

//* Penulisan yang lebih ringkas
function countSheeps(arr) {
  return arr.filter(Boolean).length;
}
console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));
