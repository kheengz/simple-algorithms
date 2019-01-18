//A prefix of a string S is any leading contiguous part of S. For example, "c" and
//"cod" are prefixes of the string "codility". For simplicity, we require prefixes to be non-empty.
//The product of prefix P of string S is the number of occurrences of P multiplied by the length of P. More precisely,
//if prefix P consists of K characters and P occurs exactly T times in S, then the product equals K * T.

prefix = (S) => {
    let count = 0;
    for (let i = 1,  j = S.length - 1; i < S.length; i++, j-- ) {
        const str1 = S.substr(0, i);
        const str2 = S.substr(j, S.length);
        if(str1 === str2){
            count = i;
        }
        if(i === j){
            break;
        }
    }
    return count;
};
console.log("abbabba : ", prefix('abbabba'));
console.log("codility : ", prefix('codility'));
console.log("abababab : ", prefix('abababab'));