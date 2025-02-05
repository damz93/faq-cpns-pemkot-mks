document.getElementById("searchInput").addEventListener("input", function () {
    let keyword = this.value.toLowerCase();
    let filteredFaqs = faqs.filter(faq => faq.question.toLowerCase().includes(keyword));

    let faqList = document.getElementById("faqList");
    let suggestionBox = document.getElementById("suggestionBox");
    faqList.innerHTML = ""; // Bersihkan daftar sebelumnya

    if (filteredFaqs.length > 0) {
        suggestionBox.classList.add("hidden"); // Sembunyikan link jika ada hasil
        filteredFaqs.forEach(faq => {
            let li = document.createElement("li");
            li.className = "p-3 bg-gray-200 rounded-md";
            li.innerHTML = `<strong>${faq.question}</strong><p class="text-sm text-gray-600">${faq.answer}</p>`;
            faqList.appendChild(li);
        });
    } else if (keyword !== "") {
        suggestionBox.classList.remove("hidden");
        suggestionBox.classList.add("block"); // Tampilkan link jika tidak ada hasil
    } else {
        suggestionBox.classList.add("hidden"); // Sembunyikan jika input kosong
    }
});
