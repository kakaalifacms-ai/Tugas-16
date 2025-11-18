// Fungsi untuk mengecek kelulusan siswa
function cekkelulusan() {
  // ambil nilai dari eleman input
  let nilaiInput = Number(document.getElementById("nilai").value);
  
  //ambil hadir dari elemen input
  // di ubah menjadi tipe  data number
  let hadirInput = Number(document.getElementById("hadir").value);
  
  // membuat variabel untuk menyimpan hasil
  let hasil = "";
  
  // varlidasi input kosong
  if (nilaiInput || !hadirInput) {
    hasil = "⚠️Nilai dan kehadiran harus diisi"
    
    document.getElementById("hasil").innerHTML = hasil
    return
  }
  
} 