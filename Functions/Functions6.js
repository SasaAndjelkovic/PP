

/*1.	Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
What is new for me? Switch case for string. Thaks https://github.com/VladanStar*/

function countVowels(a) {
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        switch (a[i]) {
            case "a":
            case "A":
            case "e":
            case "E":
            case "i":
            case "I":
            case "o":
            case "O":
            case "u":
            case "U":
                result++;
        }
    }
    return result;
}
console.log(countVowels("AnavoliM"));

/*2.	Write a function that combines two arrays by alternatingly taking elements.

[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]*/

//Look some previous writen example.

/*3.	Write a function that rotates a list by k elements.

For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]*/

function rotateByK (a, b) {
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (i - b < 0) {
            newArr[i+a.length-b] = a[i];
        } else {
            newArr[i-b] = a[i];
        }
    }
    return newArr;
}

console.log (rotateByK ([1,2,3,4,5,6], 2));

/*4.	Write a function that takes a number and returns array of its digits.*/

function numberDigits (a) {
    var toStr = a + '';
    for (var i = 0; i < toStr.length; i++) {
        console.log (toStr[i]);
    }
}

numberDigits (1256);

/*5.	Write a program that prints a multiplication table for numbers up to 12.*/

function multiplicationTable () {
    for (var i = 1; i <= 12; i++) {
        for (var j = 1; j <= 12; j++) {
            console.log (i + ' * ' + j + ' = ' + i*j);
        }
    }
}

multiplicationTable ();

/*6.	Write a function to input temperature in Centigrade and convert to Fahrenheit.*/

function centigradeToFahrenheit (c) {
    return c*9/5+32;
}

console.log (centigradeToFahrenheit (37));

/*7.	Write a function to find the maximum element in array of numbers. Filter out all non-number elements.*/

function maximumArray (a) {
    var max = -Infinity;
    for (var i = 0; i < a.length; i++) {
        max = (isNaN(a[i])) ? max : (a[i] > max) ? a[i] : max; 
    }
    return max;
}

console.log (maximumArray([12, 15, 10, "ffff", 25, 4, 'fsdfd']));

/*8.	Write a function to find the maximum and minimum elements. Function returns an array.*/

function maximumMinimum (a) {
    var max = -Infinity; min = Infinity;
    for (var i = 0; i < a.length; i++) {
        max = (a[i] > max) ? a[i] : max;
        min = (a[i] < min) ? a[i] : min;
    }
    return max + ' ' + min;
} 

console.log (maximumMinimum ([12, 15, 10, 25, 4, 2, 6]));

/*9.	Write a function to find the median element of array.*/

function medianElement (a) {
    console.log ();
    return medEle = (a.length % 2 == 0) ? (a[a.length/2-1] + a[a.length/2])/2 : a[(a.length-1)/2]; 
}

console.log (medianElement([12, 15, 10, 25, 4, 2, 6]));

/*10.	Write a function to find the element that occurs most frequently.*/

function mostFrequently (a) {
    var mosFre = 0; maxInd = -Infinity; b = [];
    for (var i = 0; i < a.length; i++) {
        var k = 0;
        for (var j = 0; j < a.length; j++) {
            if (a[i] == a[j]) k++;   
        }
        b[i] = k;
        if (b[i] > maxInd) {
            maxInd = b[i];
            mosFre = a[i];
        }
    }
    return mosFre;
}

console.log (mostFrequently ([3, 2, 5, 2, 3, 2, 1]));

/*11.	Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. 
If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.*/

function firstMiddleLast (a) {
    var fml = [];
    if (a.length == 0) return fml;
    if (a.length % 2 == 0) {
        fml = [a[0], a[a.length-1]];
    } else {
        fml = [a[0], a[(a.length-1)/2], a[a.length-1]];
    }
    return fml;
}

console.log (firstMiddleLast([1, 2, 3, 'b', 'a', 4, 5]));

/*12.	Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.*/

function averageElements (a) {
    var sum = 0;
    for (var i =0; i < a.length; i++) {
        sum += a[i];
    }
    return sum/a.length;
}

console.log (averageElements([1, 2, 3, 4, 5]));

/*13.	Write a function to find all the numbers greater than the average. */

function greaterAverage (a) { 
    function averageElements (a) {
    var sum = 0;
    for (var i =0; i < a.length; i++) {
        sum += a[i];
    }
    return sum/a.length;
    }
    var gre = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > averageElements (a)) {
            gre [gre.length] = a [i];
        }
        }
        return gre;
    }

    console.log (greaterAverage([1, 2, 3, 4, 5]));

/*14.	The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). 
Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
●	Starvation: less than 15
●	Anorexic: less than 17.5
●	Underweight: less than 18.5
●	Ideal: greater than or equal to 18.5 but less than 25
●	Overweight: greater than or equal to 25 but less than 30
●	Obese: greater than or equal to 30 but less than 40
●	Morbidly obese: greater than or equal to 40 */

function bodyMassIndex (w, h) {
    var bmi = w/(h*h);
    if (bmi < 15) {
        console.log("Starvation");
      } else if (bmi < 17.5) {
        console.log("Anorexic");
      } else if (bmi < 18.5) {
        console.log("Underweight");
      } else if (bmi < 25) {
        console.log("Ideal");
      } else if (bmi < 30) {
        console.log("Overweight");
      } else if (bmi < 40) {
        console.log("Obese");
      } else if (bmi >= 40) {
        console.log("Morbidly");
      }
    }

bodyMassIndex(72, 1.75);

/*15.	Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:*/

function stringInFrame (a) {
    var maxLen = -Infinity;
    for (var i = 0; i < a.length; i++) {
        var maxLen = (a[i].length > maxLen) ? a[i].length : maxLen; 
    }
    for (var j = 0; j < (a.length + 2); j++) {
        var field = '';
        if (j == 0 || j == a.length + 1) { 
            for (var k = 0; k < maxLen + 4; k++) {
               field += '*';
            }
            console.log (field);
            field += "\n";
        } else {
            for (var l = 0; l < maxLen - a[j-1].length; l++ ) { 
            field += ' ';
            }
            console.log ('* ' + a[j-1] + field +' *');
        }
    }
}
stringInFrame(["Hello", "World", "in", "a", "frame", "duzistring"]);

/*For example the list ["Hello", "World", "in", "a", "frame", "alfa"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********    */