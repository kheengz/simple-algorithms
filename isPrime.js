// Method for checking if provided number is prime.
// For example for number 104743 it should return true, for 104744 - false.

const isPrime = (number) => {

    if (number < 2) {
        return false;
    }

    if (number % 2 === 0) {
        return (number === 2);
    }

    if (number % 3 === 0) {
        return (number === 3);
    }

    const horizon = Math.floor(Math.sqrt(number));
    let factor = 5;

    while (factor <= horizon) {

        if (number % factor === 0) {
            return false;
        }

        if (number % (factor + 2) === 0) {
            return false;
        }
        factor += 6;
    }
    return true;
};

console.log(isPrime(104743));
console.log(isPrime(104744));