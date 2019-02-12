// the degree of an array is the maximum frequency of any of it's element
function arrayDegree(arr) {
    let obj = {};
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] in obj) {
            obj[arr[i]] = obj[arr[i]] + 1;
        } else {
            obj[arr[i]] = 1;
        }
        if (obj[arr[i]] > maxCount) {
            maxCount = obj[arr[i]];
        }
    }

    // Object.keys(obj).filter(o => obj[o] === maxCount);
    return maxCount;
}

console.log(arrayDegree([2,4,1,4,5,2,3,2]));