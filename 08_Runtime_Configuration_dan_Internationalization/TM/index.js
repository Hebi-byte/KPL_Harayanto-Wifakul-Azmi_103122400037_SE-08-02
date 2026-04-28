require('dotenv').config({quiet: true}); // Load .env file silently

async function main() {
    try {
        let rupiah = process.argv[2]; // ambil dari command l

        if (!rupiah || rupiah <= 0) {
            console.log("Masukkan nominal rupiah, contoh: node index.js 25000");
            process.exit();
        }

        rupiah = Number(rupiah);

        const response = await fetch(process.env.BASE_API);
        const data = await response.json();

        const kursCNH = data.idr.cnh;
        const hasilKonversi = rupiah * kursCNH;

        const kursEuro = data.idr.eur;
        const hasilKonversiEuro = rupiah * kursEuro;

        console.log(`Hasil konversi pada tanggal ${new Date().toLocaleDateString()}: ${rupiah} IDR ke CNH: ${hasilKonversi.toFixed(2)} CNH`);
        console.log(`Hasil konversi pada tanggal ${new Date().toLocaleDateString()}: ${rupiah} IDR ke EUR: ${hasilKonversiEuro.toFixed(2)} EUR`);

    } catch (error) {
        console.error('Error:', error);
    }
}

main();