import { hitungHuruf, hitungKata } from "../TP/text-utils.js";

const kalimat = "Halo Dunia! Saya belajar JavaScript.";

console.log("Jumlah huruf:", hitungHuruf(kalimat));
// Output: 30

console.log("Jumlah kata:", hitungKata(kalimat));
// Output: 5