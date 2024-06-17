// function DNAtoRNA(dna) {
//   // create a function which returns an RNA sequence from the given DNA sequence
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "T") {
//       rna += "U";
//     } else {
//       rna += dna[i];
//     }
//   }
//   return rna;
// }

// menggunakan ternary
// function DNAtoRNA(dna) {
//     let rna = '';
//     for (let i = 0; i < dna.length; i++) {
//         rna += (dna[i] === "T") ? "U" : dna[i];
//     }
//     return rna;
// }

// Menggunakan Split()
function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}

// menggunakan map()
// function DNAtoRNA(dna) {
//   return dna
//     .split("")
//     .map((m) => {
//       if (m === "T") {
//         return "U";
//       } else {
//         return m;
//       }
//     })
//     .join("");
// }

// Menggunakan replace()
// const DNAtoRNA = (dna) => dna.replace(/T/g, "U");
// const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

// Short Code
// const DNAtoRNA = (dna) => {
//   return dna
//     .split("")
//     .map((m) => (m === "T" ? "U" : m))
//     .join("");
// };

console.log(DNAtoRNA("TTTT"));
