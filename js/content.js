const COURSE = [
  // ===================== MODULE 1: TECHNICAL SETUP & KICKSTART =====================
  { id:"1.1", part:1, title:"Apa itu Programming & Python?", icon:"fa-laptop-code",
    breadcrumb:"19.00 | Technical Setup",
    content:`<h1>Apa itu Programming & Python?</h1>
<div class="split">
<div>
<h3>Bahasa Komputer</h3>
<p>Komputer itu sangat pintar menghitung, tapi dia tidak mengerti bahasa manusia. <strong>Programming</strong> adalah cara kita memberikan instruksi ke komputer.</p>
</div>
<div>
<h3>Mengapa Python?</h3>
<p>Python diciptakan agar mirip dengan bahasa Inggris. Ini adalah bahasa utama dunia untuk <strong>Artificial Intelligence, Data Science, dan Machine Learning</strong>.</p>
</div>
</div>
<div class="card-grid card-grid-3">
<div class="card"><div class="card-icon"><i class="fas fa-robot"></i></div><h3>AI & ML</h3><p>Otak di balik ChatGPT</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-chart-pie"></i></div><h3>Data Science</h3><p>Menganalisis jutaan data</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-globe"></i></div><h3>Web & Backend</h3><p>Dipakai Instagram & Spotify</p></div>
</div>`},

  { id:"1.2", part:1, title:"Compiler vs Interpreter", icon:"fa-language",
    breadcrumb:"19.00 | Technical Setup",
    content:`<h1>Compiler vs Interpreter</h1>
<p>Ada dua cara komputer menerjemahkan bahasa pemrograman ke bahasa mesin (angka 0 dan 1).</p>
<table class="comparison-table">
<tr><th>Aspek</th><th>Compiler (C++, Java)</th><th class="hl">Interpreter (Python)</th></tr>
<tr><td><strong>Analogi</strong></td><td>Menerjemahkan 1 buku penuh, lalu dicetak.</td><td class="hl">Penerjemah langsung (seperti di sidang PBB).</td></tr>
<tr><td><strong>Cara Kerja</strong></td><td>Kode diubah semua sekaligus menjadi file jalankan (.exe).</td><td class="hl">Dibaca dan dieksekusi <strong>baris per baris</strong>.</td></tr>
<tr><td><strong>Kecepatan Test</strong></td><td>Lambat (harus compile ulang jika ada error).</td><td class="hl">Sangat Cepat! (Langsung terlihat hasilnya).</td></tr>
</table>
<div class="ok-box">Inilah alasan Python sangat ramah pemula. Kalian bisa menulis satu baris, menjalankannya, dan langsung melihat hasilnya!</div>`},

  { id:"1.3", part:1, title:"Instalasi Python & VS Code", icon:"fa-download",
    breadcrumb:"19.00 | Technical Setup",
    content:`<h1>Instalasi Local Environment</h1>
<p>Sebagai engineer, kita harus menyiapkan "bengkel kerja" kita sendiri di laptop.</p>
<div class="split">
<div>
<h3>1. Install Python</h3>
<p>Download dari <strong>python.org</strong>. <br><span class="text-pink">SANGAT KRUSIAL UNTUK WINDOWS:</span></p>
<div class="err-box">Wajib centang <strong>"Add Python to PATH"</strong> saat instalasi. Jika lupa, terminal tidak akan mengenali perintah <code>python</code>!</div>
</div>
<div>
<h3>2. Install VS Code</h3>
<p>Ini adalah editor kode terpopuler di dunia (buatan Microsoft). Setelah install, buka VS Code, tekan <kbd>Ctrl+Shift+X</kbd> dan install ekstensi <strong>"Python"</strong>.</p>
</div>
</div>`},

  { id:"1.4", part:1, title:"Terminal & Virtual Environment (venv)", icon:"fa-terminal",
    breadcrumb:"19.00 | Technical Setup",
    content:`<h1>Terminal & Virtual Environment</h1>
<p>Terminal (Command Prompt / PowerShell / Bash) adalah tempat kita mengetik perintah langsung ke sistem operasi.</p>
<h3>Virtual Environment (venv)</h3>
<p>Bayangkan kalian punya proyek AI dan proyek Web. Keduanya butuh versi alat yang berbeda. <strong>venv</strong> membuat "ruangan isolasi" agar proyek kalian tidak saling bentrok.</p>
<div class="block-code">
<span class="cm"># 1. Buka terminal di VS Code (Ctrl+\`)</span><br>
<span class="cm"># 2. Buat ruang isolasi (venv)</span><br>
python -m venv env<br><br>
<span class="cm"># 3. Aktifkan venv (Windows)</span><br>
.\\env\\Scripts\\activate<br><br>
<span class="cm"># 3. Aktifkan venv (Mac/Linux)</span><br>
source env/bin/activate
</div>
<div class="warn-box">Ciri venv aktif: Ada tulisan <strong>(env)</strong> di paling kiri terminal kalian.</div>`},

  { id:"1.5", part:1, title:"Alternatif Cepat: Google Colab", icon:"fa-cloud",
    breadcrumb:"19.00 | Technical Setup",
    content:`<h1>Alternatif: Google Colab & T4 GPU</h1>
<p>Jika laptop bermasalah, jangan panik! Google menyediakan "laptop cloud" gratis bernama <strong>Google Colab</strong>.</p>
<ul class="checklist">
<li><i class="fas fa-check-circle"></i> Buka <strong>colab.research.google.com</strong>.</li>
<li><i class="fas fa-check-circle"></i> Berjalan 100% di browser tanpa perlu install apa pun.</li>
<li><i class="fas fa-check-circle"></i> <strong>PENTING UNTUK AI:</strong> Pilih menu Runtime > Change runtime type > Pilih <strong>T4 GPU</strong>. Ini akan memberi kalian kartu grafis gratis untuk melatih model AI.</li>
</ul>
<div class="ok-box">Untuk kelas malam ini, kalian bisa mengetik langsung di kotak <strong>Playground Python</strong> yang ada di setiap kartu web ini! Coba tekan <strong>Run Code</strong> di bawah.</div>
`,playground:`print("Environment sudah siap!")
print("Mari kita mulai menulis kode pertama kita.")`},

  // ===================== MODULE 2: MY FIRST PYTHON CODE =====================
  { id:"2.1", part:2, title:"print() — Fungsi Pertamamu", icon:"fa-print",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>print() — Fungsi Pertamamu</h1>
<p>Fungsi <code>print()</code> adalah cara kita menyuruh komputer menampilkan tulisan atau angka ke layar.</p>
<div class="data-box"><strong>Aturan Emas:</strong> Teks biasa WAJIB diapit tanda kutip (<code>" "</code> atau <code>' '</code>). Angka tidak perlu tanda kutip.</div>
<div class="block-code"><span class="fn">print</span>(<span class="st">"Halo Dunia!"</span>) <span class="cm"># Mencetak teks</span>
<span class="fn">print</span>(<span class="nu">2026</span>)          <span class="cm"># Mencetak angka</span></div>
`,playground:`# Tugas: Coba ubah teks di bawah menjadi nama kalian!
print("Nama saya adalah HerAI Student")
print(100)`},

  { id:"2.2", part:2, title:"Variabel (Kotak Penyimpanan)", icon:"fa-box",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Variabel: Menyimpan Data</h1>
<p>Variabel seperti kotak berlabel yang digunakan untuk menyimpan data. Isinya bisa diubah kapan saja.</p>
<div class="block-code"><span class="kw">nama</span> = <span class="st">"Siti"</span>
<span class="kw">umur</span> = <span class="nu">21</span>
<span class="fn">print</span>(<span class="kw">nama</span>)</div>
<div class="err-box"><strong>Aturan Penamaan Variabel:</strong><br>1. Tidak boleh diawali angka (<code>1nama</code> error).<br>2. Tidak boleh ada spasi (gunakan underscore: <code>nama_lengkap</code>).<br>3. Sensitif terhadap huruf besar/kecil (<code>Umur</code> berbeda dengan <code>umur</code>).</div>
`,playground:`poin = 50
print("Poin awal:")
print(poin)

poin = poin + 10  # Mengupdate isi variabel
print("Poin setelah menang:")
print(poin)`},

  { id:"2.3", part:2, title:"Data Type (Tipe Data)", icon:"fa-shapes",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Data Type (Tipe Data Dasar)</h1>
<p>Komputer harus tahu jenis data apa yang sedang disimpan agar tidak salah menghitung.</p>
<table class="comparison-table">
<tr><th>Tipe Data</th><th>Deskripsi</th><th>Contoh</th></tr>
<tr><td><strong>String (str)</strong></td><td>Teks / Karakter</td><td><code>"Halo"</code>, <code>"123"</code></td></tr>
<tr><td><strong>Integer (int)</strong></td><td>Angka Bulat</td><td><code>25</code>, <code>-10</code></td></tr>
<tr><td><strong>Float (float)</strong></td><td>Angka Desimal</td><td><code>3.14</code>, <code>9.8</code></td></tr>
<tr><td><strong>Boolean (bool)</strong></td><td>Benar / Salah</td><td><code>True</code>, <code>False</code></td></tr>
</table>
`,playground:`teks = "Indonesia"
angka = 45
desimal = 3.8
benar = True

# type() digunakan untuk mengecek jenis data
print(type(teks))
print(type(angka))`},

  { id:"2.4", part:2, title:"Operasi Matematika & Operator", icon:"fa-calculator",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Operasi Matematika</h1>
<p>Python adalah alat analisis data yang hebat karena kemampuan matematikanya.</p>
<div class="card-grid card-grid-4">
<div class="card"><div class="card-icon"><b>+</b></div><h3>Tambah</h3><p><code>5 + 2 = 7</code></p></div>
<div class="card"><div class="card-icon"><b>-</b></div><h3>Kurang</h3><p><code>5 - 2 = 3</code></p></div>
<div class="card"><div class="card-icon"><b>*</b></div><h3>Kali</h3><p><code>5 * 2 = 10</code></p></div>
<div class="card"><div class="card-icon"><b>/</b></div><h3>Bagi</h3><p><code>5 / 2 = 2.5</code></p></div>
</div>
<div class="card-grid card-grid-3">
<div class="card"><div class="card-icon"><b>//</b></div><h3>Bagi Bulat</h3><p><code>5 // 2 = 2</code> (tanpa desimal)</p></div>
<div class="card"><div class="card-icon"><b>%</b></div><h3>Modulo (Sisa Bagi)</h3><p><code>5 % 2 = 1</code> (sangat penting!)</p></div>
<div class="card"><div class="card-icon"><b>**</b></div><h3>Pangkat</h3><p><code>5 ** 2 = 25</code></p></div>
</div>
`,playground:`print("Hasil pembagian biasa:", 10 / 3)
print("Hasil bagi bulat:", 10 // 3)
print("Sisa bagi (modulo):", 10 % 3)
print("2 pangkat 3:", 2 ** 3)`},

  { id:"2.5", part:2, title:"input() & Type Conversion", icon:"fa-keyboard",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>input() & Type Conversion</h1>
<p><code>input()</code> memungkinkan program kita meminta data dari *user* (pengguna).</p>
<div class="err-box"><strong>Perhatian:</strong> Apapun yang diketik user melalui <code>input()</code> akan SELALU dianggap sebagai Teks (String). Walaupun dia mengetik angka 10!</div>
<p><strong>Type Conversion (Casting):</strong> Kita harus mengubah teks tersebut menjadi angka jika ingin dihitung matematika.</p>
<ul class="checklist">
<li><code>int("10")</code> → mengubah teks jadi angka bulat.</li>
<li><code>float("3.5")</code> → mengubah teks jadi angka desimal.</li>
<li><code>str(10)</code> → mengubah angka jadi teks.</li>
</ul>
`,playground:`# Skulpt akan memunculkan pop-up browser untuk input!
umur_teks = input("Masukkan umur kamu:") 

# Kita konversi teks ke angka (integer)
umur_angka = int(umur_teks)

tahun_lahir = 2026 - umur_angka
print(f"Oh, kamu lahir sekitar tahun {tahun_lahir} ya!")`},

  // ===================== MODULE 3: COMPUTER LOGIC =====================
  { id:"3.1", part:3, title:"Boolean Logic & Comparison", icon:"fa-balance-scale-right",
    breadcrumb:"20.15 | Computer Logic",
    content:`<h1>Boolean Logic & Comparison</h1>
<p>Komputer mengambil keputusan dengan membandingkan sesuatu. Hasil perbandingan ini selalu berupa <strong>True</strong> (Benar) atau <strong>False</strong> (Salah).</p>
<table class="comparison-table">
<tr><th>Operator</th><th>Arti</th><th>Contoh</th><th>Hasil</th></tr>
<tr><td><code>==</code></td><td>Sama dengan</td><td><code>5 == 5</code></td><td>True</td></tr>
<tr><td><code>!=</code></td><td>Tidak sama dengan</td><td><code>5 != 3</code></td><td>True</td></tr>
<tr><td><code>></code></td><td>Lebih besar</td><td><code>5 > 10</code></td><td>False</td></tr>
<tr><td><code><=</code></td><td>Lebih kecil atau sama</td><td><code>5 <= 5</code></td><td>True</td></tr>
</table>
<div class="warn-box">Ingat: <code>=</code> (satu sama dengan) digunakan untuk mengisi variabel. <code>==</code> (dua sama dengan) digunakan untuk membandingkan.</div>
`,playground:`print("Apakah 10 lebih besar dari 5?")
print(10 > 5)

print("Apakah kata 'apel' sama dengan 'Apel'?")
print("apel" == "Apel")  # Hati-hati, huruf besar ngaruh!`},

  { id:"3.2", part:3, title:"Logical Operator (and, or, not)", icon:"fa-code-branch",
    breadcrumb:"20.15 | Computer Logic",
    content:`<h1>Logical Operator</h1>
<p>Kadang kita perlu menggabungkan beberapa syarat sekaligus.</p>
<div class="split">
<div>
<h3>AND (Dan)</h3>
<p><strong>SELURUH</strong> syarat wajib True.</p>
<code>True and True = True</code><br>
<code>True and False = False</code>
</div>
<div>
<h3>OR (Atau)</h3>
<p>Cukup <strong>SALAH SATU</strong> syarat True.</p>
<code>True or False = True</code><br>
<code>False or False = False</code>
</div>
</div>
<p>Ada juga <code>not</code> yang berfungsi membalikkan keadaan (True menjadi False).</p>
`,playground:`punya_ktp = True
cukup_umur = False

print("Pengecekan AND (Wajib dua-duanya):")
print(punya_ktp and cukup_umur)

print("Pengecekan OR (Salah satu saja):")
print(punya_ktp or cukup_umur)`},

  { id:"3.3", part:3, title:"if, elif, else", icon:"fa-sitemap",
    breadcrumb:"20.15 | Computer Logic",
    content:`<h1>if, elif, else</h1>
<p>Ini adalah otak dari segala kecerdasan buatan. Kita menyuruh program mengambil tindakan berbeda berdasarkan kondisi (If-Else).</p>
<div class="block-code"><span class="kw">nilai</span> = <span class="nu">85</span>
<span class="kw">if</span> nilai >= <span class="nu">90</span>:
    <span class="fn">print</span>(<span class="st">"Grade A"</span>)
<span class="kw">elif</span> nilai >= <span class="nu">80</span>:
    <span class="fn">print</span>(<span class="st">"Grade B"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="st">"Grade C"</span>)</div>
<div class="err-box"><strong>INDENTASI WAJIB:</strong> Di bawah baris <code>if</code>, kode harus digeser ke kanan (4 spasi atau 1 Tab). Jika tidak, Python akan Error!</div>
`,playground:`suhu = 35

if suhu > 32:
    print("Cuaca sangat panas! Nyalakan AC.")
elif suhu > 25:
    print("Cuaca normal yang hangat.")
else:
    print("Cuaca sejuk, ambil jaket.")`},

  { id:"3.4", part:3, title:"for Loop & range()", icon:"fa-redo",
    breadcrumb:"20.15 | Computer Logic",
    content:`<h1>for Loop & range()</h1>
<p>Jangan pernah melakukan hal berulang secara manual. Gunakan <strong>Looping</strong>. <code>for</code> loop digunakan jika kita sudah tahu berapa kali perulangan harus dilakukan.</p>
<div class="block-code"><span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(<span class="nu">5</span>):
    <span class="fn">print</span>(f<span class="st">"Iterasi ke-{i}"</span>)</div>
<p><code>range(5)</code> akan menghasilkan angka: 0, 1, 2, 3, 4 (selalu mulai dari 0 dan berhenti sebelum 5).</p>
`,playground:`# Mencetak angka 1 sampai 5
for x in range(1, 6):
    print(f"Perulangan nomor {x}")

print("Loop selesai!")`},

  { id:"3.5", part:3, title:"while Loop", icon:"fa-spinner",
    breadcrumb:"20.15 | Computer Logic",
    content:`<h1>while Loop</h1>
<p>Berbeda dengan <code>for</code>, <code>while</code> loop akan terus berulang <strong>selama syaratnya masih True</strong>. Kita tidak tahu pasti berapa kali ia akan berulang.</p>
<div class="block-code"><span class="kw">energi</span> = <span class="nu">3</span>
<span class="kw">while</span> energi > <span class="nu">0</span>:
    <span class="fn">print</span>(<span class="st">"Bekerja..."</span>)
    energi = energi - <span class="nu">1</span></div>
<div class="err-box"><strong>Hati-hati Infinite Loop!</strong> Jika kalian lupa mengurangi energi (<code>energi = energi - 1</code>), program akan berjalan selamanya sampai laptop kalian ngehang!</div>
`,playground:`stok = 3
while stok > 0:
    print(f"Barang dijual. Sisa stok: {stok}")
    stok = stok - 1  # Wajib agar loop bisa berhenti

print("Toko tutup, stok habis!")`},

  { id:"3.6", part:3, title:"break, continue, pass", icon:"fa-stop-circle",
    breadcrumb:"20.15 | Computer Logic",
    content:`<h1>break, continue, pass</h1>
<p>Tiga kata ajaib untuk mengendalikan jalannya sebuah perulangan (loop):</p>
<ul class="checklist">
<li><code>break</code> : Menghancurkan (menghentikan) loop secara paksa saat itu juga.</li>
<li><code>continue</code> : Melewati langkah saat ini dan melompat langsung ke perulangan berikutnya.</li>
<li><code>pass</code> : Tidak melakukan apa-apa (hanya sebagai <em>placeholder</em> agar kode tidak error).</li>
</ul>
`,playground:`for angka in range(1, 10):
    if angka == 3:
        print("Ada angka 3, kita LEWATI (continue)")
        continue
    
    if angka == 7:
        print("Ada angka 7, kita BERHENTI (break)")
        break
        
    print(f"Angka saat ini: {angka}")`},

  // ===================== MODULE 4: PENUTUP =====================
  { id:"4.1", part:4, title:"Tantangan Algoritma Akhir", icon:"fa-trophy",
    breadcrumb:"20.35 | Penutup",
    content:`<h1>Tantangan Akhir</h1>
<p>Kalian telah mempelajari semua fondasi: Variabel, Logika, dan Looping. Sekarang mari satukan semuanya!</p>
<div class="data-box"><strong>Misi Kalian:</strong><br>Buatlah program for loop dari angka 1 hingga 20.<br>Gunakan if-else dan modulo (%).<br>Jika angka genap, cetak "Genap".<br>Jika angka ganjil, lewati (gunakan <code>continue</code>).</div>
`,playground:`# Tulis solusi kalian di bawah ini:
for i in range(1, 21):
    if i % 2 == 1:
        continue  # Lewati ganjil
    print(f"Angka {i} adalah Genap")`},

  { id:"4.2", part:4, title:"Welcome to the Future!", icon:"fa-rocket",
    breadcrumb:"20.45 | Selesai",
    content:`<h1>Selamat! Fondasi Telah Terbangun</h1>
<p>Hanya dalam beberapa jam, kalian telah bertransformasi dari seseorang yang tidak mengerti kode, menjadi seseorang yang bisa membangun logika komputasional.</p>
<p>Kalian telah memahami:</p>
<div class="card-grid card-grid-4">
<div class="card"><div class="card-icon"><i class="fas fa-terminal"></i></div><h3>Setup</h3><p>Colab & venv</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-box"></i></div><h3>Data</h3><p>Variabel & Tipe</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-code-branch"></i></div><h3>Logic</h3><p>if, elif, else</p></div>
<div class="card"><div class="card-icon"><i class="fas fa-redo"></i></div><h3>Looping</h3><p>for & while</p></div>
</div>
<div class="ok-box" style="text-align:center;font-size:1.1rem;margin-top:20px;"><strong>Next Step: AI & Machine Learning</strong><br>Seluruh model AI canggih di dunia dibangun menggunakan kombinasi If-Else dan Looping yang baru saja kalian pelajari. Di pertemuan berikutnya, kita akan melihat sihir itu terjadi.<br><br>Sampai jumpa!</div>
`,playground:`print("Terima kasih, Mentor!")
print("Saya siap menjadi AI Engineer! 🚀")`}
];

if(typeof module!=='undefined') module.exports=COURSE;
