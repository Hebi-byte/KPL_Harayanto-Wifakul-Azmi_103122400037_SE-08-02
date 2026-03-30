function hitung(str, tipe) {
    let kondisi;

    if (tipe === "huruf") {
        kondisi = (c) => c !== ' ';
    } else {
        kondisi = () => true;
    }

    let jumlah = 0;

    for (const c of str) {
        if (kondisi(c)) {
            jumlah++;
        }
    }

    return jumlah;
}

module.exports = hitung;