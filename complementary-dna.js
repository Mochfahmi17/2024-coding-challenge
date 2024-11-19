function dnaStrand(dna) {
  const dnaObject = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  const myDna = dna
    .split("")
    .map((item) => dnaObject[item])
    .join("");

  return myDna;
}

console.log(dnaStrand("ATTGC"));
