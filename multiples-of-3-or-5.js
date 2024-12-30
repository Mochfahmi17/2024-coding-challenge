function solution(number) {
  let total = 0; //* ini ertugas untuk inisialisasi varibel untuk menyimpan total jumlah
  for (let i = 0; i < number; i++) {
    //* ini adalah iterasi dari 0 hingga angka dibawah 'number'
    if (i % 3 == 0 || i % 5 == 0) {
      //* Periksa apakah i kelipatan 3 atau 5
      total += i; //* Jika memenuhi syarat i akan dimasukkan kedalam variabel total
    }
  }
  return total; //* kembalikan jumlah total
}

console.log(solution(15));
