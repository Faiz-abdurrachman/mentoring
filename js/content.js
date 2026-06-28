const COURSE = [
  // ===================== MODULE 1: SETUP & PENGENALAN =====================
  { id:"1.1", part:1, title:"Apa Itu Python?", icon:"fa-laptop-code",
    breadcrumb:"19.00 | Pengenalan",
    content:`<div style="text-align:center; padding: 20px;">
        <i class="fab fa-python" style="font-size: 80px; color: #3776AB; animation: bounce 2s infinite;"></i>
        <h1 style="font-size: 2.5rem; margin-top:20px;">Halo, Python!</h1>
        <p style="font-size: 1.2rem; color: #666;">Bahasa Pemrograman Paling Diminati di Dunia.</p>
        <div style="display:flex; justify-content:center; gap:20px; margin-top:30px;">
            <div class="card" style="text-align:center; width:150px;"><i class="fas fa-brain fa-3x" style="color:#ff69b4"></i><p>Raja AI</p></div>
            <div class="card" style="text-align:center; width:150px;"><i class="fas fa-chart-bar fa-3x" style="color:#ff69b4"></i><p>Data Science</p></div>
            <div class="card" style="text-align:center; width:150px;"><i class="fas fa-globe fa-3x" style="color:#ff69b4"></i><p>Website Backend</p></div>
        </div>
    </div>`},

  { id:"1.2", part:1, title:"Python vs Java", icon:"fa-balance-scale",
    breadcrumb:"19.00 | Pengenalan",
    content:`<h1 style="text-align:center">Kenapa Python?</h1>
<div class="split" style="margin-top:30px;">
<div style="text-align:center; border: 2px solid #ff4d4d; padding:15px; border-radius:10px; background:#fff0f0">
    <h3 style="color:#ff4d4d">Bahasa Kuno (Java/C++)</h3>
    <i class="fas fa-frown fa-4x" style="color:#ff4d4d; margin:10px 0;"></i>
    <p>Sangat ketat. Wajib pakai titik koma (<code>;</code>) dan <code>{}</code>. Lupa 1 simbol? <strong>ERROR!</strong></p>
</div>
<div style="text-align:center; border: 2px solid #00C851; padding:15px; border-radius:10px; background:#f0fff0">
    <h3 style="color:#00C851">Python</h3>
    <i class="fas fa-smile-beam fa-4x" style="color:#00C851; margin:10px 0;"></i>
    <p>Sangat Beginner-Friendly. Baca layaknya bahasa Inggris. Rapi hanya dengan spasi!</p>
</div>
</div>`},

  { id:"1.3", part:1, title:"Kecepatan Menulis", icon:"fa-tachometer-alt",
    breadcrumb:"19.00 | Pengenalan",
    content:`<h1>Buktikan Sendiri Kecepatannya!</h1>
<div style="margin-top:20px;">
<p style="font-weight:bold; color:#ff4d4d"><i class="fas fa-times-circle"></i> Java (Mencetak teks):</p>
<div class="block-code" style="font-size:0.9rem; margin-bottom:20px; opacity:0.7">class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}</div>
<p style="font-weight:bold; color:#00C851; font-size:1.2rem;"><i class="fas fa-check-circle"></i> Python (Sama persis):</p>
<div class="block-code" style="font-size:1.2rem; border-left: 5px solid #00C851;"><span class="fn">print</span>(<span class="st">"Hello World"</span>)</div>
</div>`},

  { id:"1.4", part:1, title:"Setup 1: Python", icon:"fa-download",
    breadcrumb:"19.00 | Persiapan",
    content:`<div style="text-align:center;">
    <i class="fab fa-python fa-5x" style="color:#3776AB; margin-bottom:20px;"></i>
    <h1>Install Mesin Python</h1>
    <p style="font-size:1.2rem;">Komputermu butuh "Penerjemah" agar mengerti kodemu.</p>
    
    <div style="background:#FFF0F0; border:2px dashed #ff4d4d; padding:20px; border-radius:15px; margin-top:30px; display:inline-block; text-align:left;">
        <h3 style="color:#ff4d4d; margin:0 0 10px 0;"><i class="fas fa-exclamation-triangle"></i> SANGAT KRUSIAL!</h3>
        <p style="margin:0; font-size:1.1rem">Saat install, kamu <strong>WAJIB</strong> mencentang kotak:<br><br><span style="background:white; padding:5px; border:1px solid black; font-weight:bold;">[✓] Add Python to PATH</span></p>
    </div>
</div>`},

  { id:"1.5", part:1, title:"Setup 2: VS Code", icon:"fa-code",
    breadcrumb:"19.00 | Persiapan",
    content:`<div style="text-align:center;">
    <i class="fas fa-code fa-5x" style="color:#007ACC; margin-bottom:20px;"></i>
    <h1>Install VS Code</h1>
    <p style="font-size:1.2rem;">Ini adalah "Buku Catatan" pintarmu. Mewarnai kode & mengecek salah ketik.</p>
    <br>
    <div class="card" style="display:inline-block; text-align:left; width:80%;">
        <h3>Langkah:</h3>
        <ol style="font-size:1.1rem">
            <li>Buka VS Code</li>
            <li>Buka tab Extensions (Kotak-kotak di kiri)</li>
            <li>Cari & Install ekstensi bernama <strong>"Python"</strong></li>
        </ol>
    </div>
</div>`},

  { id:"1.6", part:1, title:"Colab", icon:"fa-cloud",
    breadcrumb:"19.00 | Persiapan",
    content:`<div style="text-align:center;">
    <i class="fas fa-cloud fa-5x" style="color:#f4b400; margin-bottom:20px;"></i>
    <h1>Google Colab</h1>
    <p style="font-size:1.2rem;">Laptop error? Jangan panik. Buka <strong>colab.research.google.com</strong>.</p>
    <br>
    <div class="ok-box" style="display:inline-block; text-align:left;">
        Itu adalah "Laptop Cloud" milik Google.<br>
        Kamu bisa langsung ngoding di browser tanpa perlu install apa-apa!<br><br>
        <strong>Malam ini, ayo gunakan Playground interaktif di web ini!</strong>
    </div>
</div>`,playground:`print("Setup Environment Selesai!")
print("Siap belajar Python!")`},


  // ===================== MODULE 2: VARIABEL & DATA =====================
  { id:"2.1", part:2, title:"Menampilkan Teks", icon:"fa-print",
    breadcrumb:"19.30 | Hands-On Dasar",
    content:`<h1>Mencetak Teks: print()</h1>
<p style="font-size:1.1rem">Ini adalah perintah ajaib agar komputer berbicara ke layar.</p>
<div class="block-code" style="font-size:1.2rem"><span class="fn">print</span>(<span class="st">"Halo Dunia"</span>)</div>
<div class="split" style="margin-top:20px;">
    <div style="text-align:center"><i class="fas fa-comment-dots fa-3x" style="color:var(--her-pink)"></i><p>Teks harus diapit kutip <code>"..."</code> agar tidak dianggap sebagai perintah lain!</p></div>
    <div style="text-align:center"><i class="fas fa-hashtag fa-3x" style="color:gray"></i><p>Gunakan awalan <code>#</code> untuk menulis komentar yang akan diabaikan komputer.</p></div>
</div>
`,playground:`# Coba ubah teks di bawah ini!
print("Hello World")
print("Halo dari Indonesia")`},

  { id:"2.2", part:2, title:"Konsep Variabel", icon:"fa-box-open",
    breadcrumb:"19.30 | Hands-On Dasar",
    content:`<h1 style="text-align:center">Variabel = Kotak Penyimpanan</h1>
<div style="text-align:center; padding:20px;">
    <i class="fas fa-box-open fa-5x" style="color:#d4a373; margin-bottom:10px;"></i>
    <p style="font-size:1.2rem;">Bayangkan kamu punya kardus kosong.</p>
    <p style="font-size:1.2rem;">Kamu tempel stiker bertuliskan <strong>"nama"</strong> di luar kardus itu.</p>
    <p style="font-size:1.2rem;">Lalu kamu masukkan kertas bertuliskan <strong>"Budi"</strong> ke dalamnya.</p>
</div>
<div class="block-code" style="text-align:center; font-size:1.2rem;">
<span class="kw">nama</span> = <span class="st">"Budi"</span>
</div>
`},

  { id:"2.3", part:2, title:"Visualisasi Variabel", icon:"fa-eye",
    breadcrumb:"19.30 | Hands-On Dasar",
    content:`<h1>Apa Maksud Tanda Sama Dengan (=) ?</h1>
<div class="err-box" style="font-size:1.1rem">
    Di Python, tanda <code>=</code> <strong>BUKAN</strong> berarti kesamaan matematika!
</div>
<p style="font-size:1.2rem; text-align:center; margin-top:20px;">
    Tanda <code>=</code> artinya: <br><strong>"Tugaskan / Masukkan data di kanan ke dalam kotak di kiri"</strong>
</p>
<div class="block-code" style="margin-top:20px;">
<span class="kw">skor</span> = <span class="nu">100</span><br>
<span class="fn">print</span>(skor)
</div>
`,playground:`nama_jagoan = "Gatotkaca"
nyawa = 100

print("Pahlawan kita:")
print(nama_jagoan)
print("Sisa Nyawa:")
print(nyawa)`},

  { id:"2.4", part:2, title:"Tipe Data 1", icon:"fa-font",
    breadcrumb:"19.30 | Hands-On Dasar",
    content:`<h1>Tipe Data: String & Integer</h1>
<p>Komputer memperlakukan teks dan angka secara sangat berbeda.</p>
<div class="split">
<div class="card" style="text-align:center">
    <i class="fas fa-font fa-3x" style="color:blue"></i>
    <h3 style="margin-top:10px">String (Teks)</h3>
    <p>Wajib pakai kutip!<br>Contoh: <code>"Budi"</code>, <code>"100"</code></p>
</div>
<div class="card" style="text-align:center">
    <i class="fas fa-sort-numeric-up fa-3x" style="color:green"></i>
    <h3 style="margin-top:10px">Integer (Bulat)</h3>
    <p>Angka utuh tanpa kutip.<br>Contoh: <code>100</code>, <code>-5</code></p>
</div>
</div>
`,playground:`# String bisa ditempel pakai tanda +
nama_depan = "Budi "
nama_belakang = "Santoso"
print(nama_depan + nama_belakang)

# TAPI AWAS! "10" + "10" tidak akan jadi 20!
print("10" + "10")`},

  { id:"2.5", part:2, title:"Tipe Data 2", icon:"fa-percentage",
    breadcrumb:"19.30 | Hands-On Dasar",
    content:`<h1>Tipe Data: Float & Boolean</h1>
<div class="split">
<div class="card" style="text-align:center">
    <i class="fas fa-percentage fa-3x" style="color:orange"></i>
    <h3 style="margin-top:10px">Float (Desimal)</h3>
    <p>Angka desimal. Wajib pakai titik (bukan koma).<br>Contoh: <code>3.14</code>, <code>0.5</code></p>
</div>
<div class="card" style="text-align:center">
    <i class="fas fa-toggle-on fa-3x" style="color:purple"></i>
    <h3 style="margin-top:10px">Boolean (Logika)</h3>
    <p>Hanya punya 2 nilai:<br><code>True</code> atau <code>False</code></p>
</div>
</div>
`,playground:`# Matematika dengan Integer dan Float
print("10 dibagi 3 adalah:")
print(10 / 3)   # Menghasilkan Float

print("Sedangkan sisa bagi (modulo) 10 % 3:")
print(10 % 3)`},

  { id:"2.6", part:2, title:"Input & Konversi", icon:"fa-keyboard",
    breadcrumb:"19.30 | Hands-On Dasar",
    content:`<h1>Minta Data ke User (Input)</h1>
<p>Kita bisa bertanya ke pengguna pakai <code>input()</code>. Tapi ada 1 aturan besi:</p>
<div class="err-box" style="font-size:1.1rem; text-align:center">
    Semua data yang masuk lewat <code>input()</code> akan <strong>selalu dianggap sebagai String (Teks)!</strong>
</div>
<p style="margin-top:15px">Jika ingin menghitung input tersebut, wajib di-konversi dulu (Type Casting):</p>
<ul class="checklist">
    <li><code>int(x)</code> &rarr; Ubah teks x jadi Angka Bulat</li>
    <li><code>float(x)</code> &rarr; Ubah teks x jadi Angka Desimal</li>
</ul>
`,playground:`# Coba jalankan! Akan muncul pop-up minta input.
umur_teks = input("Berapa umur kamu?")

# Konversi (Casting) ke angka
umur_angka = int(umur_teks)

tahun = 2026 - umur_angka
print("Tahun lahir kamu sekitar:")
print(tahun)`},


  // ===================== MODULE 3: CONDITIONALS =====================
  { id:"3.1", part:3, title:"Perbandingan", icon:"fa-balance-scale-right",
    breadcrumb:"20.15 | Logika Alur",
    content:`<div style="text-align:center; padding:20px;">
    <i class="fas fa-balance-scale-right fa-5x" style="color:#e67e22; margin-bottom:20px;"></i>
    <h1>Kecerdasan Komputer Berasal dari "Perbandingan"</h1>
    <p style="font-size:1.2rem;">Komputer selalu mengevaluasi perbandingan untuk menghasilkan Boolean (<code>True</code>/<code>False</code>).</p>
</div>
<table class="comparison-table" style="font-size:1.1rem">
<tr><td><code>==</code></td><td>Sama Persis (Beda dari <code>=</code>)</td></tr>
<tr><td><code>!=</code></td><td>Tidak Sama</td></tr>
<tr><td><code>&gt;</code></td><td>Lebih Besar</td></tr>
<tr><td><code>&lt;=</code></td><td>Lebih Kecil Sama Dengan</td></tr>
</table>
`,playground:`print("Apakah 100 > 50?")
print(100 > 50)

print("Apakah kata 'mangga' == 'Mangga'?")
print("mangga" == "Mangga") # Perhatikan huruf besar/kecil!`},

  { id:"3.2", part:3, title:"Logika AND OR", icon:"fa-sitemap",
    breadcrumb:"20.15 | Logika Alur",
    content:`<h1>Penggabungan Syarat (and, or)</h1>
<div class="split">
<div class="card" style="text-align:center">
    <h3 style="color:#c0392b">AND</h3>
    <i class="fas fa-lock fa-3x" style="color:#c0392b; margin:10px 0;"></i>
    <p>Dua-duanya <strong>Wajib</strong> True.<br>(Punya KTP <i>AND</i> Umur > 17)</p>
</div>
<div class="card" style="text-align:center">
    <h3 style="color:#2980b9">OR</h3>
    <i class="fas fa-unlock fa-3x" style="color:#2980b9; margin:10px 0;"></i>
    <p><strong>Salah Satu</strong> True Sudah Cukup.<br>(Bawa KTP <i>OR</i> Bawa SIM)</p>
</div>
</div>
`,playground:`punya_ktp = True
punya_sim = False

print("Pengecekan AND:")
print(punya_ktp and punya_sim)

print("Pengecekan OR:")
print(punya_ktp or punya_sim)`},

  { id:"3.3", part:3, title:"Percabangan IF", icon:"fa-code-branch",
    breadcrumb:"20.15 | Logika Alur",
    content:`<h1 style="text-align:center">Percabangan (IF-ELSE)</h1>
<div style="text-align:center; padding:10px;">
    <i class="fas fa-cloud-rain fa-3x" style="color:#3498db; margin-bottom:10px;"></i>
    <p style="font-size:1.2rem;">Kamu mau keluar rumah.</p>
    <p style="font-size:1.2rem;"><strong>JIKA (if)</strong> hujan, bawa payung.</p>
    <p style="font-size:1.2rem;"><strong>SELAIN ITU (else)</strong>, jalan kosong saja.</p>
</div>
<div class="block-code" style="margin-top:10px;">
<span class="kw">if</span> cuaca == <span class="st">"Hujan"</span>:
    <span class="fn">print</span>(<span class="st">"Bawa Payung!"</span>)
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="st">"Jalan santai."</span>)
</div>`},

  { id:"3.4", part:3, title:"Praktek IF", icon:"fa-keyboard",
    breadcrumb:"20.15 | Logika Alur",
    content:`<h1>Praktek IF-ELIF-ELSE</h1>
<div class="err-box" style="font-size:1.1rem; margin-bottom:20px;">
    <strong>Spasi (Indentation) itu WAJIB!</strong> Baris kode di bawah <code>if</code>, <code>elif</code>, atau <code>else</code> HARUS menjorok ke dalam (Tab). Jika sejajar lurus, Python pasti Error.
</div>
<div class="block-code" style="font-size:0.9rem">
<span class="kw">uang</span> = <span class="nu">50000</span><br>
<span class="kw">if</span> uang >= <span class="nu">20000</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">"Beli Kopi!"</span>) <span class="cm"># Benar (True)</span><br>
<span class="kw">else</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">"Uang Kurang."</span>) <span class="cm"># Diabaikan</span>
</div>
`,playground:`suhu = 35

# Silakan ubah angka suhunya dan jalankan!
if suhu > 32:
    print("Cuaca panas! Nyalakan AC.")
elif suhu > 25:
    print("Cuaca hangat.")
else:
    print("Cuaca dingin, ambil jaket.")`},


  // ===================== MODULE 4: LOOPS =====================
  { id:"4.1", part:4, title:"Kenapa Butuh Loop?", icon:"fa-tired",
    breadcrumb:"20.15 | Logika Alur",
    content:`<div style="text-align:center; padding:20px;">
    <i class="fas fa-tired fa-5x" style="color:#7f8c8d; margin-bottom:20px;"></i>
    <h1>Manusia Cepat Bosan.</h1>
    <p style="font-size:1.2rem;">Coba bayangkan kamu disuruh menyuruh mencetak angka 1 sampai 1000 secara manual. Tanganmu akan keriting.</p>
    <p style="font-size:1.2rem;">Tapi Komputer? <strong>Tidak Pernah Capek.</strong></p>
    <p style="font-size:1.2rem;">Inilah kekuatan utama pemrograman: <strong>LOOP (Perulangan)</strong>.</p>
</div>`},

  { id:"4.2", part:4, title:"while Loop", icon:"fa-spinner",
    breadcrumb:"20.15 | Logika Alur",
    content:`<h1 style="text-align:center">While Loop (Selama)</h1>
<div style="text-align:center; padding:10px;">
    <i class="fas fa-hammer fa-3x" style="margin-bottom:10px;"></i>
    <p style="font-size:1.2rem;"><strong>Analogi:</strong> <em>Selama</em> paku belum tenggelam, pukul terus dengan palu.</p>
</div>
<div class="block-code" style="font-size:0.9rem; margin-top:10px;">
<span class="kw">energi</span> = <span class="nu">3</span><br>
<span class="kw">while</span> energi > <span class="nu">0</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">"Bekerja..."</span>)<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">energi</span> = <span class="kw">energi</span> - <span class="nu">1</span>
</div>
<div class="warn-box"><strong>AWAS INFINITE LOOP:</strong> Jika energi tidak dikurangi (baris ke-4 dihapus), komputer akan "Bekerja" tanpa henti sampai hang!</div>
`,playground:`stok = 3
while stok > 0:
    print("Jual Barang. Sisa:", stok)
    # Coba hapus baris di bawah ini kalau berani!
    stok = stok - 1
print("Stok Habis!")`},

  { id:"4.3", part:4, title:"for Loop & range", icon:"fa-list-ol",
    breadcrumb:"20.15 | Logika Alur",
    content:`<h1>For Loop & Range()</h1>
<p style="font-size:1.1rem;">Gunakan <code>for</code> jika kamu <strong>sudah tahu pasti</strong> jumlah ulangannya (misal dari daftar belanja atau urutan angka).</p>
<div class="block-code">
<span class="cm"># range(1, 6) berhenti SEBELUM angka 6</span><br>
<span class="kw">for</span> nomor <span class="kw">in</span> <span class="fn">range</span>(1, 6):<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">"Putaran ke-"</span>, nomor)
</div>
<div class="ok-box"><strong>ANTI PANIK:</strong> Kalian tidak perlu mati-matian menghafal cara menulis while atau for malam ini! Cukup pahami konsep kerjanya secara logis.</div>
`,playground:`for nomor in range(1, 6):
    print("Mencetak dokumen ke-", nomor)`},

  { id:"4.4", part:4, title:"Mempersiapkan AI", icon:"fa-brain",
    breadcrumb:"20.45 | Penutupan",
    content:`<div style="text-align:center; padding:20px;">
    <i class="fas fa-brain fa-5x" style="color:var(--her-pink); margin-bottom:20px; animation: pulse 2s infinite;"></i>
    <h1>Mempersiapkan Mindset AI</h1>
    <p style="font-size:1.2rem;">Selamat! Malam ini kamu sudah mengerti bagaimana komputer menyimpan data (Variabel), mengambil keputusan (If-Else), dan bekerja otomatis (Loop).</p>
    <p style="font-size:1.2rem; margin-top:20px;">Minggu depan, kita akan menggunakan <strong>Logika dan Perulangan ini</strong> untuk membedah ribuan baris data dan merubah rumus matematika AI menjadi kenyataan.</p>
</div>
<style>
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); box-shadow: 0 0 20px var(--her-pink); border-radius:50%; }
  100% { transform: scale(1); }
}
</style>`}

];

if(typeof module!=='undefined') module.exports=COURSE;
