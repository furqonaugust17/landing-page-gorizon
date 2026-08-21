# Konteks Percakapan — Bisnis "Gorizon" (IT Consultant)

**Tujuan file ini:** Rangkuman lengkap percakapan tentang pembangunan bisnis IT Consultant milik Furqon, mulai dari proses penamaan bisnis hingga penyusunan PRD landing page. File ini dibuat agar konteks tidak hilang saat pindah sesi chat.

---

## 1. Latar Belakang Founder

- Nama: **Furqon** (nama lengkap sebelumnya disebut: *Furqon August Seventeenth*)
- Sebelumnya pernah membuat merek dengan nama **"Furqon Tech Development"**
- Ingin membangun bisnis **IT Consultant**, dimulai dari **freelance**
- Layanan utama yang dipilih: **Software/Web Development** dan **IT Strategy & Consulting**

---

## 2. Proses Penamaan Bisnis

### Kriteria awal yang diinginkan:
- Bidang: Jasa/teknologi digital → lebih spesifik: **IT Consultant**
- Vibe: **Modern & simpel**
- Target pasar: **Umum/semua kalangan**
- Nama harus **memiliki arti/makna di baliknya**, tapi tetap terdengar modern & profesional
- Nilai yang ingin direpresentasikan: **transparan, jujur, dapat dipercaya, profesional**
- Sempat ingin menyelipkan unsur nama pribadi (Furqon/FAS/17 Agustus) secara halus, namun akhirnya memilih nama yang lepas dari unsur personal
- Sempat eksplorasi nama-nama dari bahasa Latin (Veritas, Fides, Clarus, dll), Sanskerta (Satya, Wiweka, Medha, Sthira, dll), dan nama "di luar nalar" (Paradoks, Petrichor, Umbra, dll)
- Banyak nama pilihan sudah dipakai orang lain / domain tidak tersedia

### Nama final yang dipilih:
## **GORIZON**
(gabungan makna "Go" + "Horizon" — melambangkan pergerakan maju dan visi/cakrawala masa depan)

- **Domain:** sudah dimiliki oleh Furqon (detail domain belum disebutkan di percakapan)

---

## 3. Company Profile / Landing Page — Kebutuhan Awal

Furqon awalnya meminta dibuatkan company profile (untuk membangun kepercayaan calon klien), namun akhirnya diarahkan ke pembuatan **PRD (Product Requirements Document)** untuk landing page terlebih dahulu.

**Instruksi khusus dari Furqon:**
- Identitas dasar: **perlu**, tapi **alamat/domisili tidak perlu** dicantumkan
- Informasi profil founder (personal): **tidak perlu** ditampilkan di landing page
- Fokus layanan: **Software/Web Development** dan **IT Strategy & Consulting**
- Jumlah proyek yang ingin ditampilkan: **3-5 proyek**

---

## 4. PRD Landing Page Gorizon — Status: FINAL (v1.1)

**File PRD lengkap sudah dibuat:** `PRD_Landing_Page_Gorizon.md` (tersedia di outputs)

### Ringkasan isi PRD:

**Headline (final):**
> "Konsultasi IT yang Transparan dan Tepercaya untuk Bisnis Anda"

**Tagline (final):**
> "Mempermudah Bisnis Anda, dengan Cara yang Transparan"

**Struktur halaman landing page:**
1. Header/Navigation — logo (sementara pakai icon placeholder dari Lucide Icons hingga logo vector asli tersedia), menu (Tentang, Layanan, Proyek, Kontak), CTA button
2. Hero Section — headline, sub-headline, CTA utama
3. Tentang Gorizon — draft teks sudah tersedia di PRD, tanpa profil founder personal
4. Layanan — 2 card: Software/Web Development & IT Strategy Consulting (draft deskripsi sudah tersedia)
5. Proyek/Portofolio — template card sudah dirancang (thumbnail, nama proyek, kategori, deskripsi, teknologi, hasil/dampak, link opsional); **konten proyek akan diisi mandiri oleh Furqon**
6. Testimoni Klien (opsional, menyusul)
7. Cara Kerja/Proses — 4 tahap (Konsultasi awal → Analisis & proposal → Pengerjaan → Delivery & support)
8. FAQ Section (baru, ditambahkan untuk mendukung GEO) — 4 draft pertanyaan, satu di antaranya (durasi rata-rata pengerjaan) masih perlu diisi Furqon
9. CTA Section akhir
10. Footer — logo, tagline, kontak, sosial media

**Palet warna (saran, final sampai logo tersedia):**
- Primary: Navy/Deep Blue (`#0F1B3C` – `#1E3A8A`)
- Secondary: Putih/Off-white (`#FFFFFF` / `#F8FAFC`)
- Aksen: Cyan/Teal (`#06B6D4`)

**Font (saran):**
- Heading: Poppins atau Sora
- Body text: Inter

**Tech stack (final):**
- Frontend: **React**
- Styling: **Tailwind CSS**
- Icon: **Lucide Icons** (sementara pengganti logo)
- Hosting: **Vercel**
- Form handling: **Formspree**
- Domain: sudah dimiliki Furqon

**SEO & GEO Requirements (ditambahkan di PRD):**
- SEO: meta title/description, semantic HTML, alt text, sitemap/robots.txt, Open Graph tags, structured data (Schema.org — Organization & ProfessionalService), kecepatan loading < 3 detik, mobile-first
- GEO (Generative Engine Optimization — supaya mudah dikutip AI search seperti ChatGPT/Google AI Overview/Perplexity): jawaban langsung di awal paragraf, format terstruktur (list/tabel), konten faktual (hindari klaim vague), FAQ section, konsistensi entitas nama & deskripsi brand di seluruh halaman

---

## 5. Data yang MASIH PERLU Diisi oleh Furqon (belum tersedia sampai saat ini)

- [ ] **Email bisnis** — akan diisi mandiri
- [ ] **Nomor WhatsApp bisnis** — akan diisi mandiri
- [ ] **Logo vector (.ai/.svg)** — akan diberikan menyusul, sementara pakai icon placeholder
- [ ] **Detail 3-5 proyek** (nama, deskripsi, teknologi, hasil/dampak, screenshot) — akan diisi mandiri, struktur card sudah siap
- [ ] **Testimoni klien** (opsional)
- [ ] **Jawaban FAQ:** "Berapa lama proses pengerjaan proyek?" — perlu diisi Furqon sesuai pengalaman rata-rata

---

## 6. Pertanyaan yang Sedang Dibahas (belum final di titik file ini dibuat)

- Diskusi tentang **latar belakang bisnis** — Claude bertanya balik ke Furqon apakah maksudnya:
  1. Latar belakang **visual/desain** (background hero section) — sudah diberi beberapa opsi: gradient navy, pola grid/dot subtle, abstract geometric shapes, atau mesh gradient dengan animasi ringan. Foto stok generik tidak disarankan.
  2. Latar belakang **cerita bisnis** (kenapa Gorizon didirikan) — sudah diberi contoh draft narasi singkat berbasis "masalah yang sering ditemui dalam pengalaman IT"
  - **Belum ada jawaban final dari Furqon** di titik ini — perlu dilanjutkan di sesi berikutnya

---

## 7. Next Steps (belum dieksekusi)

- [ ] Klarifikasi maksud "latar belakang bisnis" dari Furqon (visual atau cerita)
- [ ] Mulai proses development landing page (React + Tailwind) berdasarkan PRD final
- [ ] Furqon melengkapi data yang masih kosong (bagian 5 di atas)
- [ ] Finalisasi logo vector dari Furqon untuk menggantikan icon placeholder

---

## 8. File Terkait yang Sudah Dibuat

1. `PRD_Landing_Page_Gorizon.md` — PRD lengkap dan final untuk landing page Gorizon
2. `Konteks_Percakapan_Gorizon.md` — file ini, rangkuman seluruh konteks percakapan

---

*Catatan: File ini dibuat pada 20 Agustus 2026. Jika ada perkembangan baru setelah file ini diekspor, pastikan untuk menyampaikannya di awal sesi chat berikutnya agar konteks tetap update.*
