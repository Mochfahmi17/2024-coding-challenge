// function makeNegative(num) {
//   if (num < 0) {
//     return num;
//   } else {
//     return num - num - num;
//   }
// }

function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return -num;
  }
}

// function makeNegative(num) {
//   return -Math.abs(num);
// }

console.log(makeNegative(12));
