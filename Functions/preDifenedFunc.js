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

/*Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”

Write a program to filter out falsy values from the array.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]

Write a program that calculates a number of integer values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3

Write a program that calculates a number of float values in the array.

	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2*/
