function spinWords(string) {
  const str = string.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i];
    if (str[i].length >= 5) {
      str[i] = str[i].split("").reverse().join("");
    }
  }
  return str.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
