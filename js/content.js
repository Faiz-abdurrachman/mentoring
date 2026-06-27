const COURSE = [
  { id:"3.1", part:3, title:"print() — Fungsi Pertamamu", icon:"fa-print",
    breadcrumb:"Part 3: My First Python",
    content:`
<h1>print() — Fungsi Pertamamu</h1>
<p class="text-muted">print = "tampilkan ke layar" — cuma 5 huruf, fondasi segalanya</p>
<p>Ini momen bersejarah. Baris kode Python <span class="text-pink">pertama</span> kalian.</p>
<p><strong>Tugas kalian:</strong> Ketik kode di playground bawah, klik Run, liat outputnya.</p>
<div class="ok-box"><strong>Coba sekarang!</strong> Kode Python paling sederhana di dunia. Ketik dan Run!</div>
`,playground:`print("Hello, HerAI!")`},

  { id:"3.2", part:3, title:"print() — Detail Penting", icon:"fa-info-circle",
    breadcrumb:"Part 3: My First Python",
    content:`
<h1>print() — Detail Penting</h1>
<p>Fungsi <code>print()</code> bisa cetak <strong>teks, angka, atau campuran</strong>.</p>
<div class="data-box"><strong>Aturan:</strong> Teks pake kutip (<code>" "</code> atau <code>' '</code>). Angka tanpa kutip. Koma (,) untuk pisahin banyak item.</div>
<h3>Contoh</h3>
<div class="block-code"><span class="fn">print</span>(<span class="st">"Umur saya"</span>, <span class="nu">25</span>)    <span class="cm"># Umur saya 25</span>
<span class="fn">print</span>(<span class="nu">10</span> + <span class="nu">5</span>)             <span class="cm"># 15</span>
<span class="fn">print</span>(<span class="st">"Halo"</span> + <span class="st">" Dunia"</span>)   <span class="cm"># Halo Dunia</span></div>
<p class="text-muted"><span class="badge badge-pink">Shift+Enter</span> atau <span class="badge badge-purple">Ctrl+Enter</span> = jalankan sel di Colab</p>
`,playground:`print("Umur saya", 25)
print(10 + 5)
print("Halo" + " Dunia")`},

  { id:"3.3", part:3, title:"Python = Kalkulator Super", icon:"fa-calculator",
    breadcrumb:"Part 3: My First Python",
    content:`
<h1>Python = Kalkulator Super</h1>
<p>Python bisa ngitung lebih cepet dari kalkulator.</p>
<div class="block-code"><span class="fn">print</span>(<span class="nu">100</span> + <span class="nu">200</span>)   <span class="cm"># 300</span>
<span class="fn">print</span>(<span class="nu">50</span> - <span class="nu">30</span>)     <span class="cm"># 20</span>
<span class="fn">print</span>(<span class="nu">12</span> * <span class="nu">8</span>)     <span class="cm"># 96</span>
<span class="fn">print</span>(<span class="nu">100</span> / <span class="nu">3</span>)    <span class="cm"># 33.3333...</span></div>
<div class="card-grid card-grid-4">
<div class="card"><div class="card-icon"><i class="fas fa-plus"></i></div><h3>+</h3><p>Tambah</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-minus"></i></div><h3>-</h3><p>Kurang</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-times"></i></div><h3>*</h3><p>Kali</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-divide"></i></div><h3>/</h3><p>Bagi</p></div>
</div>
<p>Bandingin — lebih cepet mana, itung manual atau Python?</p>
`,playground:`print(250 + 175)
print(1000 - 357)
print(15 * 15)
print(500 / 7)`},

  { id:"3.4", part:3, title:"Variabel — Kotak Penyimpanan", icon:"fa-box",
    breadcrumb:"Part 3: My First Python",
    content:`
<h1>Variabel — Kotak Penyimpanan</h1>
<p>Bayangin kalian punya kotak makan siang. Kotaknya dikasih label <span class="text-pink">"NASI"</span>. Di dalemnya isi nasi. Suatu saat isinya diganti <span class="text-purple">"MIE"</span>. Labelnya tetep "NASI".</p>
<p>Itu dia <strong>variabel</strong>. Tempat nyimpen data, dikasih nama. Isinya bisa diganti kapan aja.</p>
<div class="block-code"><span class="kw">nama</span> = <span class="st">"Aisyah"</span>
<span class="kw">umur</span> = <span class="nu">23</span>
<span class="fn">print</span>(<span class="kw">nama</span>)
<span class="fn">print</span>(<span class="kw">umur</span>)</div>
<p>Coba ganti <code>"Aisyah"</code> jadi nama kalian sendiri.</p>
`,playground:`nama = "Aisyah"
umur = 23
kota = "Jakarta"
print("Nama:", nama)
print("Umur:", umur)
print("Kota:", kota)`},

  { id:"3.5", part:3, title:"Variabel — Update & Increment", icon:"fa-arrow-up",
    breadcrumb:"Part 3: My First Python",
    content:`
<h1>Variabel Bisa Di-update!</h1>
<p>Isi kotak bisa berubah sepanjang program.</p>
<div class="block-code"><span class="kw">poin</span> = <span class="nu">0</span>
<span class="fn">print</span>(<span class="st">"Poin awal:"</span>, <span class="kw">poin</span>)
<span class="kw">poin</span> = <span class="kw">poin</span> + <span class="nu">50</span>
<span class="fn">print</span>(<span class="st">"Selesai tugas:"</span>, <span class="kw">poin</span>)
<span class="kw">poin</span> = <span class="kw">poin</span> + <span class="nu">100</span>
<span class="fn">print</span>(<span class="st">"Selesai bonus:"</span>, <span class="kw">poin</span>)</div>
<div class="data-box"><strong>Cara baca:</strong> <code>poin = poin + 50</code> — "Hitung poin sekarang, tambah 50, simpan ke poin." Dibaca dari kanan!</div>
`,playground:`poin = 0
print("Poin:", poin)
poin = poin + 50
print("Setelah tugas:", poin)
poin = poin + 100
print("Setelah bonus:", poin)`},

  { id:"3.6", part:3, title:"Aturan Nama Variabel", icon:"fa-tag",
    breadcrumb:"Part 3: My First Python",
    content:`
<h1>Aturan Nama Variabel</h1>
<div class="split">
<div>
<h3>BOLEH</h3>
<ul class="checklist">
<li><i class="fas fa-check-circle"></i> <code>nama_peserta</code> — underscore</li>
<li><i class="fas fa-check-circle"></i> <code>total2</code> — angka di akhir</li>
<li><i class="fas fa-check-circle"></i> <code>_rahasia</code> — awalan underscore</li>
<li><i class="fas fa-check-circle"></i> <code>Nama</code> — case sensitive</li>
</ul>
</div>
<div>
<h3>GABOLEH</h3>
<ul class="checklist">
<li><i class="fas fa-times-circle" style="color:var(--danger)"></i> <code>2nama</code> — awal angka</li>
<li><i class="fas fa-times-circle" style="color:var(--danger)"></i> <code>nama lengkap</code> — spasi</li>
<li><i class="fas fa-times-circle" style="color:var(--danger)"></i> <code>if</code>, <code>for</code>, <code>def</code> — keyword</li>
<li><i class="fas fa-times-circle" style="color:var(--danger)"></i> <code>n@m@</code> — simbol aneh</li>
</ul>
</div>
</div>
<div class="warn-box"><strong>Best practice:</strong> Pakai underscore <code>nama_peserta</code>. Huruf kecil. Jelas dan deskriptif.</div>
`,playground:`# Coba variabel dengan nama yang valid
nama_lengkap = "Aisyah Putri"
total_nilai = 95
print(nama_lengkap, "- Nilai:", total_nilai)`},

  { id:"3.7", part:3, title:"Tipe Data — Kenali Isi Kotak", icon:"fa-database",
    breadcrumb:"Part 3: My First Python",
    content:`
<h1>Tipe Data — Kenali Isi Kotak</h1>
<p>Python pinter bedain jenis data yang disimpen.</p>
<div class="card-grid card-grid-4">
<div class="card"><div class="card-icon"><i class="fas fa-font"></i></div><h3>str</h3><p>Teks<br><code>"Halo"</code></p></div>
<div class="card"><div class="card-icon"><i class="fas fa-hashtag"></i></div><h3>int</h3><p>Bilangan bulat<br><code>42</code></p></div>
<div class="card"><div class="card-icon"><i class="fas fa-percent"></i></div><h3>float</h3><p>Desimal<br><code>3.14</code></p></div>
<div class="card"><div class="card-icon"><i class="fas fa-check-square"></i></div><h3>bool</h3><p>Boolean<br><code>True / False</code></p></div>
</div>
<h3>Cek tipe dengan type()</h3>
<div class="block-code"><span class="fn">type</span>(<span class="st">"halo"</span>)   <span class="cm"># <class 'str'></span>
<span class="fn">type</span>(<span class="nu">42</span>)      <span class="cm"># <class 'int'></span>
<span class="fn">type</span>(<span class="nu">3.14</span>)    <span class="cm"># <class 'float'></span>
<span class="fn">type</span>(<span class="kw">True</span>)   <span class="cm"># <class 'bool'></span></div>
`,playground:`teks = "Halo"
angka = 42
desimal = 3.14
benar = True
print(type(teks))
print(type(angka))
print(type(desimal))
print(type(benar))`},

  { id:"3.8", part:3, title:"List — Daftar, Index, len()", icon:"fa-list",
    breadcrumb:"Part 3: My First Python",
    content:`
<h1>List — Daftar</h1>
<p>List = kotak besar berisi banyak item.</p>
<div class="block-code"><span class="kw">modul</span> = [<span class="st">"Python"</span>, <span class="st">"AI"</span>, <span class="st">"ML"</span>, <span class="st">"Deep Learning"</span>]
<span class="fn">print</span>(<span class="kw">modul</span>[<span class="nu">0</span>])    <span class="cm"># Python (index 0 = pertama!)</span>
<span class="fn">print</span>(<span class="kw">modul</span>[-<span class="nu">1</span>])   <span class="cm"># Deep Learning (index -1 = terakhir)</span>
<span class="fn">print</span>(<span class="fn">len</span>(<span class="kw">modul</span>))  <span class="cm"># 4 (jumlah isi)</span></div>
<div class="warn-box"><strong>INDEX MULAI DARI 0!</strong> Bukan 1. <code>modul[0]</code> = item pertama.</div>
`,playground:`makanan = ["Nasi Goreng", "Mie Ayam", "Sate", "Gado-gado", "Bakso"]
print("Favorit pertama:", makanan[0])
print("Favorit terakhir:", makanan[-1])
print("Total favorit:", len(makanan))`},

  { id:"3.9", part:3, title:"JEBAKAN: Teks + Angka = ERROR!", icon:"fa-exclamation-triangle",
    breadcrumb:"Part 3: My First Python",
    content:`
<h1>JEBAKAN: Teks + Angka = ERROR!</h1>
<p>Ini error paling sering buat pemula. <span class="text-pink">Coba Run kode di bawah — liat errornya!</span></p>
<div class="err-box"><strong>Code:</strong> <code>"100" + 100</code><br><strong>Error:</strong> TypeError — gak bisa campur teks + angka</div>
<div class="ok-box"><strong>Solusi 1:</strong> Ubah teks ke angka — <code>int("100") + 100</code> = 200<br><strong>Solusi 2:</strong> Pakai koma di print — <code>print("Total:", 100)</code><br><strong>Solusi 3:</strong> f-string — <code>f"Total: {100}"</code></div>
`,playground:`# JANGAN: ini error!
# print("100" + 100)

# YANG BENAR:
print(int("100") + 100)
print("Total:", 100 + 200)`},

  { id:"3.10", part:3, title:"Operator & f-string Lengkap", icon:"fa-percent",
    breadcrumb:"Part 3: My First Python",
    content:`
<h1>Operator & f-string Lengkap</h1>
<div class="split">
<div>
<h3>Aritmatika</h3>
<table class="comparison-table">
<tr><th>Op</th><th>Nama</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td>+</td><td>Tambah</td><td>10+3</td><td>13</td></tr>
<tr><td>*</td><td>Kali</td><td>10*3</td><td>30</td></tr>
<tr><td>/</td><td>Bagi</td><td>10/3</td><td>3.33</td></tr>
<tr><td>//</td><td>Bagi bulat</td><td>10//3</td><td>3</td></tr>
<tr><td>%</td><td>Sisa bagi</td><td>10%3</td><td>1</td></tr>
<tr><td>**</td><td>Pangkat</td><td>10**3</td><td>1000</td></tr>
</table>
</div>
<div>
<h3>f-string</h3>
<div class="block-code"><span class="kw">nama</span> = <span class="st">"Aisyah"</span>
<span class="kw">nilai</span> = <span class="nu">88.5</span>
<span class="fn">print</span>(f<span class="st">"Halo {nama}, nilai: {nilai}"</span>)
<span class="fn">print</span>(f<span class="st">"Rp {2500000:,}"</span>)
<span class="fn">print</span>(f<span class="st">"Rata: {nilai:.2f}"</span>)</div>
<p class="text-muted"><code>{:,}</code> = pemisah ribuan<br><code>{:.2f}</code> = 2 desimal</p>
</div>
</div>
`,playground:`a = 10
b = 3
print("// bagi bulat:", a // b)
print("% sisa bagi:", a % b)
print("** pangkat:", a ** b)
print("2**10 =", 2 ** 10, "(1 KB)")

# f-string
nama = "Kamu"
print(f"Halo {nama}, hebat!")`},

  // ===================== PART_OLD2 =====================
  { id:"2.1", part:2, title:"Tools yang Dibutuhkan", icon:"fa-tools",
    breadcrumb:"Part 2: Persiapan",
    content:`<h1>Tools yang Dibutuhkan</h1><p class="text-muted">Semuanya GRATIS — cukup laptop + internet</p>
<div class="card-grid card-grid-3">
<div class="card"><div class="card-icon"><i class="fab fa-python"></i></div><h3>Python 3.12</h3><p>Bahasa pemrograman<br><small>python.org/downloads</small></p><span class="badge badge-pink">Wajib</span></div>
<div class="card"><div class="card-icon"><i class="fas fa-code"></i></div><h3>VS Code</h3><p>Editor tempat nulis kode<br><small>code.visualstudio.com</small></p></div>
<div class="card"><div class="card-icon"><i class="fas fa-cloud"></i></div><h3>Google Colab</h3><p>Python online di browser<br><small>colab.research.google.com</small></p><span class="badge badge-green">CUKUP!</span></div>
</div>
<div class="ok-box"><strong>Minimal: Colab aja cukup!</strong> Gak perlu install apa-apa.</div>`},

  { id:"2.2", part:2, title:"Download & Install Python", icon:"fa-download",
    breadcrumb:"Part 2: Persiapan",
    content:`<h1>Download & Install Python</h1>
<p>Buka <strong>python.org/downloads</strong> — otomatis deteksi OS.</p>
<h3>Langkah Paling Penting</h3>
<div class="err-box" style="border:2px solid var(--danger)"><h3 style="color:var(--danger)">CENTANG: "Add Python to PATH"</h3><p style="color:var(--danger);font-weight:700">JANGAN LUPA! Kalau lupa → python gak bakal kedetek → error "python is not recognized"</p></div>
<p>Setelah centang → klik <strong>"Install Now"</strong> → tunggu → Close.</p>`},

  { id:"2.3", part:2, title:"Mac & Linux User", icon:"fab fa-apple",
    breadcrumb:"Part 2: Persiapan",
    content:`<h1>Mac & Linux User</h1>
<div class="split">
<div><h3>Mac</h3><div class="block-code"><span class="cm"># Install Homebrew dulu (brew.sh)</span>
brew install python@3.12
<span class="cm"># Verifikasi</span>
python3 --version</div></div>
<div><h3>Linux (Ubuntu/Debian)</h3><div class="block-code">sudo apt install python3 -y
<span class="cm"># Verifikasi</span>
python3 --version</div></div>
</div>`},

  { id:"2.4", part:2, title:"VS Code + Python Extension", icon:"fas fa-code",
    breadcrumb:"Part 2: Persiapan",
    content:`<h1>VS Code + Python Extension</h1>
<p>Download: <strong>code.visualstudio.com</strong></p>
<p>Setelah install:</p>
<ul class="checklist">
<li><i class="fas fa-check-circle"></i> <kbd>Ctrl+Shift+X</kbd> → cari "Python" → Install (Microsoft)</li>
<li><i class="fas fa-check-circle"></i> <kbd>Ctrl+\`</kbd> → buka terminal → <code>python --version</code></li>
</ul>
<div class="ok-box"><strong>Gak bisa install?</strong> Gak masalah — Colab itu juga editor. Fungsinya sama.</div>`},

  { id:"2.5", part:2, title:"Google Colab + T4 GPU", icon:"fas fa-cloud",
    breadcrumb:"Part 2: Persiapan",
    content:`<h1>Google Colab + T4 GPU</h1>
<p>Buka: <strong>colab.research.google.com</strong></p>
<div class="card-grid card-grid-3">
<div class="card"><div class="card-icon"><i class="fas fa-globe"></i></div><h3>1. Buka</h3><p>colab.research.google.com<br>Login akun Google</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-microchip"></i></div><h3>2. T4 GPU</h3><p>Runtime > Change runtime<br><strong>T4 GPU</strong> > Save</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-play"></i></div><h3>3. Test</h3><p><code>print("Siap!")</code><br>Shift+Enter</p></div>
</div>
<div class="data-box"><strong>Kenapa T4 GPU?</strong> Nanti minggu depan training AI butuh GPU. GRATIS dari Google!</div>`,playground:`print("Colab Siap!")
print("Laptop lokal & Colab = sama")`},

  // ===================== PART_OLD3 =====================
  { id:"1.1", part:1, title:"Kenapa Python? — Bahasa #1 AI", icon:"fa-brain",
    breadcrumb:"Part 1: Kenapa Python?",
    content:`<h1>Kenapa Python Jadi #1?</h1>
<div class="card-grid card-grid-4">
<div class="card"><div class="card-icon"><i class="fas fa-chart-line"></i></div><h3>15.39% TIOBE</h3><p>Peringkat #1 dunia<br><small>TIOBE Index Jun 2024</small></p></div>
<div class="card"><div class="card-icon"><i class="fas fa-users"></i></div><h3>44% Developer</h3><p>44.1% profesional developer<br><small>StackOverflow Survey 2024</small></p></div>
<div class="card"><div class="card-icon"><i class="fas fa-boxes"></i></div><h3>500K+ Library</h3><p>523 ribu project<br><small>PyPI.org</small></p></div>
<div class="card"><div class="card-icon"><i class="fas fa-feather"></i></div><h3>Syntax Simpel</h3><p>Kayak bahasa Inggris<br><small>print("halo") — 3 kata</small></p></div>
</div>
<div class="data-box"><strong>Data:</strong> TIOBE Index Juni 2024 — Python 15.39%, naik 2.15% dari tahun lalu. C: 10.03%. Java: 8.40%.</div>
`,playground:`print("Python = #1 bahasa pemrograman!")
print("TIOBE Index: 15.39%")
print("StackOverflow: 44% developer")`},

  { id:"1.2", part:1, title:"Python vs Bahasa Lain", icon:"fa-balance-scale",
    breadcrumb:"Part 1: Kenapa Python?",
    content:`<h1>Python vs Bahasa Pemrograman Lain</h1>
<table class="comparison-table">
<tr><th>Aspek</th><th class="hl">Python</th><th>Java</th><th>JavaScript</th><th>R</th><th>C++</th></tr>
<tr><td><strong>Kegunaan</strong></td><td class="hl">AI, Data, Web</td><td>Mobile, Enterprise</td><td>Web, Browser</td><td>Statistik</td><td>Game, Sistem</td></tr>
<tr><td><strong>Syntax</strong></td><td class="hl">Sangat Simpel</td><td>Menengah</td><td>Menengah</td><td>Menengah</td><td>Sulit</td></tr>
<tr><td><strong>Belajar</strong></td><td class="hl">Paling Cepat</td><td>Sedang</td><td>Sedang</td><td>Sedang</td><td>Lambat</td></tr>
<tr><td><strong>Gaji (US)</strong></td><td class="hl">$116K</td><td>$102K</td><td>$96K</td><td>$85K</td><td>$108K</td></tr>
</table>
<p class="text-muted">Sumber: TIOBE Index, StackOverflow Survey, Glassdoor 2024</p>`},

  { id:"1.3", part:1, title:"Siapa yang Pakai Python?", icon:"fa-building",
    breadcrumb:"Part 1: Kenapa Python?",
    content:`<h1>Siapa yang Pakai Python?</h1>
<div class="card-grid card-grid-3">
<div class="card"><div class="card-icon" style="background:#FFF0F0;color:#DB4437"><i class="fab fa-google"></i></div><h3>Google</h3><p>TensorFlow, JAX, Colab<br>semua dibangun dengan Python</p></div>
<div class="card"><div class="card-icon" style="background:#F0F0FF;color:#0B3D91"><i class="fas fa-rocket"></i></div><h3>NASA</h3><p>Analisis data rover Mars<br>pakai Python</p></div>
<div class="card"><div class="card-icon" style="background:#FFF0F0;color:#E50914"><i class="fas fa-film"></i></div><h3>Netflix</h3><p>247M subscribers<br>recommendation engine Python</p></div>
<div class="card"><div class="card-icon" style="background:#F0FFF0;color:#1DB954"><i class="fab fa-spotify"></i></div><h3>Spotify</h3><p>600M+ users<br>80% backend Python</p></div>
<div class="card"><div class="card-icon" style="background:#FFF5F9;color:#E1306C"><i class="fab fa-instagram"></i></div><h3>Instagram</h3><p>800M+ users<br>Django framework (Python)</p></div>
<div class="card"><div class="card-icon" style="background:#F5F5FF;color:#6366f1"><i class="fas fa-atom"></i></div><h3>OpenAI</h3><p>ChatGPT, GPT-4<br>research & backend Python</p></div>
</div>`},

  { id:"1.4", part:1, title:"Cara Kerja & Cocok Buat Pemula", icon:"fa-cogs",
    breadcrumb:"Part 1: Kenapa Python?",
    content:`<h1>Cara Kerja & Cocok Buat Pemula</h1>
<div class="split">
<div>
<h3>Python = Interpreted Language</h3>
<p>Kode Python dibaca <strong>baris per baris</strong> oleh Interpreter. Hasilnya langsung keluar.</p>
<p class="text-pink">Beda sama C++ / Java</p><p>Yang harus di-<em>compile</em> dulu (bisa 5-10 menit) baru bisa jalan.</p>
</div>
<div>
<h3>Kenapa Cocok Buat Pemula</h3>
<ul class="checklist">
<li><i class="fas fa-check-circle"></i> Instant feedback — ketik → Enter → lihat</li>
<li><i class="fas fa-check-circle"></i> Syntax bersih — gak ada kurung kurawal, titik koma</li>
<li><i class="fas fa-check-circle"></i> Komunitas supportif — jutaan tutorial gratis</li>
<li><i class="fas fa-check-circle"></i> Langsung produktif — hari pertama udah bisa ngoding</li>
</ul>
</div></div>`,playground:`print("Python cocok buat pemula!")
print("Karena: instant feedback")
print("Syntax simpel")
print("Komunitas besar")`},

  // ===================== PART_OLD4 =====================
  { id:"4.1", part:4, title:"If-Else — Komputer Bikin Keputusan", icon:"fa-code-branch",
    breadcrumb:"Part 4: Logika Komputer",
    content:`<h1>If-Else — Komputer Bikin Keputusan</h1>
<p>Analogi: <span class="text-pink">lampu merah</span> → berhenti. <span style="color:var(--success)">Lampu hijau</span> → jalan.</p>
<div class="block-code"><span class="kw">umur</span> = <span class="nu">20</span>
<span class="kw">if</span> umur >= <span class="nu">18</span>:
    <span class="fn">print</span>(<span class="st">"Boleh ikut HerAI!"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="st">"Maaf, minimal 18 tahun"</span>)</div>
<div class="data-box"><strong>if</strong> = "jika". <strong>else</strong> = "kalau tidak".<br>Kondisi True → lakukan A. False → lakukan B.</div>
<p>Coba ganti <code>umur</code> jadi 15. Liat outputnya berubah!</p>
`,playground:`umur = 20
if umur >= 18:
    print("Boleh ikut HerAI!")
else:
    print("Maaf, minimal 18 tahun")`},

  { id:"4.2", part:4, title:"elif — Banyak Pilihan", icon:"fa-layer-group",
    breadcrumb:"Part 4: Logika Komputer",
    content:`<h1>elif — Banyak Pilihan</h1>
<p>elif = else + if. Buat <strong>banyak kemungkinan</strong>.</p>
<div class="block-code"><span class="kw">nilai</span> = <span class="nu">85</span>
<span class="kw">if</span> nilai >= <span class="nu">90</span>:     <span class="kw">grade</span> = <span class="st">"A"</span>
<span class="kw">elif</span> nilai >= <span class="nu">80</span>:   <span class="kw">grade</span> = <span class="st">"B"</span>
<span class="kw">elif</span> nilai >= <span class="nu">70</span>:   <span class="kw">grade</span> = <span class="st">"C"</span>
<span class="kw">else</span>:              <span class="kw">grade</span> = <span class="st">"D"</span>
<span class="fn">print</span>(f<span class="st">"Nilai {nilai}: Grade {grade}"</span>)</div>
<div class="warn-box"><strong>Penting:</strong> Begitu ada yg cocok, Python langsung berhenti. Gak lanjut cek ke bawah. Ini kayak antrian.</div>
`,playground:`nilai = 85
if nilai >= 90: grade = "A"
elif nilai >= 80: grade = "B"
elif nilai >= 70: grade = "C"
else: grade = "D"
print(f"Nilai {nilai}: Grade {grade}")
# Coba ganti nilai!
nilai = 92
if nilai >= 90: grade = "A"
elif nilai >= 80: grade = "B"
else: grade = "C"
print(f"Nilai {nilai}: Grade {grade}")`},

  { id:"4.3", part:4, title:"AND & OR — Gabung Kondisi", icon:"fa-circle-nodes",
    breadcrumb:"Part 4: Logika Komputer",
    content:`<h1>AND & OR — Gabung Kondisi</h1>
<div class="split">
<div><h3>AND = Semua Harus True</h3>
<table class="bool-table"><tr><th>A</th><th>B</th><th>A AND B</th></tr>
<tr><td class="t">T</td><td class="t">T</td><td class="t">T</td></tr>
<tr><td class="t">T</td><td class="f">F</td><td class="f">F</td></tr>
<tr><td class="f">F</td><td class="t">T</td><td class="f">F</td></tr>
<tr><td class="f">F</td><td class="f">F</td><td class="f">F</td></tr></table>
<p class="text-muted">Hanya True kalau DUA-DUANYA True</p></div>
<div><h3>OR = Minimal Satu True</h3>
<table class="bool-table"><tr><th>A</th><th>B</th><th>A OR B</th></tr>
<tr><td class="t">T</td><td class="t">T</td><td class="t">T</td></tr>
<tr><td class="t">T</td><td class="f">F</td><td class="t">T</td></tr>
<tr><td class="f">F</td><td class="t">T</td><td class="t">T</td></tr>
<tr><td class="f">F</td><td class="f">F</td><td class="f">F</td></tr></table>
<p class="text-muted">True kalau SALAH SATU True</p></div>
</div>`,playground:`tugas = True
nilai = True
if tugas and nilai:
    print("AND: Lulus! (dua-duanya ok)")

payung = True
hujan = False
if payung or hujan:
    print("OR: Aman! (satu aja cukup)")
# Coba ganti True/False-nya!`},

  { id:"4.4", part:4, title:"INDENTASI — WAJIB!", icon:"fa-indent",
    breadcrumb:"Part 4: Logika Komputer",
    content:`<h1>INDENTASI — WAJIB!</h1>
<p class="text-muted">Ini error #1 paling sering buat pemula</p>
<div class="err-box"><strong>Yang SALAH (ERROR!):</strong> gak ada spasi di depan <code>print</code></div>
<div class="block-code"><span class="er">if True:
print("halo")</span></div>
<div class="ok-box" style="margin-top:12px"><strong>Yang BENAR:</strong> 4 spasi (atau 1 tab) di depan <code>print</code></div>
<div class="block-code"><span class="kw">if</span> True:
    <span class="fn">print</span>(<span class="st">"halo"</span>)</div>
<p><span class="badge badge-pink">Ingat!</span> Habis <code>:</code> WAJIB ada indentasi di baris bawahnya!</p>
`,playground:`# YANG BENAR - ada 4 spasi!
if True:
    print("Ini benar, ada indentasi!")
    print("Baris ini juga ada indentasi")

# Coba hapus spasi di depan print - nanti error!`},

  { id:"4.5", part:4, title:"For Loop — Komputer Kerja Berulang", icon:"fa-redo",
    breadcrumb:"Part 4: Logika Komputer",
    content:`<h1>For Loop — Komputer Kerja Berulang</h1>
<p>Kenapa nulis 100 kali? <span class="text-pink">Suruh aja komputer yg ngulangin.</span></p>
<div class="block-code"><span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nu">5</span>):
    <span class="fn">print</span>(f<span class="st">"Iterasi ke-{i}"</span>)</div>
<div class="warn-box"><strong>INDEX MULAI DARI 0!</strong> range(5) = 0,1,2,3,4 (total tetep 5 kali). Bukan 1-5.</div>
<p><code>range(5)</code> = 5 kali | <code>range(1, 6)</code> = 1,2,3,4,5 | <code>range(1, 10, 2)</code> = 1,3,5,7,9</p>
`,playground:`for i in range(5):
    print(f"Iterasi ke-{i}")

print("---")

for i in range(1, 6):
    print(f"Hitungan ke-{i}")

print("---")

for i in range(1, 10, 2):
    print(f"Loncat 2: {i}")`},

  { id:"4.6", part:4, title:"For Loop + List", icon:"fa-list-ol",
    breadcrumb:"Part 4: Logika Komputer",
    content:`<h1>For Loop + List — Jelajahi Daftar</h1>
<p>Loop bisa jelajahin list item satu-satu.</p>
<div class="block-code"><span class="kw">modul</span> = [<span class="st">"Python"</span>, <span class="st">"AI"</span>, <span class="st">"ML"</span>, <span class="st">"Deep Learning"</span>]
<span class="kw">for</span> m <span class="kw">in</span> <span class="kw">modul</span>:
    <span class="fn">print</span>(f<span class="st">"Belajar: {m}"</span>)</div>
<p>Si <code>m</code> itu kayak <strong>kursor</strong> — gerak satu-satu lewat tiap item di list. Dari "Python" → "AI" → "ML" → "Deep Learning". Sampai habis.</p>
<div class="data-box"><strong>Power tip:</strong> Nanti di data science, kalian bakal loop ratusan data kayak gini. Tinggal ganti isi list-nya.</div>
`,playground:`modul = ["Python", "AI", "Data Science", "Machine Learning"]
for m in modul:
    print(f"Saya belajar: {m}")

# Coba bikin list sendiri!
buah = ["Apel", "Mangga", "Jeruk", "Pisang"]
for b in buah:
    print(f"Saya suka: {b}")`},

  { id:"4.7", part:4, title:"While Loop — Ulangi Selama True", icon:"fa-spinner",
    breadcrumb:"Part 4: Logika Komputer",
    content:`<h1>While Loop — Ulangi Selama True</h1>
<p>While = "selama". Selama kondisi True → jalan terus.</p>
<div class="block-code"><span class="kw">angka</span> = <span class="nu">1</span>
<span class="kw">while</span> angka <= <span class="nu">5</span>:
    <span class="fn">print</span>(<span class="kw">angka</span>)
    angka = angka + <span class="nu">1</span></div>
<div class="err-box" style="margin-top:16px"><h3 style="color:var(--danger)">BAHAYA WHILE!</h3><p>Kalau LUPA <code>angka = angka + 1</code> → loop jalan SELAMANYA → laptop panas, browser freeze.</p><p><strong>Cara stop:</strong> <kbd>Ctrl+C</kbd> di terminal, atau klik <strong>Stop</strong> di Colab.</p></div>
`,playground:`# While dengan batas aman
angka = 1
while angka <= 5:
    print(angka)
    angka = angka + 1
print("Selesai!")`},

  { id:"4.8", part:4, title:"Loop + If — Power Combo", icon:"fa-fire",
    breadcrumb:"Part 4: Logika Komputer",
    content:`<h1>Loop + If — Power Combo</h1>
<div class="block-code"><span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nu">1</span>, <span class="nu">21</span>):
    <span class="kw">if</span> i % <span class="nu">2</span> == <span class="nu">0</span>:
        <span class="fn">print</span>(f<span class="st">"{i} — genap"</span>)
    <span class="kw">else</span>:
        <span class="fn">print</span>(f<span class="st">"{i} — ganjil"</span>)</div>
<div class="ok-box"><strong>Cuma 4 baris kode. Tapi ngeproses 20 data.</strong><br>Itu kekuatan programming — lo gak nulis 20 kali. Lo suruh komputer yang ngerjain.</div>
<h3>Challenge kalian</h3>
<p>Coba cetak semua bilangan <strong>kelipatan 3</strong> dari 1 sampai 30. Hint: <code>i % 3 == 0</code></p>
`,playground:`# Loop + If = Power!
for i in range(1, 21):
    if i % 2 == 0:
        print(f"{i} genap")
    else:
        print(f"{i} ganjil")

print("---")

# Challenge: kelipatan 3 dari 1-30
for i in range(1, 31):
    if i % 3 == 0:
        print(f"{i} kelipatan 3!")`},

  // ===================== PART_OLD5 =====================
  { id:"5.1", part:5, title:"Rekap Semua Konsep", icon:"fa-star",
    breadcrumb:"Part 5: Penutupan",
    content:`<h1>Yang Sudah Kalian Pelajari</h1>
<div class="card-grid card-grid-4">
<div class="card"><div class="card-icon"><i class="fas fa-print"></i></div><h3>print()</h3><p>Tampilkan ke layar</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-box"></i></div><h3>Variabel</h3><p>Simpan & update data</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-database"></i></div><h3>Tipe Data</h3><p>str, int, float, bool</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-list"></i></div><h3>List</h3><p>Daftar, index, len()</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-calculator"></i></div><h3>Operator</h3><p>+ - * / // % **</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-code-branch"></i></div><h3>If-Else</h3><p>Komputer bikin keputusan</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-redo"></i></div><h3>Loop</h3><p>for, while</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-fire"></i></div><h3>Combo</h3><p>Loop + If = power!</p></div>
</div>
<div class="ok-box" style="text-align:center;font-size:1.1rem"><strong>Ini semua fondasi programming.</strong> Bukan cuma Python — semua bahasa pemrograman pake konsep yang sama.</div>`,playground:`# Bebas! Coba apapun yang kalian pelajari
print("Saya sudah bisa Python!")
nama = "Kamu"
print(f"Hebat, {nama}!")`},

  { id:"5.2", part:5, title:"PR & Next: Math & Data Science", icon:"fa-forward",
    breadcrumb:"Part 5: Penutupan",
    content:`<h1>PR & Next Session</h1>
<div class="split">
<div>
<h3>PR (Pekerjaan Rumah)</h3>
<ul class="checklist">
<li><i class="fas fa-check-circle"></i> Modifikasi kode — ganti nama, ganti angka</li>
<li><i class="fas fa-check-circle"></i> Bikin error → perbaikin sendiri</li>
<li><i class="fas fa-check-circle"></i> Bikin kalkulator kecil</li>
<li><i class="fas fa-check-circle"></i> Loop 1-50, tampilkan ganjil aja</li>
</ul>
</div>
<div>
<h3>Next Session</h3>
<div class="card" style="text-align:left">
<div class="card-icon"><i class="fas fa-square-root-variable"></i></div>
<h3>Math & Data Science</h3>
<p>Rumus matematika jadi baris kode. Statistika, aljabar. Kalian udah punya fondasinya!</p>
</div>
</div>
</div>
<div class="ok-box" style="text-align:center;margin-top:20px"><strong>Notebook & cheatsheet di grup.</strong> Stuck? Chat aja.<br><br><span style="font-size:1.2rem">Kalian keren. Sampai ketemu!</span></div>`}
];

if(typeof module!=='undefined') module.exports=COURSE;
