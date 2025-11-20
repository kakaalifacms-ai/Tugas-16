// fungsi untuk mengecek kelulusan siswa
function cekKelulusan() {
    // ambil nilai dari elemen input
    // diubah menjadi tipe data number
    let nilaiInput = Number(document.getElementById("nilai").value)

    // ambil hadir dari elemen input
    // diubah menjadi tipe data number
    let hadirInput = Number(document.getElementById("hadir").value)

    // membuat variabel untuk menyimpan hasil
    let hasil = ""

    // validasi input kosong
    if (!nilaiInput || !hadirInput) {
        // mengisi variabel hasil dengan pesan peringatan
        hasil = "⚠️ Nilai dan kehadiran harus diisi!"

        // menampilkan hasil ke elemen dengan id hasil
        document.getElementById("hasil").innerHTML = hasil
        document.getElementById("hasil").style.color = "#c0392b"
        return
    }

    // logika pengecekan kelulusan
    if (
        (nilaiInput >= 90 && hadirInput >= 95) || // keduanya tinggi
        (nilaiInput >= 95 && hadirInput >= 80) || // nilai sangat tinggi + hadir cukup
        (nilaiInput >= 75 && hadirInput >= 98)    // nilai cukup + hadir sangat tinggi
    ) {
        // kelulusan dengan bonus
        hasil = "🎉 Lulus dengan Bonus!"
    } else if (nilaiInput >= 80 && hadirInput >= 85) {
        // kelulusan standar
        hasil = "✅ Lulus."
    } else {
        // tidak lulus
        hasil = "❌ Tidak Lulus."
    }

    // tampilkan hasil ke elemen dengan id hasil
    document.getElementById("hasil").innerHTML = hasil
}