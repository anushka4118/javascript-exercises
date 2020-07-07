const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n == 0) return 0;

    let result = [0, 1];

    for (var i=2; i <= n; i++) {
        result.push(result[i -2] + result[i -1]);
    }

    return result[n]
}

module.exports = fibonacci
