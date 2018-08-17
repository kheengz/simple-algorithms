// Gets the unique elements in an array
const unique = (array) => {
    const set = new Set(array);
    return Array.from(set);
};

console.log(unique([1, 1, 2, 3, 4]));
