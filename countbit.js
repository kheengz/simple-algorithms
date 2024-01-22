// get the one bits in base 2 of a given number
getOneBits = (n) => {
    const toBase2 = n.toString(2).split("");
    console.log('toBase2: ', toBase2);
    let oneCount = 0;
    if (toBase2[0] === '0') {
        oneCount = 1;
    }
    const result = [];
    for (let i = 0; i < toBase2.length; i++) {
        if (oneCount === 0 && toBase2[i] === '1') {
            result.push(i + 1);
        }
        else if (toBase2[i] === '1') {
            oneCount = 0;
        }
    }
    result.unshift(result.length);
    return result;
};


console.log("result : ", getOneBits(161));