const portfolioItems = [];

for (let i = 1; i <= 4; i++) {
  portfolioItems.push({
    title: "Lobby",
    tag: "Lobby",
    img: `/img/Lobby/lobby${i}.jpeg`,
  });
}

for (let i = 1; i <= 22; i++) {
  portfolioItems.push({
    title: "Ruang Kerja",
    tag: "Ruang-Kerja",
    img: `/img/R.kerja/kerja${i}.jpeg`,
  });
}

for (let i = 1; i <= 16; i++) {
  portfolioItems.push({
    title: " Ruang Keluarga dan Tamu",
    tag: "Ruang-Keluarga-dan-Tamu",
    img: `/img/R.keluargadantamu/kt${i}.jpeg`,
  });
}

for (let i = 1; i <= 2; i++) {
  portfolioItems.push({
    title: "Lemari",
    tag: "Lemari",
    img: `/img/lemari/l${i}.jpeg`,
  });
}

for (let i = 1; i <= 39; i++) {
  portfolioItems.push({
    title: "Bedroom",
    tag: "Bedroom",
    img: `/img/Bedroom/bd${i}.jpeg`,
  });
}

for (let i = 1; i <= 18; i++) {
  portfolioItems.push({
    title: "Kamar-Mandi",
    tag: "Kamar-Mandi",
    img: `/img/Kamarmandi/km${i}.jpeg`,
  });
}

for (let i = 1; i <= 35; i++) {
  portfolioItems.push({
    title: "Partisi",
    tag: "Partisi",
    img: `/img/Partisi/p${i}.jpeg`,
  });
}

for (let i = 1; i <= 75; i++) {
  portfolioItems.push({
    title: "Kitchenset",
    tag: "Kitchenset",
    img: `/img/R.kitchen/rk${i}.jpeg`,
  });
}

for (let i = 1; i <= 29; i++) {
  portfolioItems.push({
    title: "Plafon",
    tag: "Plafon",
    img: `/img/Platfon/pl${i}.jpeg`,
  });
}

for (let i = 1; i <= 38; i++) {
  portfolioItems.push({
    title: "Wallmouding",
    tag: "Wallmouding",
    img: `/img/Wallmouding/wm${i}.jpeg`,
  });
}

for (let i = 1; i <= 42; i++) {
  portfolioItems.push({
    title: "Wallpanel",
    tag: "Wallpanel",
    img: `/img/Wallpanel/wp${i}.jpeg`,
  });
}

for (let i = 1; i <= 48; i++) {
  portfolioItems.push({
    title: "Backdrop",
    tag: "Backdrop",
    img: `/img/Backdrop/b${i}.jpeg`,
  });
}

const grid = document.getElementById("portfolioGrid");

const renderPortfolio = (filter = null) => {
  grid.innerHTML = "";

  if (!filter) {
    return;
  }

  portfolioItems
    .filter((item) => {
      if (!filter) return false; // kalau null → kosongkan
      if (filter === "all") return true; // kalau "all" → tampilkan semua
      return item.tag === filter; // selain itu filter sesuai tag
    })
    .forEach((item) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <h4>${item.title}</h4>
      `;

      const imgEl = div.querySelector("img");
      imgEl.addEventListener("click", () => openModal(item.img));

      grid.appendChild(div);
    });
};

// render semua saat awal
// renderPortfolio("all");

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const isActive = btn.classList.contains("active"); // cek dulu aktif/tidak

    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));

    if (isActive) {
      // kalau diklik lagi (sudah aktif) → kosongkan grid
      renderPortfolio(null);
    } else {
      // aktifkan filter baru
      btn.classList.add("active");
      renderPortfolio(btn.dataset.filter);
    }
  });
});

// ==== PORTFOLIO GRID + MODAL ====
const portfolioGrid = document.getElementById("portfolioGrid");
const portfolioModal = document.getElementById("portfolioModal");
const modalImg = document.getElementById("modalImage");
const closePortfolio = portfolioModal.querySelector(".close");

let currentIndex = 0;
let currentGroup = [];

function openModal(src) {
  portfolioModal.style.display = "flex";
  modalImg.src = src;
}

closePortfolio.addEventListener(
  "click",
  () => (portfolioModal.style.display = "none")
);

portfolioModal.addEventListener("click", (e) => {
  if (e.target === portfolioModal) portfolioModal.style.display = "none";
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
