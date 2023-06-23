---
title: "OSI Dan TCP/IP Model"
date: 2022-11-16T19:50:05+07:00
draft: true
---

![OSI Dan TCP/IP Model](/img/networking/osi-tcpip-model/0.png "OSI Dan TCP/IP Model")

Pada saat belajar jaringan komputer pasti bertemu yang namanya **OSI Model dan TCP/IP Model**.  
\
Saat kita melakukan kegiatan seperti browsing, chattingan, nonton youtube dan lain-lain dengan mudah yang kita rasakan sekarang, ternyata ada proses yang sangat panjang.  
\
Jadi pada zaman dulu sistem komunikasi antar komputer menggunakan protokol yang dibuat sendiri oleh produsen perangkat jaringan.  
\
Ini menyebabkan terjadinya chaos networking, karena tiap produsen perangkat jaringan memiliki protokol berbeda dan menyebabkan antara satu dan lainnya tidak dapat berkomunikasi.  
\
Karena hal itu, munculah TCP/IP (Transmission Control Protocol/ Internet Protocol) model yang dibuat oleh DARPA, yaitu model atau arsitektur yang dijadikan acuan dasar dalam membuat dan mengembangkan jaringan yang bisa digunakan semua produsen perangkat jaringan agar dapat berkomunikasi.  
\
Lalu muncul juga model yang dibuat oleh International Organization for Standardization yaitu OSI (Open System Interconnection) model.  
\
TCP/IP model dan OSI model berbeda tapi punya tujuan yang sama yaitu menjadi sebuah standar agar setiap perangkat kompatibel.  

## Perbedaan TCP/IP Model Dengan OSI Model
![Layer OSI Dan TCP/IP](/img/networking/osi-tcpip-model/1.png "Layer OSI Dan TCP/IP")
Jika dilihat dari gambar diatas perbedaanya adalah OSI layer memecah Application layer pada TCP/IP. Untuk fungsi tiap layer tidak berbeda, hanya saja pada OSI layer dibuat lebih kompleks.  
\
Akan tetapi, dari dulu sampai sekarang model yang kita gunakan adalah TCP/IP model. Sedangkan OSI model dijadikan teori untuk dipelajari karena lebih kompleks agar mudah dimengerti.  
\
**Fungsi tiap layer secara singkat:**  
- **Physical layer**, merupakan layer yang berhubungan secara fisik dengan hardware, pada layer ini PDU (Protocol Data Unit) adalah Bit. Layer memiliki fungsi menentukan tegangan, kecepatan, sinkronisasi bit-bit antar perangkat.  
- **Data Link layer**, merupakan layer yang memiliki fungsi untuk menentukan bit data yang dikelompokkan ke dalam frame dan pengalamatannya berupa MAC (Media Access Control) address.  
- **Network layer**, merupakan layer yang berfungsi untuk membantu mendefinisikan IP address untuk menentukan rute tujuan dan pada layer ini PDU (Protocol Data Unit) yang dikirim berupa packet.  
- **Transport layer**, layer ini memiliki fungsi mengecek error connection sebelum packet dikirim, memecah data ke dalam packet-packet data, memberikan penomoran pada setiap packet data, pada layer ini terdapat protocol yaitu TCP dan UDP. Di Layer ini PDU (Protocol Data Unit) adalah segment untuk TCP dan datagram untuk UDP.
- **Session layer**, memiliki fungsi untuk mengendalikasn sesi koneksi antar perangkat seperti membuat, mengelola, dan melepas koneksi. PDU (Protocol Data Unit) untuk layer 5, 6, 7 adalah Data.
- **Presentation layer**, layer ini berfungsi menerjemahkan data yang akan dikirimkan dari aplikasi dan menuju ke aplikasi.  
- **Application layer**, merupakan layer pertama saat data akan dikirim dan layer terakhir saat komputer client menerima data, layer ini berfungsi menyediakan antarmuka (interface) aplikasi dengan jaringan agar sebuah aplikasi dapat mengakses jaringan.  
\
Jadi terdapat proses yang membuat satu jenis paket data jaringan menjadi jenis data lainnya dari satu layer ke layer lainnya dengan menambahkan header khusus yang disebut enkapsulasi.  
\
Misalnya Data dari layer Application, Presentation, Session, diubah menjadi Segment pada layer Transport dan terus berulang hingga menjadi bit-bit yang akan diubah menjadi besaran fisik seperti arus listrik (kabel), gelombang elektromagnetik (wireless) dan lain lain yang dikirim ke tujuan.  
\
Setelah bit-bit yang dikirim sampai pada target maka dilepas header dari layer terbawah hingga atas, proses ini disebut dekapsulasi.  
\
Sekian catatan singkat saya mengenai **OSI Dan TCP/IP Model**.  
Terima kasih sudah membaca sampai akhir.  
Sampai jumpa :wave:.