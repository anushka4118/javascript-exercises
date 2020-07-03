const palindromes = function(str) {
    str = str.toLowerCase();

    var newString = '';
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i].match(/[a-z]/i)) { // is a letter (between a - z)
            newString += str[i];
        } else {
            // else remove it from str
            str = str.replace(str[i], "");
        }
    }
    return newString === str;
}

module.exports = palindromes
