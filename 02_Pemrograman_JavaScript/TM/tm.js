function fizzBuzz(params) {

    if (!Array.isArray(params)) {
        return "Input tidak valid";
    }

    let result = "";
    let separator = params[0] <= 1 ? ", " : " ";

    for (let i = 0; i < params.length; i++) {

        let num = params[i];
        let output;

        if (num % 14 === 0) {
            output = "FizzBuzz";
        } else if (num % 7 === 0) {
            output = "Buzz";
        } else if (num % 2 === 0) {
            output = "Fizz";
        } else {
            output = num;
        }

        if (i === 0) {
            result += output;
        } else {
            result += separator + output;
        }
    }

    return result;
}

module.exports = fizzBuzz;