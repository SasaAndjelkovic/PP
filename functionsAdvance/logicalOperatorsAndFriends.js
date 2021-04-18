/*
If expr1 can be converted to true, returns expr1; else, returns expr2.
If a value can be converted to true, the value is so-called truthy. 
If a value can be converted to false, the value is so-called falsy.
Examples of expressions that can be converted to false are:
null;
NaN;
0;
empty string ("" or '' or ``);
undefined.*/

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)


console.log (3 || 1);// => 3 (3 is the first truthy value)
console.log (3 && 1);// => 1 (if only both truthy then second)

console.log (null || 1); //=> 1
console.log (null && 1); //=> null (samo ako su oba tacna uradi drugu)

console.log ( null || 0 || 1 ); //=> 1
console.log ( null && 0 && 1 ); //=> null

console.log (undefined || null || 0 ); //=> 0
console.log (undefined && null && 0 ); //=> undifined

//

isPositive = false;
var a = isPositive || 1;
console.log (a); // => 1 

isPositive = false;
var a = isPositive && 1;
console.log (a); // => false


//function literal notation - Anonymous Functions

var sum = function (a, b) {
    return a + b;
 };
 
 var add = sum;
 typeof add;
 // > function

 add(1, 2);
 // > 3


//

var test = function (a, b) {
   var result = a + b;
   return result;
}

test (2,3); // => 5


// ??

function test (a, b) {
   return a + b;
}

var array = [
   function () {
      return 10;
   }, 
   test, 
   function () {
      return 20;
   }
];

array[0] (); 
array[1] (2, 4); 
array[2] ();

console.log (array); // ??

 
// Example 1

var global = 1;

function myFunc() {
   var local = 2;
   global++;
   return global;
}

//myFunc (); funtion invoked - one way
//var result = myFunc(); // function invoked - another way
//console.log (global, local); // => 2, undefined
console.log (myFunc());// third way


// Example 2

var done = false;
while (done = false) {
   console.log ('nothing happening');
}


// Example 3

var N = 5;

for (var i = 1; i <= N; i++) {
   var sum = 0; //sum is again = 0
   sum = sum + i;
}

console.log(sum);// => 5


// Example 4

var x = -32.2;
var isPositive = (x > 0);

if (!(isPositive)) { //false
   console.log(x + " is positive");
} else {
   console.log(x + " is not positive");
}
// => -32.2 is positive


// Example 5

var x = -20;

if (x > 0); // catch is ';' - this line is declaration
console.log("positive"); // => positive


// Example 6

var f = 0, g = 1;

for (var i = 0; i <= 5; i++) {
   console.log(f); // => 0 1 1 2 3 5
   f = f + g;
   g = f - g;
}


// Example 7

var x = 5;
var y = 3;
var min = (x < y) ? x : y; //ternary operator

console.log(min); // => 3


// Example 8

function sum(num1, num2) {
   num1 = num1 || 0; // => num1 (num1 is truthy)
   num2 = num2 || 0; // => 0 ( 0 is the last falsy)

   return num1 + num2;
}

var result = sum(5);
console.log(result); // => 5


// Example 9

function square(num) {
   num *= num;            // function is without return;
}

var result = square(10);
console.log(result); // => undefined


// Example 10

function sumNumbers(num1, num2) {
   var result = num1 + num2;
   return 10;
}
var result = sumNumbers(10, 1);
console.log(result); // => 10 (return is 10)