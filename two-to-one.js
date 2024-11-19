function longest(s1, s2) {
  const teks = s1 + s2;
  const alphabet = teks.split("").sort();
  const unique = new Set(alphabet);
  const uniqueAlphabet = [...unique];

  return uniqueAlphabet.join("");
}

// Cara lain
// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
