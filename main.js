//fungsi untuk mengecek kelulusan siswa
function cekKelulusan() {
//ambil nilai dari elemen input
let nilaiInput = Number(document.getElementById("nilai").value);

//ambil hadir dari elemen input
//diubah menjadi tipe data number
let hadirInput = Number(document.getElementById("hadir").value);

// membuat variabel untuk menyimpan hasil
let hasil ="";

// validasi input kosong
if (!nilaiInput || !hadirInput) {
  //mengisi variabel hasil dengan pesan peringatan
  hasil ="⚠️ Nilai dan kehadiran harus diisi"

// menampilkan hasil ke elemen dengan id hasil
  document.getElementById("hasil").innerHTML = hasil
  document.getElementById("hasil").style.color ="#c0392b"
  return
}
//logika pengecekan kelulusan 
if(
  (nilaiInput >= 90 && hadirInput >= 95) ||
  (nilaiInput >= 95 && hadirInput >= 80) ||
  (nilaiInput >=75 && hadirInput >=98)
){
  // kelulusan dengan bonus
  hasil = "🎉 Lulus dengan Bonus!"
  document.getElementById("hasil").style.color ="#3498db"
} else if (nilaiInput >= 80 && hadirInput >= 85) {
  //kelulusan standar 
  hasil ="✅ Lulus"
  document.getElementById("hasil").style.color ="#C45FB8"
} else {
  //tidak lulus
  hasil ="❌ Tidak Lulus"
  document.getElementById("hasil").style.color ="#c0392b"
}

// tampilkan hasil ke elemen dengan id hasil
document.getElementById("hasil").innerHTML = hasil
}