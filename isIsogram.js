// an isogram is a word with no repeating letters (such as ambidextrously) or, more broadly, a word in which the letters occur an equal number of times.

    function isIsogram(word) {
    if (typeof word === 'undefined') {
        return false;
    }

    if (word.length === 0) {
        return false;
    }

    let letters = word.split('');
    let letters2 = letters.reduce((fisrt, last) => {
        if(typeof fisrt[last] !== "undefined"){
            fisrt[last]++;
            return fisrt;
        } else {
            fisrt[last] = 1;
            return fisrt;
        }
    }, {});

    for (let lett in letters2) {
        if (letters2.hasOwnProperty(lett) && letters2[lett] > 1) {
            return false;
        }
    }
    return true;
}

console.log(isIsogram('Manchester'));
console.log(isIsogram('ambidextrously'));

const isIsogram2 = (word) => {
    if (word.length <= 1) {
        return true;
    }

    const lowerCaseWord = word.toLowerCase();
    const result = {};
    for (let char of lowerCaseWord) {
        result[char] = result[char] ? result[char] + 1 : 1;
    }
    
    const max = Math.max(...Object.values(result));
    const min = Math.min(...Object.values(result));
    return  min === max;

}
console.log(isIsogram2('Manchester'));
console.log(isIsogram2('ambidextrously'));
console.log(isIsogram2('dermatoglyphics'));
console.log(isIsogram2('AsdfasdFlkjlkj'));