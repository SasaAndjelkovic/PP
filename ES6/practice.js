/*1.	Write a function that capitalizes the first letter of each string argument it receives.  
	Function arguments: ['hello', 'there', 'ES', 6]
	Output: ['Hello', 'There', 'ES']*/


    /* Kako sam zaglavio !!!!
let capitalizeFirstLetter = (obj) => {
    for (let i = 0; i < obj.length; i++) {
        if (typeof obj[i] === 'string') {
            console.log (obj[i]);
            for (let j = 0; j < obj[i].length; j++) {
                console.log(obj[i.j]);
                //let output;
                //output[j] = obj[].toUpperCase().concat(obj[i].substr(1));
            }
        }
    }
}


!!!!!
let obj= ['abd','wer','ddf'];
let des= obj[1][1];
//let desOne = des[1];
//let desUp = des[1].toUpperCase();
console.log(des);                       -> e


console.log(capitalizeFirstLetter(['hello', 'there', 'ES', 6]));*/

/*

let capitalizeFirstLetter = (obj) => {
    let newArray = obj.map (function(item) {
        output = item[0].toUpperCase().concat(item.substr(1));
        return output;
    }) 
    return newArray;
}
  
 console.log(capitalizeFirstLetter(['hello', 'there', 'ES', 6]));*/

////////////////////////////////////////////////////////////////////////
//// medju resenje //// 

/*
let capitalizeFirstLetter = (array) => {

    let filteredArray = array.filter (function(item) {
        return typeof item  === 'string';
    })

    let newArray = filteredArray.map (function(item) { 
    return item[0].toUpperCase().concat(item.substr(1));
    })                                               

    return newArray;

}

console.log(capitalizeFirstLetter(['hello', 'there', 'ES', 6]))*/

let capitalizeFirstLetter = array => {

    let filteredArray = array.filter (item => typeof item  === 'string')

    let newArray = filteredArray.map (item => item[0].toUpperCase().concat(item.substr(1)))                                               

    return newArray;

}

console.log(capitalizeFirstLetter(['hello', 'there', 'ES', 6]))



/*2.	Write a function that calculates sale tax that should be paid for the product of the given price. 
        Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
	Output2: [ 24, 20 ] // tax only*/

const products = [{ name: "Banana", price: 120.23, date: new Date() }, { name: "Orange", price: 100, date: new Date() }]

const productsWithTax = products.map (product => {

    const { price: prodPrice } = product;

    const newProd = {
        ...product,
        price: Number.parseFloat(prodPrice),
        priceWithTax: prodPrice * 1.2,
        tax: prodPrice * 0.2
    }

    return newProd
})

console.log(products);
console.log(productsWithTax);



/*
3.	Write a function that increases each element of the given array by the given value. If the value is omitted, 
increase each element of the array by 1.  
	Input: [4, 6, 11, -9, 2.1], 2
	Output: [6, 8, 13, -7, 4.1]*/

let increaseByValue = (array, value = 1) => array.map (item => item + value)                                               

console.log(increaseByValue([4, 6, 11, -9, 2.1], 2));


/*
4.	Write a function that filters all even elements of the array.
	Input: [6, 11, 9, 0, 3]
	Output: [6, 0]*/

let filterEvenElements = array => array.filter (item => item % 2 === 0);

console.log(filterEvenElements([6, 11, 9, 0, 3]));

/*
5.	Write a function that filters all the strings from the given array that contain substring JS or js.
	Input: ['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']
	Output: ['babel.js, 'JS standard']*/

let filterStringContainJS = array => array.filter (item => item.indexOf('js') !== -1 || item.indexOf('JS') !== -1);

console.log(filterStringContainJS(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter']));

/*
6.	Write a function that filters all integer numbers from the given array. 
Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
	Output: [7, 8]*/

let filterIntegerNumbers = array => array.filter (item => item === Math.floor(item));

console.log(filterIntegerNumbers([1.6, 11.34, 9.23, 7, 3.11, 8]));

/*
7.	Write a function that filters all integer arguments that contain digit 5.
	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
	Output: [45, 553]*/

let filterArgumentsFiveDigit = (...arg) => arg.filter (item => item.toString().indexOf('5') !== -1);

console.log(filterArgumentsFiveDigit(23, 11.5, 9, 'abc', 45, 28, 553));   // -> [ 11.5, 45, 553 ]




const array = [23, 11.5, 9, 'abc', 45, 28, 553];

const IntegerFiveDigit = item => {
    item = Math.floor(item);
    if (item.toString().indexOf('5') !== -1) console.log(item);
}

array.filter(IntegerFiveDigit);   // -> 45 '\n' 553



let optimalFilter = (...arg) => {
    let integerArray = arg.filter (item => item === Math.floor(item));
    let optimalArray = integerArray.filter (item => item.toString().indexOf('5') !== -1);
    return optimalArray;
};

console.log(optimalFilter(23, 11.5, 9, 'abc', 45, 28, 553));    // ->  [ 45, 553 ]


/*	
8.	Write a function that returns indexes of the elements greater than 10. 
	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
	Output: 1, 2, 5*/

let returnIndexes = array => array.filter ((item, index) => {if (item > 10) console.log(index)});

returnIndexes([1.6, 11.34, 29.23, 7, 3.11, 18]);

/*
9.	
a.	Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals.*/

let persons = [{name:'Sasa', age:47}, {name:'Dusan', age:19}, {name:'Sladja', age:26}, {name:'Nikola', age:35}];
//console.log(persons[0].name); 

/* b.	Write a function that prints out the names of persons older than 25. */

const printOlder = array => array.forEach ((item => {
    const { age, name } = item;
    if (age > 25) console.log(name);
}));

printOlder(persons);

/* c.	Write a function that check if there is a person older than 40.*/

const isOlder = array => array.forEach ((item => {
    const { age, name } = item;
    if (age > 40) console.log(`${name} is older than 40`)
}));

isOlder(persons);

/* d.	Write a function that checks if all persons are older than 20. */

let persons = [{name:'Sasa', age:47}, {name:'Dusan', age:19}, {name:'Sladja', age:26}, {name:'Nikola', age:35}];
 
const isAllOlder = array => array.every (item => {  
    const { age } = item;
    return age > 20;
});

console.log(isAllOlder(persons));


/*
10.	Write a function that checks if the given array is an array of positive integer values. 
	Input: [3, 11, 9, 5, 6]
	Output: yes

	Input: [3, -12, 4, 11]
	Output: no*/

const isAllArrayHaHaPositive = array => {
    array.forEach(element => {
        element > 0 ? console.log('yes') : console.log('no');
    });

}
isAllArrayHahaPositive([3, 11, -9, 5, 6]);


const isAllArrayPositive = array => array.every(item => item > 0);
console.log(isAllArrayPositive([3, 11, 9, 5, 6]));


const isAllSomeArrayPositive = array => !array.some(item => item < 0);
console.log(isAllSomeArrayPositive([3, 11, 9, 5, 6]));

/*
11.	Write a function that calculates the product of the elements of the array. 
Input: [2, 8, 3]
Output:  48*/

const arrayProduct = array => {
    let product = 1;
    array.forEach(element => product *= element);
    return product;
};

console.log(arrayProduct([2, 8, 3]));


function oldArrayProduct (array) {
    var product = 1;
    for (var i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product;
}

console.log(oldArrayProduct([2, 8, 3]));

/*
12.	Write a function that calculates the maximum of the given array. 
Input: [2, 7, 3, 8, 5.4] 
	Output: 8*/

const arrayMaximum = array => Math.max(...array);

console.log(arrayMaximum([2, 7, 3, 8, 5.4] ));
