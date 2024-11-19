function maskify(cc) {
  const number = cc.split("");

  for (let i = 0; i < number.length; i++) {
    if (i < number.length - 4) {
      number[i] = "#";
    }
    number[i];
  }

  return number.join("");
}

// Cara lain
// function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
// }

console.log(maskify("4556364607935616"));
