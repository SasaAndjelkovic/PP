/*A function is a subprogram designed to perform a particular task.

Function declarations are hoisted —  function expressions are not.

Functions are executed when they are called. 

Values can be passed into functions and used within the function.

Functions always return a value.*/

//Anonymous Functions
var f = function (a) { 
    return a;
};

/*You can pass an anonymous function as an argument to another function.
You can define an anonymous function and execute it right away.*/


/*Callback Functions
function is just like any other data, passed as an argument to other functions.*/

//1.
function one() {
    return 1;
}
function two() {
    return 2;
}
function invokeAdd(a, b) {
    return a() + b();
}

var result = invokeAdd(one, two);
//var result = invokeAdd(function() {return 5}, two);
console.log (result);
 
//2. 
function invokeAdd(a, b) {//declaration
    return a() + b();     //invoke a & b, sabira rezultate dve funkcije
}
function one() {
    return 1;
}
function two() {
    return 2;
}
var result = invokeAdd(one, two); //invoke invokeAdd (a = one, b = two) Pozivom se povezuju
console.log (result);

//3. 
invokeAdd(one, two); //it is same
invokeAdd(function () { return 1; }, function () { return 2; });

//4.
invokeAdd(
    function () { return 1; },
    function () { return 2; }
 );

//5. 
invokeAdd(
    function () {
        return 1;
    },
    function () {
        return 2;
    }
);
 
 
 
 
 