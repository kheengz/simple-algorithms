// an array of object names list them with comma separates and use & before the name when there is more than one object
function list(names){
    //your code here
    if (names.length === 0)
        return '';
    let namesStr = names.map(obj => {
        return obj.name;
    }).join(', ');

    const index = namesStr.lastIndexOf(', ');
    if (index > 0) {
        namesStr = namesStr.slice(0, index) + namesStr.slice(index).replace(', ', ' & ');
    }
    return namesStr;
}

function listEnhanced(names){
    return names.reduce(function(prev, curr, i, arr){
        return prev + curr.name + (i < arr.length - 2 ? ', ' : i === arr.length - 2 ? ' & ' : '');
    }, '');
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}]));
console.log(list([ {name: 'Bart'}]));
console.log(listEnhanced([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Uche'}  ]));
console.log(listEnhanced([]));