# 06_Design_by_Contract_dan_Defensive_Programming
## Nama : Haryanto Wifakul Azmi
## Kelas : SE-08-02
## Nim : 103122400037

---

## Soal
Menurutmu, kapankah kita saatnya menggunakan asersi atau eksepsi untuk fungsi seperti ini di atas? Apakah kita harus sepenuhnya asersi, atau sepenuhnya eksepsi? Lakukan riset dan berikan jawabannya dalam bentuk esai minimal 300 kata.

## Jawaban
Dalam pemrograman, ada beberapa cara buat nangani error, dua yang sering dipakai itu asersi (assert) dan eksepsi (exception). Misalnya di fungsi `divide(a, b)`, dua-duanya dipakai buat tujuan yang sama, yaitu memastikan pembagian berjalan dengan benar. Tapi sebenarnya, fungsi dan penggunaannya beda.

Asersi biasanya dipakai buat ngecek kondisi internal program—hal-hal yang seharusnya *nggak mungkin salah* kalau kodenya udah benar. Jadi ini lebih ke alat bantu debugging buat developer. Contohnya, ngecek apakah variabel itu benar-benar bertipe angka atau apakah nilai tertentu sesuai dengan logika program. Kalau asersi gagal, itu berarti ada yang salah di logika programnya, bukan karena input dari user. Makanya, asersi lebih sering dipakai pas tahap development atau testing.

Sedangkan eksepsi itu dipakai buat menangani error yang memang bisa terjadi saat program dijalankan, terutama karena input yang nggak valid atau kondisi tak terduga. Di kasus fungsi `divide`, misalnya ngecek tipe data atau mencegah pembagian dengan nol—itu hal yang realistis terjadi. Dengan `throw`, kita bisa kasih pesan error yang jelas, dan error itu juga bisa ditangani pakai `try...catch`. Ini bikin program jadi lebih aman dan siap dipakai di dunia nyata.

Kalau disuruh milih salah satu, sebenarnya kurang tepat. Asersi dan eksepsi itu bukan buat saling menggantikan, tapi saling melengkapi. Buat validasi input dari user, lebih cocok pakai eksepsi karena bisa ditangani dengan baik. Sementara asersi tetap penting buat menjaga supaya logika internal program tetap konsisten.

Jadi intinya, cara terbaik adalah pakai keduanya sesuai kebutuhan. Eksepsi untuk error yang mungkin terjadi saat program dipakai, dan asersi untuk ngejaga asumsi internal tetap benar. Dengan begitu, kode jadi lebih aman, jelas, dan gampang dirawat.
