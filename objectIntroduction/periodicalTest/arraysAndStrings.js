var primitiveString = 'Hello';
typeof primitiveString;               // "string"

var objString = new String('world');
typeof objString;                     // "object"

// 1.
var numbers = [1, 2, 3, 4, 5];
var number1 = numbers.pop();
var number2 = numbers.pop();
numbers.push(number1 + number2);     // 4 + 5 = 9
console.log(numbers);

// 1.5 ;)
var numbers = [1, 2, 3, 4, 5];
console.log(numbers[10]);            //undifined

// 2.
var numbers = [1, 2, 3, 4, 5];
numbers[0] = numbers[numbers.length];   //undifined
console.log(numbers);

// 3.
var numbers = [1, 2, 3, 4, 5];
numbers[0] = numbers[numbers.length - 1];
console.log(numbers);

// 4.
var numbers = [1, 2, 3, 4, 5];
numbers.length = 10;
console.log(numbers);     //[ 1, 2, 3, 4, 5, <5 empty items> ]

// 5.
var smallNumbers = [1, 2, 3, 4, 5];
var niceNumbers = [1, 2, 3, 4, 5];
console.log(smallNumbers === niceNumbers);   //false

// poredjenje generisanjem string reprezentacija
console.log(smallNumbers.join('') === niceNumbers.join(''));     //true, pretvara se u string

// poredjenje obilaskom niza
var equalArrays = true;
for (var i = 0; i < smallNumbers.length; i++) {
  if (smallNumbers[i] != niceNumbers[i]) {
    equalArrays = false;
    break;
  }
}
console.log(equalArrays);    //true

// 6.
var numbers = [1, 2, 3, 4, 5];
numbers.shift();
console.log(numbers);   //[ 2, 3, 4, 5 ]

// 7.
var numbers = [1, 2, 3, 4, 5];
numbers.push('~');
numbers.unshift('~');
console.log(numbers.join('*'));    //~*1*2*3*4*5*~

// 8.
// sort radi u mestu (engl. in place) i vrsi leksikografsko sortiranje
var numbers = [1, 89, 3, 4, 10, 20, 50];
numbers.sort();
console.log(numbers);

// 9.
// varijanta numerickog sortiranja u rastucem poretku
var numbers = [1, 89, 3, 11, 4, 20, 50];
numbers.sort(function (number1, number2) {
  var number1 = parseInt(number1);
  var number2 = parseInt(number2);

  return number2 - number1;    //1 - 2 je od 1 do 89
});
console.log(numbers);   //od 89 do 1

// 10.
var points = [
  { x: 5, y: 10 },
  { x: -1, y: 4 },
  { x: 0, y: 5 },
  { x: 2, y: 12 },
];
points.sort(function (point1, point2) {
  // sortiranje po vrednosti x koordinate u rastucem poretku
  return point1.x - point2.x;
});
console.log(points);

// 11.
var fruits = ['apple', 'orange', 'lemon', 'grape', 'strawberry'];
var salad = fruits.slice(3, 5);
salad.push('cream');
console.log(salad);      //[ 'grape', 'strawberry', 'cream' ]

// 12.
var chars = ['a', 'b', 'c', 'd'];
console.log(chars.join(''));     //abcd

// 13.
var chars = ['a', 'b', 'c', 'd'];
chars[7] = 'm';
console.log(chars.length);

// 14.
function misticFunction(array) {
  var newArray = [];
  // array: ['a', 'b', 'd', 'u']
  // newArray: ['u', 'd', 'b', 'a']

  for (var i = 0; i < array.length; i++) {
    newArray[array.length - 1 - i] = array[i];
  }
  return newArray;
}
var misticResult = misticFunction(['a', 'b', 'd', 'u']);
console.log(misticResult);    //obrnuto

// 15. 
function misticFunction(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] += array[i];
  }
}
var numbers = [1, 2, 3, 4, 5];
misticFunction(numbers);
console.log(numbers);    //duplirano


// 1.
var input = 'programming';
var output;
output = input[0].toUpperCase().concat(input.substr(1));
console.log(output);
// alternativa: output = input[0].toUpperCase() + input.substr(1);


// 2.
var input = 'programming in js';
var output;
output = input.substr(-2).toUpperCase();
console.log(output);

// 3.
var input = 'programming in js';
output = input[0]
  .toUpperCase()
  .concat(input.slice(1, -2))
  .concat(input.substr(-2).toUpperCase());
console.log(output);

// 4.
var greeting = 'Hello everyone!';
console.log(greeting.lastIndexOf('o'));
// alternativa: console.log(greeting.indexOf('o', 5));


// 5.
var greeting = 'Hello everyone!';
console.log(greeting.lastIndexOf('o', 5));
// alternativa: console.log(greeting.indexOf('o'));


// 6.
var message = 'Sunny Saturday';
message.length = 2;
console.log(message);       //ne utice

// 7.
var message = 'sunny Saturday';
message[0] = 'S';
console.log(message);       //ne utice


// 8.
var username = 'Pera Peric';
var separator = username.indexOf(' ');
console.log(username.slice(0, separator));

// 9.
var importantMessage = 'hmhmhmhm';
var result = importantMessage.toUpperCase();
console.log(result);

// 10.
var numbers = '1234567890';
// [0, 1) * 10 --> [0, 10), mogu se koristiti indeksi 0, 1, ..., 9 a to nam bas i treba 
var i = Math.round(Math.random() * numbers.length);
console.log(numbers[i]);

// 11.
 'use strict';
var message = 'hi!';
message[0] = 'H';
console.log(message);     //TypeError: Cannot assign to read only property '0' of string 'hi!'

// 12.
var name = 'pera';
var ime = 'pera';
console.log(name == ime);

// 13.
var name = String('pera');
var ime = String('pera');
console.log(name == ime);    //true