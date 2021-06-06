/*Try to use built-in object methods to solve some of the problems here

1. Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]*/

//Mirko Kuzmic solution

var x = [2, 4, 7, 11, -2, 1];

var y = x.map(myFunction);

function myFunction(param) {
    return [param, param];
  };

console.log (y);
console.log (y.flat()[3])
console.log (typeof(y.flat()[3]));

/*var x = [2, 4, 7, 11, -2, 1];

var z = x.map(myFunction);

function myFunction(param) {
    console.log(param);
    //return x.unshift(param);
    return x.push(param);
  };

console.log (x);


var x = [2, 4, 7, 11, -2, 1];

var mappedArray = x.map (function (number) {
	 	return number.unshift(number);
 	});

   console.log(mappedArray());*/


/*var x = [2, 4, 7, 11, -2, 1];
   
function duplicateElements(item) {
  var double = [item, item].join(", ");
  return double;
}
   
function myFunction() {
  return x.map(duplicateElements);
}

console.log(myFunction());*/


var x = [2, 4, 7, 11, -2, 1];

var y = x.flatMap(myFunction);

function myFunction(item) {
  return [item, item];
}

//var y = x.flatMap (item => [item, item])

console.log (y);

//

var x = [2, 4, 7, 11, -2, 1];

var y = x.flatMap(function(item) {
  return [item, item];
});

console.log (y);



/*2. Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]*/

var x = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var y = x.filter((c, index) => {
    return x.indexOf(c) === index;
});

var z = y.sort(function(a, b){return a-b});

console.log(z);


/*3.
a. Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true*/

function isArrayOdd (param) {
  return param.length % 2 !== 0;
};

console.log (isArrayOdd([1, 2, 9, 2, 1]));

/*
b. Write a function that counts the number of elements less than the middle
element. If the given array has an even number of elements, print out an error
message.
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4*/

var a = [-1, 8.1, 3, 6, 2.3, 44, 2.11]

var sum = 0; mid = 0; b = [];

a.forEach(function myFunction(item, index) {
  sum += item;
  mid = sum/(index+1);
  return mid;
});

function isLess (item) {
  return item < mid;
}

var b = a.filter(isLess);


console.log (b.length);

/*4. Write a function that finds the smallest element of a given array. The function should
return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output: { minValue: -2, minLastIndex: 6 }*/

function findMin (array){
  return {
      minValue: Math.min.apply (Math, array),
      minLastIndex: array.lastIndexOf (Math.min.apply (Math, array)),
  }
  }
  console.log (findMin([1, 4, -2, 11, 8, 1, -2, 3]));
  

/*5.
a. Write a function that finds all the elements in a given array less than a given
element.
Input: [2, 3, 8, -2, 11, 4], 6
Output: [2, 3, -2, 4]*/

var a = [2, 3, 8, -2, 11, 4];
var b = 6;
function lessThanGivenEL (item) {
   
    return item < b;    
}
var c = a.filter(lessThanGivenEL);
console.log(c);

//

var a = [2, 3, 8, -2, 11, 4];
var b = 6;
function filterLessThanGivenParam (array, param) {
    function lessThanGivenEL (item) {
    return item < param;    
    }
    return array.filter(lessThanGivenEL);
}

console.log(filterLessThanGivenParam (a, b));


/*
b. Write a function that finds all the elements in a given array that start with the “pro”
substring. The function should be case insensitive.
Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
Output: [’Programming’, ‘product’]*/

var input = ['JavaScript', 'Programming', 'fun', 'product'];
var selector = 'pro';

function filterStartWithPro (array, param) {
    function isStartWithPro (item) {
        var lower = item.toLowerCase();
        var sub = lower.substring(0, 3);
        return sub === param;
    }
    return array.filter(isStartWithPro);
}
 
console.log (filterStartWithPro(input, selector));

/*c. Write a function that expects an array and a callback function that filters out
some of the elements. Use functions defined in a) or b) to test it.*/



/*6.
a. Write a list (array) of products you usually buy in the supermarket. Write a price
and name for each product. For example,

[
{name: ‘apples’, price: 100},
{name: ‘milk’, price: 80},
{name:’bananas’, price: 150}
]*/

var list = [
  {name: 'apples', price: 100},
  {name: 'milk', price: 80},
  {name: 'bananas', price: 150}
  ];

//var totalPrice = list[0].price + list[1].price + list[2].price;
//console.log (totalPrice);

/*b. Write a function that calculates the total price of your shopping list.*/

var sum = 0;

var totalPrice = list.forEach(function(item) {
  sum += item.price;
  return sum;
});

console.log (sum);

/*c. Write a function that calculates the average product price of your shopping list.
Print this value with the precision of three decimals.*/

var array = [1, 2, 3, 4];

function lessThanGivenEL (total, num) {
  return total + num;    
  }

  var c = array.reduce(lessThanGivenEL);

console.log (c);


//

var list = [
  {name: 'apples', price: 100},
  {name: 'milk', price: 80},
  {name: 'bananas', price: 150}
  ];

var sum = 0;

function averageProductPrice (array) { 
      array.forEach(function(item) {
      sum += item.price;
      return sum;
    });
    var averagePrice = sum/array.length;
    return averagePrice.toFixed(3);
};

console.log (averageProductPrice(list));

/*d. Write a function that prints out the name of the most expensive product on your
shopping list. Write the name in uppercase.*/

//

var arr = [1,2,3];

var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
});

console.log (max);

//

var list = [
  {name: 'apples', price: 100},
  {name: 'milk', price: 80},
  {name: 'bananas', price: 150}
  ];

console.log(list.price);

function mostExpensiveProduct (param) {
  var priceList = param.map(function(a){
    return a.price;
  });
  var maxPrice = param.reduce(function(a, b) {
    return Math.max(a, b);
  });
  var indexMax = priceList.indexOf(maxPrice);
  return list[indexMax].name.toUpperCase();
}

console.log (mostExpensiveProduct(list));

//"sporo" resenje
var list = [
  {name: 'apples', price: 100},
  {name: 'milk', price: 80},
  {name: 'bananas', price: 150}
  ];

var priceList = list.map(function(a){
  return a.price;
});

var max = priceList.reduce(function(a, b) {
  return Math.max(a, b);
});

var c = priceList.indexOf(max);

var mostExpensiveProduct = list[c].name.toUpperCase();



console.log (mostExpensiveProduct);

console.log (list[2].name);
console.log (priceList);
console.log (max);


/*7.
a. Write a function that checks if a given string is written in all capitals.*/

var a = 'all capitals';
var b = 'ALL LOWERCASE';

function isStringCapitals (param) {
  return param === param.toUpperCase();
}

console.log (isStringCapitals (b));


/*b. Write a function that checks if a given string contains any digits.*/

var a = 'bez 123 brojki';
var b = 'sa brojkama';

function isDigitString (param) {

  var ar = param.split ('');
  var filteredArray = ar.filter (function(item) {
    return item == parseInt(item);
  });
  return filteredArray.length !== 0;
}

console.log (isDigitString(a));




/*razrada

var a = 'bez 123 brojki';
var b = 'sa brojkama';
//var c = '';

function isDigitString (param) {

  var ar = param.split ('');
  //var cr = c.split ('');
  var filteredArray = ar.filter (function(item) {
    return item == parseInt(item);
  });
  //console.log (filteredArray, cr);
  //console.log (filteredArray.length, cr.length);
  //return filteredArray == cr;
  return filteredArray.length !== 0;
}

console.log (isDigitString(a));*/


/*c. Write a function that checks if a given string is a valid hexadecimal color.*/

function isHexColor (hex) {
  return typeof hex === 'string'
      && hex.length === 6
      && !isNaN(Number('0x' + hex));
};

console.log(isHexColor('AAqBCC'));


/*d. Write a function that checks if a given number belongs to the interval from 1900
to 2018.*/

function isBelongsInterval (num) {
   return typeof num == 'number' && num > 1900 && num < 2018;
}

console.log (isBelongsInterval(1890));

/*e. Write a function named validator that returns an object with properties
stringValidator, passwordValidator, colorValidator, and yearValidator referencing
the functions from a) to d).*/ 
//Ovaj deo zadatka mi je bio potpuno nejasan sta je trebalo da se uradi. 
//Ispostavilo se da fukcija validator nije konstruktorska funkcija. 
//vrednosti osobina dobijaju kao rezultat koji se poziva na funkcije od a) do d)

function validator (s, a, b, c, d) {
  return (x = {
  stringValidator: a(s),
  passwordValidator: b(s),
  colorValidator: c(s),
  yearValidator: d(s),
  });
}

var str8 = 'aaff88';

console.log 
(validator(str8, isStringCapitals, isDigitString, isHexColor, isBelongsInterval));


/*8. Write a function that calculates a number of days to your birthday.

Input: 25 February
Output: 5 days*/



function daysToBirthday (day, month) {  //https://stackoverflow.com/
  today=new Date();
  var bday=new Date(today.getFullYear(), month-1, day-1);  
  if (today.getMonth()==11 && today.getDate()>25){
     bday.setFullYear(bday.getFullYear()+1); 
  }  
  var one_day=1000*60*60*24;
  return Math.ceil((bday.getTime()-today.getTime())/(one_day)); //nedostaje deo resenja ako je rodjendan prosao. nije tesko. 
}

console.log (daysToBirthday(16, 6));

/*9. Write a function that for a given departure and arrival time calculates the time the trip
takes.
Input: 8:22:13 11:43:22
Output: 3 hours 21 minutes 9 seconds*/

function calculateTripTime (a, b) {
  return;
}

console.log (calculateTripTime (8:22:13, 11:43:22))

/*
10.
a. Write a constructor function that creates points in space. Each point in space has
its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.*/

function CreatePoint (horisontal, vertical, heigh) {
  this.x = horisontal;
  this.y = vertical;
  this.z = heigh;
}

var bigBear = new CreatePoint (
  3, 
  5, 
  1,
)

console.log (bigBear);

/*
b. Write a function that calculates the distance between two points in the space.*/

function calculatesDistance (a, b) {  
    return Math.sqrt(Math.pow((a[0]-b[0]), 2) + Math.pow((a[1]-b[1]), 2) + Math.pow((a[2]-b[2]), 2))
};

console.log (calculatesDistance([3, 4, 5], [7, 6, 9]));

/*
11.
a. Write a function that generates a random integer value between 5 and 20.*/

function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log (getRandomBetween (5, 20));

/*
b. Write a function that generates a random integer value between 50 and 100.
c. Write a function which expects a number and a callback generator function and
returns an array of numbers produced by the generator function.

12. Write a function that shuffles the elements of a given array.

Input: [3, 6, 11, 2, 9, 1]

Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)*/

//Dario Big Help:

function shuffle(array) {
  array.sort(function() {
		return Math.random() - 0.5;
	})
}
var arr = [3, 6, 11, 2, 9, 1]
shuffle(arr);
console.log(arr);

transform (2);
function transform (a) {
  console.log (a);
}


