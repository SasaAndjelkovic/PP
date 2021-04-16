/*1. Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]*/

function convertInNumbersArray (array) {
    var newArray = [];
    console.log (isFinite(undefined));
    for (var i = 0; i < array.length; i++) {
        if (isFinite(parseFloat (array[i]))) {
            newArray [newArray.length] = array[i];
        }
    }
    return newArray;
}

console.log (convertInNumbersArray (["1", "21", undefined, "42", "1e+3", Infinity]));

/*2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”*/

function skippingNElements (array) {
    var string = '';
    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) && array[i] !== null) {
            string += array[i];
        }
    }
    return string;
}

console.log (skippingNElements ([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/*3. Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]*/

function filterFalsy (array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        //if (!array[i] === false) { i am not sure what is happening... Now i know :)
        if (array[i]) {
            newArray[newArray.length] = array [i];
        }
    } 
    return newArray;
}

console.log (filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/*4. Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3*/

function numberIntegerValue (array) {
    var calculator = 0;
    for (var i = 0; i < array.length; i++) {
        if (parseInt(array[i]) == array[i]) {
            calculator ++;
        }
    }
    return calculator;
}

console.log (numberIntegerValue([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

/* 5. Write a program that calculates a number of float values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2*/

function numberFloatValues (array) {
    var calculator = 0;
    for (var i = 0; i < array.length; i++) {
        if (parseInt(array[i]) !== array[i] /*????*/ && !!array[i] ) //Milos Kuzmic
        calculator ++;
    }
    return calculator;
}

console.log (numberFloatValues ([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));

//what is !! --- this is fantastic idea of Mirko Nadj

console.log (0); // => 0
console.log (!0); // => true
console.log (!!0); // => false

console.log (1); // => 0
console.log (!1); // => false
console.log (!!1); // => true