# 10_TP_Library_Construction

## Nama : Haryanto Wifakul Azmi  
## Kelas : SE-08-02  
## Nim : 103122400037  

---

## Soal

Buatlah pustaka JavaScript yang menyediakan utilitas berupa dua fungsi yang menghitung jumlah huruf dan jumlah kata.

Kriteria:

Hanya alfabet A hingga Z yang dihitung (besar dan kecil)
Spasi tidak dihitung
Pustaka bisa diimpor

---

## Kode Sumber

* Module: [`text-utils.js`](text-utils.js)
* Konfigurasi package: [`package.json`](package.json)
* testing : [`test-text.js`](../test/test-text.js)
---

## Deskripsi

Program ini membuat pustaka JavaScript sederhana bernama **text-utils**. Pustaka ini menyediakan dua fungsi utama, yaitu `hitungHuruf` dan `hitungKata`, yang digunakan untuk menghitung jumlah huruf dan jumlah kata dalam sebuah teks.

Perhitungan hanya menggunakan karakter alfabet **A sampai Z**, baik huruf besar maupun huruf kecil. Karakter selain alfabet seperti spasi, angka, tanda baca, dan simbol tidak ikut dihitung sebagai huruf.

---

### 1. Konfigurasi Package

File `package.json` berisi konfigurasi pustaka JavaScript yang dibuat.

```json
{
  "name": "text-utils",
  "version": "1.0.0",
  "description": "Library untuk menghitung jumlah huruf dan kata dalam sebuah string",
  "license": "ISC",
  "author": "Harayanto Wifakul Azmi",
  "type": "module",
  "main": "text-utils.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Bagian penting dari konfigurasi ini adalah:

* `name` berisi nama pustaka, yaitu `text-utils`
* `type: "module"` digunakan agar file JavaScript dapat menggunakan sintaks `export` dan `import`
* `main` mengarah ke file utama pustaka, yaitu `text-utils.js`

---

### 2. Fungsi `hitungHuruf`

Fungsi `hitungHuruf` digunakan untuk menghitung jumlah huruf alfabet dalam sebuah teks.

```js
export function hitungHuruf(teks) {
  if (typeof teks !== "string") {
    return 0;
  }
  const huruf = teks.match(/[a-zA-Z]/g);
  return huruf ? huruf.length : 0;
}
```

Penjelasan fungsi:

* Fungsi menerima parameter `teks`
* Jika input bukan bertipe string, fungsi mengembalikan nilai `0`
* Regex `/[a-zA-Z]/g` digunakan untuk mencari semua huruf alfabet dari A sampai Z
* Jika huruf ditemukan, fungsi mengembalikan jumlah huruf tersebut
* Jika tidak ada huruf yang ditemukan, fungsi mengembalikan nilai `0`

---

### 3. Fungsi `hitungKata`

Fungsi `hitungKata` digunakan untuk menghitung jumlah kata dalam sebuah teks.

```js
export function hitungKata(teks) {
  if (typeof teks !== "string") {
    return 0;
  }
  const kata = teks.match(/[a-zA-Z]+/g);
  return kata ? kata.length : 0;
}
```

Penjelasan fungsi:

* Fungsi menerima parameter `teks`
* Jika input bukan bertipe string, fungsi mengembalikan nilai `0`
* Regex `/[a-zA-Z]+/g` digunakan untuk mencari kumpulan huruf alfabet yang membentuk kata
* Spasi, angka, simbol, dan tanda baca tidak dihitung sebagai kata
* Jika kata ditemukan, fungsi mengembalikan jumlah kata tersebut
* Jika tidak ada kata yang ditemukan, fungsi mengembalikan nilai `0`

---

### 4. Cara Mengimpor Pustaka

Karena pustaka dibuat menggunakan ES Module, fungsi dapat diimpor dengan cara berikut:

```js
import { hitungHuruf, hitungKata } from "./text-utils.js";
```

Contoh penggunaan:

```js
import { hitungHuruf, hitungKata } from "./text-utils.js";

const teks = "Halo Dunia 123!";

console.log(hitungHuruf(teks));
console.log(hitungKata(teks));
```

---

### 5. Hasil Output

Contoh jika input yang digunakan adalah:

```js
const teks = "Halo Dunia 123!";
```

Maka hasilnya:

```txt
Jumlah huruf: 9
Jumlah kata: 2
```

Penjelasan:

* Huruf yang dihitung adalah `HaloDunia`, sehingga jumlahnya `9`
* Kata yang dihitung adalah `Halo` dan `Dunia`, sehingga jumlahnya `2`
* Angka `123`, spasi, dan tanda seru tidak dihitung

---

## Kesimpulan

Pustaka JavaScript **text-utils** berhasil dibuat dengan dua fungsi utama, yaitu `hitungHuruf` dan `hitungKata`. Fungsi `hitungHuruf` menghitung jumlah huruf alfabet A sampai Z, sedangkan fungsi `hitungKata` menghitung jumlah kata berdasarkan rangkaian huruf alfabet. Pustaka ini juga dapat diimpor menggunakan sintaks ES Module.
