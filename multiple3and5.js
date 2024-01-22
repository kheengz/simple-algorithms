// Please write a program that prints the numbers from 1 to 100. But for multiples of three print “Research”
// instead of the number and for the multiples of five print “Square”.
// For numbers which are multiples of both three and five print “Research_Square”.*

function multiples3and5(start = 1, end = 100){
    for (let i = start; i < end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('Research_Square');
        } else if (i % 3 === 0 ) {
            console.log('Research');
        } else if (i % 5 === 0 ) {
            console.log('Square');
        } else {
            console.log(i);
        }
    }
}

console.log(multiples3and5());
