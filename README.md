# Portofolio Akmal — Next.js + Tailwind

Project starter untuk website portofolio dengan struktur section yang jelas sambil belajar.

## Kenapa stack ini?
- **Next.js**: routing, SEO, performa bagus, dan standar industri.
- **Tailwind CSS**: styling cepat dan konsisten.
- **Vercel**: deploy paling simpel untuk project Next.js.

## Struktur section di halaman utama
1. **Hero**: perkenalan singkat + value utama.
2. **About**: cerita background dan tujuan.
3. **Skills**: daftar skill yang sedang dikuasai.
4. **Projects**: 2-4 project terbaik + pelajaran yang didapat.
5. **Contact**: email / LinkedIn / GitHub.

## Cara belajar sambil jalan (roadmap)

### Minggu 1 — Fondasi
- Pahami struktur project Next.js (`src/app/layout.tsx`, `src/app/page.tsx`).
- Ubah teks konten jadi data diri sendiri.
- Latihan komponen kecil (misalnya kartu project).

### Minggu 2 — UI & Responsive
- Tambah navbar dan footer.
- Buat tampilan mobile lebih rapi.
- Ganti warna/font sesuai personal branding.

### Minggu 3 — Data real
- Isi project beneran (judul, deskripsi, link demo, link GitHub).
- Tambah gambar thumbnail project.
- Mulai pakai file data terpisah (mis. `src/data/projects.ts`).

### Minggu 4 — Publish
- Deploy ke Vercel.
- Cek SEO dasar (title + description).
- Minta feedback dari teman/recruiter.

## Jalankan local
```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Langkah berikutnya (saran)
- Tambah halaman detail project (`/projects/[slug]`).
- Tambah form kontak (Formspree/Resend).
- Tambah dark mode.
