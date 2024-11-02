function noSpace(x) {
  //! Note : disini saya menggunakan replace();
  //! Penjelasan : replace(/\s+/g, ""); yang artinya : 1. \s adalah karakter dalam ekspresi reguler yang mencocokkan spasi, termasuk spasi biasa, tab, dan karakter whitespace lainnya
  //!                                                  2. + adalah satu atau lebih karakter yang cocok.
  //!                                                  3. g adalah flag yang menunjukkan bahwa pencocokan harus dilakukan secara global (untuk semua kemunculan).
  const result = x.replace(/\s+/g, "");
  return result;
}
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
