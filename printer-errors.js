function printerError(s) {
  const y = s.length;
  const x = s.split("").filter((char) => char < "a" || char > "m").length;
  return `${x}/${y}`;
}

console.log(printerError("aaaaaaaaaaaaaaavabbbbbbbbbbbbbbbbbblmmmmmmmmmmmmmmmmmmmxyz"));
