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
    faqList.innerHTML = ""; // Bersihkan daftar sebelumnya

    filteredFaqs.forEach(faq => {
        let li = document.createElement("li");
        li.className = "p-3 bg-gray-200 rounded-md";
        li.innerHTML = `<strong>${faq.question}</strong><p class="text-sm text-gray-600">${faq.answer}</p>`;
        faqList.appendChild(li);
    });

    if (filteredFaqs.length === 0 && keyword !== "") {
        faqList.innerHTML = `<p class="text-gray-500">Tidak ada hasil yang ditemukan.</p>`;
    }
});
