let createHelloFunction = (...args) => {
    args;
}

console.log(createHelloFunction (1, 2, 3, 4));

////// Srpead Operator

const peaks = ['Tallac', 'Ralston', 'Rose'];
const canyons = ['Ward', 'Blackwood']
const tahoe = [...peaks, ...canyons]
console.log(tahoe);               // => [ 'Tallac', 'Ralston', 'Rose', 'Ward', 'Blackwood' ]
console.log(tahoe.join(', '))     // => Tallac, Ralston, Rose, Ward, Blackwood

///////

let copyOfPeaks = [...peaks];

///////

let obj1 = {
    firstName: 'Pera', 
    lastName: 'Peric',
}

let obj2 = {
    age: 21, 
    job: 'Kuvar',
}

let person = {...obj1, ...obj2}


/////// Rest Operator


const lakes = ['Donner', 'Marlette', 'Fallen Leaf', 'Caskade']
const [first, ...rest] = lakes

console.log(first);   // => Donner
console.log(rest);    // => [ 'Marlette', 'Fallen Leaf', 'Caskade' ]
console.log(rest.join(', '))  // => Marlette, Fallen Leaf, Caskade


//function directions (...args) { //zasto stara f-ja
let directions = (...args) => {    
   
    const [start, ...remaining] = args;
    const [finish, ...stops] = remaining.reverse ();

    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
}

directions('Beograd', 'Jagodina', 'Nis', 'Pirot', 'Sofija');


///////

console.log(Math.min(...[23, 44, 55]));