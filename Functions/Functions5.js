/*1.	Find the min and max element in the following array and switch their places. Print out the modified array in the console.
Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]*/

function findMinMax (a) {
    var max = -Infinity;
    var min = Infinity;
    var indN = 0;
    var indX = 0;
    var glas = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            indN = i;
        }
        if (a[i] > max) {
            max = a[i]
            indX = i;
        }
    }
    glas = a[indN];
    a[indN] = a[indX];
    a[indX] = glas;

    return a;
}

console.log (findMinMax([ 3, 500, 12, 149, 53, 414, 1, 19 ]));

/*2.	Use the following array to make a new one by dividing its values by two and adding 5. 
If a given element's value is 0, change it to 20.
Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]*/

function dividingAdding (a) {
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        newArr [i] = a [i]/2 + 5;
        if (newArr[i] == 0) {
            newArr[i] = 20;
        }  
    }
    return newArr;
}

console.log (dividingAdding([3, 500, -10, 149, 53, 414, 1, 19]));

/*3.	Initialize two arrays. The first one should contain student names, the second one the number of points for each student.
Display students' names with their corresponding grade. Use the following ranges:
51-60 -> 6,
61-70 -> 7,
71-80 -> 8,
81-90 -> 9,
91-100 -> 10.
Input: 
[ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
Output: 
Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.*/

function acquiredEarned (a, b) {
    var result = '';
    for (var i = 0; i < a.length; i++) {
            if (b[i] < 51) {
                result = a[i] + ' acquired ' + b[i] + ' points and failed to complete the exam.';
            } else if (b[i] < 61) {
                result = a[i] + ' acquired ' + b[i] + ' points and earned 6.';
            } else if (b[i] < 71) {
                result = a[i] + ' acquired ' + b[i] + ' points and earned 7.';
            } else if (b[i] < 81) {
                result = a[i] + ' acquired ' + b[i] + ' points and earned 8.';
            } else if (b[i] < 91) {   
                result = a[i] + ' acquired ' + b[i] + ' points and earned 9.';
            } else if (b[i] < 100) {
                result = a[i] + ' acquired ' + b[i] + ' points and earned 10.';
            }
        console.log(result);
    }
}

acquiredEarned([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], 
[ 50, 39, 63, 72, 99, 51, 83, 59 ]);

/*4.	(skip :))Sort a previously defined array.
Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]*/

function sortMultipliedArray (a) {
    var newArr = [];
    var ind = 0;
    for (var i = 0; i < a.length; i++) {
        var min = Infinity; 
        for (var j = 0; j < a.length; j++) { 
            if (a[j] < min) {
                min = a[j];
                ind = j;
            }   
        }
        newArr[i] = a[ind]*2;
        a[ind] = Infinity;
    }
    return newArr;
}

console.log (sortMultipliedArray([ 13, 11, 15, 5, 6, 1, 8, 12]));
	
/*5.	(skip :))Sort a previously defined array in a descending order and display it in the console.
Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]*/

function descendingArray (a) {
    var newArr = [];
    var ind = 0; 
    for (var i = 0; i < a.length; i++) {
        var max = -Infinity;
        for (var j = 0; j < a.length; j++) {
            if (a[j] > max) {
                max = a[j];
                ind = j;
            }
        }
        newArr[i] = a[ind];
        a[ind] = -Infinity;
    }
    return newArr;
}
	
console.log (descendingArray( [ 13, 11, 15, 5, 6, 1, 8, 12 ]));

/*6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts
all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
Output: 2350000*/

function evenOddCalculated () {
    var sumeE = 0;
    var sumeO = 0;
    for (var i = 1; i <=1000; i++) {
        if (i % 2 == 0) {
            sumeE += i;
        } else if (i <= 500) {
            sumeO += i;
            }
    }
    console.log ((sumeE - sumeO)*12.5);
}

evenOddCalculated();


/*7.	Define a 10 element array. Take the first two letters from every string 
(that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

Output: AnStJoJoDaMa*/

function firstTwoLetters (a, b) {
    var newStr = '';
    for (var i = 0; i < a.length; i++) {
        if (typeof a[i] !=="string" ) {
            continue;
        } else if (a[i].length < b) {
            continue;
        } 
        for (var j = 0; j < b; j++) {
            newStr += a[i][j];
        }
    }
    return newStr;
}

console.log (firstTwoLetters([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ], 4));
	
/*8.	Write a program that takes a string and prints its characters out in reversed order in the console.
Input:  Belgrade Institute of Technology
Output: ygolonhceT fo etutitsnI edargleB*/

function reversedString (a) {
    var newStr = '';
    for (var i = a.length -1 ; i >= 0; i--) {
        newStr += a[i];
    }
    return newStr;
}

console.log (reversedString ('Ana voli M'));

/*9.	Write a program that displays all the combinations of two numbers between 1 and 7. 
Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. 
(E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).*/

function allCombinations (a) {
    var poss = 0;
    for (var i = 1; i <= a; i++) {
        for (var j = 1; j <= a; j++) {
            if (i !== j) {
                poss++;
                console.log (i, j);
            }
        }
    }
    return poss;
}

console.log (allCombinations (7));

/*10.	Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
Input:  17    | 15
Output: true  | false*/

function isPrimeNumber (a) {
    for (var i = 2; i < a; i++) {
        if (a % i == 0) {
            return false;
        }
    }
    return true;
}
	
console.log (isPrimeNumber (15));

/*11.	Check if a given string is a palindrome (spaces are ignored).
Input:  eye  | Geek  | a nut for a jar of tuna
Output: true | false | true*/

function isStringPalindrome (a) {
    var newStr = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] == ' ') {
            continue
        } else {
            newStr += a[i];
        }
    }
    for (var j = 0; j < newStr.length/2; j++) {
        if (newStr[j] !== newStr[newStr.length-1-j]) {
            return false;
        }
    }
    return true;
}

console.log (isStringPalindrome('a nut for a jar of tuna'));

/*12.	Write a program that calculates the greatest common divisor of two integers. 
Note: The greatest common divisor of two non-zero integers is the greatest positive number 
that divides both numbers with no remainder.
Input:  192 42 | 81 9
Output: 6      | 9*/

function greatestCommonDivisor (a, b) {
    var gcd = 1;
    var low = a <= b ? a : b;
    for (var i = 2; i < low; i++) {
        if (a % i == 0 && b % i == 0 ) {
            gcd *= i;
            a /= i; 
            b /= i;
            low /= i;
        }
    }
    return gcd;
}

console.log (greatestCommonDivisor(192, 42));