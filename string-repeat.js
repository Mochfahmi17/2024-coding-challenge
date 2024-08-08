function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

//* Metode lain :
//! Note : cara ini menggunakana metode repeat() yang fungsinya untuk mengulang sebuah string sebanyak yang kita inginkan dan menghasilkan sebuah string baru.
// function repeatStr(n, s) {
//   return s.repeat(n);
// }

//* Metode penulisan satu baris :
repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(5, "#"));
