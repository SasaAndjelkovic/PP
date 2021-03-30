//1.	Write a program that calculates the maximum of two given numbers. 

function maxTwoNum (a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "numbers are equal";
    }
}

var result = maxTwoNum (3, 4);
console.log (result);

//2.	Write a program that checks if a given number is odd.

function oddNumber (a) {
    //Dario perfect solution return a % 2 !== 0;
    if (a % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
var result2 = oddNumber (3);
console.log (result2);

//3.	Write a program that checks if a given number is a three digit long number.

function threeDigit (c) {
    if (c > 99 && c < 1000) {
        return true;
    } else {
        return false;
    }
}
var result3 = threeDigit (1888);
console.log (result3);

//4.	Write a program that calculates an arithmetic mean of four numbers.

function fourNubersArithmetic (a, b, c, d) {
    return sum = (a + b + c + d)/4;
}
var result4 = fourNubersArithmetic (2, 5, 6, 8)
console.log (result4);

//5.	Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
//*****
//*   *
//*   *
//*   *
//*****

function sqaureDraw (a) {
    var field = "";
    for (var i = 0; i < a; i++){
        for (var j = 0; j < a; j++) {
            if (i > 0 && i < a-1 && j > 0  && j < a-1) {
                field += " ";
            } else {
                field += "*";
            }
        } 
        field += "\n";
    }
    return field;
}

var result5 = sqaureDraw(7);
console.log (result5);

//6.	Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
//* * * * *
//* * *
//* * * * * * *

function horizontalChart (Array){

var field = "";
for (var i = 0; i < Array.length; i++){
    for (var j = 0; j < Array[i]; j++) { 
            field += "*";
        }
        field += "\n";    
    }    
return field;
}

var result6 = horizontalChart([3, 7, 5]);
console.log (result6);

//7.	Write a program that calculates a number of digits of a given number. 

function numberDigit (a) {
    var givenNumber = '' + a;
    return givenNumber.length;
}

var result7 = numberDigit (900);
console.log (result7);

//8.	Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3

function numberAppearances (array, a) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (a === array[i]) {
            sum++
        }
    }
    return sum;
}
var result8 = numberAppearances ([1, 4, 5, 4, 4], 4);
console.log (result8);

//9.	Write a program that calculates the sum of odd elements of a given array. 

function sumOddElements (array) {
    var sumO = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            sumO += array[i];
        }
    }
    return sumO;
}
var result9 = sumOddElements ([1, -4, -5, 4, 4]);
console.log (result9);

//10.	Write a program that calculates the number of appearances of a letter a in a given string. 
//Modify the program so it calculates the number of both letters a and A.

function numberLetterAppearances (array, a) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (a === array[i]) {
            sum++
        }
    }
    return sum;
}
var result10 = numberLetterAppearances (["a", "b", "b", "c", "d"], "b");
console.log (result10);

//11.	Write a program that concatenates a given string given number of times. 
//For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 

function concatenatesString (a, b) {
    var conStr = "";
    for (var i = 0; i < b; i++) {
        conStr +=a;
        }
    return conStr;
}
var result11 = concatenatesString ("abc", 4);
console.log (result11);


//prosta fora 
//for (var i = 0; i < 5;  i++ ) {
 //   var row = "";
  //  if (i == 0 || i == 4) { 
 //       row = '*****';
//} else {
//    row = '*   *'
//}
//console.log (row);
//}