
function threeParams(num1, num2, op) {
    if (op === '+') {
        let plus = num1 + num2;
        return plus;
    } else if (op === '-') {
        let minus = num1 - num2;
        return minus;
    } else if (op === "*") {
        let multi = num1 * num2;
        return multi;
    } else if (op === "/") {
        let divi = num1 / num2;
        return divi;
    }

}

module.exports = { threeParams }
