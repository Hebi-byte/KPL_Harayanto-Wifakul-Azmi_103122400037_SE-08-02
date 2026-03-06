/*
* tulislah sebuah fungsi yang menerima bilangan n dan mencetak penjumlahan dari 1 sampai n. contoh jika n = 5 maka hasilnya adalah 1 + 2 + 3 + 4 + 5 = 15
*/

function sumUpToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// const n = 1000;
// const result = sumUpToN(n);
// console.log(`Hasil penjumlahan berurut dari 1 sampai ${n} adalah ${result}`);

console.log(sumUpToN(5));