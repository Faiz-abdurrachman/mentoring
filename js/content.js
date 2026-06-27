const COURSE = [
  // ===================== MODULE 1: TECHNICAL SETUP =====================
  { id:"1.1", part:1, title:"Instalasi & Setup Local", icon:"fa-download",
    breadcrumb:"19.00 | Technical Setup",
    content:`<h1>Instalasi Local Environment</h1>
<p>Sebelum mulai coding, kita butuh "bengkel" kerja di laptop kalian.</p>
<div class="split">
<div>
<h3>1. Install Python</h3>
<p>Download dari <strong>python.org</strong>. <br><span class="text-pink">SANGAT KRUSIAL:</span></p>
<div class="err-box">Wajib centang <strong>"Add Python to PATH"</strong> saat instalasi. Jika lupa, terminal tidak akan mengenali perintah <code>python</code>!</div>
</div>
<div>
<h3>2. Install VS Code</h3>
<p>Editor kode terpopuler. Buka VS Code, tekan <kbd>Ctrl+Shift+X</kbd> dan install ekstensi <strong>"Python"</strong>.</p>
</div>
</div>`},

  { id:"1.2", part:1, title:"Terminal & Virtual Env", icon:"fa-terminal",
    breadcrumb:"19.00 | Technical Setup",
    content:`<h1>Terminal & Virtual Environment</h1>
<p>Terminal (CMD/PowerShell) adalah tempat kita mengetik perintah langsung ke sistem komputer.</p>
<h3>Virtual Environment (venv)</h3>
<p>Membuat "ruangan isolasi" agar *library* di proyek kalian tidak bentrok satu sama lain.</p>
<div class="block-code">
<span class="cm"># 1. Buka terminal VS Code (Ctrl+\`)</span><br>
<span class="cm"># 2. Buat ruang isolasi (venv)</span><br>
python -m venv env<br><br>
<span class="cm"># 3. Aktifkan venv (Windows)</span><br>
.\\env\\Scripts\\activate
</div>
<div class="warn-box">Ciri venv aktif: Ada tulisan <strong>(env)</strong> di terminal kalian.</div>`},

  { id:"1.3", part:1, title:"Google Colab & T4 GPU", icon:"fa-cloud",
    breadcrumb:"19.00 | Technical Setup",
    content:`<h1>Alternatif: Google Colab</h1>
<p>Jika laptop bermasalah, jangan panik! Kita bisa pakai "laptop cloud" gratis milik Google: <strong>Google Colab</strong>.</p>
<ul class="checklist">
<li><i class="fas fa-check-circle"></i> Buka <strong>colab.research.google.com</strong>.</li>
<li><i class="fas fa-check-circle"></i> Berjalan di browser tanpa perlu install apapun.</li>
<li><i class="fas fa-check-circle"></i> Pilih menu Runtime > Change runtime type > Pilih <strong>T4 GPU</strong> (Sangat krusial untuk melatih AI).</li>
</ul>
<div class="ok-box">Untuk latihan malam ini, gunakan <strong>Playground Interaktif</strong> di bawah layar ini!</div>
`,playground:`print("Setup Selesai!")
print("Siap masuk materi pertama.")`},


  // ===================== MODULE 2: MY FIRST PYTHON CODE =====================
  { id:"2.1", part:2, title:"Apa itu Programming & Python?", icon:"fa-laptop-code",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Apa itu Programming & Python?</h1>
<div class="split">
<div>
<h3>Programming</h3>
<p>Komputer itu super cepat, tapi tidak bisa berpikir sendiri. <strong>Programming</strong> adalah cara kita memberinya urutan instruksi yang jelas.</p>
</div>
<div>
<h3>Python</h3>
<p>Python dirancang agar mirip dengan bahasa Inggris. Ini adalah bahasa pemrograman nomor #1 untuk kecerdasan buatan (AI) dan Data Science.</p>
</div>
</div>
`},

  { id:"2.1b", part:2, title:"Kenapa Harus Python?", icon:"fa-brain",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Kenapa Harus Python?</h1>
<p>Kenapa kita tidak belajar Java atau C++ saja? Karena Python adalah bahasa yang menggerakkan raksasa teknologi saat ini.</p>
<div class="card-grid card-grid-3">
<div class="card"><div class="card-icon" style="background:#FFF0F0;color:#DB4437"><i class="fab fa-google"></i></div><h3>Google & OpenAI</h3><p>Otak di balik ChatGPT & TensorFlow</p></div>
<div class="card"><div class="card-icon" style="background:#F0F0FF;color:#0B3D91"><i class="fas fa-rocket"></i></div><h3>NASA</h3><p>Menganalisis data dari rover Mars</p></div>
<div class="card"><div class="card-icon" style="background:#FFF0F0;color:#E50914"><i class="fas fa-film"></i></div><h3>Netflix & Spotify</h3><p>Algoritma rekomendasi film & musik</p></div>
</div>
<p class="text-muted" style="margin-top:20px; font-size:1.05rem;">Selain sangat laku di industri (Gaji rata-rata $116K di US), Python adalah <strong>bahasa paling ramah untuk pemula</strong> yang belum pernah ngoding sama sekali.</p>`},

  { id:"2.2", part:2, title:"Compiler vs Interpreter", icon:"fa-language",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Compiler vs Interpreter</h1>
<p>Bagaimana cara komputer mengerti dan menjalankan kode Python kita?</p>
<table class="comparison-table">
<tr><th>Aspek</th><th>Compiler (C++, Java)</th><th class="hl">Interpreter (Python)</th></tr>
<tr><td><strong>Analogi</strong></td><td>Menerjemahkan 1 buku penuh, lalu dicetak.</td><td class="hl">Penerjemah di sidang PBB (langsung ngomong).</td></tr>
<tr><td><strong>Cara Kerja</strong></td><td>Diubah semua jadi file (.exe) baru jalan.</td><td class="hl">Dibaca dan dieksekusi <strong>baris per baris</strong>.</td></tr>
</table>
<p class="text-muted">Kelebihan Interpreter: Jika kalian menulis 10 baris dan baris ke-5 error, baris 1-4 tetap akan jalan terlebih dahulu.</p>`},

  { id:"2.3", part:2, title:"print()", icon:"fa-print",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Fungsi print()</h1>
<p>Fungsi <code>print()</code> adalah cara kita menyuruh komputer menampilkan tulisan atau hasil perhitungan ke layar.</p>
<div class="data-box"><strong>Aturan Emas:</strong> Teks biasa WAJIB diapit tanda kutip (<code>" "</code> atau <code>' '</code>). Angka tidak perlu.</div>
<div class="block-code"><span class="fn">print</span>(<span class="st">"Halo AI Fellowship!"</span>)
<span class="fn">print</span>(<span class="nu">2026</span>)</div>
`,playground:`# Coba jalankan kode ini
print("Halo Mentor!")
print("Saya siap belajar Python")`},

  { id:"2.4", part:2, title:"Variable", icon:"fa-box",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Variable (Kotak Penyimpanan)</h1>
<p>Variabel seperti "kotak berlabel" yang digunakan untuk menyimpan data. Isinya bisa diubah kapan saja.</p>
<div class="block-code"><span class="kw">nama</span> = <span class="st">"Budi"</span>
<span class="kw">poin</span> = <span class="nu">50</span>
<span class="fn">print</span>(<span class="kw">nama</span>)</div>
<div class="err-box"><strong>Aturan Penamaan:</strong><br>1. Tidak boleh pakai spasi (gunakan <code>nama_lengkap</code>).<br>2. Tidak boleh diawali angka (<code>1nama</code> akan error).<br>3. Sensitif huruf besar/kecil (<code>Poin</code> beda dengan <code>poin</code>).</div>
`,playground:`poin = 50
print("Poin awal:")
print(poin)

poin = 100
print("Poin baru:")
print(poin)`},

  { id:"2.5", part:2, title:"Data Type", icon:"fa-shapes",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Data Type (Tipe Data)</h1>
<p>Komputer harus tahu jenis data apa yang ada di dalam variabel tersebut agar tidak salah perlakuan.</p>
<table class="comparison-table">
<tr><th>Tipe Data</th><th>Deskripsi</th><th>Contoh</th></tr>
<tr><td><strong>String</strong></td><td>Teks / Karakter</td><td><code>"Halo"</code>, <code>"123"</code></td></tr>
<tr><td><strong>Integer</strong></td><td>Angka Bulat</td><td><code>25</code>, <code>-10</code></td></tr>
<tr><td><strong>Float</strong></td><td>Angka Desimal</td><td><code>3.14</code>, <code>0.5</code></td></tr>
<tr><td><strong>Boolean</strong></td><td>Benar / Salah</td><td><code>True</code>, <code>False</code></td></tr>
</table>
`,playground:`teks = "Indonesia"
angka = 45
desimal = 3.8
benar = True

# type() mengecek jenis tipe data
print(type(teks))
print(type(desimal))`},

  { id:"2.6", part:2, title:"Input", icon:"fa-keyboard",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Input dari User</h1>
<p>Program yang statis itu membosankan. Kita bisa memakai <code>input()</code> agar program menanyakan sesuatu ke pengguna yang memakai program tersebut.</p>
<div class="block-code"><span class="kw">nama</span> = <span class="fn">input</span>(<span class="st">"Siapa nama kamu? "</span>)
<span class="fn">print</span>(<span class="st">"Halo "</span> + <span class="kw">nama</span>)</div>
<div class="warn-box"><strong>Penting:</strong> Apapun yang diketik user melalui fungsi <code>input()</code>, Python akan selalu menganggapnya sebagai <strong>String (Teks)</strong>, meskipun user mengetik angka 10!</div>
`,playground:`# Saat menekan Run, akan muncul kotak popup di atas layar!
nama = input("Masukkan nama jagoanmu:")
print("Selamat bertarung,")
print(nama)`},

  { id:"2.7", part:2, title:"Operator Matematika", icon:"fa-calculator",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Operator & Operasi Matematika</h1>
<p>Sebagai fondasi Data Science, perhitungan adalah hal mutlak di Python.</p>
<div class="card-grid card-grid-4">
<div class="card"><div class="card-icon"><b>+</b></div><h3>Tambah</h3><p><code>5 + 2 = 7</code></p></div>
<div class="card"><div class="card-icon"><b>-</b></div><h3>Kurang</h3><p><code>5 - 2 = 3</code></p></div>
<div class="card"><div class="card-icon"><b>*</b></div><h3>Kali</h3><p><code>5 * 2 = 10</code></p></div>
<div class="card"><div class="card-icon"><b>/</b></div><h3>Bagi</h3><p><code>5 / 2 = 2.5</code></p></div>
</div>
<div class="card-grid card-grid-2">
<div class="card"><div class="card-icon"><b>//</b></div><h3>Bagi Bulat</h3><p><code>5 // 2 = 2</code> (Dipotong)</p></div>
<div class="card"><div class="card-icon"><b>%</b></div><h3>Modulo</h3><p><code>5 % 2 = 1</code> (Sisa bagi)</p></div>
</div>
`,playground:`print("Berapa 10 dibagi 3?")
print(10 / 3)
print("Kalau Modulo (sisa bagi) dari 10 % 3?")
print(10 % 3)`},

  { id:"2.8", part:2, title:"Type Conversion", icon:"fa-exchange-alt",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Type Conversion</h1>
<p>Ingat, <code>input()</code> selalu menghasilkan teks (String). Jika kita ingin melakukan hitungan matematika pada input tersebut, kita WAJIB mengubah tipe datanya (Type Conversion/Casting).</p>
<ul class="checklist">
<li><code>int()</code> : Ubah ke angka bulat.</li>
<li><code>float()</code> : Ubah ke angka desimal.</li>
<li><code>str()</code> : Ubah ke teks murni.</li>
</ul>
<div class="err-box">Jika kalian mencoba menjumlahkan <code>"10" + 5</code>, program akan <strong>Error</strong> (TypeError) karena Teks tidak bisa ditambah Angka!</div>
`,playground:`# Ambil input (Berupa Teks/String)
umur_teks = input("Berapa umurmu?")

# Konversi String menjadi Integer (Angka)
umur_angka = int(umur_teks)

# Sekarang bisa dihitung matematika!
tahun_lahir = 2026 - umur_angka
print("Kamu lahir sekitar tahun:")
print(tahun_lahir)`},


  // ===================== MODULE 3: COMPUTER LOGIC =====================
  { id:"3.1", part:3, title:"Boolean & Comparison", icon:"fa-balance-scale",
    breadcrumb:"20.15 | Computer Logic",
    content:`<h1>Boolean Logic & Comparison Operator</h1>
<p>Cara komputer mengambil keputusan adalah dengan melakukan perbandingan matematis. Hasil perbandingan ini selalu berupa tipe data <strong>Boolean</strong> (True atau False).</p>
<table class="comparison-table">
<tr><th>Operator</th><th>Fungsi</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td><code>==</code></td><td>Sama Persis</td><td><code>5 == 5</code></td><td>True</td></tr>
<tr><td><code>!=</code></td><td>Tidak Sama</td><td><code>5 != 3</code></td><td>True</td></tr>
<tr><td><code>></code></td><td>Lebih Besar</td><td><code>5 > 10</code></td><td>False</td></tr>
<tr><td><code><=</code></td><td>Lebih Kecil Sama</td><td><code>5 <= 5</code></td><td>True</td></tr>
</table>
`,playground:`print("Apakah 10 sama dengan '10' teks?")
print(10 == "10")  # Berbeda tipe, pasti False!

print("Apakah 100 tidak sama dengan 50?")
print(100 != 50)`},

  { id:"3.2", part:3, title:"Logical Operator", icon:"fa-project-diagram",
    breadcrumb:"20.15 | Computer Logic",
    content:`<h1>Logical Operator</h1>
<p>Bagaimana jika kita butuh 2 syarat sekaligus? Kita pakai operator logika: <code>and</code>, <code>or</code>, <code>not</code>.</p>
<ul class="checklist">
<li><strong>AND</strong> : Semua kondisi wajib bernilai True.</li>
<li><strong>OR</strong> : Cukup salah satu kondisi bernilai True.</li>
<li><strong>NOT</strong> : Membalikkan kondisi (True jadi False, sebaliknya).</li>
</ul>
`,playground:`lulus_ujian = True
lulus_wawancara = False

print("Pengecekan AND:")
print(lulus_ujian and lulus_wawancara)

print("Pengecekan OR:")
print(lulus_ujian or lulus_wawancara)`},

  { id:"3.3", part:3, title:"if, else, elif", icon:"fa-code-branch",
    breadcrumb:"20.15 | Computer Logic",
    content:`<h1>if, if-else, if-elif-else</h1>
<p>Di sinilah kita menyuruh program mengeksekusi blok kode yang berbeda berdasarkan hasil kondisi (True/False).</p>
<div class="block-code"><span class="kw">nilai</span> = <span class="nu">85</span>
<span class="kw">if</span> nilai >= <span class="nu">90</span>:
    <span class="fn">print</span>(<span class="st">"A"</span>)
<span class="kw">elif</span> nilai >= <span class="nu">80</span>:
    <span class="fn">print</span>(<span class="st">"B"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="st">"C"</span>)</div>
<div class="err-box"><strong>IndentationError!</strong> Baris kode di bawah <code>if</code>, <code>elif</code>, atau <code>else</code> WAJIB menjorok ke kanan (diberi Tab / 4 Spasi). Jika sejajar lurus, Python pasti Error.</div>
`,playground:`suhu = 35

if suhu > 32:
    print("Cuaca panas! Nyalakan AC.")
elif suhu > 25:
    print("Cuaca hangat.")
else:
    print("Cuaca dingin, ambil jaket.")`},

  { id:"3.4", part:3, title:"while Loop", icon:"fa-spinner",
    breadcrumb:"20.15 | Computer Logic",
    content:`<h1>while Loop</h1>
<p><code>while</code> loop akan terus berulang secara terus-menerus <strong>selama syaratnya masih True</strong>. Kita tidak tahu pasti berapa kali ia akan berulang.</p>
<div class="block-code"><span class="kw">energi</span> = <span class="nu">3</span>
<span class="kw">while</span> energi > <span class="nu">0</span>:
    <span class="fn">print</span>(<span class="st">"Bekerja..."</span>)
    energi = energi - <span class="nu">1</span></div>
<div class="warn-box"><strong>Bahaya Infinite Loop!</strong> Jika kalian lupa mengubah kondisi (seperti mengurangi energi), loop akan berjalan tanpa henti sampai komputer crash.</div>
`,playground:`stok = 3
while stok > 0:
    print("Barang dijual.")
    stok = stok - 1  # Wajib dikurangi

print("Stok habis!")`},

  { id:"3.5", part:3, title:"for Loop & range()", icon:"fa-redo",
    breadcrumb:"20.15 | Computer Logic",
    content:`<h1>for Loop & range()</h1>
<p>Jika kita tahu pasti <strong>berapa kali</strong> harus mengulang (misal 100 kali), gunakan <code>for</code> loop. Sering dipadukan dengan <code>range()</code>.</p>
<div class="block-code"><span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nu">5</span>):
    <span class="fn">print</span>(<span class="st">"Ulangan ke-"</span>, i)</div>
<p><code>range(5)</code> akan menghasilkan angka yang dimulai dari <strong>0</strong> dan berhenti di <strong>4</strong> (0, 1, 2, 3, 4).</p>
`,playground:`# Mencetak angka 1 sampai 5
for x in range(1, 6):
    print("Angka ke-", x)

print("Loop selesai!")`},

  { id:"3.6", part:3, title:"break, continue, pass", icon:"fa-stop-circle",
    breadcrumb:"20.15 | Computer Logic",
    content:`<h1>break, continue, pass</h1>
<p>Tiga perintah spesial untuk memanipulasi cara kerja looping (for / while):</p>
<ul class="checklist">
<li><code>break</code> : Menghentikan paksa dan keluar dari loop secara total.</li>
<li><code>continue</code> : Melewati instruksi di bawahnya dan langsung melompat ke iterasi/perulangan berikutnya.</li>
<li><code>pass</code> : Perintah "kosong" (tidak melakukan apa-apa). Sering dipakai agar struktur kode tidak error ketika kita belum selesai menulis isinya.</li>
</ul>
`,playground:`for angka in range(1, 10):
    if angka == 3:
        print("Tiga? Skip! (continue)")
        continue
    
    if angka == 6:
        print("Enam? Berhenti Total! (break)")
        break
        
    print("Angka saat ini:", angka)`}

];

if(typeof module!=='undefined') module.exports=COURSE;
