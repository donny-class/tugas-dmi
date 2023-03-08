// TUGAS JAVASCRIPT

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

// ...Lanjutkan operasi perhitungan untuk unit yang lain...

});
