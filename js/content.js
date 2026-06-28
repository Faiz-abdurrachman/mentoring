const COURSE = [
  // ===================== MODULE 1: LEVEL 0 =====================
  { id:"1.1", part:1, title:"Compiler vs Interpreter", icon:"fa-language",
    breadcrumb:"Level 0 | Persiapan",
    content:`<h1>Compiler vs Interpreter</h1>
<p>Komputer hanya mengerti bahasa mesin (0 dan 1). Python adalah bahasa tingkat tinggi (mirip bahasa manusia). Untuk menerjemahkannya, kita butuh penerjemah.</p>
<div class="split" style="align-items:start">
<div>
<h3>Compiler (C++, Java)</h3>
<p>Seperti menerjemahkan seluruh isi buku ke bahasa Indonesia, lalu dicetak baru. Jika ada 1 salah ketik di halaman terakhir, <strong>seluruh buku gagal dicetak</strong>. Cepat, tapi kaku.</p>
</div>
<div>
<h3>Interpreter (Python)</h3>
<p>Seperti menyewa penerjemah langsung yang membisikkan terjemahan ke telingamu <strong>kalimat per kalimat</strong>. Jika ada salah di kalimat ke-10, program tetap jalan sampai kalimat ke-9, lalu lapor error. Sangat fleksibel!</p>
</div>
</div>`},

  { id:"1.2", part:1, title:"Senjata Programmer", icon:"fa-tools",
    breadcrumb:"Level 0 | Persiapan",
    content:`<h1>3 Senjata Utama Programmer</h1>
<p>Untuk coding Python di komputer, kamu hanya butuh 3 hal ini:</p>
<div class="card-grid card-grid-3">
<div class="card"><div class="card-icon" style="color:#3776AB"><i class="fab fa-python"></i></div><h3>Python (Interpreter)</h3><p>Mesin penerjemah yang harus diinstal di komputermu.</p></div>
<div class="card"><div class="card-icon" style="color:#007ACC"><i class="fas fa-code"></i></div><h3>VS Code</h3><p>Buku catatan pintarmu. Memberikan warna pada kodemu dan memanjakan mata.</p></div>
<div class="card"><div class="card-icon" style="color:#333"><i class="fas fa-terminal"></i></div><h3>Terminal</h3><p>Layar hitam tempat berinteraksi langsung untuk menjalankan file Python.</p></div>
</div>
<div class="ok-box"><strong>Cara Kerja:</strong> Tulis kode di VS Code &rarr; Simpan file (app.py) &rarr; Perintahkan Terminal untuk menjalankan file itu.</div>`},


  // ===================== MODULE 2: LEVEL 1 =====================
  { id:"2.1", part:2, title:"Menampilkan Teks", icon:"fa-print",
    breadcrumb:"Level 1 | Fondasi Kode",
    content:`<h1>print()</h1>
<p>Ini adalah cara kita menyuruh komputer berbicara ke layar.</p>
<div class="block-code"><span class="fn">print</span>(<span class="st">"Halo Dunia"</span>)</div>
<ul class="checklist" style="font-size:0.95rem">
<li><code>print</code> &rarr; Nama perintah bawaan (Fungsi).</li>
<li><code>()</code> &rarr; Wadah untuk menaruh apa yang mau dicetak.</li>
<li><code>"..."</code> &rarr; Tanda kutip <strong>wajib digunakan</strong> agar komputer tahu ini adalah Teks Manusia, bukan nama perintah.</li>
</ul>
`,playground:`print("Halo Dunia")
print("Saya siap belajar Python!")`},

  { id:"2.2", part:2, title:"Variable", icon:"fa-box",
    breadcrumb:"Level 1 | Fondasi Kode",
    content:`<h1>Kotak Penyimpanan: Variable</h1>
<p>Variabel adalah "kotak" di dalam memori komputer (RAM) yang kita beri nama (label) untuk menyimpan data.</p>
<p><strong>Analogi:</strong> Kamu punya kotak kardus. Kamu tempel stiker bertuliskan "Nama". Lalu kamu masukkan kertas bertuliskan "Budi" ke dalamnya.</p>
<div class="block-code"><span class="kw">nama</span> = <span class="st">"Budi"</span>
<span class="kw">umur</span> = <span class="nu">20</span></div>
<div class="err-box"><strong>PENTING:</strong> Tanda <code>=</code> di coding BUKAN berarti "sama dengan" seperti di matematika, tapi berarti "Tugaskan/Masukkan data di kanan ke dalam kotak di kiri".</div>
<p style="margin-top:10px; font-weight:bold">Visualisasi Memori (Di Balik Layar):</p>
<ul class="checklist" style="font-size:0.9rem">
<li>CPU melihat angka 20.</li>
<li>CPU mencari ruang kosong di meja kerja (RAM).</li>
<li>CPU menaruh angka 20 di sana.</li>
<li>CPU memberi label memori itu dengan nama "umur".</li>
</ul>
`,playground:`nama = "Budi"
umur = 20
print(nama)
print(umur)`},

  { id:"2.3", part:2, title:"Tipe Data", icon:"fa-shapes",
    breadcrumb:"Level 1 | Fondasi Kode",
    content:`<h1>Tipe Data (Bentuk Barang)</h1>
<p>Komputer memperlakukan teks dan angka secara berbeda.</p>
<table class="comparison-table">
<tr><th>Tipe Data</th><th>Deskripsi</th><th>Contoh</th></tr>
<tr><td><strong>String (str)</strong></td><td>Teks. Harus diapit kutip.</td><td><code>"Budi"</code>, <code>"100"</code></td></tr>
<tr><td><strong>Integer (int)</strong></td><td>Angka bulat.</td><td><code>25</code>, <code>-10</code></td></tr>
<tr><td><strong>Float (float)</strong></td><td>Angka desimal. Pakai titik!</td><td><code>3.14</code></td></tr>
</table>
<div class="warn-box">Walaupun angka, jika dikurung kutip, itu dianggap teks! Teks "100" ditambah teks "100" hasilnya <strong>"100100"</strong>, bukan 200.</div>
`,playground:`teks_angka = "100"
teks_angka_2 = "100"
print(teks_angka + teks_angka_2)  # Menempel, bukan menjumlah!`},

  { id:"2.4", part:2, title:"Input & Konversi", icon:"fa-exchange-alt",
    breadcrumb:"Level 1 | Fondasi Kode",
    content:`<h1>Input & Type Conversion</h1>
<p>Bagaimana jika kita ingin user yang memasukkan data? Kita gunakan <code>input()</code>.</p>
<div class="block-code"><span class="cm"># Menerima input teks</span>
<span class="kw">nama</span> = <span class="fn">input</span>(<span class="st">"Masukkan nama kamu: "</span>)

<span class="cm"># Menerima input angka (HARUS dikonversi)</span>
<span class="cm"># Karena input() SELALU menghasilkan String teks!</span>
<span class="kw">umur_teks</span> = <span class="fn">input</span>(<span class="st">"Masukkan umur: "</span>)
<span class="kw">umur_angka</span> = <span class="fn">int</span>(umur_teks) <span class="cm"># Mengubah teks "20" jadi angka 20</span>
</div>
`,playground:`umur_teks = input("Masukkan umur kamu:")
umur_angka = int(umur_teks)

tahun_lahir = 2026 - umur_angka
print("Kamu lahir tahun:")
print(tahun_lahir)`},


  // ===================== MODULE 3: LEVEL 2 =====================
  { id:"3.1", part:3, title:"Boolean & Perbandingan", icon:"fa-balance-scale",
    breadcrumb:"Level 2 | Kecerdasan Program",
    content:`<h1>Boolean & Operator Perbandingan</h1>
<p>Kecerdasan program bermula dari sini. Boolean adalah tipe data yang hanya punya dua nilai: <strong>True</strong> (Benar) atau <strong>False</strong> (Salah). (Perhatikan huruf besar T dan F).</p>
<p>Untuk menghasilkan True atau False, komputer membandingkan sesuatu:</p>
<ul class="checklist" style="font-size:0.95rem">
<li><code>==</code> (Sama dengan) &rarr; Apakah kiri sama nilainya dengan kanan?</li>
<li><code>!=</code> (Tidak sama dengan)</li>
<li><code>&gt;</code> (Lebih besar), <code>&lt;</code> (Lebih kecil)</li>
</ul>
<div class="err-box"><strong>Ingat:</strong> <code>=</code> (satu) untuk memasukkan ke kotak. <code>==</code> (dua) untuk bertanya apakah sama?</div>
`,playground:`print("Apakah 10 == 10?")
print(10 == 10)

print("Apakah 10 != 5?")
print(10 != 5)`},

  { id:"3.2", part:3, title:"Logika If Else", icon:"fa-code-branch",
    breadcrumb:"Level 2 | Kecerdasan Program",
    content:`<h1>Logika if, elif, else</h1>
<p>Ini adalah cara kita mengajari komputer membuat pilihan.</p>
<p style="font-size:0.95rem"><strong>Analogi:</strong> Kamu mau keluar rumah. Jika (<code>if</code>) hujan, bawa payung. Atau jika (<code>elif</code>) panas terik, bawa topi. Jika tidak keduanya (<code>else</code>), jalan kosong saja.</p>
<div class="block-code" style="font-size:0.85rem">uang = <span class="nu">50000</span>
harga_kopi = <span class="nu">20000</span>

<span class="kw">if</span> uang >= harga_kopi:
    <span class="fn">print</span>(<span class="st">"Bisa beli kopi!"</span>)
    sisa = uang - harga_kopi
<span class="kw">else</span>:
    <span class="fn">print</span>(<span class="st">"Uang kurang."</span>)</div>
<div class="warn-box"><strong>Catatan Penting:</strong> Spasi di awal baris (Indentation) sangatlah penting. Kode yang menjorok ke dalam menandakan bahwa kode tersebut adalah MILIK blok if di atasnya.</div>
`,playground:`uang = 50000
harga = 20000

if uang >= harga:
    print("Bisa beli barang!")
else:
    print("Uang tidak cukup.")
`},

  { id:"3.3", part:3, title:"Alur Eksekusi If", icon:"fa-route",
    breadcrumb:"Level 2 | Kecerdasan Program",
    content:`<h1>Visualisasi Alur Eksekusi</h1>
<p>Mari kita bedah cara komputer membaca blok kode <code>if-else</code> dari slide sebelumnya:</p>
<ul class="checklist" style="font-size:0.95rem">
<li><strong>Baris 1:</strong> Kotak 'uang' dibuat, isi 50000.</li>
<li><strong>Baris 2:</strong> Kotak 'harga' dibuat, isi 20000.</li>
<li><strong>Baris 4:</strong> PERCABANGAN DIMULAI. Komputer mengecek: 50000 >= 20000? Benar (True).</li>
<li><strong>Baris 5:</strong> Karena True, blok kode menjorok (indentation) dieksekusi.</li>
<li><strong>Baris 6-7:</strong> Blok <code>else</code> DILEWATI / DIABAIKAN sepenuhnya.</li>
</ul>
<div class="ok-box">Komputer tidak akan pernah menjalankan blok <code>if</code> dan <code>else</code> secara bersamaan. Ia harus memilih salah satu!</div>
`},

  { id:"3.4", part:3, title:"Operator Logika", icon:"fa-project-diagram",
    breadcrumb:"Level 2 | Kecerdasan Program",
    content:`<h1>Operator Logika (and, or, not)</h1>
<p>Membantu menggabungkan beberapa pertanyaan kondisi <code>if</code>.</p>
<ul class="checklist">
<li><strong>and</strong> : Dua-duanya HARUS True. (Punya KTP <code>and</code> Umur > 17).</li>
<li><strong>or</strong> : Salah satu saja True sudah cukup. (Bawa KTP <code>or</code> Bawa SIM).</li>
<li><strong>not</strong> : Membalikkan keadaan. (True jadi False).</li>
</ul>
`,playground:`punya_ktp = True
umur_cukup = True

if punya_ktp and umur_cukup:
    print("Boleh masuk!")
else:
    print("Dilarang masuk!")`},


  // ===================== MODULE 4: LEVEL 3 =====================
  { id:"4.1", part:4, title:"while Loop", icon:"fa-spinner",
    breadcrumb:"Level 3 | Mesin Pekerja Keras",
    content:`<h1>Konsep Dasar while Loop</h1>
<p>Manusia cepat bosan jika disuruh melakukan hal yang sama 1000 kali. Komputer tidak. <code>while</code> artinya "Selama". Komputer akan terus mengulang blok kodenya selama kondisinya masih True.</p>
<p><strong>Analogi:</strong> Selama paku belum tenggelam, pukul terus dengan palu.</p>
<div class="block-code" style="font-size:0.85rem">energi = <span class="nu">3</span>
<span class="kw">while</span> energi > <span class="nu">0</span>:
    <span class="fn">print</span>(<span class="st">"Bekerja..."</span>)
    energi = energi - <span class="nu">1</span></div>
<div class="err-box"><strong>Bahaya "Infinite Loop"!</strong> Jika kita lupa menulis <code>energi = energi - 1</code>, maka energi akan selalu 3, dan komputer akan mencetak "Bekerja..." jutaan kali sampai hang/crash.</div>
`,playground:`energi = 3
while energi > 0:
    print("Sisa energi:", energi)
    energi = energi - 1

print("Saya butuh tidur.")`},

  { id:"4.2", part:4, title:"for Loop & range", icon:"fa-redo",
    breadcrumb:"Level 3 | Mesin Pekerja Keras",
    content:`<h1>for Loop & range()</h1>
<p>Jika <code>while</code> digunakan ketika kita tidak tahu kapan harus berhenti, <code>for</code> digunakan ketika kita <strong>sudah tahu pasti</strong> berapa kali mau mengulang.</p>
<div class="block-code"><span class="cm"># range(1, 6) menghasilkan angka 1, 2, 3, 4, 5 </span>
<span class="cm"># (Berhenti SEBELUM angka 6)</span>
<span class="kw">for</span> nomor <span class="kw">in</span> <span class="fn">range</span>(1, 6):
    <span class="fn">print</span>(<span class="st">"Dokumen ke-"</span>, nomor)</div>
<p style="margin-top:10px"><strong>Cara Kerja for:</strong> Komputer mengambil angka pertama dari range (1), memasukkannya ke variabel <code>nomor</code>, lalu menjalankan print. Lalu kembali ke atas, ambil angka kedua (2), dst.</p>
`,playground:`for nomor in range(1, 6):
    print("Mencetak dokumen ke-", nomor)`},

  { id:"4.3", part:4, title:"break & continue", icon:"fa-stop-circle",
    breadcrumb:"Level 3 | Mesin Pekerja Keras",
    content:`<h1>Rem Darurat: break & continue</h1>
<p>Di tengah-tengah perulangan, kadang kita ingin memanipulasi alur secara paksa.</p>
<ul class="checklist" style="font-size:0.9rem">
<li><strong>break:</strong> Hancurkan loop sekarang juga, keluar sepenuhnya. <br><span class="text-pink">(Analogi: Lagi makan, tiba-tiba gempa, langsung lari keluar ruangan).</span></li>
<li><strong>continue:</strong> Lewati sisa kode di bawahnya, dan langsung lanjut ke putaran berikutnya. <br><span class="text-pink">(Analogi: Makan anggur, nemu 1 yang busuk, buang yang itu saja, lanjut makan anggur lainnya).</span></li>
</ul>
`,playground:`for lantai in range(1, 6):
    if lantai == 4:
        print("Lantai 4 dilewati!")
        continue
    
    print("Mengecek lantai:", lantai)`},


  // ===================== MODULE 5: PROJECTS & CHALLENGES =====================
  { id:"5.1", part:5, title:"Kasir Otomatis", icon:"fa-shopping-cart",
    breadcrumb:"Project | Kasir Otomatis",
    content:`<h1>Mini Project: Kasir Otomatis</h1>
<p>Mari kita gabungkan SEMUA materi (Variabel, Konversi, If-Else, dan Loop) ke dalam satu program yang sangat nyata!</p>
<div class="block-code" style="max-height: 180px; overflow-y: auto;">
total = 0
<span class="kw">while True</span>:
    barang = input("Nama barang (ketik 'selesai' utk total): ")
    <span class="kw">if</span> barang == 'selesai':
        <span class="kw">break</span>
    harga = int(input("Harga? "))
    total = total + harga
</div>
<div class="warn-box">Di playground interaktif web ini, untuk menghentikan program di bawah, <strong>pastikan kamu mengetik "selesai"</strong> pada popup yang muncul!</div>
`,playground:`print("=== TOKO AI ===")
total_belanja = 0

while True:
    barang = input("Nama barang (ketik 'selesai' utk stop): ")
    if barang == "selesai":
        break
        
    harga_teks = input("Harga barang tersebut? Rp. ")
    harga_angka = int(harga_teks)
    total_belanja = total_belanja + harga_angka
    print("=> " + barang + " ditambahkan.")

print("------------------------------")
print("Total Harga: Rp.", total_belanja)

if total_belanja > 100000:
    print("Diskon Rp. 10.000")
    total_belanja = total_belanja - 100000
    
print("Total Bayar Akhir: Rp.", total_belanja)`},

  { id:"5.2", part:5, title:"10 Red Flags", icon:"fa-exclamation-triangle",
    breadcrumb:"Evaluasi | Red Flags",
    content:`<h1>10 Kesalahan Umum Pemula (Red Flags)</h1>
<ul class="checklist" style="font-size:0.9rem; margin-top:10px;">
<li><i class="fas fa-times-circle" style="color:#ff4d4d"></i> <strong>Lupa titik dua (:)</strong> di akhir if, else, while, atau for.</li>
<li><i class="fas fa-times-circle" style="color:#ff4d4d"></i> <strong>Salah Indentation.</strong> Blok kode HARUS menjorok ke dalam (Tab).</li>
<li><i class="fas fa-times-circle" style="color:#ff4d4d"></i> <strong>Menggunakan <code>=</code> untuk mengecek.</strong> Pakai <code>==</code> untuk membandingkan!</li>
<li><i class="fas fa-times-circle" style="color:#ff4d4d"></i> <strong>Lupa tanda kutip.</strong> Teks biasa wajib dikurung kutip.</li>
<li><i class="fas fa-times-circle" style="color:#ff4d4d"></i> <strong>Case Sensitive.</strong> <code>Nama</code> dan <code>nama</code> dianggap beda.</li>
<li><i class="fas fa-times-circle" style="color:#ff4d4d"></i> <strong>Lupa konversi tipe data.</strong> <code>"5" + 10</code> pasti Error.</li>
<li><i class="fas fa-times-circle" style="color:#ff4d4d"></i> <strong>Infinite Loop.</strong> Lupa mengubah nilai variabel di dalam while loop.</li>
<li><i class="fas fa-times-circle" style="color:#ff4d4d"></i> <strong>Menaruh kode di luar loop tanpa sadar</strong> karena salah penempatan Tab/Spasi.</li>
<li><i class="fas fa-times-circle" style="color:#ff4d4d"></i> <strong>Kesalahan ketik (Typo).</strong> Misal: <code>prnt("Halo")</code> pasti error.</li>
<li><i class="fas fa-times-circle" style="color:#ff4d4d"></i> <strong>Panik saat melihat Error.</strong> Baca baris terakhirnya, komputer selalu memberi tahu letaknya!</li>
</ul>
`},

  { id:"5.3", part:5, title:"Tebak Angka", icon:"fa-trophy",
    breadcrumb:"Tantangan Akhir",
    content:`<h1>Tantangan Mandiri: Tebak Angka</h1>
<p>Saatnya menguji insting <i>programmer</i>-mu! Buatlah program permainan tebak angka di VS Code komputermu (atau kerjakan di Playground bawah).</p>
<ul class="checklist" style="font-size:0.95rem">
<li>Komputer menyimpan angka rahasia (misal: <code>rahasia = 7</code>).</li>
<li>Gunakan <code>while</code> loop untuk meminta input tebakan dari user.</li>
<li>Jika tebakan > rahasia, print "Tebakan kebesaran!".</li>
<li>Jika tebakan < rahasia, print "Tebakan kekecilan!".</li>
<li>Jika tebakan == rahasia, print "Selamat, benar!", lalu <code>break</code>.</li>
</ul>
<div class="ok-box"><strong>Tips:</strong> Ingat, <code>input()</code> menghasilkan teks. Jangan lupa dikonversi ke integer agar bisa dibandingkan dengan angka rahasia!</div>
`,playground:`rahasia = 7

# Tulis kodemu di bawah ini
while True:
    pass # Ganti tulisan pass dengan kodemu
`}

];

if(typeof module!=='undefined') module.exports=COURSE;
