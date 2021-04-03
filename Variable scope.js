//Local versus global scoping
//FIRST EXAMPLE

//declare a global variable
var scope = "global";

function checkScope () {
    //declare a local variable with the same name
    var scope = "local";
    return scope;
}

checkScope();
console.log (scope); //=> "global"


//SECOND EXAMPLE

//Declare a global, even without var.
var scope ="global";

function checkScope2 () {
    //Oops! We just changed the global variable.
    scope = "local";
    //This implicitly declares a new global variable. 
    myScope = "local";
    return [scope, myScope]; //Return two values. 
}

checkScope2 ()
console.log (scope) //=> "local"
console.log (myScope)//=> 'local'

//THIRD EXAMPLE

var global = 1;
function myFunc () {
    var local = 2;
    global++;
    return (global, local);
}

myFunc ();
//console.log (local); =>local is not defined
console.log (global); //=>2

//FOURTH EXAMPLE

var global = 'out';

function sum (num1, num2) {
    var result = num1 + num2;
    var global = 'inside';
    console.log (global);
    return result;
}

sum(1, 2);
console.log (global)

//Variable Hoisting
//FIRST EXAMPLE

var global = 123;

function myFunc () {
    console.log (global);//=>undefined
    var global = 1;
    console.log (global);//=>1
}

myFunc ();

//SECOND EXAMPLE

var global = 123;

function myFunc () {
    var global;
    console.log (global);//=>undefined
    global = 1;
    console.log (global);
}

myFunc ();
console.log (global);