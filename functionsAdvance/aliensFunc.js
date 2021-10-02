//Immediate functions

(
    function () {
        console.log('boo');
    }
 ) ();
 

//

 (
    function (mood) {
        console.log('Felling ' + mood + '!');
    }
 ) ('crazy');
 

//

(
    function (mood) {
        console.log('Felling ' + mood + '!');
    }
    ('too crazy') );


//

var result = (function () {
    // something complex with
    // temporary local variables...
    // ...
    // return something;
 }) ();
 

//Inner (Private) Functions

function outer(param) {
	
    function inner(theinput) {
        return theinput * 2; 
    }
     
    return 'The result is ' + inner(param);
 }

console.log (outer(10));

//

var outer = function (param) {
    var inner = function (theinput) {
        return theinput * 2;
    };
    return 'The result is ' + inner(param);
 };

console.log (outer(10));

/* outer(2);
     "The result is 4"
outer(8);
     "The result is 16"
inner(2);
     ReferenceError: inner is not defined
*/

function a() {
    console.log('A!');
    return function () {
        console.log('B!');
    };
}

a(); // => A! but return is B!    -> sta mislis o: a()()


//

function a() {
    console.log('A!');
    return function () {
        console.log('B!');
    };
}
var bigA = a();
bigA();  // => A! than B!


//
function a() {
    console.log('A!');
    return function () {
        console.log('B!');
    };
}

a()(); // => A! than B!


//

var a = 3;
var b = a + 2; 

function test(b) {
    b++;
    function example (num) {
        return num + 100;
    }

    var result = example (b);
    return result;
}

var c = a + b;
var result = test(c);

console.log (result); // => 109 > a=3 > b=5 > c=8 > test(8) > b=9 > example(9) > result=109