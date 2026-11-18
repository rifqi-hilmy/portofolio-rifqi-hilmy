# Portofolio — Muhamad Rifqi Hilmy Apriadi

Website portofolio statis untuk **Muhamad Rifqi Hilmy Apriadi** — Full Stack Developer
& System Analyst dari Bandung, Indonesia.

Isinya sama persis dengan versi website yang sudah jadi: Hero, Tentang, Skills,
Pengalaman, 7 Proyek (termasuk Loan Origination System), Pendidikan, Sertifikat BNSP
Junior Web Programmer, dan Kontak (email, LinkedIn, WhatsApp, dan tombol Download CV
yang mengunduh PDF CV asli).

Teknologi: HTML, CSS, dan JavaScript murni — tanpa framework dan tanpa proses build.
Semua konten dan data berasal dari CV Rifqi; tidak ada angka atau klaim yang dikarang.

## Struktur folder

```
portofolio-rifqi-hilmy/
├── index.html          # Seluruh halaman (satu halaman + detail proyek)
├── css/
│   └── style.css       # Semua gaya (termasuk mode gelap/terang)
├── js/
│   └── main.js         # Menu mobile, filter proyek, detail proyek, form email
├── assets/
│   ├── foto-rifqi.jpg                          # Foto profil (latar netral)
│   └── CV-Muhamad-Rifqi-Hilmy-Apriadi.pdf      # CV asli (untuk tombol Download CV)
├── README.md
├── vercel.json         # Konfigurasi situs statis Vercel (tanpa build)
└── .gitignore
```

## Menjalankan di lokal

Pastikan berada di dalam folder `portofolio-rifqi-hilmy/`, lalu pilih salah satu:

```bash
# Python (paling mudah)
python3 -m http.server 8000

# atau Node.js
npx serve .
```

Lalu buka `http://localhost:8000` di browser.

> Jangan membuka `index.html` langsung dengan klik ganda (file://) — beberapa
> fitur (misalnya unduhan CV) bekerja paling baik saat disajikan lewat server lokal.

## Push ke GitHub

```bash
cd portofolio-rifqi-hilmy
git init
git add .
git commit -m "Portofolio Rifqi Hilmy"
git branch -M main
git remote add origin https://github.com/rifqi-hilmy/portofolio-rifqi-hilmy.git
git push -u origin main
```

Ganti nama repo di atas bila memakai nama lain.

## Deploy di Vercel

1. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub.
2. Pilih **Add New → Project**, lalu **Import** repo di atas.
3. **Framework Preset:** pilih **Other**.
4. **Build Command** dan **Output Directory:** kosongkan (tidak ada proses build).
5. Klik **Deploy**.

Vercel akan memberikan URL `https://<nama-proyek>.vercel.app`. Domain sendiri bisa
dihubungkan belakangan dari menu **Settings → Domains** di proyek Vercel tersebut.

Setiap `git push` ke branch `main` akan otomatis di-deploy ulang oleh Vercel.
