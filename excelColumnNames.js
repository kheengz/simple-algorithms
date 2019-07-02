// Sample excel column names
// input : 5
// output : A, B, C, D, E
// input: : 55
// output : A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ,AR,AS,AT,AU,AV,AW,AX,AY,AZ,BA,BB,BC

function columnNames(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        let r = '';
        let term;
        let num = i;

        while (num > 0) {
            term = (num - 1) % 26;
            r = String.fromCharCode(65 + term) + r;
            num = (num - term) / 26 | 0;
        }
        result.push(r);
    }
    result = result.join(',')

    return result;
}

console.log('columnNames: ', columnNames(5));
console.log('columnNames: ', columnNames(55));
