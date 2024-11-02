function disemvowel(str) {
  const result = str.replace(/[aiueo]/gi, "");
  return result;
}
console.log(disemvowel("This website is for losers LOL!"));
