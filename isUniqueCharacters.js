function isUniqueCharacters(str) {
    let i, ch;
    let stri = str.split(' ').join('')

    for (i = 0; i < stri.length; i++) {
        ch = stri[i];
        if (stri.indexOf(ch, i + 1) > -1) {
            return false;
        }
    }

    return true;
}

console.log(isUniqueCharacters('my string co oa')); // false
console.log(isUniqueCharacters('my string c oa')); // true