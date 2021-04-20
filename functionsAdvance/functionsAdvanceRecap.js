/////////////////////////////////////////////// Goal is to find where is catch


// Example 0

var result = true;

function subtract(first, second) {
   return first - second;
}

result = subtract(12, -10);
result = subtract(22, 2);

console.log(result);


// Example 1

'use strict';

myVar = "random";                             //variable is declared and initialised. it si ok

function addOne(num) {                        //function is ok: it has return, and it is invoked
   return num + 1;
}

var result = addOne(4);
console.log(result);


// Example 2

var global = 123;

var resetGlobal = function () {             //function is not invoked
   global = -1;
};

console.log(global);


// Example 3

var global = 123;

var resetGlobal = function () {
   global = -1;
};

resetGlobal;                                //fuction is not invoked and this line is not error
console.log(global);


// Example 4

var global = 123;

var resetGlobal = function () {
   global = arguments[0] || -1;             //logical operator || 10 is truthy; 0 is falsy
};

resetGlobal(10);
console.log(global);

resetGlobal(0);
console.log(global);


// Example 5

'use strict';

var result = square(10);
console.log(result);

function square(num) {
   num *= num;                              //hoisting is ok, but fuction hasnot return. value of function is undefined
}


// Example 6

'use strict';

var result = square(10);
console.log(result);

function square(num) {
  return num *= num;
}


// Example 7

function toString(num) {
    result = num + '';
    return result;
 }
 
 console.log(result);                          //function is not invoked; result is not defined
 

// Example 8

function toString(num) {
    'use strict';
       result = num + '';
       return result;
    }
    
    toString(nu);                               //nu is not defined
    console.log(result);


// Example 9


var output = toString(0.15);                    //toString is not function, hoisting!!!
console.log(output);

var toString = function (num) {
   var result = num + '';
   return result;
}

//var output = toString(0.15);
//console.log(output);


// Example 10

var toString = function (num) {                 //hoisting is ok now
    var result = num + '';
    return result;
 }
 
 var output = toString(0.15);
 console.log(output);


// Example 11

var toString = function (num) {
    num = num || '';
    var result = num + '';
    return result;
 }
 
 var output = toString;                          //it is try to invoke function without () output is function
 console.log(output);


// Example 12

'use strict';

var global = parseInt("1e2");                                 //parseInt => 1

//incrementGlobal = function () {                             //incrementGlobal is not defined. 
var incrementGlobal = function () {
   global++;                                                  //global is runned oved localGlobal. => 2, number
};

incrementGlobal();

console.log(global);                                           
console.log(typeof global);


// Example 13

function sum(num1, num2) {
    num1 = num1 || 0;                               //num1 = 0; second falsy
    num2 = num2 || 0;                               //num2 = 0; second falsy
 
    if (!num1 && !num2) {                           //truthy && truthy => return -1
        return -1;
    }
 
    return num1 + num2;
 }
 
 var sumNumbers = sum;                              //everything is ok !!!!
 var result = sumNumbers();                         //fuction is invoked
 
 console.log(result);


 // Example 14

var x = 21;
var girl = function () {
   console.log(x);                //problem is local x is not definited. it is ok func`value without return (is undefined)!!!!
   var x = 20;                                      
};
girl();


// Example 15

function test() {
    var a;
    console.log(a);                     //a is undefined
    console.log(foo());                 //fuction return 2  !!!!

    var a = 1;
    function foo() {
        return 2;
    }
}

test();