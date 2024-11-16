function findShort(s) {
  const word = s.split(" ").map((word) => word.length);
  const wordShort = word.sort((a, b) => a - b);

  return wordShort[0];
}

// Cara lain
// function findShort(s) {
//   const word = s.split(" ").map((word) => word.length);
//   const wordShort = Math.min(...word);

//   return wordShort;
// }

// Cara ringkas
// function findShort(s) {
//   return Math.min(...s.split(" ").map((s) => s.length));
// }
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
