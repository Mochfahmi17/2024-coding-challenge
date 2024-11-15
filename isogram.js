function isIsogram(str) {
  const normalTeks = str.toLowerCase();
  const teks = new Set(normalTeks);
  return teks.size === str.length;
}

console.log(isIsogram("Aba"));
