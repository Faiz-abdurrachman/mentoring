const COURSE = [
  // ===================== MODULE 1: PENGENALAN =====================
  { id:"1.1", part:1, title:"Apa Itu Python?", icon:"fa-brain",
    breadcrumb:"Modul 1: Pengenalan",
    content:`<h1>Apa Itu Python?</h1>
<p>Python adalah bahasa pemrograman nomor #1 di dunia saat ini. Didesain agar sangat mudah dibaca oleh manusia, bahkan menyerupai bahasa Inggris sehari-hari.</p>
<div class="card-grid card-grid-4">
<div class="card"><div class="card-icon"><i class="fas fa-chart-line"></i></div><h3>15.39% TIOBE</h3><p>Peringkat #1 dunia<br><small>TIOBE Index 2024</small></p></div>
<div class="card"><div class="card-icon"><i class="fas fa-users"></i></div><h3>44% Developer</h3><p>Dipakai profesional<br><small>StackOverflow 2024</small></p></div>
<div class="card"><div class="card-icon"><i class="fas fa-boxes"></i></div><h3>500K+ Library</h3><p>Ekosistem terbesar<br><small>PyPI.org</small></p></div>
<div class="card"><div class="card-icon"><i class="fas fa-feather"></i></div><h3>Sangat Simpel</h3><p>Syntax bersih<br><small>Tanpa kurung kurawal</small></p></div>
</div>
`,playground:`# Cukup tekan tombol Run Code di bawah
print("Selamat datang di Dunia Python!")`},

  { id:"1.2", part:1, title:"Python vs Bahasa Lain", icon:"fa-balance-scale",
    breadcrumb:"Modul 1: Pengenalan",
    content:`<h1>Python vs Bahasa Lain</h1>
<p>Kenapa kita tidak belajar Java atau C++ saja? Berikut perbandingannya di industri modern:</p>
<table class="comparison-table">
<tr><th>Aspek</th><th class="hl">Python</th><th>Java</th><th>JavaScript</th><th>C++</th></tr>
<tr><td><strong>Fokus Utama</strong></td><td class="hl">AI, Data, Web</td><td>Mobile, Enterprise</td><td>Web Frontend</td><td>Game, Sistem</td></tr>
<tr><td><strong>Tingkat Kesulitan</strong></td><td class="hl">Sangat Mudah</td><td>Menengah</td><td>Menengah</td><td>Sulit</td></tr>
<tr><td><strong>Kecepatan Belajar</strong></td><td class="hl">Paling Cepat</td><td>Sedang</td><td>Sedang</td><td>Lambat</td></tr>
<tr><td><strong>Rata-rata Gaji (US)</strong></td><td class="hl">$116K / tahun</td><td>$102K</td><td>$96K</td><td>$108K</td></tr>
</table>
<p class="text-muted" style="margin-top:15px; font-size:0.95rem;">Python adalah pintu gerbang tercepat bagi pemula untuk masuk ke dunia teknologi dengan bayaran tertinggi.</p>`},

  { id:"1.3", part:1, title:"Siapa Saja yang Menggunakan Python?", icon:"fa-building",
    breadcrumb:"Modul 1: Pengenalan",
    content:`<h1>Siapa yang Memakai Python?</h1>
<p>Python bukan sekadar bahasa untuk belajar. Ini adalah bahasa yang menggerakkan perusahaan-perusahaan terbesar di bumi.</p>
<div class="card-grid card-grid-3">
<div class="card"><div class="card-icon" style="background:#FFF0F0;color:#DB4437"><i class="fab fa-google"></i></div><h3>Google</h3><p>TensorFlow, JAX, Colab<br>semua dibangun dengan Python</p></div>
<div class="card"><div class="card-icon" style="background:#F0F0FF;color:#0B3D91"><i class="fas fa-rocket"></i></div><h3>NASA</h3><p>Analisis data rover Mars<br>sepenuhnya pakai Python</p></div>
<div class="card"><div class="card-icon" style="background:#FFF0F0;color:#E50914"><i class="fas fa-film"></i></div><h3>Netflix</h3><p>Mesin Rekomendasi Film<br>ditulis dalam Python</p></div>
<div class="card"><div class="card-icon" style="background:#F0FFF0;color:#1DB954"><i class="fab fa-spotify"></i></div><h3>Spotify</h3><p>80% backend layanan ini<br>menggunakan Python</p></div>
<div class="card"><div class="card-icon" style="background:#FFF5F9;color:#E1306C"><i class="fab fa-instagram"></i></div><h3>Instagram</h3><p>Platform 800M+ users ini<br>memakai framework Python</p></div>
<div class="card"><div class="card-icon" style="background:#F5F5FF;color:#6366f1"><i class="fas fa-atom"></i></div><h3>OpenAI</h3><p>ChatGPT dan riset AI<br>sepenuhnya digerakkan Python</p></div>
</div>`},

  { id:"1.4", part:1, title:"Cara Kerja Python", icon:"fa-cogs",
    breadcrumb:"Modul 1: Pengenalan",
    content:`<h1>Bagaimana Python Bekerja?</h1>
<div class="split">
<div>
<h3>Interpreted Language</h3>
<p>Kode Python dieksekusi <strong>baris per baris</strong>. Hasilnya langsung keluar saat itu juga.</p>
<p class="text-pink">Sangat Berbeda dengan C++ atau Java</p>
<p>Bahasa lain harus melewati proses <em>compile</em> yang rumit sebelum kodenya bisa dijalankan.</p>
</div>
<div>
<h3>Mengapa Sangat Ramah Pemula?</h3>
<ul class="checklist">
<li><i class="fas fa-check-circle"></i> <strong>Instant feedback:</strong> Ketik kode → Enter → Lihat hasil!</li>
<li><i class="fas fa-check-circle"></i> <strong>Sintaks bersih:</strong> Tidak butuh titik koma (;) atau kurung kurawal rumit.</li>
<li><i class="fas fa-check-circle"></i> <strong>Produktivitas instan:</strong> Di hari pertama, kalian sudah bisa membuat program jalan.</li>
</ul>
</div></div>`,playground:`print("Keunggulan Python:")
print("1. Cepat dipelajari")
print("2. Langsung eksekusi (Interpreted)")`},

  { id:"1.5", part:1, title:"Senjata Kita: Google Colab", icon:"fa-cloud",
    breadcrumb:"Modul 1: Pengenalan",
    content:`<h1>Senjata Kita: Google Colab</h1>
<p>Untuk pemula, kalian <strong>TIDAK PERLU</strong> repot menginstall Python atau VS Code di laptop. Kita akan menggunakan <strong>Google Colab</strong>.</p>
<ul class="checklist">
<li><i class="fas fa-check-circle"></i> Berjalan 100% di browser, persis seperti website ini.</li>
<li><i class="fas fa-check-circle"></i> Gratis GPU dari Google (sangat krusial untuk training AI di pertemuan berikutnya).</li>
<li><i class="fas fa-check-circle"></i> Cukup ketik kode, lalu tekan <strong>Shift + Enter</strong>.</li>
</ul>
<div class="ok-box">Kami sudah menyiapkan <strong>Editor Interaktif</strong> di bawah ini (mirip dengan Colab). Mari kita mulai petualangan koding pertama kita!</div>
`,playground:`print("Senjata siap!")
print("Mari kita mulai koding Python sebenarnya di halaman berikutnya.")`},

  // ===================== MODULE 2: FONDASI =====================
  { id:"2.1", part:2, title:"print() — Berbicara dengan Komputer", icon:"fa-print",
    breadcrumb:"Modul 2: Fondasi Dasar",
    content:`<h1>print() — Berbicara dengan Komputer</h1>
<p>Fungsi <code>print()</code> adalah fondasi utama. Ini cara kita menyuruh komputer menampilkan sesuatu ke layar.</p>
<div class="data-box"><strong>Aturan Emas:</strong> Teks biasa WAJIB diapit tanda kutip (<code>" "</code> atau <code>' '</code>). Angka tidak perlu.</div>
<div class="block-code"><span class="fn">print</span>(<span class="st">"Halo HerAI"</span>) <span class="cm"># Mencetak teks</span>
<span class="fn">print</span>(<span class="nu">2026</span>)         <span class="cm"># Mencetak angka</span></div>
`,playground:`# Tugas: Coba ubah teks di bawah menjadi nama kalian!
print("Nama saya adalah Budi")
print("Saya siap menjadi Data Scientist")`},

  { id:"2.2", part:2, title:"Python Sebagai Kalkulator Super", icon:"fa-calculator",
    breadcrumb:"Modul 2: Fondasi Dasar",
    content:`<h1>Python Sebagai Kalkulator Super</h1>
<p>Python sangat cerdas dalam matematika. Komputer dapat menghitung jutaan angka hanya dalam 1 detik.</p>
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
<p><strong>Variabel</strong> adalah kotak penyimpan data. Kotak ini harus diberi nama (tanpa spasi).<br>Ada 4 <strong>Tipe Data</strong> utama yang wajib kalian kuasai:</p>
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

print("Nama Peserta:")
print(nama)`},

  { id:"2.4", part:2, title:"Format String (F-String)", icon:"fa-magic",
    breadcrumb:"Modul 2: Fondasi Dasar",
    content:`<h1>Format String (F-String)</h1>
<p>Bagaimana cara menggabungkan teks dan variabel dengan rapi? Gunakan <strong>f-string</strong>. Ini adalah cara paling elegan di Python modern.</p>
<div class="block-code"><span class="kw">nama</span> = <span class="st">"Budi"</span>
<span class="kw">umur</span> = <span class="nu">21</span>
<span class="fn">print</span>(f<span class="st">"Halo, nama saya {nama} dan umur saya {umur} tahun."</span>)</div>
<div class="err-box"><strong>Jebakan Pemula:</strong><br>Jangan pernah melakukan <code>print("Tahun " + 2026)</code>. Python akan Error karena kalian mencampur Teks (str) + Angka (int) menggunakan tanda plus! F-string menyelesaikan masalah ini secara otomatis.</div>
`,playground:`nama = "Siti"
skor = 95
# Huruf 'f' di depan kutip sangat penting!
print(f"Peserta bernama {nama} mendapat skor {skor}!")

# Tugas: Buat variabel kota asalmu dan cetak dengan f-string!`},

  // ===================== MODULE 3: STRUKTUR DATA =====================
  { id:"3.1", part:3, title:"List (Daftar)", icon:"fa-list-ol",
    breadcrumb:"Modul 3: Struktur Data",
    content:`<h1>List (Daftar)</h1>
<p>Bagaimana jika kita mau menyimpan 100 nama murid? Masa mau bikin 100 variabel terpisah? Solusinya adalah <strong>List</strong> (ditandai dengan kurung siku <code>[]</code>).</p>
<div class="block-code"><span class="kw">buah</span> = [<span class="st">"Apel"</span>, <span class="st">"Mangga"</span>, <span class="st">"Pisang"</span>, <span class="st">"Jeruk"</span>]</div>
<div class="warn-box"><strong>Penting: Komputer menghitung dari 0!</strong><br>Index 0 adalah "Apel". Index 1 adalah "Mangga".</div>
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
<p>Kalau List menggunakan urutan angka (index 0,1,2), <strong>Dictionary</strong> menggunakan Label atau Kata Kunci (Key-Value). Ditandai dengan kurung kurawal <code>{}</code>.</p>
<div class="block-code"><span class="kw">peserta</span> = {
    <span class="st">"nama"</span>: <span class="st">"Aisyah"</span>,
    <span class="st">"umur"</span>: <span class="nu">22</span>,
    <span class="st">"lulus"</span>: <span class="kw">True</span>
}
<span class="fn">print</span>(<span class="kw">peserta</span>[<span class="st">"nama"</span>]) <span class="cm"># Output: Aisyah</span></div>
<p>Dictionary sangat esensial untuk menyimpan data profil pengguna atau struktur data AI yang kompleks.</p>
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
<p>Komputer itu secara bawaan tidak tahu apa-apa. Kita harus mengajarinya cara mengambil keputusan menggunakan instruksi <code>if</code> (jika) dan <code>else</code> (kalau tidak).</p>
<div class="block-code"><span class="kw">nilai</span> = <span class="nu">85</span>
<span class="kw">if</span> nilai >= <span class="nu">75</span>:
    <span class="fn">print</span>(<span class="st">"Selamat, kamu Lulus!"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="st">"Maaf, kamu harus mengulang."</span>)</div>
<div class="err-box"><strong>AWAS JEBAKAN INDENTASI!</strong><br>Perhatikan jarak spasi di depan perintah <code>print</code>. Python <strong>WAJIB</strong> menggunakan indentasi (Tab / 4 Spasi) di bawah blok If/Else. Jika rata kiri, program akan Error!</div>
`,playground:`saldo = 50000
harga_kopi = 35000

if saldo >= harga_kopi:
    print("Kopi berhasil dibeli!")
    saldo = saldo - harga_kopi
    print(f"Sisa saldo: Rp {saldo}")
else:
    print("Maaf, saldo tidak cukup.")`},

  { id:"4.2", part:4, title:"Elif & Operator Logika", icon:"fa-layer-group",
    breadcrumb:"Modul 4: Logika Program",
    content:`<h1>Elif & Operator Logika</h1>
<p>Bagaimana jika kita memiliki banyak kondisi bertingkat? Gunakan <code>elif</code> (else-if).<br>Kita juga bisa menggabungkan banyak syarat menggunakan <code>and</code> (kedua syarat wajib True) atau <code>or</code> (cukup salah satu True).</p>
<table class="comparison-table">
<tr><th>Operator</th><th>Fungsi</th><th>Contoh</th></tr>
<tr><td>==</td><td>Sama persis dengan</td><td><code>if umur == 20:</code></td></tr>
<tr><td>!=</td><td>Tidak sama dengan</td><td><code>if password != "123":</code></td></tr>
<tr><td>and</td><td>Dan (wajib semua)</td><td><code>if lapar and ada_uang:</code></td></tr>
<tr><td>or</td><td>Atau (salah satu cukup)</td><td><code>if capek or ngantuk:</code></td></tr>
</table>
`,playground:`nilai = 88
absen_full = True

# Mengecek grade kelulusan
if nilai >= 90:
    print("Grade A")
elif nilai >= 80 and absen_full:
    print("Grade B+ (Bonus Kehadiran!)")
elif nilai >= 80:
    print("Grade B")
else:
    print("Grade C")`},

  // ===================== MODULE 5: LOOPING =====================
  { id:"5.1", part:5, title:"For Loop (Perulangan)", icon:"fa-redo",
    breadcrumb:"Modul 5: Looping",
    content:`<h1>For Loop: Jangan Nulis Manual!</h1>
<p>Jika kita harus mencetak kalimat 100 kali, jangan menuliskannya 100 baris! Perintahkan komputer yang mengulang (Looping).</p>
<div class="block-code"><span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nu">5</span>):
    <span class="fn">print</span>(f<span class="st">"Ini ulangan ke-{i}"</span>)</div>
<p>Sekali lagi, ingat bahwa <code>range(5)</code> akan mulai menghitung dari angka 0: 0, 1, 2, 3, 4.</p>
`,playground:`# Mencetak angka 1 sampai 5
for i in range(1, 6):
    print(f"Hitungan: {i}")

print("Loop selesai!")`},

  { id:"5.2", part:5, title:"Looping pada List", icon:"fa-bolt",
    breadcrumb:"Modul 5: Looping",
    content:`<h1>Looping pada List</h1>
<p>Kombinasi For Loop dan List adalah senjata rahasia di Data Science. Kita bisa memproses ribuan data di dalam List secara berurutan dan kilat.</p>
<div class="block-code"><span class="kw">peserta</span> = [<span class="st">"Siti"</span>, <span class="st">"Ayu"</span>, <span class="st">"Rina"</span>]
<span class="kw">for</span> p <span class="kw">in</span> <span class="kw">peserta</span>:
    <span class="fn">print</span>(f<span class="st">"Halo {p}, selamat pagi!"</span>)</div>
<p>Kursor program akan secara otomatis mampir ke "Siti", lalu ke "Ayu", lalu ke "Rina".</p>
`,playground:`data_suhu = [30.5, 31.0, 29.8, 32.1]

# Kita proses semua data suhu dalam list!
for suhu in data_suhu:
    if suhu > 31.0:
        print(f"Peringatan! Suhu {suhu} terlalu panas!")
    else:
        print(f"Suhu {suhu} terpantau normal.")`},

  // ===================== MODULE 6: PENUTUP =====================
  { id:"6.1", part:6, title:"Tantangan Akhir", icon:"fa-trophy",
    breadcrumb:"Modul 6: Tantangan Akhir",
    content:`<h1>Tantangan Akhir (Boss Fight)</h1>
<p>Ini adalah saatnya membuktikan dan menggabungkan semua materi yang telah kalian pelajari hari ini:</p>
<ol>
<li>List & For Loop</li>
<li>If-Else & Modulo (%)</li>
<li>F-String</li>
</ol>
<div class="data-box"><strong>Tugas Utama:</strong> Di editor bawah, jalankan For Loop dari angka 1 sampai 20. Jika angkanya genap, cetak kalimat "Angka X adalah Genap". Jika ganjil, cetak "Angka X adalah Ganjil". (Hint: gunakan operasi <code>angka % 2 == 0</code> untuk mengecek genap).</div>
`,playground:`# Selesaikan tantangan boss fight ini!
for i in range(1, 21):
    if i % 2 == 0:
        print(f"Angka {i} adalah Genap")
    else:
        print(f"Angka {i} adalah Ganjil")`},

  { id:"6.2", part:6, title:"Rekap & Langkah Selanjutnya", icon:"fa-rocket",
    breadcrumb:"Modul 6: Tantangan Akhir",
    content:`<h1>Rekap & Langkah Selanjutnya</h1>
<p>Luar biasa! Dalam satu sesi ini, kalian telah sukses menguasai fondasi mutlak seorang Data Scientist dan AI Engineer:</p>
<ul class="checklist">
<li><i class="fas fa-check-circle"></i> Variabel & Tipe Data</li>
<li><i class="fas fa-check-circle"></i> Struktur Data (List & Dictionary)</li>
<li><i class="fas fa-check-circle"></i> Logika Keputusan (If-Else)</li>
<li><i class="fas fa-check-circle"></i> Perulangan Otomatis (For Loop)</li>
</ul>
<div class="ok-box" style="text-align:center;font-size:1.1rem;margin-top:20px;"><strong>Sesi Selanjutnya: Data Science & Pandas!</strong><br>Kita akan melangkah lebih jauh ke pengolahan dataset riil menggunakan library Pandas, dan memvisualisasikannya menjadi grafik yang memukau.<br><br>Sampai jumpa minggu depan, Innovators!</div>
`,playground:`print("Mission Accomplished! 🚀")
print("Saya siap menaklukkan chapter berikutnya bersama HerAI!")`}
];

if(typeof module!=='undefined') module.exports=COURSE;
