const repeatString = function(string, num) {
    let newString = '';
    if (num < 0) return 'ERROR';
    for (let i=0; i < num; i++) {
        newString = newString + string;
    }
    return newString;
}

module.exports = repeatString;
