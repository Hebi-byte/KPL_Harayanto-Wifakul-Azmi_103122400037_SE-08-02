/**
 * Mengubah angka menjadi Fizz/Buzz/FizzBuzz atau angka itu sendiri
 * @param {number} value
 * @returns {string|number}
 */
function zzzzOrNum(value) {
    if (typeof value !== "number") {
        throw new Error("Input harus number");
    }

    if (value % 3 === 0 && value % 5 === 0) {
        return "FizzBuzz";
    } else if (value % 3 === 0) {
        return "Fizz";
    } else if (value % 5 === 0) {
        return "Buzz";
    }

    return value;
}

/**
 * Mengubah array angka menjadi array FizzBuzz
 * @param {number[]} sequence
 * @returns {(string|number)[]}
 */
function fizzBuzz(sequence) {
    if (!Array.isArray(sequence)) {
        throw new Error("Input harus array");
    }

    return sequence.map((e) => {
        if (typeof e !== "number") {
            throw new Error("Semua elemen harus number");
        }
        return zzzzOrNum(e);
    });
}

module.exports = {
    fizzBuzz,
    zzzzOrNum,
};