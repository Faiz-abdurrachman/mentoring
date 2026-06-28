const COURSE = [
  // ===================== MODULE 1: SETUP & PENGENALAN =====================
  { id:"1.1", part:1, title:"Apa Itu Python?", icon:"fa-laptop-code",
    breadcrumb:"19.00 | Pengenalan & Setup",
    content:`<h1>Apa Itu Python?</h1>
<div class="split" style="align-items:start">
<div>
<h3>Bahasa Serbaguna</h3>
<p>Python adalah bahasa pemrograman tingkat tinggi yang sangat populer karena aturan penulisannya (sintaks) yang sederhana dan mudah dibaca—hampir mirip dengan bahasa Inggris sehari-hari.</p>
</div>
<div>
<h3>Otak di Balik AI</h3>
<p>Dengan satu bahasa ini, kamu bisa membuat berbagai macam hal. Mulai dari program sederhana, website, hingga kecerdasan buatan (AI) dan Data Science.</p>
</div>
</div>
`},

  { id:"1.2", part:1, title:"Python vs Bahasa Lain", icon:"fa-balance-scale",
    breadcrumb:"19.00 | Pengenalan & Setup",
    content:`<h1>Kenapa Harus Belajar Python?</h1>
<p>Mungkin kamu bertanya, "Dari sekian banyak bahasa, kenapa mulai dari Python?"</p>
<div class="card-grid card-grid-2">
<div class="card"><div class="card-icon" style="color:#E50914"><i class="fas fa-times-circle"></i></div><h3>Java / C++</h3><p>Aturannya ketat. Wajib pakai titik koma (<code>;</code>) dan kurung kurawal <code>{}</code>. Lupa satu titik koma saja, program error.</p></div>
<div class="card"><div class="card-icon" style="color:#00C851"><i class="fas fa-check-circle"></i></div><h3>Python</h3><p>Sangat <i>beginner friendly</i>. Tidak pusing memikirkan <code>;</code> atau <code>{}</code>. Python hanya menggunakan spasi (indentation) agar rapi.</p></div>
</div>
<div class="ok-box" style="margin-top:15px"><strong>Fokus Penggunaan:</strong> JavaScript/PHP fokus untuk website. Python jauh lebih serbaguna, merajai bidang <strong>Data Science, Machine Learning, dan AI</strong>.</div>`},

  { id:"1.3", part:1, title:"Kecepatan Menulis", icon:"fa-tachometer-alt",
    breadcrumb:"19.00 | Pengenalan & Setup",
    content:`<h1>Kecepatan Menulis Kode</h1>
<p>Di Python, kamu bisa fokus melatih logika pemecahan masalah, bukan sibuk menghafal simbol.</p>
<div class="split">
<div>
<p style="font-weight:bold; color:red">Java (4 Baris):</p>
<div class="block-code" style="font-size:0.8rem; margin:0">class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}</div>
</div>
<div>
<p style="font-weight:bold; color:#00C851">Python (1 Baris):</p>
<div class="block-code" style="font-size:0.8rem; margin:0"><span class="fn">print</span>(<span class="st">"Hello World"</span>)</div>
</div>
</div>
<p style="margin-top:15px">Dan jika error, jangan panik! Python punya <strong>Komunitas Raksasa</strong> & ribuan alat bantu (Library) gratis siap pakai.</p>
`},

  { id:"1.4", part:1, title:"Environment Local", icon:"fa-download",
    breadcrumb:"19.00 | Pengenalan & Setup",
    content:`<h1>Setup "Alat Perang" Digital</h1>
<p>Sebelum menulis kode, mari siapkan alat tempur di komputermu:</p>
<ul class="checklist">
<li><strong>1. Python Interpreter:</strong> Mesin penerjemah yang harus didownload dari python.org. <span class="text-pink">Wajib centang "Add to PATH" saat instalasi!</span></li>
<li><strong>2. VS Code (IDE):</strong> Buku catatan pintarmu. Memberikan warna pada kode dan mengecek salah ketik.</li>
<li><strong>3. Virtual Environment (venv):</strong> Ketik <code>python -m venv myenv</code> lalu aktifkan agar library di proyekmu tidak bentrok.</li>
</ul>
<div class="err-box">Sesi ini dipandu langsung oleh Mentor. Pastikan laptopmu aman dari error environment sebelum lanjut!</div>`},

  { id:"1.5", part:1, title:"Google Colab", icon:"fa-cloud",
    breadcrumb:"19.00 | Pengenalan & Setup",
    content:`<h1>Alternatif Cepat: Google Colab</h1>
<p>Jika laptop bermasalah saat setup lokal, kita bisa menggunakan lembar kerja Cloud dari Google.</p>
<ul class="checklist">
<li>Buka browser dan masuk ke <strong>colab.research.google.com</strong>.</li>
<li>Berjalan langsung di browser tanpa perlu install apapun di laptopmu.</li>
<li><span class="text-pink">Sangat Krusial:</span> Pilih menu <strong>Runtime > Change runtime type > Pilih T4 GPU</strong> (Persiapan untuk materi AI minggu depan).</li>
</ul>
<div class="ok-box">Untuk kelas malam ini, kalian juga bisa langsung mempraktekkan kodenya di <strong>Playground Interaktif</strong> di bawah layar ini!</div>
`,playground:`print("Setup Environment Selesai!")
print("Siap belajar Python!")`},


  // ===================== MODULE 2: HANDS-ON =====================
  { id:"2.1", part:2, title:"Menampilkan Teks", icon:"fa-print",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>print() & Komentar</h1>
<p>Mari menulis baris kode pertama kita di Google Colab / VS Code!</p>
<div class="block-code"><span class="cm"># Ini adalah baris komentar.</span>
<span class="cm"># Komputer akan mengabaikan tulisan yang diawali tanda pagar (#).</span>

<span class="fn">print</span>(<span class="st">"Hello World"</span>)</div>
<ul class="checklist" style="font-size:0.9rem">
<li><code>print</code> &rarr; Perintah untuk menyuruh komputer berbicara ke layar.</li>
<li><code>"..."</code> &rarr; Tanda kutip wajib ada agar komputer tahu itu teks biasa (String).</li>
</ul>
`,playground:`# Coba jalankan kode ini
print("Hello World")
print("Halo Mentor AI Bootcamp!")`},

  { id:"2.2", part:2, title:"Variabel", icon:"fa-box",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Kotak Penyimpanan (Variable)</h1>
<p>Variabel adalah "kotak" di dalam memori komputer tempat kita menyimpan data untuk dipakai nanti.</p>
<div class="block-code"><span class="kw">nama</span> = <span class="st">"Budi"</span>
<span class="kw">poin</span> = <span class="nu">100</span>
<span class="fn">print</span>(<span class="kw">nama</span>)</div>
<div class="err-box">PENTING: Tanda <code>=</code> (Sama dengan) di Python BUKAN berarti kesamaan matematika! Tanda itu berarti: <strong>"Tugaskan/Masukkan data di sebelah kanan ke dalam kotak di sebelah kiri"</strong>.</div>
`,playground:`nama = "Budi"
poin = 50

print("Pemain:")
print(nama)
print("Poin awal:")
print(poin)`},

  { id:"2.3", part:2, title:"Tipe Data Dasar", icon:"fa-shapes",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Tipe Data Dasar</h1>
<p>Komputer harus tahu jenis data apa yang masuk ke dalam kotaknya.</p>
<table class="comparison-table" style="font-size:0.9rem">
<tr><th>Tipe Data</th><th>Deskripsi</th><th>Contoh</th></tr>
<tr><td><strong>String (str)</strong></td><td>Teks. Harus pakai kutip.</td><td><code>"Budi"</code>, <code>"100"</code></td></tr>
<tr><td><strong>Integer (int)</strong></td><td>Angka bulat.</td><td><code>25</code>, <code>-10</code></td></tr>
<tr><td><strong>Float (float)</strong></td><td>Angka desimal (titik).</td><td><code>3.14</code></td></tr>
<tr><td><strong>Boolean (bool)</strong></td><td>Benar / Salah.</td><td><code>True</code>, <code>False</code></td></tr>
</table>
`,playground:`teks = "Indonesia"
angka = 45
desimal = 3.14

# Fungsi type() mengecek jenis data
print(type(teks))
print(type(angka))`},

  { id:"2.4", part:2, title:"Operasi Dasar", icon:"fa-calculator",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Operasi Aritmatika & String</h1>
<p>Python sangat hebat dalam hitung-hitungan.</p>
<ul class="checklist" style="font-size:0.95rem">
<li><strong>Matematika:</strong> Tambah <code>+</code>, Kurang <code>-</code>, Kali <code>*</code>, Bagi <code>/</code></li>
<li><strong>Spesial Matematika:</strong> Sisa Bagi <code>%</code> (Modulo), Pembagian Bulat <code>//</code></li>
<li><strong>Operasi String:</strong> Penggabungan teks pakai <code>+</code>, Repetisi teks pakai <code>*</code></li>
</ul>
<div class="warn-box">Teks "10" ditambah teks "10" hasilnya "1010", bukan 20! Komputer hanya menggabungkan (menempel) teksnya.</div>
`,playground:`print("Matematika 10 / 3:")
print(10 / 3)

print("Pembagian Bulat 10 // 3:")
print(10 // 3)

print("String menempel:")
print("Halo " + "Budi")`},

  { id:"2.5", part:2, title:"Input & Type Casting", icon:"fa-keyboard",
    breadcrumb:"19.30 | My First Python Code",
    content:`<h1>Input & Type Casting</h1>
<p>Bagaimana jika data berasal dari ketikan pengguna (user)? Gunakan <code>input()</code>.</p>
<div class="block-code" style="font-size:0.85rem"><span class="cm"># Menerima input (SELALU menghasilkan tipe String)</span>
<span class="kw">umur_teks</span> = <span class="fn">input</span>(<span class="st">"Masukkan umur: "</span>)

<span class="cm"># Mengubah String menjadi Integer (Type Casting)</span>
<span class="kw">umur_angka</span> = <span class="fn">int</span>(umur_teks) 
</div>
<div class="ok-box"><strong>Fungsi Casting:</strong> <code>int()</code> ke bulat, <code>float()</code> ke desimal, <code>str()</code> ke teks murni. Wajib dilakukan sebelum menghitung input dari user!</div>
`,playground:`# Akan muncul popup di layar!
umur_teks = input("Berapa umur kamu?")
umur_angka = int(umur_teks)

tahun = 2026 - umur_angka
print("Kamu lahir sekitar tahun:")
print(tahun)`},


  // ===================== MODULE 3: CONDITIONALS & LOOPS =====================
  { id:"3.1", part:3, title:"Operator Perbandingan", icon:"fa-balance-scale",
    breadcrumb:"20.15 | Logika Alur",
    content:`<h1>Operator Perbandingan</h1>
<p>Untuk membuat keputusan, komputer harus membandingkan sesuatu. Hasilnya pasti tipe data <strong>Boolean</strong> (<code>True</code> atau <code>False</code>).</p>
<ul class="checklist" style="font-size:0.95rem">
<li><code>==</code> (Sama dengan)</li>
<li><code>!=</code> (Tidak sama dengan)</li>
<li><code>&gt;</code> (Lebih besar), <code>&lt;</code> (Lebih kecil)</li>
<li><code>&gt;=</code> (Lebih besar sama dengan), <code>&lt;=</code> (Lebih kecil sama)</li>
</ul>
`,playground:`print("Apakah 100 > 50?")
print(100 > 50)

print("Apakah 10 sama persis dengan 5?")
print(10 == 5)`},

  { id:"3.2", part:3, title:"Operator Logika", icon:"fa-project-diagram",
    breadcrumb:"20.15 | Logika Alur",
    content:`<h1>Operator Logika</h1>
<p>Membantu menggabungkan beberapa pertanyaan perbandingan sekaligus.</p>
<ul class="checklist">
<li><strong>and</strong> : Dua-duanya HARUS <code>True</code>. (Contoh: Punya KTP <code>and</code> Umur > 17).</li>
<li><strong>or</strong> : Salah satu saja <code>True</code> sudah cukup. (Contoh: Bawa KTP <code>or</code> Bawa SIM).</li>
<li><strong>not</strong> : Membalikkan keadaan. (<code>True</code> jadi <code>False</code>).</li>
</ul>
`,playground:`punya_ktp = True
umur_cukup = True

if punya_ktp and umur_cukup:
    print("Boleh masuk!")
else:
    print("Dilarang masuk!")`},

  { id:"3.3", part:3, title:"Percabangan if-else", icon:"fa-code-branch",
    breadcrumb:"20.15 | Logika Alur",
    content:`<h1>Percabangan: if, elif, else</h1>
<p>Cara kita mengajari komputer mengambil keputusan layaknya manusia.</p>
<div class="block-code" style="font-size:0.85rem">uang = <span class="nu">50000</span>
<span class="kw">if</span> uang >= <span class="nu">20000</span>:
    <span class="fn">print</span>(<span class="st">"Bisa beli kopi!"</span>)
<span class="kw">elif</span> uang >= <span class="nu">10000</span>:
    <span class="fn">print</span>(<span class="st">"Beli es teh aja."</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="st">"Pulang, nggak ada uang."</span>)</div>
<div class="err-box"><strong>IndentationError!</strong> Spasi/lekukan di Python menentukan blok kode. Baris kode di bawah <code>if</code> HARUS menjorok ke dalam (Tab). Jika lurus, pasti Error!</div>
`,playground:`suhu = 35

if suhu > 32:
    print("Cuaca panas! Nyalakan AC.")
elif suhu > 25:
    print("Cuaca hangat.")
else:
    print("Cuaca dingin, ambil jaket.")`},

  { id:"3.4", part:3, title:"while Loop", icon:"fa-spinner",
    breadcrumb:"20.15 | Logika Alur",
    content:`<h1>Perulangan while</h1>
<p>Manusia capek melakukan hal yang sama 1000x, komputer tidak. <code>while</code> berjalan <strong>selama kondisinya True</strong>.</p>
<div class="block-code" style="font-size:0.85rem">energi = <span class="nu">3</span>
<span class="kw">while</span> energi > <span class="nu">0</span>:
    <span class="fn">print</span>(<span class="st">"Bekerja..."</span>)
    energi = energi - <span class="nu">1</span></div>
<div class="warn-box"><strong>Infinite Loop!</strong> Jika kamu lupa mengurangi energi, komputermu akan berteriak "Bekerja..." selamanya sampai hang. Pastikan kondisi bisa berubah menjadi False!</div>
`,playground:`stok = 3
while stok > 0:
    print("Barang dijual.")
    stok = stok - 1
print("Stok habis!")`},

  { id:"3.5", part:3, title:"for Loop & range", icon:"fa-redo",
    breadcrumb:"20.15 | Logika Alur",
    content:`<h1>for Loop & range()</h1>
<p>Digunakan ketika kita mengiterasi elemen atau <strong>sudah tahu pasti</strong> berapa kali ingin mengulang.</p>
<div class="block-code"><span class="cm"># Berhenti SEBELUM angka 6</span>
<span class="kw">for</span> i <span class="kw">in</span> <span class="fn">range</span>(1, 6):
    <span class="fn">print</span>(<span class="st">"Putaran ke-"</span>, i)</div>
<div class="ok-box"><strong>ANTI PANIK:</strong> Kalian tidak perlu menghafal cara menulis <code>while</code> atau <code>for</code> malam ini! Cukup pahami bahwa komputer punya kemampuan ajaib untuk mengulang perintah ribuan kali tanpa capek.</div>
`,playground:`for nomor in range(1, 6):
    print("Mencetak dokumen ke-", nomor)`},

  { id:"3.6", part:3, title:"Jembatan Logika Akhir", icon:"fa-brain",
    breadcrumb:"Penutupan Sesi",
    content:`<h1>Mempersiapkan Mindset AI</h1>
<p>Selamat! Malam ini kamu sudah mengerti bagaimana komputer menyimpan data (Variabel), mengambil keputusan (If-Else), dan bekerja keras otomatis (Loop).</p>
<div class="split" style="align-items:start">
<div>
<h3>Data Science</h3>
<p>Minggu depan, kita akan menggunakan Logika dan Perulangan ini untuk membedah ribuan baris data dan mencari pola tersembunyi.</p>
</div>
<div>
<h3>Machine Learning</h3>
<p>Kamu akan menyadari bahwa AI dan Matematika yang terlihat rumit, pada akhirnya ditulis menggunakan struktur IF dan LOOP yang baru saja kamu kuasai.</p>
</div>
</div>
<div class="ok-box">Persiapkan dirimu, minggu depan kita akan merubah rumus matematika menjadi baris kode nyata!</div>`},

];

if(typeof module!=='undefined') module.exports=COURSE;
