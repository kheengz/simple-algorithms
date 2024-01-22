function isUniqueCharacters(str) {
    const string = str.replace(/\s/g, '');
    for (let i = 0; i < string.length; i++) {
        iSunique = string.substr((i + 1)).includes(string[i]);
        if (iSunique) {
            return false;
        }
    }
    return true;
}

console.log(isUniqueCharacters('my string co oa')); // false
console.log(isUniqueCharacters('my string c oa')); // true
console.log(isUniqueCharacters('smy string c oa')); // false