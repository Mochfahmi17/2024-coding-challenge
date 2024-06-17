// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (distanceToPump / mpg <= fuelLeft) {
//     return true;
//   } else {
//     return false;
//   }
// };

// versi dikali
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if (fuelLeft * mpg >= distanceToPump) {
//         return true;
//     } else {
//         return false;
//     }
// }

// versi short code
const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft;

console.log(zeroFuel(50, 25, 2));
