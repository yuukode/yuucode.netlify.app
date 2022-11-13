---
title: "Install Debian 10 Di Virtualbox"
date: 2022-11-05T22:24:19+07:00
draft: false
---

![Install Debian 10 Di Virtualbox](/img/debian/1-installasidebian/0.png "Install Debian 10 Di Virtualbox")
Saat ini terdapat 3 jenis sistem operasi komputer yang banyak dipakai, yaitu Windows, Linux, dan MacOS.  
\
Sesuai judul maka saya hanya membahas tentang Linux Debian.  
\
Apa itu Linux Debian:question: Debian adalah sistem operasi yang menggunakan Linux sebagai basisnya.
Debian termasuk salah satu jenis sistem operasi Linux yang cukup banyak digunakan.  
\
Debian sebenarnya bisa diinstall tidak hanya di Virtualbox saja.
Akan tetapi, sebagian orang masih mengira bahwa Debian hanya dapat diinstall di Virtualbox saja.  
\
Sebenarnya Debian bisa diinstall pada PC/Laptop secara langsung tanpa Software Virtualbox.  
\
Bedanya jika install di PC/Laptop kita menginstall Debian di perangkat _(device) aslinya_.
Sedangkan install di Virtualbox kita menginstall Debian tetapi di perangkat _(device) virtual_.  
\
Tapi kali ini kita akan menginstall Debian di Virtualbox.  
\
Sebelum lanjut ke langkah-langkah install Debian di Virtualbox, ada beberapa alat dan bahan yang disiapkan yaitu:  
\
1\. PC/Laptop\
2\. Software [Virtualbox](https://www.virtualbox.org/wiki/Downloads)\
3\. File .iso [Debian 10](https://mirror.unej.ac.id/iso/Debian/debian-10.9.0-amd64-DVD-1.iso)\
\
Mari kita lanjut ke langkah-langkah install Debian di Virtualbox.  
\
1\. Jalankan Virtualbox yang sudah di install sebelumnya. ![Jalankan Software Virtualbox](/img/debian/1-installasidebian/1.png "Jalankan Software Virtualbox")  
\
2\. Klik New untuk membuat virtual machine baru. ![Klik New](/img/debian/1-installasidebian/2.png "Klik New")  
\
3\. Tambahkan nama, tipe, versi untuk virtual machine yang akan dibuat, lalu klik Next. ![Tambahkan Nama, Tipe, Versi](/img/debian/1-installasidebian/3.png "Tambahkan Nama, Tipe, Versi")  
\
4\. Atur memori dan processor untuk virtual machine, lalu klik Next. 
![Atur memori dan processor](/img/debian/1-installasidebian/4.png "Atur memori dan processor")  
\
5\. Tentukan besar ukuran penyimpanan virtual (Virtual Hard disk). ![Size Virtual Harddisk](/img/debian/1-installasidebian/5.png "Size Virtual Harddisk")  
\
6\. Klik Finish. ![Klik Finish](/img/debian/1-installasidebian/6.png "Klik Finish")  
\
7\. Virtual Machine sudah berhasil dibuat!, selanjutnya klik Settings untuk mengatur Virtual Machine yang kita buat tadi. ![Klik Settings](/img/debian/1-installasidebian/7.png "Klik Settings")  
\
8\. Klik menu Storage. ![Klik Storage](/img/debian/1-installasidebian/8.png "Klik Storage")  
\
9\. Klik Empty. ![Klik Empty](/img/debian/1-installasidebian/9.png "Klik Empty")  
\
10\.  Klik ikon yang ada di sebelah Optical Drive. 
![Klik Ikon di Sebelah Optical Drive](/img/debian/1-installasidebian/10.png "Klik Ikon di Sebelah Optical Drive")  
\
11\.  Klik Choose a disk file. ![Klik Choose a disk file](/img/debian/1-installasidebian/11.png "Klik Choose a disk file")  
\
12\.  Cari file .iso Debian yang sudah di download, lalu klik open. ![File Iso Debian](/img/debian/1-installasidebian/12.png "File Iso Debian")  
\
13\.  Klik Network. ![Klik Network](/img/debian/1-installasidebian/13.png "Klik Network")  
\
14\.  Pada Adapter 1 pilih opsi NAT. ![Adapter-1 NAT](/img/debian/1-installasidebian/14.png "Adapter-1 NAT")  
\
15\. Pada Adapter 2 ceklis Enable Network Adapter, lalu pilih opsi Host-only Adapter, lalu klik ok. ![Adapter-2 Host-only Adapter](/img/debian/1-installasidebian/15.png "Adapter-2 Host-only Adapter")  
{{< details >}}
Ini digunakan agar virtual machine terhubung dengan host atau komputer aslinya seolah olah terhubung pada jaringan LAN secara fisik.
{{< /details >}}  
\
16\. Klik Start. ![Klik Start](/img/debian/1-installasidebian/16.png "Klik Start")  
\
17\. Pilih Install. ![Pilih Install](/img/debian/1-installasidebian/17.png "Pilih Install")  
\
18\. Pilih English. ![Pilih English](/img/debian/1-installasidebian/18.png "Pilih English")  
{{< details >}}
Ini adalah bahasa yang akan digunakan, saya merekomendasikan bahasa inggris karena jika kedepannya terjadi error lebih mudah browsingnya :smile:.
{{< /details >}}  
\
19\. Pilih Other, Asia, Indonesia. ![Pilih Other](/img/debian/1-installasidebian/19.png "Pilih Other")  
![Pilih Asia](/img/debian/1-installasidebian/20.png "Pilih Asia")  
![Pilih Indonesia](/img/debian/1-installasidebian/21.png "Pilih Indonesia")  
\
20\. Pilih United States - en_US.UTF-8. ![Pilih United States - en_US.UTF-8](/img/debian/1-installasidebian/22.png "Pilih United States - en_US.UTF-8")  
\
21\. Pilih American English. ![Pilih American English](/img/debian/1-installasidebian/23.png "Pilih American English")  
\
22\. Pilih enp0s3. ![Pilih enp0s3](/img/debian/1-installasidebian/24.png "Pilih enp0s3")  
\
23\. Jika tampilan seperti ini pilih Go Back. ![Pilih Go Back](/img/debian/1-installasidebian/25.png "Pilih Go Back")  
\
24\. Jika tampilan seperti ini pilih Go Back. ![Pilih Go Back](/img/debian/1-installasidebian/26.png "Pilih Go Back")  
\
25\. Jika tampilan seperti ini pilih Do not Configure the network at this time. ![Pilih Do not Configure the network at this time](/img/debian/1-installasidebian/27.png "Pilih Do not Configure the network at this time")  
{{< details >}}
Memilih untuk tidak mengkonfigurasi jaringan saat ini karena kebanyakan orang pada umumnya akan mengkonfigurasi jaringan ketika Debian sudah terinstall.
{{< /details >}}  
\
26\. Tambahkan Hostname. ![Tambahkan Hostname](/img/debian/1-installasidebian/28.png "Tambahkan Hostname")   
\
27\. Tambahkan password untuk user root. ![Tambahkan Password Root](/img/debian/1-installasidebian/29.png "Tambahkan Password Root")  
{{< details >}}
User root adalah user yang punya akses ke semua perintah dan file sistem pada Linux.
{{< /details >}}  
\
28\. Isikan password user root dimasukkan tadi. ![Re enter Password Root](/img/debian/1-installasidebian/30.png "Re enter Password Root")  
\
29\. Tambahkan nama untuk membuat user baru. ![Tambahkan Nama User Baru](/img/debian/1-installasidebian/31.png "Tambahkan Nama User Baru")  
{{< details >}}
User yang akan kita tambahkan berbeda dengan user root, user yang akan kita tambahkan ini user biasa yang aksesnya tidak se-full user root.
{{< /details>}}  
\
30\. Tambahkan username untuk user baru. ![Tambahkan username](/img/debian/1-installasidebian/32.png "Tambahkan username")  
\
31\. Tambahkan password untuk user baru. ![Tambahkan Password User Baru](/img/debian/1-installasidebian/33.png "Tambahkan Password User Baru")  


32\. Isikan lagi password yang dimasukkan tadi. ![Re enter Password User](/img/debian/1-installasidebian/34.png "Re enter Password User")  
\
33\. Tentukan zona waktu, sesuai lokasi kalian. ![Tentukan Zona Waktu](/img/debian/1-installasidebian/35.png "Tentukan Zona Waktu")  
\
34\. Untuk mempartisi saya menggunakan Guided - use entire disk jika tidak diperlukan partisi tambahan. ![Pilih Guided - Use Entire Disk](/img/debian/1-installasidebian/36.png "Pilih Guided - Use Entire Disk")  
\
35\. Pilih penyimpana yang ingin di partisi. ![Pilih Penyimpanan](/img/debian/1-installasidebian/37.png "Pilih Penyimpanan")  
\
36\. Disini saya memilih All files in one partition. ![Pilih All Files In One Partition](/img/debian/1-installasidebian/38.png "Pilih All Files In One Partition")  
\
37\. Pilih Finish partitioning and write changes to disk. ![Pilih Finish Partitioning And Write Changes To Disk](/img/debian/1-installasidebian/39.png "Pilih Finish Partitioning And Write Changes To Disk")  
\
38\. Pilih Yes pada Write the changes to disks. ![Pilih Yes](/img/debian/1-installasidebian/40.png "Pilih Yes")  
\
39\. Pilih No pada Scan another CD or DVD. ![Pilih No](/img/debian/1-installasidebian/41.png "Pilih No")  
\
40\. Pilih No pada Use a network mirror. ![Pilih No](/img/debian/1-installasidebian/42.png "Pilih No")  
\
41\. Pilih No pada Participate in the package usage survey. ![Pilih No](/img/debian/1-installasidebian/43.png "Pilih No")  
\
42\. Klik Spasi agar tanda bintang(*) hilang pada Debian desktop environment, lalu klik enter. ![Tidak Memilih Debian Desktop Environment](/img/debian/1-installasidebian/44.png "Tidak Memilih Debian Desktop Environment")  
![Tidak Memilih Debian Desktop Environment](/img/debian/1-installasidebian/44.2.png "Tidak Memilih Debian Desktop Environment")  
{{< details >}}
Hal ini dilakukan agar Debian tidak menginstall paket Desktop Environment, agar Debian hanya berbasis teks (CLI)
{{< /details >}}  
\
43\. Pilih Yes pada Install the GRUB boot loader to the master boot record. ![Pilih Yes](/img/debian/1-installasidebian/45.png "Pilih Yes")  
\
44\. Pilih /dev/sda. ![Pilih /dev/sda](/img/debian/1-installasidebian/46.png "Pilih /dev/sda")  
\
45\. Pilih Continue jika Installation complete, setelah itu debian akan reboot/restart sendiri. ![Pilih Continue](/img/debian/1-installasidebian/47.png "Pilih Continue")  
\
46\. Jika muncul tampilan login seperti ini maka Debian berhasil diinstall :wink:. ![Tampilan Login Debian](/img/debian/1-installasidebian/48.png "Tampilan Login Debian")  
\
\
Sekian dulu installasi Debian di Virtualbox.  
Selamat mencoba :wave:.