---
title: "TCP Dan UDP"
date: 2022-11-20T20:09:21+07:00
draft: false
---
![TCP Dan UDP](/img/networking/tcp-dan-udp/0.png "TCP Dan UDP")

TCP dan UDP berada pada layer ke 4 atau Transport Layer, pada layer ini data akan dipecah menjadi unit-unit yang lebih kecil.
\
TCP dan UDP merupakan protokol jaringan komputer yang mengirim data antar perangkat.  
TCP dan UDP melakukan tugas yang sama, akan tetapi keduanya memiliki cara yang berbeda.  
\
Untuk lebih jelasnya, lanjut baca di bawah ini.  

## Apa itu TCP

TCP merupakan singkatan dari Transmission Control Protocol.  
TCP beroperasi berdasarkan konsep koneksi.  
\
Maksudnya perlu mengirim pesan sinkron ke tujuan untuk melakukan permintaan koneksi.  
Jika koneksi sudah berhasil dibuat, pengiriman paket data dapat dilakukan.

## Apa itu UDP
UDP merupakan singkatan dari User Datagram Protocol.  
UDP beroperasi tanpa berdasarkan konsep koneksi.  
Yang mana membuatnya lebih sederhana karena tidak ada pemeriksaan kesalahan dan pemulihan.  
\
Jadi mengirimkan paket data ke tujuan tanpa perlu tau tujuan tersebut menerima atau tidak, yang penting paket data terus dikirim ke tujuan.

## Cara Kerja TCP dan UDP

TCP bekerja berorientasi koneksi yang berarti perangkat harus melakukan koneksi sebelum melakukan transfer data yang biasa diistilahkan *three-way-handshake*, yaitu pengirim mengirim synchroniz (SYN) ke tujuan untuk menjalin koneksi.  
\
Setelah perangkat tujuan menerima, si perangkat tujuan ini akan mengirimkan Synchronize Acknowledge (SYN/ACK).  
\
Lalu pengirim akan mengirimkan Acknowledge (ACK), maka koneksi berhasil dan pengiriman data dapat dilakukan.  
\
TCP akan memberikan paket data nomor urut agar paket data yang dikirim secara urut dan diterima dalam kondisi utuh.  
\
TCP memiliki *flow control* yaitu mengawasi jumlah paket data yang dikirimkan secara terus-menerus pada satu waktu, TCP mengontrol aliran untuk mencegah terlalu banyak data yang dikirim yang nantinya menyebabkan macet.  
\
Hal ini dapat membuat lebih mudah menemukan kesalahan dan memperbaikinya.  
\
Jika terdapat paket data yang hilang, TCP akan melakukan permintaan untuk mengirimkan lagi paket yang hilang.  
\
Secara sederhana, misalnya kita mengirimkan 15 paket ke tujuan pada saat sampai di tujuan hanya 10. Maka TCP akan mengirimkan jumlah hilang paket susulan agar paket utuh sampai ke tujuan dan mengoreksi paketnya kembali, ini disebut dengan Reliable.  
\
Karena sering berkomunikasi antar kedua perangkat agar menjamin paket yang dikirim utuh.  
Hal ini mengakibatkan TCP membutuhkan waktu yang lebih lama dan juga TCP memiliki Header yang berukuran 20 Byte, tapi sisi baiknya data dikirim secara utuh.  
\
Penggunaan TCP biasanya pada aplikasi mail, web, ftp, dan lain-lain. Contohnya pada saat kita mengakses situs maka data yang dikirim dari situs tersebut seperti gambar, tata letak (layout), dan lain-lain akan sampai dengan utuh.
\
Sedangkan UDP bekerja tanpa berorientasi koneksi yang berarti perangkat langsung mengirim data ke tujuan tanpa harus tau penerima akan menerima atau tidak.  
\
UDP tidak melakukan pemeriksaan apakah paket data yang dikirim masih utuh atau tidak.  
\
Sederhananya pada UDP, misalnya kita mengirim 15 paket ke tujuan dan pada saat sampai di tujuan hanya 10. Maka UDP tidak akan melakukan pengiriman ulang dan dianggap pengiriman sudah selesai.  
\
Hal ini mengakibatkan UDP jauh lebih cepat pengiriman paket data dan ukuran Header UDP lebih kecil dari TCP yaitu 8 Byte, akan tetapi UDP tidak peduli data yang dikirim utuh atau tidak.  
\
Penggunaan UDP biasanya pada aplikasi Streaming, VOIP, game multiplayer, dan lain-lain.  
\
Contohnya ketika bermain game seperti PUBG pasti pernah merasakan musuh tiba tiba hilang atau peluru yang ditembakkan tidak terkena walaupun tepat sasaran, hal ini pada saat jaringan tidak stabil paket yang dikirim tiba tiba hilang maka tidak akan dikirim ulang, jika menggunakan TCP akan aneh peluru nya akan kembali lagi jika data yang hilang akan dikirim ulang lagi.  
\
Sekian catatan singkat saya mengenai **TCP dan UDP**.  
Terima kasih sudah membaca sampai akhir.  
Sampai jumpa :wave:.