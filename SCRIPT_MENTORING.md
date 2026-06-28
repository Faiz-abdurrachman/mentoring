# 🎤 SCRIPT MENTORING HER AI (SESI KICKSTART PYTHON)

*Script ini dirancang santai, interaktif, dan "ngobrol", agar peserta tidak merasa sedang diajari seperti di sekolah, melainkan sedang di-mentor oleh kakak tingkat/praktisi.*

---

## 🕒 PEMBUKAAN (5 Menit)

**Mentor:**
"Halo semuanya! Malam! Wah rame juga nih malam ini. Gimana kabarnya? Udah pada siap tempur nulis kode Python pertama kalian?

Malam ini kita nggak akan belajar teori muluk-muluk yang bikin ngantuk. Tujuan kita satu: Malam ini kalian keluar dari sesi ini udah bisa mikir layaknya programmer, ngerti gimana komputer ngambil keputusan, dan nyuruh komputer kerja otomatis!

Nah, karena judulnya Kickstart, kalian buka aja web course kita. Yang laptopnya lagi ngambek atau speknya kurang, nggak usah panik! Google udah nyediain yang namanya Google Colab. Itu ibarat laptop gaming yang dipinjemin Google gratis lewat browser, jadi semua orang *pasti* bisa ngoding malam ini."

---

## 📦 MODUL 2: VARIABEL (15 Menit)

**Mentor:**
"Oke, langsung aja kita masuk ke bagian inti pertama. Kalian tau nggak sih cara paling dasar buat nyuruh komputer nulis sesuatu di layar? Coba cek slide *Mencetak Teks*. 

Di situ ada `print("Halo Dunia")`. Perintah `print` ini tuh ibarat corong toa buat komputer. Jangan lupa, tiap kali mau nampilin huruf/kalimat, wajib hukumnya dipeluk pakai tanda kutip! Kenapa? Biar komputernya tau 'Oh ini tuh teks, bukan perintah rahasia'. Coba deh kalian ketik dan *Run* di web course-nya. Keluar kan teksnya?

Nah, berikutnya. Dalam pemrograman, kita butuh tempat nyimpen data. Namanya **Variabel**.
Biar gampang bayanginnya, Variabel itu **mirip banget kayak kalian nyimpen Kontak di HP**. 

Misal kalian punya temen namanya Budi, nomornya panjang kan 0812345678. Ribet kalau ngafalin angkanya. Mending kita simpen dengan 'Nama Kontak' = Budi. Besok-besok mau nelpon, ya tinggal panggil aja Budi! 

Di kode, nulisnya gini: `nama = "Budi"`. Tanda sama dengan (`=`) di sini itu BUKAN sama dengan matematika ya temen-temen! Sama dengan itu artinya **'MASUKKAN' atau 'SIMPAN'**. Komputer ngebacanya dari kanan ke kiri. Masukkan tulisan Budi, ke dalam kotak bernama nama. Simpel kan?

Satu hal lagi soal tipe data. 
Teks tadi kan dibungkus kutip, itu namanya **String**.
Kalau angka murni buat matematika, nggak boleh dipakaikan kutip! Namanya **Integer**.
Kalau kalian iseng nulis angka `10` ditambah `"10"` (pakai kutip), komputer bakal nangis error, karena dia bingung ngegabungin angka mutlak sama teks biasa.

Satu jebakan batman lagi: Kalau kalian nanya sesuatu ke user pakai perintah `input()`, ingat! Apapun yang diketik user, selalu dianggap teks (String) sama komputer. Jadi kalau kalian nanya umur, kalian wajib mengubah wujudnya ke angka mutlak pakai mantera `int(umur)`. Biar nanti umurnya bisa ditambah-tambahin pakai matematika."

---

## 🚦 MODUL 3: LOGIKA PERCABANGAN IF-ELSE (15 Menit)

**Mentor:**
"Sekarang kita masuk ke otak komputernya. Gimana sih komputer bisa ngambil keputusan? Pake yang namanya **Logika Boolean** dan **Percabangan (IF)**.

Boolean itu simpel, cuman ada dua jawaban di dunia ini: `True` (Benar) atau `False` (Salah). Dapetnya dari mana? Dari perbandingan! Contoh, `5 > 3` jawabannya apa? Ya, `True`.

Nah, jawaban True atau False ini kita oper ke yang namanya `IF` (Jika).
Coba bayangin `IF` ini tuh **Satpam Penjaga Pintu**. 

Misal kalian bikin aturan: `if uang >= 20000:`
Satpam bakal ngecek nih, 'Berapa uang lu? Kalo di atas 20 ribu, oke True, pintu gw buka, silakan masuk dan jalanin kodenya beli kopi!'
Kalo ternyata uang lu cuma 15 ribu? Kondisinya jadi `False`, satpam cuek, pintu dikunci, kodenya dilewatin. Kejem kan? 😂

Makanya, biar nggak kasihan-kasihan amat, kita siapin Rencana B. Namanya `ELSE` (Selain itu).
`else` ini posisinya di bawah, dia nerima semua orang yang diusir sama si Satpam IF tadi. Nggak perlu dicek lagi syaratnya. Kalau gagal di atas, otomatis jatuh ke `else`. 'Oh uang lu kurang? Yaudah beli es teh aja deh di bagian else'. 

Coba kalian mainin angka uangnya di *Playground*, bedain efek kalau kalian punya duit banyak sama pas lagi bokek!"

---

## 🔄 MODUL 4: PERULANGAN / LOOP (10 Menit)

**Mentor:**
"Lanjut ke *superpower* komputer: Ngerjain hal yang sama jutaan kali tanpa capek. Namanya Loop. Ada dua jenis, **While** dan **For**.

**Pertama, While (Selama).**
Analogi gampangnya: **Mengecas HP**.
*Selama* baterai HP lu belum 100%, charge terus!
Nah, si `while` ini mirip satpam IF tadi, dia butuh kondisi True. Bedanya, habis dia bukain pintu dan kodenya jalan, dia bakal **balik lagi ke atas**! Ngecek lagi, baterai udah penuh belom? Belom? Nge-charge lagi. Muter terus sampai kondisinya jadi False (alias udah 100%).
*TIPS PENTING:* Jangan lupa nambahin persenan baterainya di dalem kode (misal `baterai = baterai + 20`). Kalau baterainya nggak nambah-nambah, looping-nya jalan abadi, laptop kalian bisa nge-hang!

**Kedua, For Loop (Jumlah Pasti).**
Kalau while itu nungguin kondisi, For Loop itu kalian udah tau dari awal bakal diulang berapa kali.
Analoginya kayak **Memutar Playlist Lagu**! Udah ketauan dong dari lagu 1 sampe lagu ke-5.
Di Python, For Loop biasa dikawinin sama perintah `range()`. Kalau nulis `range(1, 6)`, dia bakal muterin lagu ke-1, 2, 3, 4, sampe 5. Inget ya, dia berhentinya SEBELUM batas akhir!"

---

## 🏆 MODUL 5: PROYEK AKHIR / CAPSTONE (15 Menit)

**Mentor:**
"Nah, ilmu kanvas udah kalian dapet semua. Dari nyimpen data, ngambil keputusan, sampe muter-muterin kerjaan.
Sekarang saatnya unjuk gigi! Buka modul paling bawah, **Proyek Akhir: Mesin Kasir Cafe**.

Di sini, kodenya sengaja gw bolong-bolongin pakai tanda `___`. Tugas kalian sekarang adalah ngebongkar ingatan dari Modul 1 sampai 4, dan lengkapin *blank space* ini biar mesin kasirnya bisa beroperasi.

Dia bakal nanya nama lu, nanya uang lu, muter 3 kali pesenan (nambahin tagihan), dan terakhir Satpam Pintu (IF-ELSE) bakal ngecek uang lu cukup apa nggak. Kalo cukup dibilang makasih, kalo gagal disuruh cuci piring. 😂

Yuk, gw kasih waktu 5 menit. Yang berhasil *Run* tanpa error, langsung *screenshot* dan pamerin di chat zoom!"

---

## 🎯 PENUTUPAN (5 Menit)

**Mentor:**
"Mantap banget! Yang kodenya jalan, selamat, kalian udah resmi nulis logika *software* utuh malam ini!

Malam ini mungkin kerasa simpel, tapi Variabel, If-Else, dan Loop yang barusan kalian pelajarin, itu adalah pondasi mutlak dari algoritma AI tercanggih di dunia sekalipun. 

Minggu depan, siap-siap! Kita bakal bawa logika yang udah kalian pahamin malam ini, untuk ngebedah ribuan baris data rill yang biasa dipake di industri. 
Sampai jumpa minggu depan, *keep coding* dan selamat istirahat semuanya!"
