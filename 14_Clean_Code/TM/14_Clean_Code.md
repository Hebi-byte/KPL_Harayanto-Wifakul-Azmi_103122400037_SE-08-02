# 14_Clean_Code

## Nama : Haryanto Wifakul Azmi  
## Kelas : SE-08-02  
## Nim : 103122400037  

---

## Soal

Dari dua kode di bawah ini, manakah kode yang lebih mudah dicari masalahnya dan diperbaiki ketika harus melakukan debugging di tengah malam, misalnya pukul 01.00? Jelaskan alasannya.

---

## Kode Pertama

```js
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        return doSomething(user);
      }
    }
  }
  return null;
}
```

---

## Kode Kedua

```js
function processUser(user) {
  if (!isValidCandidate(user)) return null;
  return doSomething(user);
}

function isValidCandidate(user) {
  return user && user.isActive && user.hasPermission;
}
```

---

## Jawaban

Saya lebih memilih untuk mencari masalah dan memperbaiki **kode kedua** ketika harus melakukan debugging di tengah malam.

Kedua kode memiliki tujuan yang sama, yaitu menjalankan fungsi `doSomething(user)` hanya apabila data `user` tersedia, pengguna sedang aktif, dan pengguna memiliki izin. Namun, kode kedua memiliki struktur yang lebih sederhana dan lebih mudah dipahami.

Pada kode pertama, terdapat beberapa percabangan `if` yang saling bertingkat atau disebut sebagai **nested if**. Programmer harus membaca setiap kondisi satu per satu hingga mencapai bagian utama program. Ketika sedang lelah, struktur seperti ini lebih berisiko menyebabkan kesalahan saat membaca alur program atau saat mencari letak bug.

Sementara itu, kode kedua menggunakan pendekatan **guard clause**. Kondisi pengguna yang tidak valid diperiksa sejak awal. Jika pengguna tidak memenuhi syarat, fungsi langsung mengembalikan nilai `null`. Setelah itu, alur utama program dapat terlihat dengan jelas, yaitu menjalankan `doSomething(user)`.

---

## Kesimpulan

Kode kedua merupakan pilihan yang lebih baik untuk dicari masalahnya dan diperbaiki, terutama ketika programmer harus melakukan debugging dalam kondisi lelah. Penggunaan guard clause dan pemisahan fungsi validasi membuat kode lebih bersih, mudah dibaca, mudah diuji, dan lebih mudah dikembangkan.

Walaupun kedua kode menghasilkan perilaku yang sama, kode kedua lebih sesuai dengan prinsip **clean code** karena memiliki alur yang lebih sederhana dan tanggung jawab fungsi yang lebih jelas.
::: 
