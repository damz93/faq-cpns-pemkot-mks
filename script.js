const faqs = [
    {question:"Akte menikah", answer:"Nomor di buku nikah"},
    {question:"Akreditasi", answer:"Cek di  di <a href='https://ban-pdm.id/'>link berikut</a> untuk sekolah, di <a href=' https://www.banpt.or.id/direktori/prodi/pencarian_prodi.php'>link berikut</a> di  untuk kampus. jika tidak ada beri saja tanda -"},
    {question:"Lokasi MCU", answer:"Wajib di makassar, rumah sakit pemerintah dan dokternya harus ada NIP"},
    {question:"Perihal Keterangan di SKCK, surat kesehatan jasmani dan rohani serta bebas napza", answer:"Persyaratan Pengangkatan CPNS"},
    {question:"Berkas fisik", answer:"Tidak diperlukan semua softcopy diupload di SSCASN"},
    {question:"Parameter bebas napza", answer:"Tidak ada ketentuan. Boleh tiga (3) atau lebih"},
    {question:"Daftar rumah sakit yang diperbolehkan", answer:"- RS Haji, RS Wahidin,RS Daya, RSUD Sayang Rakyat, RSKD Dadi, RSUD Labuang Baji, RS Bhayangkara,Labkes Makassar"},
    {question:"Lambang dep dalam negeri", answer:"Di lengan sebelah kanan, bisa beli online di <a href=' https://s.shopee.co.id/2VccPfNVt5'>link berikut</a>"},

    {question:"Lambang Kota makassar", answer:"Di lengan sebelah kiri, bisa beli online di <a href='https://s.shopee.co.id/2LJCDQrBzu'>link berikut</a>"},
    {question:"Ketentuan baju seragam", answer:"Senin dan selasa khaki, rabu putih, kamis batik, jumat batik atau bebas"},
    {question:"Baju khaki", answer:"Bisa jahit atau bisa beli jadi di <a href=' https://s.shopee.co.id/40RQCbQ4rS'>link berikut</a>"},
    {question:"Baju putih", answer:"Bisa beli online di <a href='https://s.shopee.co.id/8KaPMcud1D'>link berikut</a>"},
    {question:"Baju korpri", answer:"Dipakai pada saat pelantikan atau penyerahan SK dan setiap tanggal 17 tiap bulan"},
    {question:"Beli baju korpri", answer:"Bisa beli online di <a href='https://s.shopee.co.id/8fDFlMr5eb'>link berikut</a> "},
    {question:"Pin korpri, papan nama, pin phinisi", answer:"Bisa di beli online di <a href='https://s.shopee.co.id/vHRWdSMP'>link berikut</a>"},
    {question:"Pembuatan SKCK", answer:"POLRES maupun POLDA bisa"},
    {question:"Terkait TPP, Pakaian Dinas, Petunjuk pengisian DRH", answer:"boleh dicek di <a href='https://drive.google.com/drive/folders/191HdPTOPDtxQufjKXvzKXpJ0LPC89Imk?usp=sharing'>link berikut</a> "},
    {question:"Perkiraan TMT atau SPMT", answer:"Belum ada informasi"},
    {question:"Pengisian ttd Sehat Jasmani dan Rohani", answer:"tulis tanpa melampirkan gelar penandatangan, sesuai ketentuan"},
    {question:"Meterai/ Materai pada DRH", answer:"tidak ada ketentuan khusus, boleh fisik maupun e-meterai"},
];

// Urutkan berdasarkan huruf pertama dari jawaban (answer)
faqs.sort((a, b) => a.question.localeCompare(b.question));

document.getElementById("searchInput").addEventListener("input", function () {
    let keyword = this.value.toLowerCase();
    let filteredFaqs = faqs.filter(faq => faq.question.toLowerCase().includes(keyword));

    let faqList = document.getElementById("faqList");
    let suggestionBox = document.getElementById("suggestionBox");
    faqList.innerHTML = ""; // Bersihkan daftar sebelumnya

    if (filteredFaqs.length > 0) {
        suggestionBox.classList.add("d-none"); // Sembunyikan link jika ada hasil
        filteredFaqs.forEach(faq => {
            let li = document.createElement("li");
            li.className = "list-group-item";
            li.innerHTML = `<strong>${faq.question}</strong><p class="text-muted small">${faq.answer}</p>`;
            faqList.appendChild(li);
        });
    } else if (keyword !== "") {
        suggestionBox.classList.remove("d-none"); // Tampilkan link jika tidak ada hasil
    } else {
        suggestionBox.classList.add("d-none"); // Sembunyikan jika input kosong
    }
});
