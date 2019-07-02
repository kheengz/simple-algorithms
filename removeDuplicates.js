// removes duplicates in a word and special characters
function removeDuplicates(word) {

    let alphabets = new Set();
    let special = [];
    let counts = {};
    let duplicates = 0;
    word.split('').sort().forEach( (x) => {
        if (x.match(/[a-z]/i)) {
            alphabets.add(x);
        } else {
            special.push(x);
        }
        counts[x] = (counts[x] || 0) + 1;

        if (counts[x] > 1) {
            duplicates = duplicates + counts[x] - 1;
        }
    });
    duplicates = duplicates + special.length;

    return {'uniques': Array.from(alphabets).join(''), 'duplicates/special-xter' : duplicates};
}

console.log(removeDuplicates('th#elex_ash?'));