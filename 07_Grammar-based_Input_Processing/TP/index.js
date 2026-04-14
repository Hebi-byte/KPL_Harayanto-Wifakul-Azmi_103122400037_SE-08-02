
function toNumberArray(number) {
    if (typeof number === "string") {
        return number
        .split(",")
        .map(item => item.trim())
        .map(item => Number(item))
        .filter(item => !isNaN(item));
    }

    if (Array.isArray(number)) {
        return number
        .map(item => Number(item))
        .filter(item => !isNaN(item));
    }

    return [];
}
console.log(toNumberArray("1, 2")) // [1, 2]
console.log(toNumberArray(["1", "2"])) // [1, 2]
console.log(toNumberArray(" 11,55,33   ")) // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"])) // [0.2, -11]