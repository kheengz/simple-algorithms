//A prefix of a string S is any leading contiguous part of S. For example, "c" and
//"cod" are prefixes of the string "codility". For simplicity, we require prefixes to be non-empty.
//The product of prefix P of string S is the number of occurrences of P multiplied by the length of P. More precisely,
//if prefix P consists of K characters and P occurs exactly T times in S, then the product equals K * T.

const prefix = (S) => {
    const str = S.replace(/\Ws/g, '');
    const result = [];
    for (let i = 1; i <= str.length; i++) {
        const sub = str.slice(0, i);
       //console.log('str: ', str, ' -- ', sub);
        var re = new RegExp(`${sub}`, 'g');
        const array = str.matchAll(re);
        let j = 0;
        result[sub] = { length: sub.length, occurs: 0, product: 0 };
        for (let a of array) {
            j++;
            result[sub]['occurs'] = result[sub]['occurs'] ? result[sub]['occurs'] + 1 : 1;
        }
        result[sub]['product'] = result[sub]['occurs'] * result[sub]['length'];
    }
    
    return result;
};

console.log("abbabba : ", prefix('abbabba'));
console.log("codility : ", prefix('codility'));
console.log("abababab : ", prefix('abababab'));
