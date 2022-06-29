
function threeParams(num1, num2, op) {
    if (op === '+') {
        let plus = num1 + num2;
        console.log(plus);
    } else if (op === '-') {
        let minus = num1 - num2;
        console.log(minus);
    } else if (op === "*") {
        let multi = num1 * num2;
        console.log(multi);
    } else if (op === "/") {
        let divi = num1 / num2;
        console.log(divi);
    }

}

module.exports = { threeParams }
