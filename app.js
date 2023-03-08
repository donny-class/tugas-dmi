// TUGAS JAVASCRIPT

/* Petunjuk:
   1. Lanjutkan dan selesaikan penulisan aplikasi konversi untuk "panjang" di bawah ini.
   2. Pastikan setiap konversi berjalan dengan sesuai.
   3. Ubah penulisan Javascript yang sudah berjalan menjadi Jquery dan pastikan tetap aman dan berikan tampilan yang menarik menggunakan CSS (nilai tambah).
   4. Buat repository pada akun github yang sudah kalian buat dengan nama "tugas-dmi" (tanpa tanda kutip) dan isi deskripsi repo dengan nama lengkap dan kelas.
   5. Upload file index, app, dan jquery ke dalam repository yang sudah dibuat.
   6. Klik "watch" pada repository "github.com/donny-class/tugas-konversi" untuk menandakan telah upload tugas ke repo github masing-masing.
   7. Referensi bisa dilihat pada repository "github.com/donny-class/simple-calculator".
   8. Terima kasih, Happy coding!
*/

// SOAL
// Silakan lengkapi kode javascript konversi untuk "panjang" berikut:

var tombol = document.querySelector("#btnHitung");

tombol.addEventListener("click", function () {
// Buat variable yang isinya "selector" dari element, variable akan dipakai untuk logika operasi hitung



// Buat logika operasi hitung
// Contoh jika km menjadi hm
  if (op1 == 1 && op2 == 2) {
    hasil.value = parseInt(num) * 10;
  }

// Contoh jika km menjadi m
  if (op1 == 1 && op2 == 4) {
    hasil.value = parseInt(num) * 1000;
  }

// Contoh jika hm menjadi km
  if (op1 == 2 && op2 == 1) {
    hasil.value = parseInt(num) / 10;
  }

// ...Lanjutkan operasi perhitungannya...

});
