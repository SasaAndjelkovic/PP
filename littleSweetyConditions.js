
/* Write a program that compares two numbers and display the larger. Result should be displayed in the console. */

	var result ="", firstNumber = 186, secondNumber = 168;

	if (firstNumber > secondNumber) {
		result = "First number:" + firstNumber + " is larger than second number:" + secondNumber;
	} else {
        result = "Second number:" + secondNumber + " is larger than first number:" + firstNumber};
	
	console.log (result);

/* Write a program to check if the number is divisible by 2. If it is, print even, if not, print odd. */

var divisibleNumber = 8;

if (divisibleNumber % 2 == 0) {
    console.log ("even");
} else {
    console.log ("odd");
}

/* Write a program to check if the variable is a number. 
If it’s a number check it if the number is divisible by 3 and 5. If it is, print that number. */


    var doubleDivisible = "150";

    if (typeof doubleDivisible == "number") {
        if (doubleDivisible % 3 == 0 && doubleDivisible % 5 == 0) {
        console.log (doubleDivisible); 
        } 
    
    } else {
        console.log ("Variable is not numeric, please repeat");
    }

/* Write a conditional statement to find the largest of five numbers. Display the result in console. */

var maxNumber = 0;
var a = -5, b = -2, c = 6, d = 0, e = -1;

if (a >= b && a >= c && a >= d && a >= e) {
    maxNumber = a;
} else {
    if (b >= c && b >= d && b >= e) {
        maxNumber = b;
    } else {
        if (c >= d && c >= e) {
            maxNumber = c;
        } else {
            if (d >= e) {
                maxNumber = d;
            } else { 
                maxNumber = e; 
            }
        }
    }
}

console.log (maxNumber);

/* Write a conditional statement to sort three numbers. */

var x = 0, y = -1, z = 4;

if (x > y && x > z) {
    if (y > z) {   
     console.log (x, y, z);
    } else {
        console.log (x, z, y);
    }
}

if (y > x && xy > z) {
    if (x > z) {   
        console.log (y, x, z);
       } else {
           console.log (y, z, x);
       }
   }
if (z > x && z > y) {
    if (x > y) {   
        console.log (z, x, y);
       } else {
           console.log (z, y, x);
       }
   }