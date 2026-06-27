const COURSE = [
  // ===================== MODULE 1: PENGENALAN =====================
  { id:"1.1", part:1, title:"Kenapa Python di Era AI?", icon:"fa-brain",
    breadcrumb:"Modul 1: Pengenalan",
    content:`<h1>Kenapa Python di Era AI?</h1>
<p>Kalian hidup di era di mana AI sedang merevolusi segalanya. Dan bahasa utama yang menggerakkan revolusi ini adalah <strong>Python</strong>.</p>
<div class="card-grid card-grid-3">
<div class="card"><div class="card-icon"><i class="fas fa-robot"></i></div><h3>Bahasa Utama AI</h3><p>ChatGPT, TensorFlow, PyTorch — semua berbasis Python.</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-feather"></i></div><h3>Sangat Mudah</h3><p>Sintaksnya mirip bahasa Inggris biasa. Gak ribet!</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-building"></i></div><h3>Dipakai Global</h3><p>Google, Netflix, NASA menggunakan Python setiap hari.</p></div>
</div>
`,playground:`# Cukup jalankan kode ini
print("Saya siap belajar Python bersama HerAI!")`},

  { id:"1.2", part:1, title:"Senjata Kita: Google Colab", icon:"fa-cloud",
    breadcrumb:"Modul 1: Pengenalan",
    content:`<h1>Senjata Kita: Google Colab</h1>
<p>Untuk pemula, kalian <strong>TIDAK PERLU</strong> repot install Python atau VS Code di laptop dulu. Kita akan pakai <strong>Google Colab</strong>.</p>
<ul class="checklist">
<li><i class="fas fa-check-circle"></i> Berjalan 100% di browser (seperti web ini).</li>
<li><i class="fas fa-check-circle"></i> Gratis GPU dari Google (sangat penting untuk AI nanti).</li>
<li><i class="fas fa-check-circle"></i> Ketik kode, tekan <strong>Shift + Enter</strong>, langsung jalan!</li>
</ul>
<div class="ok-box">Di website ini, kami sudah menyediakan <strong>Editor Interaktif (Playground)</strong> di bawah. Coba jalankan kode di bawah ini dengan klik tombol <strong>Run Code</strong>!</div>
`,playground:`print("Hello World!")
print("Ini adalah baris kode Python pertamaku.")`},

  // ===================== MODULE 2: FONDASI =====================
  { id:"2.1", part:2, title:"print() — Berbicara dengan Komputer", icon:"fa-print",
    breadcrumb:"Modul 2: Fondasi Dasar",
    content:`<h1>print() — Berbicara dengan Komputer</h1>
<p>Fungsi <code>print()</code> adalah cara kita menyuruh komputer menampilkan sesuatu ke layar.</p>
<div class="data-box"><strong>Aturan Emas:</strong> Teks biasa wajib diapit tanda kutip (<code>" "</code> atau <code>' '</code>). Angka tidak perlu.</div>
<div class="block-code"><span class="fn">print</span>(<span class="st">"Halo HerAI"</span>) <span class="cm"># Mencetak teks</span>
<span class="fn">print</span>(<span class="nu">2026</span>)         <span class="cm"># Mencetak angka</span></div>
`,playground:`# Tugas: Coba ubah teks di bawah menjadi nama kalian!
print("Nama saya adalah Budi")
print("Saya siap menjadi Data Scientist")`},

  { id:"2.2", part:2, title:"Python Sebagai Kalkulator Super", icon:"fa-calculator",
    breadcrumb:"Modul 2: Fondasi Dasar",
    content:`<h1>Python Sebagai Kalkulator Super</h1>
<p>Python sangat hebat dalam matematika. Komputer bisa menghitung jutaan angka dalam 1 detik.</p>
<table class="comparison-table">
<tr><th>Simbol</th><th>Operasi</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td>+</td><td>Tambah</td><td>10 + 5</td><td>15</td></tr>
<tr><td>-</td><td>Kurang</td><td>10 - 5</td><td>5</td></tr>
<tr><td>*</td><td>Kali</td><td>10 * 5</td><td>50</td></tr>
<tr><td>/</td><td>Bagi</td><td>10 / 2</td><td>5.0</td></tr>
<tr><td>**</td><td>Pangkat</td><td>2 ** 3</td><td>8</td></tr>
<tr><td>%</td><td>Sisa Bagi (Modulo)</td><td>10 % 3</td><td>1</td></tr>
</table>
`,playground:`print("Hasil 100 + 50 adalah:")
print(100 + 50)

# Coba hitung 5 pangkat 3 (5 ** 3)!
print(5 ** 3)`},

  { id:"2.3", part:2, title:"Variabel & Tipe Data", icon:"fa-box",
    breadcrumb:"Modul 2: Fondasi Dasar",
    content:`<h1>Variabel & Tipe Data</h1>
<p><strong>Variabel</strong> adalah kotak penyimpan data. Kotak ini harus diberi nama (tanpa spasi).<br>Ada 4 <strong>Tipe Data</strong> utama yang wajib kalian tahu:</p>
<div class="card-grid card-grid-4">
<div class="card"><div class="card-icon"><i class="fas fa-font"></i></div><h3>String (str)</h3><p>Teks / Karakter<br><code>"Aisyah"</code></p></div>
<div class="card"><div class="card-icon"><i class="fas fa-hashtag"></i></div><h3>Integer (int)</h3><p>Angka Bulat<br><code>25</code></p></div>
<div class="card"><div class="card-icon"><i class="fas fa-percent"></i></div><h3>Float</h3><p>Angka Desimal<br><code>3.14</code></p></div>
<div class="card"><div class="card-icon"><i class="fas fa-check-square"></i></div><h3>Boolean (bool)</h3><p>Benar/Salah<br><code>True</code> / <code>False</code></p></div>
</div>
`,playground:`nama = "Aisyah"       # String (str)
umur = 20             # Integer (int)
ipk = 3.85            # Float
lulus = True          # Boolean (bool)

print(nama)
print(umur)`},

  { id:"2.4", part:2, title:"Format String (F-String)", icon:"fa-magic",
    breadcrumb:"Modul 2: Fondasi Dasar",
    content:`<h1>Format String (F-String)</h1>
<p>Bagaimana cara menggabungkan teks dan variabel? Gunakan <strong>f-string</strong> (format string). Ini adalah cara paling elegan di Python modern.</p>
<div class="block-code"><span class="kw">nama</span> = <span class="st">"Budi"</span>
<span class="kw">umur</span> = <span class="nu">21</span>
<span class="fn">print</span>(f<span class="st">"Halo, nama saya {nama} dan umur saya {umur} tahun."</span>)</div>
<div class="err-box"><strong>Jebakan Pemula:</strong><br>Jangan pernah melakukan <code>print("Tahun " + 2026)</code>. Python akan Error karena kalian mencampur Teks (str) + Angka (int) pakai tanda plus! F-string menyelesaikan masalah ini.</div>
`,playground:`nama = "Siti"
skor = 95
# Huruf 'f' di depan kutip sangat penting!
print(f"Peserta bernama {nama} mendapat skor {skor}!")

# Tugas: Buat variabel kota asalmu dan cetak dengan f-string!`},

  // ===================== MODULE 3: STRUKTUR DATA =====================
  { id:"3.1", part:3, title:"List (Daftar)", icon:"fa-list-ol",
    breadcrumb:"Modul 3: Struktur Data",
    content:`<h1>List (Daftar)</h1>
<p>Bagaimana jika kita mau menyimpan 100 nama murid? Masa mau bikin 100 variabel? Pakai <strong>List</strong> (ditandai dengan kurung siku <code>[]</code>).</p>
<div class="block-code"><span class="kw">buah</span> = [<span class="st">"Apel"</span>, <span class="st">"Mangga"</span>, <span class="st">"Pisang"</span>, <span class="st">"Jeruk"</span>]</div>
<div class="warn-box"><strong>Komputer menghitung dari 0!</strong><br>Index 0 adalah "Apel". Index 1 adalah "Mangga".</div>
<ul class="checklist">
<li>Ambil item pertama: <code>buah[0]</code></li>
<li>Ambil item terakhir: <code>buah[-1]</code></li>
<li>Hitung total isi list: <code>len(buah)</code></li>
</ul>
`,playground:`hobi = ["Membaca", "Coding", "Gaming", "Menulis"]

print("Hobi pertamaku adalah:", hobi[0])
print("Hobi terakhirku adalah:", hobi[-1])
print("Total hobiku ada:", len(hobi))`},

  { id:"3.2", part:3, title:"Dictionary (Kamus)", icon:"fa-book",
    breadcrumb:"Modul 3: Struktur Data",
    content:`<h1>Dictionary (Kamus)</h1>
<p>Kalau List menggunakan urutan angka (index 0,1,2), <strong>Dictionary</strong> menggunakan Label / Kata Kunci (Key-Value). Ditandai dengan kurung kurawal <code>{}</code>.</p>
<div class="block-code"><span class="kw">peserta</span> = {
    <span class="st">"nama"</span>: <span class="st">"Aisyah"</span>,
    <span class="st">"umur"</span>: <span class="nu">22</span>,
    <span class="st">"lulus"</span>: <span class="kw">True</span>
}
<span class="fn">print</span>(<span class="kw">peserta</span>[<span class="st">"nama"</span>]) <span class="cm"># Output: Aisyah</span></div>
<p>Sangat berguna untuk menyimpan data profil atau data AI yang terstruktur!</p>
`,playground:`profil = {
    "nama": "HerAI Student",
    "role": "Data Scientist",
    "level": 99
}

print(f"Halo, saya {profil['nama']}, seorang {profil['role']} level {profil['level']}!")`},

  // ===================== MODULE 4: LOGIKA =====================
  { id:"4.1", part:4, title:"If-Else: Pengambilan Keputusan", icon:"fa-code-branch",
    breadcrumb:"Modul 4: Logika Program",
    content:`<h1>If-Else: Pengambilan Keputusan</h1>
<p>Komputer itu bodoh. Kita harus mengajarinya cara mengambil keputusan menggunakan <code>if</code> (jika) dan <code>else</code> (kalau tidak).</p>
<div class="block-code"><span class="kw">nilai</span> = <span class="nu">85</span>
<span class="kw">if</span> nilai >= <span class="nu">75</span>:
    <span class="fn">print</span>(<span class="st">"Selamat, kamu Lulus!"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="st">"Maaf, kamu harus mengulang."</span>)</div>
<div class="err-box"><strong>AWAS INDENTASI!</strong><br>Perhatikan spasi di depan kata <code>print</code>. Python <strong>WAJIB</strong> menggunakan indentasi (Tab atau 4 Spasi) di bawah perintah If/Else. Jika rata kiri semua, Python akan Error!</div>
`,playground:`saldo = 50000
harga_kopi = 35000

if saldo >= harga_kopi:
    print("Kopi berhasil dibeli!")
    saldo = saldo - harga_kopi
    print(f"Sisa saldo: {saldo}")
else:
    print("Maaf, saldo tidak cukup.")`},

  { id:"4.2", part:4, title:"Elif & Operator Logika", icon:"fa-layer-group",
    breadcrumb:"Modul 4: Logika Program",
    content:`<h1>Elif & Operator Logika</h1>
<p>Bagaimana kalau ada banyak kondisi? Gunakan <code>elif</code> (else-if).<br>Kita juga bisa gabungkan syarat dengan <code>and</code> (kedua syarat wajib) atau <code>or</code> (salah satu cukup).</p>
<table class="comparison-table">
<tr><th>Operator</th><th>Fungsi</th><th>Contoh</th></tr>
<tr><td>==</td><td>Sama dengan</td><td><code>if umur == 20:</code></td></tr>
<tr><td>!=</td><td>Tidak sama</td><td><code>if password != "123":</code></td></tr>
<tr><td>and</td><td>Dan (wajib semua)</td><td><code>if lapar and ada_uang:</code></td></tr>
<tr><td>or</td><td>Atau (salah satu)</td><td><code>if capek or ngantuk:</code></td></tr>
</table>
`,playground:`nilai = 88
absen_full = True

# Mengecek grade
if nilai >= 90:
    print("Grade A")
elif nilai >= 80 and absen_full:
    print("Grade B+ (Dapat bonus absen!)")
elif nilai >= 80:
    print("Grade B")
else:
    print("Grade C")`},

  // ===================== MODULE 5: LOOPING =====================
  { id:"5.1", part:5, title:"For Loop (Perulangan)", icon:"fa-redo",
    breadcrumb:"Modul 5: Looping",
    content:`<h1>For Loop: Jangan Nulis Manual!</h1>
<p>Kalau kita mau mencetak sesuatu 100 kali, jangan ditulis 100 baris! Suruh komputer yang mengulang (Looping).</p>
<div class="block-code"><span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nu">5</span>):
    <span class="fn">print</span>(f<span class="st">"Ini ulangan ke-{i}"</span>)</div>
<p>Ingat, <code>range(5)</code> akan mulai dari angka 0, yaitu: 0, 1, 2, 3, 4.</p>
`,playground:`# Mencetak angka 1 sampai 5
for i in range(1, 6):
    print(f"Hitungan: {i}")

print("Loop selesai!")`},

  { id:"5.2", part:5, title:"Looping pada List", icon:"fa-bolt",
    breadcrumb:"Modul 5: Looping",
    content:`<h1>Looping pada List</h1>
<p>Kombinasi For Loop dan List adalah senjata utama dalam Data Science. Kita bisa memproses ribuan data dalam 1 list secara berurutan.</p>
<div class="block-code"><span class="kw">peserta</span> = [<span class="st">"Siti"</span>, <span class="st">"Ayu"</span>, <span class="st">"Rina"</span>]
<span class="kw">for</span> p <span class="kw">in</span> <span class="kw">peserta</span>:
    <span class="fn">print</span>(f<span class="st">"Halo {p}, selamat pagi!"</span>)</div>
<p>Kursor program akan mampir ke "Siti", lalu ke "Ayu", lalu ke "Rina".</p>
`,playground:`data_suhu = [30.5, 31.0, 29.8, 32.1]

for suhu in data_suhu:
    if suhu > 31.0:
        print(f"Peringatan! Suhu {suhu} terlalu panas!")
    else:
        print(f"Suhu {suhu} aman.")`},

  // ===================== MODULE 6: PENUTUP =====================
  { id:"6.1", part:6, title:"Tantangan Akhir", icon:"fa-trophy",
    breadcrumb:"Modul 6: Tantangan Akhir",
    content:`<h1>Tantangan Akhir (Boss Fight)</h1>
<p>Ini adalah saatnya menggabungkan semua yang sudah kalian pelajari hari ini:</p>
<ol>
<li>List & For Loop</li>
<li>If-Else & Modulo (%)</li>
<li>F-String</li>
</ol>
<div class="data-box"><strong>Tugas:</strong> Di editor bawah, cetak angka 1 sampai 20. Jika angkanya genap, tulis "Genap". Jika ganjil, tulis "Ganjil". (Hint: gunakan <code>angka % 2 == 0</code> untuk genap).</div>
`,playground:`# Selesaikan tantangan ini!
for i in range(1, 21):
    if i % 2 == 0:
        print(f"{i} adalah Genap")
    else:
        print(f"{i} adalah Ganjil")`},

  { id:"6.2", part:6, title:"Rekap & Langkah Selanjutnya", icon:"fa-rocket",
    breadcrumb:"Modul 6: Tantangan Akhir",
    content:`<h1>Rekap & Langkah Selanjutnya</h1>
<p>Luar biasa! Kalian sudah menguasai fondasi mutlak seorang Data Scientist & AI Engineer:</p>
<ul class="checklist">
<li><i class="fas fa-check-circle"></i> Variabel & Tipe Data</li>
<li><i class="fas fa-check-circle"></i> List & Dictionary</li>
<li><i class="fas fa-check-circle"></i> If-Else Logic</li>
<li><i class="fas fa-check-circle"></i> Looping (For)</li>
</ul>
<div class="ok-box" style="text-align:center;font-size:1.1rem;margin-top:20px;"><strong>Next Session: Data Science & Pandas!</strong><br>Kita akan masuk ke pengolahan data riil menggunakan library Pandas dan divisualisasikan menjadi grafik yang indah.<br><br>Sampai jumpa minggu depan!</div>
`,playground:`print("Mission Accomplished! 🚀")
print("I am ready for the next HerAI chapter.")`}
];

if(typeof module!=='undefined') module.exports=COURSE;
