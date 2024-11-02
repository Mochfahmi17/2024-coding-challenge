//* Menggunakan metode if else
// function basicOp(operation, value1, value2) {
//   let result;
//   if (operation === "+") {
//     result = value1 + value2;
//   } else if (operation === "-") {
//     result = value1 - value2;
//   } else if (operation === "*") {
//     result = value1 * value2;
//   } else if(operation === "/") {
//     result = value1 / value2;
//   } else {
//     return;
//   }
//   return result;
// }

//* Menggunakan metode switch :
// function basicOp(operation, value1, value2) {
//   let result;
//   switch (operation) {
//     case "+":
//       result = value1 + value2;
//       break;
//     case "-":
//       result = value1 - value2;
//       break;
//     case "*":
//       result = value1 * value2;
//       break;
//     case "/":
//       result = value1 / value2;
//     default:
//       break;
//   }
//   return result;
// }

//* Metode object :
function basicOp(operation, value1, value2) {
  var cases = {
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2,
  };
  return cases[operation];
}

console.log(basicOp("*", 4, 7));
