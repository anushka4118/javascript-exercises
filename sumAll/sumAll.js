const sumAll = function(min, max) {
    if (min < 0 || max < 0) {
        return 'ERROR';
    }
    if (min > max) {
        let newMax = min;
        min = max;
        max = newMax;
    }
    if (typeof min !== 'number' || typeof max !== 'number') {
        return 'ERROR';
    }
    let sum = 0;
    for (var i=min; i < max + 1; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
 