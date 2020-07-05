const caesar = function (str, num) {
    let newString = "";

    for (var i = 0; i < str.length; i++) {
        let character = str[i];
        let code = toNumber(character);
        let number = encodeChar(code, num);
        let newChar = toChar(number);
        newString = newString.concat(newChar);
    }
    return newString;
}

function toNumber(character) {
    return character.charCodeAt(0);
}

function encodeChar(code, shift) {
    let offset;

    if (code >= 65 && code <= 90) {
        offset = 65;
    } else if (code >= 97 && code <= 122) {
        offset = 97;
    } else {
        return code;
    }
    
    let num;
    let landedNum;

    if (shift >= 0) {
        landedNum = (code - offset + shift) % 26; // Mod works great for shifts greater than or equal to zero
    } else { // negative zone
        landedNum = (code - offset + shift);

        if (landedNum < 0) { // We warped around 
            landedNum = (landedNum + 26); // So go from the end of the alphabet (26 backwards)
        }
    }

    num = landedNum + offset;

    return num;
}

function toChar(number) {
    return String.fromCharCode(number);
}

module.exports = caesar
