// flips two array and find the least swap value
flip = (A, B) => {
    let min = Math.max(...A) + 1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            let temp = B[i];
            if (temp < min) {
                min = temp;
            }
        }
    }
    return min;
};
//
const a = [1, 2, 4, 3];
const b = [1, 3, 2, 3];

// const a = [3, 2, 1, 6, 5];
// const b = [4, 2, 1, 3, 3];

console.log("result : ", flip(a, b));