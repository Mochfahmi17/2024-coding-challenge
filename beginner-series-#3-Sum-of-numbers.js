// function getSum(a, b) {
//   const numberA = Math.min(a);
//   const numberB = Math.max(b);

//   const low = [];
//   const high = [];

//   for (let i = numberB; i <= a; i++) {
//     low.push(i);
//   }

//   for (let i = numberA; i <= b; i++) {
//     high.push(i);
//   }

//   const sumA = low.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);

//   const sumB = high.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0);

//   return a === b ? a : sumA + sumB;
// }

// Cara lain
const getSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);

  return ((max - min + 1) * (min + max)) / 2;
};

console.log(getSum(2, 2));
