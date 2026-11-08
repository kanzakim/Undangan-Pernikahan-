# Website Undangan Pernikahan

Template undangan digital bertema **Sage Green & Cream**, dibuat dengan HTML, CSS, dan JavaScript murni. Cocok untuk VS Code dan hosting gratis melalui GitHub Pages.

## 1. Menjalankan di VS Code

1. Ekstrak `undangan-pernikahan.zip`.
2. Buka folder `undangan-pernikahan` di VS Code.
3. Buka `index.html` di browser, atau pasang ekstensi **Live Server** lalu klik kanan `index.html` → **Open with Live Server**.

## 2. Data yang wajib diganti

Buka `script.js`, lalu ubah bagian `CONFIG`:

```js
const CONFIG = {
  bride: "Alya Putri",
  groom: "Raka Pratama",
  weddingDate: "2026-12-20T08:00:00+07:00",
  whatsappNumber: "6281234567890"
};
```

- `bride` dan `groom`: nama mempelai.
- `weddingDate`: tanggal dan waktu hitung mundur, format ISO. Contoh `2026-12-20T08:00:00+07:00`.
- `whatsappNumber`: nomor WhatsApp penerima konfirmasi, format internasional tanpa `+`. Contoh `6281234567890`.

Kemudian edit juga teks contoh di `index.html`, seperti nama orang tua, tanggal acara, jam, alamat, tautan Google Maps, dan akun Instagram. Ganti judul tab bila diperlukan.

## 3. Mengganti foto dan musik

Letakkan file media di folder `assets` dengan nama berikut:

- `foto-pengantin.jpg`
- `galeri-1.jpg`
- `galeri-2.jpg`
- `galeri-3.jpg`
- `musik.mp3`

Saat ini bagian foto masih berupa placeholder warna dan label. Untuk menampilkan foto sungguhan, ubah elemen `.portrait` dan `.gallery-photo` di `index.html` menjadi elemen gambar, misalnya:

```html
<div class="portrait">
  <img src="assets/foto-pengantin.jpg" alt="Foto Alya dan Raka">
</div>
```

Tambahkan CSS berikut di akhir `style.css`:

```css
.portrait img, .gallery-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}
```

Untuk galeri, ganti isi masing-masing `.gallery-photo` dengan `<img src="assets/galeri-1.jpg" alt="Momen bersama">` dan seterusnya.

Musik dipanggil dari `assets/musik.mp3`. Pastikan Anda memiliki hak untuk menggunakan file musik tersebut. Browser umumnya hanya mengizinkan audio mulai setelah pengunjung menekan tombol Buka Undangan; tombol musik tetap tersedia untuk play/pause.

## 4. Personalisasi undangan untuk tamu

Link bisa diberi nama tamu menggunakan parameter `to`:

`https://USERNAME.github.io/undangan-pernikahan/?to=Keluarga%20Bapak%20Budi`

Nama tersebut akan tampil pada bagian “Kepada Yth.”.

## 5. Upload ke GitHub Pages

1. Login ke https://github.com
2. Klik **New repository**.
3. Isi nama repository, misalnya `undangan-pernikahan`.
4. Pilih **Public**, lalu klik **Create repository**.
5. Di halaman repository, pilih **Add file → Upload files**.
6. Upload isi folder project (pastikan `index.html` berada di root repository, bukan di dalam folder bertingkat).
7. Klik **Commit changes**.
8. Buka **Settings → Pages**.
9. Pada **Build and deployment**, pilih **Deploy from a branch**.
10. Pilih branch `main` dan folder `/(root)`, lalu klik **Save**.
11. Tunggu proses publikasi selesai. Link akan muncul di bagian GitHub Pages, biasanya:
    `https://USERNAME.github.io/undangan-pernikahan/`

Jika repository bernama `USERNAME.github.io`, alamat situsnya menjadi `https://USERNAME.github.io/`.

## Catatan

- GitHub Pages hanya meng-host file statis. Form RSVP template ini mengirim pesan ke WhatsApp, bukan menyimpan data ke database.
- Jangan menaruh password, token rahasia, atau data pribadi sensitif di repository publik.
- Pastikan semua foto, tanggal, alamat, tautan Maps, nomor WhatsApp, dan musik sudah benar sebelum link dibagikan.
