const person = {
    name: 'Tuna',
    age: 22,
    address: {
        street: 'Topolska',
        number: 18, 
        city: 'Na vratima pise',
    }
}

//let city = person.address.city;
let { city } = person.address;  
console.log(city);

//       ****  PRVI KADAR ****
// function getPersonData (obj) {
//     return `${obj.name} is ${obj.age} years old`
// }

// console.log(getPersonData(person)); // =>Tuna is 22 years old
// *********************


//       **** DRUGI KADAR ****
// function getPersonData ({name, age}) {
//     return `${name} is ${age} years old`
// }

// console.log(getPersonData(person));  // =>Tuna is 22 years old
// *********************


//      **** TRECI KADAR ****
// function getPersonData (p, a) {
//     return `
//         ${p.name} is ${p.age} years old.
//         ${p.name} 's address is: ${a.street}, ${a.number}
//     `
// }

// console.log(getPersonData (person, person.address));  // => Tuna is 22 years old.
//                                                       //    Tuna 's address is: Topolska, 18
// ************************


//      **** CETVRTI KADAR ****
// function getPersonData  ({name, age}, {street, number}) {
//     return `
//         ${name} is ${age} years old.
//         ${name} 's address is: ${street}, ${number}
//     `
// }

// console.log(getPersonData (person, person.address));  // => Tuna is 22 years old.
                                                      //    Tuna 's address is: Topolska, 18
// ************************************


//      **** PETI KADAR ****
// function getPersonData (p) {
//     return `
//     ${p.name} is ${p.age} years old.
//     ${p.name} 's address is: ${p.address.street}, ${p.address.number}.
//     `
// }

// console.log (getPersonData (person));  // => Tuna is 22 years old.
//                                        //Tuna 's address is: Topolska, 18.
// ******************************


//    **** TOTAL ES6 KADAR ****
// let getPersonData = (p) => {  
let getPersonData = p => {
    return `
    ${p.name} is ${p.age} years old.
    ${p.name} 's address is: ${p.address.street}, ${p.address.number}.
    `
}

console.log (getPersonData(person));

let getPlusPersonData = (p) => {
    let result = `${p.name} is ${p.age} years old.`
    result += `${p.name} 's address is: ${p.address.street}, ${p.address.number}`;
    return result;
}

console.log (getPlusPersonData(person));
