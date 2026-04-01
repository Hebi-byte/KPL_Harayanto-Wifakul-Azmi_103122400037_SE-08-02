/**
 * Write a program that prints the numbers from 1 to
 * 100. But for multiples of three print "Fizz" instead
 * of the number and for the multiples of five print
 * "Buzz." For numbers which are multiples of both
 * three and five print "FizzBuzz."
 */

/**
 * @param {String} deret Deretan bercirian string
 * @returns {String}
 */
function fizzBuzz(deret) {
    /** @type {String} */
    let hasil = "";

    /** @type {Array<String>} */
    let deretLarik = deret.split(' ');

    for (const elemen of deretLarik) {
        /** @type {Number} */
        const n = Number(elemen);

        /** @type {String} */
        let fz = "";

        // Fizz
        if (n % 3 === 0) {
            fz += "Fizz";
        }

        // Buzz
        if (n % 5 === 0) {
            fz += "Buzz";
        }

        if (fz !== '') {
            hasil += `${fz} `;
            continue;
        }

        hasil += `${n} `;
    }

    return hasil;
}

console.log(fizzBuzz("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15"));