const portfolioItems = [
  {
    title: "Apartemen Minimalis",
    tag: "Residensial",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Lobby Kantor Modern",
    tag: "Komersial",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Kafe Industrial",
    tag: "Hospitality",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Rumah Tropis Hangat",
    tag: "Residensial",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Co-working Vibrant",
    tag: "Komersial",
    img: "https://images.unsplash.com/photo-1524758631624-997e61f3db93?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Boutique Hotel",
    tag: "Hospitality",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1600&auto=format&fit=crop",
  },
];

const grid = document.getElementById("portfolioGrid");
const renderPortfolio = (filter = "all") => {
  grid.innerHTML = "";
  portfolioItems
    .filter((item) => filter === "all" || item.tag === filter)
    .forEach((item) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <h4>${item.title}</h4>
        <p>${item.tag}</p>
      `;
      grid.appendChild(div);
    });
};
renderPortfolio();

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderPortfolio(btn.dataset.filter);
  });
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".nav-links a")
      .forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

const sections = document.querySelectorAll("section");
const navLinksA = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60; // sesuaikan tinggi navbar
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinksA.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// nomor WA admin (ganti dengan nomor kamu, pakai kode negara tanpa +)
const adminNumber = "6281381300825";

// ambil semua tombol order
const orderButtons = document.querySelectorAll(".btn-order");

orderButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault(); // supaya tidak reload halaman

    const packageName = this.getAttribute("data-package");
    const packagePrice = this.getAttribute("data-price");

    const message = `Halo Min, saya ingin memesan Paket Jasa Interior ${packageName} (${packagePrice})`;

    // encode pesan biar aman untuk URL
    const encodedMessage = encodeURIComponent(message);

    // arahkan user ke WhatsApp
    const waUrl = `https://wa.me/${adminNumber}?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
  });
});

// menu bar

const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // tampil/slide-in dari kanan
  hamburger.classList.toggle("open"); // animasi X
});

const Number = "6281381300825";

// Ambil elemen
const konsultasiBtn = document.querySelector(".kontak");
const modal = document.getElementById("konsultasiModal");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("konsultasiForm");

// Buka modal saat klik tombol
konsultasiBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "flex";
});

// Tutup modal saat klik close
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Tutup modal jika klik luar konten
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Kirim data ke WhatsApp
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const wa = document.getElementById("wa").value;
  const email = document.getElementById("email").value;

  // validasi Nomor Wa
  if (!/^\d{10,13}$/.test(wa)) {
    alert("Nomor Wa minimal 10-13 Digit, contoh: 08123456789");
    return;
  }

  // validasi email
  if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
    alert(
      "Email harus menggunakan format yang benar dan yang dapat di hubungi, contoh: nama@gmail.com"
    );
    return;
  }
  const message = `Hallo Min, saya ingin konsultasi funiture dengan menggunakan Jasa Rumah Tasik.%0A
Nama: ${nama}%0A
WA: ${wa}%0A
Email: ${email}`;

  const waUrl = `https://wa.me/${Number}?text=${message}`;
  window.open(waUrl, "_blank");
});
