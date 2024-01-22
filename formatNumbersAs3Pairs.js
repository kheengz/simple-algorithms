// format numbers only as pairs of 3's
formatNumbersAs3Pairs = (S) => {
    // let formatted = S.replace(/[^0-9]+/g, "");
    // const dashAfterPos = [];
    // for (let i = 0; i < formatted.length; i += 3) {
    //     const nextIndex = (i + 2);
    //     const left = formatted.substr(i);
    //     if (left.length === 4) {
    //         dashAfterPos.push(i + 1);
    //         break;
    //     }
    //     if (left.length > 3 ) {
    //         dashAfterPos.push(nextIndex);
    //     }
    // }
    // let array = formatted.split("");
    // let shiftIndex = 0;
    // for (let i = 0; i < dashAfterPos.length; i++) {
    //     shiftIndex++;
    //     const position = dashAfterPos[i] + shiftIndex;
    //     array.splice(position, 0, '-');
    // }
    // return array.join("")

    const str = S.replace(/\W/g, '');
    const result = [];
    for (let i = 0; i < str.length; i+=3) {
        const g = str.slice(i, (i + 3));
        result.push(g)
    }

    rqeturn result.join('-');
};



const value = "00-44 / / - 48 - 5555   8361";
// const value = "555372654";
// const value = "0221985324";
// const value = "1223";

console.log("result : ", formatNumbersAs3Pairs(value));