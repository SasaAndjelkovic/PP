const sandwich = {
    bread: 'italian', 
    meat: 'tuna',
    cheese: 'swiss',
}

// let bread = sandwich.bread;
// console.log (bread);  //=> italian

let { bread, meat, cheese } = sandwich; //destructuring
console.log (cheese);    // -> swiss