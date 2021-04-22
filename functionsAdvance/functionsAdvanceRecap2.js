// Example 0

typeof console.log;

(function () {
   return console.log;
})()('Boo!')

// definisana samopozivajuca funkicja, poziva se (), u novim zagradama upisuje se argument, => Boo!

function test () {
   return console.log;
}

var result = test ();

result ('sta god');

//

var result = (function () {
   return parseInt;
}) () ('22eee4')

console.log (result);

// Example 1

function multiply(a, b) {
    var mResult = a * b;
    return function (a, b) {
        return mResult + a + b;
    }
 }
 
 //var output = multiply(3, 4);       pozvana je funkcija multiply sa argumentima (3, 4), return je anonimna funkcija 
 //console.log(output);               => [Function (anonymous)]

 var output = multiply (3, 4) (5, 5); //sada je pozvana i anonimna fukcija sa dodatnim parovima argumenata (5, 5)
 console.log(output);   


// Example 3

print("This might work or not?");     //ovo je pozivanje funkcije print. 
                                      //zbog hoistinga func expresion, ne vidi se njena inicijalizacija
var print = (function () {
   return console.log;
})();

// Example 4

var print = (function () {
    return console.log;
 })();
 
 print("This might work or not?");   //now, this works
 
 
// Example 5

var input = [1, undefined, 2, NaN, 3, 4, 5, "six"]

var output = transformArray(input, function (param) {
   return param + "";
});

console.log(output);

function transformArray(array, action) {
   var result = [];
   for (var index = 0; index < array.length; index++) {
       var element = array[index];                        //element je clan niza samo da argument funckije action ne bude rogobatan
       result[index] = action(element);                   //action(element) je pozivanje function(param)
   }                                                      //element je argument, param je parametar funkicije
   return result;
}


// Example 6

var PI = 3.1;

function circleSurface(radius) {
   var result = radius * radius * PI;           //PI is undefined
   var PI = 3.14159;
  
   return result;
}

var output = circleSurface(5);
console.log(output);                             // => Nan


// Example 7

function circleCalc(radius, calculation) {  //parametar1 = radius; parametar2 = calculation
    var result = calculation(radius);       //invoke calculation (is function); argument = radius
    return result;
 }
 
 var output = circleCalc(7, function (r) {  //argument1 = 7, argument2 = function (ciji je parametar r, a argument je radius)
    var PI = 3.14159;
    return 2 * r * PI;
 });
 
 console.log(output);


// Example 8

var input = ["one", "1e3", "10e-3", "32", "a15", "12,1"]

function transformArray(array, action) {                 //func declaration, param1 = array, param2 = action (varovatno func)
  var result = [];
  for (var index = 0; index < array.length; index++) {
      var element = array[index];
      result[index] = action(element);                   //tako je, action je func, i mi je pozivamo sa argumetima clanova niza
  }
  return result;
}

var output = transformArray(input, parseFloat);          //pozivamo transformArray, argument1 = input, argument2 je func parseFloat
console.log(output);

output = transformArray(input, parseInt);
console.log(output);


// Example 10

var cubeVolume = function (a) {
    return a * a * a;
 }
 
 function cubeCalculation(a, calc) {                //a postaje 10, calc postaje 6*6*6
    return calc(a);                                 //calc is not a function
 }
 
 output = cubeCalculation(10, cubeVolume(6))
 console.log(output);


// Example 11

function cubeCalculation(a, calc) {
   return calc(a);
}

var output = cubeCalculation(10, function (a) {
   6 * a * a;                                      //function without return. => undefined
})
console.log(output);
 

// Example 12

function cubeCalculation(a, calc) {
   return calc(a);
}

var output = cubeCalculation(10, function (a) {
   return 6 * a * a;
})
console.log(output);                               // => 600


// Example 13

function saySomething(msg1) {
   return function (msg2) {
       var output = msg1 + " " + msg2;
       return function () {
           output += "!"
           console.log (output);
       }
   }
}

saySomething("Hi")("there");                       //nije pozvana anonimna funkcija. dodati ();


// Example 13

function saySomething(msg1) {
   function message(msg2) {
       var output = msg1 + " " + msg2;
       var result = function () {
           output += "!";
           console.log(output);
       }
       return result;
   }
   return message;                  
}

saySomething("Hi")("there")();                     //sve je ok


// Example 14

var myArr = [];

var hi = function () {
   return "Hi";
};

myArr[0] = hi;
myArr[0]();

var firstElement = myArr[0];

typeof firstElement;                               //type is function, console.log(typeof firstElement);

firstElement();                                    //ako dodamo console.log(firstElement()) => Hi


//20.april 2021.

//example zero

var test1 = function() {
   return 'test1';
}

var test2 = function() {
   return 'test2';
}

var test = function () {
   var result = '';
   for (let index = 0; index < arguments.length; index ++) {
      var func = arguments[index];                 //func je varijabla
      //console.log (func);                        // => [Function: test1]
                                                   //    [Function: test2]
      result += func ();                           //func je funkcija i koja poziva 
   }
   return result;
}

var result = test (test1, test2, /*test3*/);       //test3 nije definisan. ali kad se upisuje kao argumet, 
console.log (result);                              //dobija boju varijable, a ne funkcije


// example 1

var hello = function(a, b) {
   return a + b;
}

var world = function () {
   return 'world';
}

function test1 (a, b) {
   return a * b;
}

var test2 = function () {
   return 'test2'
}

var test = function (func1, func2, a, b) {       //func1 i funk2 su parametri (svetlo plava boja)
   return func1 (a, b) + func2 (a, b);           //sada vidimo sa su func1 i funk2 funkcije
}                                                //koje moraju da se pozivaju argumentima postojecih funckija

var result = test (test1, hello, 33, 44);        //ako stavimo umesto da drugi argument umesto funckije bude 12,                 
                                                 //prijavice gresku da func2 nije funckija
console.log(result)


//example 1a


var hello = function() {
   return 'hello'
}

var world = function () {
   return 'world';
}

function test1 () {
   return 'test1'
}

var test2 = function () {
   return 'test2'
}

var test = function (func) {           //func je parametar, po difoltu nije funckija
   return func();                      //zbog () znamo da je funkcija
}

var result = test(hello);              //argument je funckija hello. ako zadamo string, pojavice se greska u 277. liniji
                                       //da func nije funkcija. ako je func bez zagrada => [Function: hello]
console.log(result);


//preDifenedFunc map & filter

var array = [1, 2, 3, 4, 5];

var newArray = array.map (function(item) {       //sintaksno, posle item nema )
   return item+1;
})                                               // ) je ovde

var filteredArray = array.filter (function(number) {
   return number % 2 === 0;
})

console.log(newArray);
console.log(filteredArray);