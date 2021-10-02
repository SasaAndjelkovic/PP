// 1. example

let x = 2;

if (x === 2) {
    let x = 3;
    console.log(x);
}
console.log(x);     // -> 3    2



// 2. example

let x = 2;

if(x === 2){
    x = 3;
    console.log(x);
}
console.log(x);      // -> 3    3



// 3. example

const x = 2;

if (x === 2) {
    x = 3;
    console.log(x);
} 
console.log(x);      // nista se ne consologuje, zato sto je nastala greska
//TypeError: Assignment to constant variable.


// 4. example

const x = 2;

if (x === 2){
    const x = 3;
    console.log(x);
}
console.log(x);     // 3    2



// 5. example

function writeNumbers(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

writeNumbers(1, 2, 3, 4, 5, 6)     // ->    1     2     [ 3, 4, 5, 6 ]



// 6. example

function writeNumbers(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(rest);
}

writeNumbers(1, 2, 3, 4, 5, 6)     // ->    1     2     ReferenceError: c is not defined



// 7. example

function writeNumbers(a, b, c, ...rest) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(rest);
}

writeNumbers(1, 2, 3, 4, 5, 6)     // ->    1     2     3     [ 4, 5, 6 ]



// 8. example

function addNumbers (numbers, newNumbers){
    console.log(numbers);
    numbers.push(...newNumbers);
    console.log(numbers);
}

addNumbers([1, 2, 3], [4, 5, 6]);    // ->   [ 1, 2, 3 ]     [ 1, 2, 3, 4, 5, 6 ]



// 9. example

function addNumbers (numbers, newNumbers) {
    console.log(numbers);
    numbers.push(newNumbers);
    console.log(numbers);
}

addNumbers([1, 2, 3], [4, 5, 6]);    // ->    [ 1, 2, 3 ]      [ 1, 2, 3, [ 4, 5, 6 ] ]



// 10. example

function addTwo(a){
    return a + 2;
}
console.log(addTwo(1));    //  -> 3



// 11. example

addTwoShort = (a) => {
    return a + 2;
}

console.log(addTwoShort(2));    //  -> 4



// 12. example

addTwoShorter = (a) => a + 2;
console.log(addTwoShorter(3));    //  -> 5



// 13. example

addTwoShortest = a => a + 2;
console.log(addTwoShortest(4));    //  -> 6



// 14. example

const car = {
    name: 'Citroen cactus', 
    yearOfProduction: 2018,
};

const howOld = year => 2021 - year;

console.log('Car model is ' + car.name + " and it's " + howOld(car.yearOfProduction) + "years.");
console.log('Car model is ' + car.name + " and it's " + (2021 - car.yearOfProduction) + "years.");



// 15. example

const car = {
    name: 'Citroen cactus', 
    yearOfProduction: 2018,
}

const howOld = year => 2021 - year;

console.log(`Car model is ${car.name} and it's ${2021 - car.yearOfProduction} years.`)



// 16. example

const bestJob = (text, job = 'programming') => {
    console.log(`${text} ${job}`);
}

bestJob('Best job is', 'cooking');
bestJob('Best job is');



// 17. example

const car = {
    name: 'Citroen cactus', 
    yearOfProduction: 2018,
};

const {name, yearOfProduction} = car;
console.log(name);

const {name: model, yearOfProduction: year} = car;      //  preuzima se skraceni naziv. Narocito za yearOfProduction
console.log(model);

const {numberOfDoor = 4};
console.log(numberOfDoor);    //  Missing initializer in destructuring declaration



// 18. example

const name = 'John';
const yearOfBirth = 1991;

const person = {
    name: name,
    yearOfBirth: yearOfBirth,
    countAge: function(){
        return (2021 - yearOfBirth);
    }
}

console.log(person);
console.log(person.countAge());



// 19. example

const name = 'John';
const yearOfBirth = 1991;

const person = {
    name,
    yearOfBirth, 
    countAge () {
        return (2021 - yearOfBirth);
    }
}

console.log(person);
console.log(person.countAge());



// 20. example

const roles = ['qa', 'hr', 'dev'];

for (let i = 0; i < roles.length; i++){
    console.log(roles[i]);
}

for (role of roles){
    console.log(role);
}

for (role in roles){
    console.log(role);
}



// 21. example

const myPromise = new Promise((resolve, reject) => {
    let a = 1;
    if (a > 2) {
        resolve (`number ${a} is greather than 2!`);
    } else {
        reject (`number ${a} is NOT greather than 2!`);
    }
});

myPromise.then((message) => {
    console.log(`true: ${message}`);
}).catch((message) => {
    console.log(`not true: ${message}`);
})