const COURSE = [
  // ===================== MODULE 1: SETUP & PENGENALAN =====================
  { id:"1.1", part:1, title:"Apa Itu Python?", icon:"fa-laptop-code",
    breadcrumb:"Pengenalan",
    content:`<div style="text-align:center; padding: 20px;">
        <i class="fab fa-python" style="font-size: 80px; color: #3776AB;"></i>
        <h1 style="font-size: 2.5rem; margin-top:20px;">Halo, Python!</h1>
        <p style="font-size: 1.2rem; color: #666;">Bahasa Pemrograman Paling Diminati di Dunia.</p>
        <div style="display:flex; justify-content:center; gap:20px; margin-top:30px;">
            <div class="card" style="text-align:center; width:150px;"><i class="fas fa-chart-line fa-3x" style="color:var(--her-purple)"></i><p>Data & Analitik</p></div>
            <div class="card" style="text-align:center; width:150px;"><i class="fas fa-cogs fa-3x" style="color:var(--her-purple)"></i><p>Automation</p></div>
            <div class="card" style="text-align:center; width:150px;"><i class="fas fa-globe fa-3x" style="color:var(--her-purple)"></i><p>Web Backend</p></div>
        </div>
    </div>`},

  { id:"1.2", part:1, title:"Python vs Java", icon:"fa-balance-scale",
    breadcrumb:"Pengenalan",
    content:`<h1 style="text-align:center">Kenapa Python?</h1>
<div class="split" style="margin-top:30px;">
<div style="text-align:center; border: 2px solid #ff4d4d; padding:15px; border-radius:10px; background:#fff0f0">
    <h3 style="color:#ff4d4d; margin-bottom:15px">Java / C++</h3>
    <p>Aturannya kaku, banyak titik-koma (;), dan bertele-tele.</p>
</div>
<div style="text-align:center; border: 2px solid #2ecc71; padding:15px; border-radius:10px; background:#f0fff4">
    <h3 style="color:#2ecc71; margin-bottom:15px">Python</h3>
    <p>Simpel, mirip bahasa Inggris, tanpa titik-koma. Sangat ramah pemula!</p>
</div>
</div>`},

  { id:"1.3", part:1, title:"Kecepatan Menulis", icon:"fa-tachometer-alt",
    breadcrumb:"Pengenalan",
    content:`<h1>Buktikan Sendiri Kecepatannya!</h1>
<div style="margin-top:20px;">
<p style="font-weight:bold; color:#ff4d4d"><i class="fas fa-times-circle"></i> Java (Mencetak teks):</p>
<div class="block-code" style="font-size:0.9rem">public class Main {<br>&nbsp;&nbsp;public static void main(String[] args) {<br>&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Halo");<br>&nbsp;&nbsp;}<br>}</div>
<p style="font-weight:bold; color:#2ecc71; margin-top:20px;"><i class="fas fa-check-circle"></i> Python:</p>
<div class="block-code" style="font-size:1.1rem">print("Halo")</div>
</div>`},

  { id:"1.4", part:1, title:"Setup 1: Python", icon:"fa-download",
    breadcrumb:"Persiapan",
    content:`<div style="text-align:center;">
    <i class="fab fa-python fa-5x" style="color:#3776AB; margin-bottom:20px;"></i>
    <h1>Install Mesin Python</h1>
    <p style="font-size:1.2rem;">Sama seperti butuh bensin untuk menjalankan mobil, laptopmu butuh "Mesin Python" untuk menjalankan kode.</p>
    <br>
    <div class="ok-box">
        Silakan download dari <strong>python.org</strong> dan pastikan centang <em>"Add Python to PATH"</em> saat install!
    </div>
</div>`},

  { id:"1.5", part:1, title:"Setup 2: VS Code", icon:"fa-code",
    breadcrumb:"Persiapan",
    content:`<div style="text-align:center;">
    <i class="fas fa-laptop-code fa-5x" style="color:#007ACC; margin-bottom:20px;"></i>
    <h1>Install VS Code</h1>
    <p style="font-size:1.2rem;">Ini adalah "Buku Catatan" pintarmu. Mewarnai kode & mengecek salah ketik.</p>
    <br>
    <div class="ok-box">
        <strong>PENTING:</strong> Setelah install VS Code, buka menu <em>Extensions</em> dan cari <strong>Python</strong> lalu klik install.
    </div>
</div>`},

  { id:"1.6", part:1, title:"Colab", icon:"fa-google",
    breadcrumb:"Persiapan",
    content:`<div style="text-align:center;">
    <i class="fab fa-google-drive fa-5x" style="color:#f4b400; margin-bottom:20px;"></i>
    <h1>Google Colab</h1>
    <p style="font-size:1.2rem;">Laptop error? Jangan panik. Buka <strong>colab.research.google.com</strong>.</p>
    <br>
    <div class="ok-box">
        Ini adalah VS Code + Mesin Python versi "Online" dari Google. Kalian bisa ngoding langsung dari browser tanpa install apapun!
    </div>
</div>`},

  // ===================== MODULE 2: VARIABEL & DATA =====================
  { id:"2.1", part:2, title:"Menampilkan Teks", icon:"fa-print",
    breadcrumb:"Hands-On Dasar",
    content:`<h1>Mencetak Teks: print()</h1>
<p style="font-size:1.1rem">Ini adalah perintah ajaib agar komputer berbicara ke layar.</p>
<div class="block-code" style="font-size:1.2rem"><span class="fn">print</span>(<span class="st">"Halo Dunia"</span>)</div>
<ul class="checklist" style="font-size:1.1rem">
    <li><code>print</code> harus huruf kecil semua.</li>
    <li>Wajib pakai kurung buka dan tutup <code>()</code></li>
    <li>Untuk teks, WAJIB diapit tanda kutip <code>""</code> atau <code>''</code></li>
</ul>
`,playground:`# Coba jalankan kode ini!
print("Halo Dunia")
print("Halo dari Indonesia")`},

  { id:"2.2", part:2, title:"Apa Itu Variabel?", icon:"fa-box-open",
    breadcrumb:"Hands-On Dasar",
    content:`<h1 style="text-align:center">Variabel = Kontak HP</h1>
<div style="text-align:center; padding:20px;">
    <i class="fas fa-address-book fa-5x" style="color:#d4a373; margin-bottom:10px;"></i>
    <p style="font-size:1.2rem;">Bayangkan variabel itu seperti menyimpan Kontak di HP kamu.</p>
    <p style="font-size:1.2rem;">Kamu memberi "Nama Kontak" (Variabel), lalu memasukkan "Nomor HP" (Data) ke dalamnya. Besok-besok, kamu cukup panggil namanya saja tanpa perlu menghafal nomornya!</p>
</div>
<div class="block-code" style="font-size:1.1rem">
nama = "Her AI"<br>
umur = 20
</div>
`},

  { id:"2.3", part:2, title:"Visualisasi Variabel", icon:"fa-eye",
    breadcrumb:"Hands-On Dasar",
    content:`<h1>Apa Maksud Tanda Sama Dengan (=) ?</h1>
<div class="err-box" style="font-size:1.1rem">
    Di Python, tanda <code>=</code> <strong>BUKAN</strong> berarti kesamaan matematika!
</div>
<p style="font-size:1.1rem">Tanda <code>=</code> artinya <strong>"SIMPAN"</strong> atau <strong>"MASUKKAN"</strong> (dari Kanan ke Kiri).</p>
<div class="block-code">
jumlah_pesan = 5
</div>
<p>Komputer membaca: <i>"Ambil angka 5 (Kanan), lalu MASUKKAN ke dalam Kotak bernama 'jumlah_pesan' (Kiri)."</i></p>
`,playground:`jumlah_pesan = 5
print("Jumlah pesan awal:")
print(jumlah_pesan)`},

  { id:"2.4", part:2, title:"Aturan Penamaan", icon:"fa-spell-check",
    breadcrumb:"Hands-On Dasar",
    content:`<h1>Aturan Memberi Nama Variabel</h1>
<p style="font-size:1.1rem">Python sedikit cerewet soal nama variabel. Ingat 3 aturan ini:</p>
<table class="comparison-table" style="font-size:1.1rem">
<tr><td style="color:#2ecc71"><i class="fas fa-check"></i> Boleh</td><td><code>nama_lengkap</code>, <code>umur1</code>, <code>_rahasia</code></td></tr>
<tr><td style="color:#e74c3c"><i class="fas fa-times"></i> DILARANG Pakai Spasi</td><td><code>nama lengkap</code> &rarr; Error!</td></tr>
<tr><td style="color:#e74c3c"><i class="fas fa-times"></i> DILARANG Diawali Angka</td><td><code>1nama</code> &rarr; Error!</td></tr>
</table>
<div class="ok-box">
    <strong>Tips:</strong> Gunakan garis bawah (<code>_</code>) sebagai pengganti spasi (disebut <em>Snake Case</em>).
</div>`},

  { id:"2.5", part:2, title:"Menimpa Variabel", icon:"fa-exchange-alt",
    breadcrumb:"Hands-On Dasar",
    content:`<h1>Nilai Variabel Bisa Berubah!</h1>
<p style="font-size:1.1rem">Sesuai namanya, "Variabel" berarti bisa bervariasi (berubah). Kalau kamu memasukkan barang baru ke kardus yang sama, barang lama akan <strong>dibuang/ditimpa</strong>.</p>
<div class="block-code">
skor = 10<br>
skor = 50 <span class="cm"># Angka 10 dihapus, diganti 50</span>
</div>
`,playground:`skor = 10
print("Skor awal:")
print(skor)

skor = 50
print("Skor sekarang:")
print(skor)`},

  { id:"2.6", part:2, title:"Tipe Data String", icon:"fa-font",
    breadcrumb:"Hands-On Dasar",
    content:`<h1>Tipe Data: String (Teks)</h1>
<p style="font-size:1.1rem">String adalah kumpulan huruf, angka, atau simbol yang diapit oleh tanda kutip (<code>""</code> atau <code>''</code>).</p>
<div class="block-code">
nama = "Her AI"<br>
nomor_hp = "0812345678" <span class="cm"># Ini String, bukan angka matematika!</span>
</div>
<div class="warn-box">
    <strong>Ingat:</strong> Angka di dalam kutip adalah teks. "10" + "10" hasilnya "1010", BUKAN 20!
</div>
`,playground:`teks_1 = "10"
teks_2 = "10"

print("Hasil penambahan teks:")
print(teks_1 + teks_2)`},

  { id:"2.7", part:2, title:"Tipe Data Integer", icon:"fa-calculator",
    breadcrumb:"Hands-On Dasar",
    content:`<h1>Tipe Data: Integer (Angka Bulat)</h1>
<p style="font-size:1.1rem">Integer adalah angka utuh <strong>tanpa tanda kutip</strong>. Hanya Integer dan Float yang bisa dihitung pakai Matematika.</p>
<table class="comparison-table" style="font-size:1.1rem">
<tr><td><code>+</code></td><td>Tambah</td></tr>
<tr><td><code>-</code></td><td>Kurang</td></tr>
<tr><td><code>*</code></td><td>Kali</td></tr>
<tr><td><code>/</code></td><td>Bagi (Hasilnya akan jadi desimal)</td></tr>
</table>
`,playground:`angka_1 = 10
angka_2 = 10

print("Hasil penambahan matematika:")
print(angka_1 + angka_2)
print("Hasil kali matematika:")
print(angka_1 * angka_2)`},

  { id:"2.8", part:2, title:"Tipe Data Float & Bool", icon:"fa-percentage",
    breadcrumb:"Hands-On Dasar",
    content:`<h1>Float & Boolean</h1>
<div class="split">
<div class="card" style="text-align:center">
    <h3 style="color:#9b59b6">Float (Desimal)</h3>
    <i class="fas fa-circle-notch fa-3x" style="color:#9b59b6; margin:10px 0;"></i>
    <p>Angka pecahan. Wajib pakai TITIK, bukan koma. <br><code>berat = 65.5</code></p>
</div>
<div class="card" style="text-align:center">
    <h3 style="color:#e67e22">Boolean (Saklar)</h3>
    <i class="fas fa-toggle-on fa-3x" style="color:#e67e22; margin:10px 0;"></i>
    <p>Hanya 2 jawaban: <code>True</code> atau <code>False</code> (Wajib Huruf Besar). <br><code>lulus = True</code></p>
</div>
</div>`},

  { id:"2.9", part:2, title:"Input Data User", icon:"fa-keyboard",
    breadcrumb:"Hands-On Dasar",
    content:`<h1>Meminta Data ke User (Input)</h1>
<p style="font-size:1.1rem">Komputer butuh interaksi. Gunakan <code>input()</code> untuk memunculkan kolom isian, lalu simpan jawabannya ke dalam variabel.</p>
<div class="block-code">
nama = input("Siapa nama kamu? ")<br>
print("Halo", nama)
</div>
`,playground:`# Jalankan ini! Akan muncul pop-up minta nama.
nama = input("Siapa nama kamu? ")
print("Selamat datang,")
print(nama)`},

  { id:"2.10", part:2, title:"Konversi Tipe Data", icon:"fa-magic",
    breadcrumb:"Hands-On Dasar",
    content:`<h1>Casting (Konversi Data)</h1>
<div class="err-box" style="font-size:1.1rem; text-align:center">
    Semua data yang masuk lewat <code>input()</code> <strong>selalu ditangkap sebagai String (Teks)!</strong>
</div>
<p style="margin-top:15px; font-size:1.1rem">Jika kamu menanyakan umur pakai <code>input()</code>, hasilnya adalah "20" bukan angka 20. Ubah dulu jadi angka agar bisa dihitung!</p>
<ul class="checklist" style="font-size:1.1rem">
    <li><code>int(x)</code> &rarr; Mengubah teks x jadi Angka Bulat</li>
    <li><code>str(x)</code> &rarr; Mengubah angka x jadi Teks String</li>
</ul>
`,playground:`umur_teks = input("Berapa umur kamu? ")

# Konversi String ke Integer
umur_angka = int(umur_teks)

tahun_lahir = 2026 - umur_angka
print("Tahun lahir kamu sekitar:")
print(tahun_lahir)`},


  // ===================== MODULE 3: CONDITIONALS =====================
  { id:"3.1", part:3, title:"Perbandingan Dasar", icon:"fa-balance-scale-right",
    breadcrumb:"Logika Alur",
    content:`<div style="text-align:center; padding:20px;">
    <i class="fas fa-balance-scale-right fa-5x" style="color:#e67e22; margin-bottom:20px;"></i>
    <h1>Kecerdasan dari "Perbandingan"</h1>
    <p style="font-size:1.2rem;">Komputer selalu mengevaluasi perbandingan matematika untuk menghasilkan Boolean (<code>True</code> atau <code>False</code>).</p>
</div>
<table class="comparison-table" style="font-size:1.1rem">
<tr><td><code>==</code></td><td>Sama Persis (Berbeda dari <code>=</code>)</td></tr>
<tr><td><code>!=</code></td><td>Tidak Sama Persis</td></tr>
<tr><td><code>&gt;</code></td><td>Lebih Besar</td></tr>
<tr><td><code>&lt;=</code></td><td>Lebih Kecil Sama Dengan</td></tr>
</table>
`,playground:`print("Apakah 100 lebih besar dari 50?")
print(100 > 50)

print("Apakah kata 'mangga' == 'Mangga'?")
print("mangga" == "Mangga") # Perhatikan huruf besar/kecil!`},

  { id:"3.2", part:3, title:"Logika AND & OR", icon:"fa-sitemap",
    breadcrumb:"Logika Alur",
    content:`<h1>Penggabungan Banyak Syarat</h1>
<div class="split">
<div class="card" style="text-align:center">
    <h3 style="color:#c0392b">AND</h3>
    <i class="fas fa-lock fa-3x" style="color:#c0392b; margin:10px 0;"></i>
    <p>Dua-duanya <strong>Wajib</strong> True.<br>(Punya KTP <i>AND</i> Punya SIM)</p>
</div>
<div class="card" style="text-align:center">
    <h3 style="color:#2980b9">OR</h3>
    <i class="fas fa-unlock fa-3x" style="color:#2980b9; margin:10px 0;"></i>
    <p><strong>Salah Satu</strong> True Sudah Cukup.<br>(Bawa Payung <i>OR</i> Bawa Jas Hujan)</p>
</div>
</div>
`,playground:`punya_ktp = True
punya_sim = False

print("Pengecekan AND (Wajib Dua-duanya):")
print(punya_ktp and punya_sim)

print("Pengecekan OR (Salah Satu Boleh):")
print(punya_ktp or punya_sim)`},

  { id:"3.3", part:3, title:"Konsep Percabangan", icon:"fa-code-branch",
    breadcrumb:"Logika Alur",
    content:`<h1 style="text-align:center">Percabangan (IF Statement)</h1>
<div style="text-align:center; padding:10px;">
    <i class="fas fa-user-shield fa-3x" style="color:#3498db; margin-bottom:10px;"></i>
    <p style="font-size:1.2rem;">Bayangkan <code>if</code> itu seperti <strong>Satpam Penjaga Pintu</strong>.</p>
    <p style="font-size:1.2rem;">Satpam akan mengecek syarat di tangannya. Jika syarat terpenuhi (True), kamu boleh masuk ke dalam blok kode di bawahnya.</p>
</div>
<div class="block-code" style="margin-top:10px;">
<span class="kw">if</span> cuaca == <span class="st">"Hujan"</span>:
    <span class="fn">print</span>(<span class="st">"Bawa Payung!"</span>)
</div>`},

  { id:"3.4", part:3, title:"Praktek Dasar IF", icon:"fa-indent",
    breadcrumb:"Logika Alur",
    content:`<h1>Hati-hati dengan Spasi (Indentasi)!</h1>
<div class="err-box" style="font-size:1.1rem; margin-bottom:20px;">
    <strong>Spasi (Indentation) itu WAJIB di Python!</strong> Baris kode setelah titik dua (<code>:</code>) pada perintah <code>if</code> HARUS menjorok ke dalam (di-Tab/Spasi 4x).
</div>
<p style="font-size:1.1rem">Jika baris kedua disejajarkan dengan kata <code>if</code>, komputer tidak akan tahu bahwa baris itu adalah "milik" si Satpam IF.</p>
`,playground:`# Coba hilangkan spasinya dan lihat apa yang terjadi (Error!)
uang = 50000

if uang >= 20000:
    print("Uang cukup! Beli Kopi.")
    print("Transaksi berhasil.")`},

  { id:"3.5", part:3, title:"IF-ELSE (Dua Jalur)", icon:"fa-random",
    breadcrumb:"Logika Alur",
    content:`<h1>IF-ELSE (Jika Tidak)</h1>
<p style="font-size:1.1rem">Bagaimana kalau syaratnya gagal (False)? Kita gunakan <code>else</code> sebagai Rencana B.</p>
<div class="block-code" style="font-size:0.95rem">
<span class="kw">if</span> cuaca == <span class="st">"Hujan"</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">"Bawa Payung!"</span>) <span class="cm"># Rencana A</span><br>
<span class="kw">else</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">"Jalan santai."</span>) <span class="cm"># Rencana B</span>
</div>
<div class="warn-box" style="font-size:1.05rem">Perintah <code>else</code> <strong>TIDAK</strong> membutuhkan syarat perbandingan. Ia otomatis menampung semua kemungkinan yang gagal dari <code>if</code>.</div>
`,playground:`uang = 15000

if uang >= 20000:
    print("Beli Kopi!") 
else:
    print("Uang kurang, beli es teh saja.") `},

  { id:"3.6", part:3, title:"IF-ELIF-ELSE", icon:"fa-road",
    breadcrumb:"Logika Alur",
    content:`<h1>Banyak Kemungkinan (ELIF)</h1>
<p style="font-size:1.1rem">Jika ada 3 jalur atau lebih, gunakan <code>elif</code> (Else-If / Atau-Jika). Python akan mengecek dari atas ke bawah secara berurutan.</p>
<div class="block-code" style="font-size:0.9rem">
<span class="kw">if</span> suhu > <span class="nu">32</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">"Cuaca panas! Nyalakan AC."</span>)<br>
<span class="kw">elif</span> suhu > <span class="nu">25</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">"Cuaca hangat."</span>)<br>
<span class="kw">else</span>:<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">"Cuaca dingin, ambil jaket."</span>)
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
    breadcrumb:"Logika Alur",
    content:`<div style="text-align:center; padding:20px;">
    <i class="fas fa-tired fa-5x" style="color:#7f8c8d; margin-bottom:20px;"></i>
    <h1>Manusia Cepat Bosan & Lelah.</h1>
    <p style="font-size:1.2rem;">Bayangkan kamu disuruh mengetik "Saya tidak akan telat lagi" sebanyak 1000 kali. Tanganmu akan keriting.</p>
    <p style="font-size:1.2rem;">Tapi Komputer? <strong>Tidak Pernah Capek!</strong> Inilah kekuatan utama pemrograman: <strong>LOOP (Perulangan)</strong>.</p>
</div>`},

  { id:"4.2", part:4, title:"While Loop", icon:"fa-spinner",
    breadcrumb:"Logika Alur",
    content:`<h1 style="text-align:center">While Loop (Selama)</h1>
<div style="text-align:center; padding:10px;">
    <i class="fas fa-battery-half fa-3x" style="margin-bottom:10px; color: #34495e"></i>
    <p style="font-size:1.2rem;"><strong>Analogi Mengecas HP:</strong> <em>Selama</em> baterai HP belum 100% (True), charge terus.</p>
    <p style="font-size:1.1rem;">While Loop bekerja bergantung pada kondisi <code>True/False</code>, mirip seperti <code>if</code>, tapi ia akan <strong>kembali ke atas</strong> berulang-ulang sampai kondisinya jadi <code>False</code> (baterai penuh).</p>
</div>`},

  { id:"4.3", part:4, title:"Praktek While", icon:"fa-recycle",
    breadcrumb:"Logika Alur",
    content:`<h1>Awas Infinite Loop!</h1>
<div class="warn-box" style="font-size:1.1rem">
    Jika kamu memakai <code>while</code>, pastikan variabel kondisinya <strong>berubah</strong> di dalam blok kode. Jika nilainya tidak pernah berubah, loop akan berjalan abadi (komputer nge-hang)!
</div>
`,playground:`baterai = 20

while baterai < 100:
    print("Mengecas HP... Baterai sekarang:", baterai, "%")
    
    # Penambahan ini SANGAT PENTING!
    # Hapus baris ini kalau berani bikin laptop ngadat!
    baterai = baterai + 20
    
print("Baterai Penuh 100%!")`},

  { id:"4.4", part:4, title:"Analogi For Loop", icon:"fa-users",
    breadcrumb:"Logika Alur",
    content:`<h1 style="text-align:center">For Loop</h1>
<div style="text-align:center; padding:10px;">
    <i class="fas fa-music fa-3x" style="color:var(--her-purple); margin-bottom:10px;"></i>
    <p style="font-size:1.2rem;"><strong>Analogi Memutar Playlist Lagu:</strong> Memutar lagu secara berurutan dari lagu pertama sampai terakhir.</p>
</div>
<p style="font-size:1.1rem; margin-top:20px;">Berbeda dengan <code>while</code> yang berhenti berdasarkan kondisi, <code>for</code> loop digunakan jika kamu <strong>sudah tahu pasti</strong> jumlah ulangannya (misal: jalankan tepat 5 kali, atau jalankan ke semua item dalam kotak box).</p>
`},

  { id:"4.5", part:4, title:"Praktek For & Range", icon:"fa-list-ol",
    breadcrumb:"Logika Alur",
    content:`<h1>For Loop & Fungsi range()</h1>
<p style="font-size:1.1rem;">Python menyediakan alat ukur <code>range()</code> untuk membuat daftar angka otomatis. Sangat cocok dijodohkan dengan For Loop.</p>
<div class="block-code" style="font-size:0.95rem">
<span class="cm"># range(1, 6) menghasilkan angka 1 sampai 5.</span><br>
<span class="cm"># Ia berhenti SEBELUM angka batas akhir!</span><br>
<span class="kw">for</span> urutan <span class="kw">in</span> <span class="fn">range</span>(1, 6):<br>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="fn">print</span>(<span class="st">"Memutar lagu ke-"</span>, urutan)
</div>
<div class="ok-box"><strong>ANTI PANIK:</strong> Jangan dipaksa hafal malam ini! Cukup pahami kapan harus pakai For (jumlah pasti) dan kapan pakai While (menunggu kondisi selesai).</div>
`,playground:`for urutan in range(1, 6):
    print("Memutar lagu ke-", urutan)`},

  { id:"4.6", part:4, title:"Langkah Selanjutnya", icon:"fa-rocket",
    breadcrumb:"Penutupan",
    content:`<div style="text-align:center; padding:20px;">
    <i class="fas fa-rocket fa-5x" style="color:var(--her-pink); margin-bottom:20px;"></i>
    <h1>Mempersiapkan Mindset Logika</h1>
    <p style="font-size:1.2rem;">Selamat! Malam ini kamu sudah mengerti bagaimana komputer menyimpan data (Variabel), mengambil keputusan (If-Else), dan bekerja otomatis (Loop).</p>
    <p style="font-size:1.2rem; margin-top:20px;">Minggu depan, kita akan menggunakan <strong>Logika dan Perulangan ini</strong> untuk membedah ribuan baris data sungguhan di industri.</p>
</div>`},

];

if(typeof module!=='undefined') module.exports=COURSE;
