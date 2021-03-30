/* 1.	Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false */

function isString (input) {
    return typeof input === "string";
}

console.log(isString(5));

/*2.	Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false*/

function isBlank (input) {
    return input === " ";
}

console.log(isBlank(" "));

/*3.	Write a function that concatenates a given string n times (default is 1).
	"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"*/

function nTimesHa (input) {
    string = "";
    for (var i = 0; i < input; i++) {
        string += "Ha";
    }
    return string;
}

console.log (nTimesHa(5));


/*4.	Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2 */

function numberLetter (a, b) {  
    numLet = 0;
    for (var i = 0; i < a.length; i++) {
        if (b == a[i]) {
            numLet++
        }
    }
    return numLet;
}

console.log (numberLetter("My random string", "n"));

/*5.	Write a function to find the position of the first occurrence of a character in a string. 
The result should be the position of character. If there are no occurrences of the character, the function should return -1.*/

function firstOccurrences (a, b) {  
    firOcc = 0;
    for (var i = 0; i < a.length; i++) {
        if (b == a[i]) {
           return i;
        } 
    }
    if (firOcc == 0) {
        return -1;
    }
}

console.log (firstOccurrences("My random string", "n"));

 
/*6.	Write a function to find the position of the last occurrence of a character in a string. 
The result should be in human numeration form. If there are no occurrences of the character, function should return -1.*/

function lastOccurrences (a, b) {  
    lasOcc = 0;
    for (var i = a.length -1; i > 0 ; i--) {
        if (b == a[i]) {
           return i;
        } 
    }
    if (lasOcc == 0) {
        return -1;
    }
}

console.log (lastOccurrences("My random string", "l"));

/*7.	Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]*/

function stringToArray (a) {
        var niz = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== " ") {
            niz[i] = a[i];
        } else {
            niz[i] = "null";
        }  
    }
    return niz;
}

console.log (stringToArray("Ran d"));

/*8.	Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.*/

function primeNumber (a) {
    for (var i=2; i<a; i++) {
        return a % i !== 0;
    }
}

console.log (primeNumber(7779));

/*9.	 Write a function that replaces spaces in a string with provided separator. 
If separator is not provided, use “-” (dash) as the default separator.
    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"*/

function replaceSpace (a, b = "-") {
    /*if (b === undefined) {
        b = "-";
    }*/
    var str = "";
    for (var i = 0; i < a.length; i++) {
         if (a[i] !== " ") {
            str += a[i];
        } else {
            str += b;
        } 
    }
    return str;
}
console.log (replaceSpace("My random string"));

/*10.	 Write a function to get the first n characters and add “...” at the end of newly created string.*/

function firstAtEnd (a) {
    var newStr = "";
    for (var i = a.length-1; i >= 0; i--) {
        newStr += a[i];
    }
    return newStr;
}

console.log (firstAtEnd("AnavoliM"));

/*11.	 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]*/

function stringInNumber (arr){
        var arrNum = [];
        var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (isFinite(parseFloat (arr[i], 10)) === true) {
            arrNum [j] = parseFloat(arr[i], 10);
            j++;
        }    
    }
    return arrNum;
}
console.log (stringInNumber(["1", "21", NaN, undefined, "42", "1e+3", Infinity]));

  
/*12.	 Write a function to calculate how many years there are left until retirement based on the year of birth. 
Retirement for men is at age of 65 and for women at age of 60. 
If someone is already retired, a proper message should be displayed.*/

function untilRetirement (a, b = "m"){
    var untRet = 0;
    if (b == "z") {
        untRet = 60 - a;
    } else {
        untRet = 65 -a;
    }
    if (untRet < 0) {    
        untRet = "You are already retired";
    }
    return untRet;
}

console.log (untilRetirement(67));

/*13.	Write a function to humanize a number (formats a number to a human-readable string)
with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th */

function humanizeNumber (a) {
    var result = "";
    var b = a + "";
    var c = b[b.length-1];
    var d = b[b.length-2];
    var suff = parseInt (c);
    var suffD = parseInt (d);
    if (suffD == 1) {
        result = "th";
    } else {   
    switch (suff) {
        case 1: 
            result = "st";
            break; 
        case 2: 
            result = "nd";
            break;
        case 3:
            result = "rd";
            break;
        default: 
            result = "th";
            break;
        }
    }
    var humNum = a + result;
    return humNum;
}

console.log (humanizeNumber(122));

/*sta ako ne definisemo drugi parametar1*/

function sum (a, b) {
    if ( b === undefined) {
        b = 5;
    }
    return a+b;
}

console.log(sum(5));

/*sta ako ne definisemo drugi parametar2*/

function sum (a, b = "5") {
    return a+b;
}

console.log(sum("3"));
