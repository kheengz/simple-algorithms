const anagram = (N) => {
    if (typeof N == "number")
        N = N.toString();

    if (N == "0")
        return 1;

    let anagrams = {};
    let recurse = (ana, str) => {
        if (str.length === 0) {
            anagrams[ana] = 1;
        }
        for (let i = 0; i < str.length; i++) {
            // console.log('ana ', ana + str[i]);
            // console.log('str  ', str.slice(0, i) + str.slice(i + 1));
            recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
        }
    };

    recurse('', N);

    console.log(Object.keys(anagrams));
    return Object.keys(anagrams)
        .filter((item, index, list) => item.charAt(0) !== '0').length;
};

const count = anagram('1213');

console.log('count : ', count);



//Write a program in JavaScript to find all the anagrams within a series of words provided. 
// e.g.:monk, konm, nkom, bbc, cbb, dell, ledl, llde
//The output should be categorised into rows:

// 1. monk konm, nkom;
// 2. bbc cbb;
// 3. dell ledl, llde;


const anagramFinder = (stringArray) => {
    const result = {};
    for (let str of stringArray) {
        const clean = cleanString(str);
        result[clean] = result[clean] ? `${result[clean]}, ${str}` : str;
    }

    Object.keys(result).forEach((re, i) => {
        console.log(`${i + 1}. ${result[re]};`);
    });
    
    return result;
}

const cleanString = (str) => { 
    return str.toLowerCase().split('').sort().join('');
};

const A = ['monk', 'konm', 'nkom', 'bbc', 'cbb', 'dell', 'ledl', 'llde'];
console.log('anagramFinder: ', anagramFinder(A));