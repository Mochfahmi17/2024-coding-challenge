// function XO(str) {
//   const teks = str.toLowerCase();
//   const countX = teks.split("x").length - 1;
//   const countO = teks.split("o").length - 1;

//   return countX === countO;
// }

// Cara lain
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

console.log(XO("xxoooX"));
