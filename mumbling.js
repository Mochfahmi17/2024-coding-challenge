function accum(s) {
  const alphabet = s.split("").map((char, i) => char.toUpperCase() + char.toLowerCase().repeat(i));
  const result = alphabet.join("-");
  return result;
}

console.log(accum("ZpglnRxqenU"));
