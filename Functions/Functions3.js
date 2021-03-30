/*Try to solve all assignments on a separate branch of bit-pp repository. Don’t forget to first pull changes done at class and push the new repository to remote when done with all the work at the end.

Ignore this if git branching is not presented to you yet.

/*1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"My random string", "JS " -> "JS My random string"
"My random string", "JS ", 10 -> "My random JS string"*/

function stringIn (str1, str2, pos = 0) {
    var newString = "";
    for (var i = 0; i < pos; i++) {
        newString += str1[i];
    }
    newString += str2;
    for (var j = pos; j < str1.length; j ++){
        newString += str1[j];
    }
    return newString;
}

console.log (stringIn ("My random string", "JS "));

/*2. Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

[NaN, 0, 15, false, -22, '', undefined, 47, null]*/

function joinElements (arr) {
    var newString = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined && arr[i] !== null && typeof arr[i] !== "NaN" && arr[i] !== Infinity) {
            //izbori se sa Nan
            newString += arr[i];
        }
    }
    return newString;
}

console.log (joinElements([NaN, 0, 15, false, -22, '', undefined, 47, null, Infinity]));

/*3. Write a program to filter out falsy values from the array.

[NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]*/

function filterFalsy (arr) {
    var newArray = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== 0 && arr[i] !== "" && arr[i] !== null && arr[i] !== undefined && arr[i] !== NaN && arr[i] !== false){
            newArray[j] = arr[i];
            j++;
        }
    }return newArray;
}

console.log (filterFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));

/*4. Write a function that reverses a number. The result must be a number.

12345 -> 54321 // Output must be a number*/

function reverseNumber (a) {
    var b = a + "";
    var c = "";
    for (var i = b.length -1 ; i >= 0; i--){
        c += b[i];
    }
    var d = parseInt (c);
    return d;
}

console.log (reverseNumber(12345));

/*5. Write a function to get the last element of an array. 
Passing a parameter 'n' will return the last 'n' elements of the array.

[7, 9, 0, -2] -> -2
[7, 9, 0, -2], 2 -> [0, -2]  */

function lastElementParameter (arr) {
    var newArr = []; 
    var j = 0;
    var lastElement = arr[arr.length-1];
    console.log (lastElement);
    if (lastElement <0) {
        lastElement = (-1) * lastElement;
    }
    for (var i = arr.length - lastElement; i < arr.length; i++) {
        newArr[j] = arr[i];
        j++;
    }
    return (lastElement, newArr);
}

console.log (lastElementParameter ([7, 9, 0, -2]));

/*6. Write a function to create a specified number of elements with pre-filled numeric value array.

6, 0 -> [0, 0, 0, 0, 0, 0]
2, "none" -> ["none", "none"]
2 -> [null, null] */

function preFilledArray (a, b = null) {
    preArr = [];
    for (i = 0; i < a; i++) {
        preArr[i] = b;
    }
    return preArr;
}

console.log (preFilledArray (6, "none"));

/*7. Write a function that says whether a number is perfect.

28 -> 28 is a perfect number.

Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of 

its proper positive divisors, that is, the sum of its positive divisors excluding the number itself 

(also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of 

all of its positive divisors (including itself).

E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. 

Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. 

The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.*/

function isPerfect (a) {
    var sum = 0;
    for (var i = 0; i < a; i++) {
        if (a % i == 0) {
            sum += i;
        }
    } return a === sum;
}

console.log (isPerfect(496));

/*8. Write a function to find a word within a string.

'The quick brown fox', 'fox' -> "'fox' was found 1 times"
'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"*/

function findWord (str, word){
    var k = 0;
    for (var i = 0; i < str.length-word.length+1; i++) {
        var strU = '';
        for (var j = 0; j < word.length; j++) {
            strU += str[i+j]
        }
        if (word == strU) {
            k++;
        }
    }
    return word + ' was found ' + k + ' times';
}

console.log (findWord('aa bb cc dd aa','aa'));

/*9. Write a function to hide email address.

"myemailaddress@bgit.rs" -> "mye...@bgit.rs"*/

function hideEmail (mai) {
    var hedEma = '';
    var staEnd = 0;
    for (var i = 0; i < 3; i++) {
        hedEma += mai[i];
    }
    hedEma += '...';
    for (var j = 0; j < mai.length; j++) {
        if (mai[j] == '@') {
            staEnd = j;
        }
    }
    for (var k = staEnd; k < mai.length; k++ ) {
        hedEma += mai[k];
    }
    return hedEma;
}
console.log (hideEmail('sandjelkovickg@gmail.com'));

/*10. Write a program to find the most frequent item of an array.

[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]*/

function mostFrequent (arr) {
    var max = -Infinity;
    var maxI = 0;
    var step = [];
    for (var i = 0; i < arr.length; i++) {
        var k = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                k++;
            }
        }
        step[i]=k;
    }
    for (var l = 0; l < arr.length; l++) {
        if (step[l] > max) {
            max = step[l];
            maxI = l;
        }
    }
    return arr[maxI];
}

console.log (mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));
