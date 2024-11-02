function getMiddle(s) {
  const teks = s.length / 2;
  let getMiddleChar = s.length % 2 == 0 ? s.slice(teks - 1, teks + 1) : s.slice(Math.floor(teks), Math.floor(teks) + 1);
  return getMiddleChar;
}
console.log(getMiddle("pensil"));
