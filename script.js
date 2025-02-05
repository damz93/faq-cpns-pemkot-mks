const faqs = [
    { question: "Bagaimana cara reset password?", answer: "Klik 'Lupa Password' di halaman login dan ikuti petunjuknya." },
    { question: "Berapa lama pengiriman barang?", answer: "Pengiriman biasanya memakan waktu 2-5 hari kerja." },
    { question: "Bagaimana cara menghubungi layanan pelanggan?", answer: "Anda bisa menghubungi kami melalui email atau WhatsApp." },
    { question: "Apakah ada garansi produk?", answer: "Ya, kami menyediakan garansi selama 1 tahun untuk produk tertentu." },
];

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