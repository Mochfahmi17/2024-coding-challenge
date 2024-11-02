//* Cara saya :
function getCount(str) {
  const result = str.split("").filter((a) => {
    if (a == "a" || a == "i" || a == "e" || a == "o" || a == "u") {
      return a;
    }
  });
  return result.length;
}

console.log(getCount("abracadabra"));
