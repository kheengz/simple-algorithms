const permutation = (input) => {
    if (input.length === 0) { 
        return ['']; 
    } 
  
    let first = input[0]; 
    let restSubstrings = permutation(input.slice(1)); 
  
    let substrings = restSubstrings.map(sub => first + sub); 
    
    return [...substrings, ...restSubstrings]; 
};

const input = 'pwwkew';
console.log("result : ", permutation(input));


function substringFunction(input) { 
	let substrings = []; 
    for (let i = 0; i < input.length; i++) { 
        for (let j = i + 1; j <= input.length; j++) { 
            substrings.push(input.slice(i, j)); 
        } 
    } 
    return substrings; 
} 

let str1 = "pwwkew"; 
let result = substringFunction(str1); 

// console.log(result);
