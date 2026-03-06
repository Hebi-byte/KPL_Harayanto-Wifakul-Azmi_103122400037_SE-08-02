/*
buatlah sebuaha array berisi 3 minuman favorit dan simpan dalam variabel minuman. ubah 2 elemen pertama menggunakan notasi kurung dan penugasan. tambahkan minuman baru kedepan array.
*/

const minuman = ["Teh", "Kopi", "Jus"];

minuman[0] = "Susu";
minuman[1] = "Air Mineral";
console.log(minuman);

minuman.unshift("matcha");

console.log(minuman);