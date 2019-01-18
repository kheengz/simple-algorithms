// check if a string is palindrome
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    str = str.replace(/[^A-Z0-9]/ig, '').toLowerCase(); // replace special characters also

    return (str === str.split('').reverse().join(''));
}

console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'
