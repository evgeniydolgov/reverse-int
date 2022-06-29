module.exports = function reverse (n) {
    if (n < 0) {
        n = n * -1;
    }
    let strN = String(n);
    let result = '';
    i = 0;

    while (i < strN.length) {
        const answer = strN[i];
        result = `${answer}${result}`;
        i += 1;
    }
    return Number(result);


}
