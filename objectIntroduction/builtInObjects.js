//String Methods

var str = "Potato head";

str.toUpperCase(); // "POTATO HEAD"

str.toLowerCase(); // "potato head"


str.indexOf("o"); // 1
str.indexOf("o", 2); // 5 (second param is where to start)
str.indexOf("Potato"); // 0 // (matching part of the string starts at position 0) zgodno kada pretrazujemo rec
str.indexOf("potato"); // -1 // no match returns position -1

str.lastIndexOf("o"); // 5

str.toLowerCase().indexOf('potato'); // 0 // cita sa leva na desno. prvi deo daje string, drugi deo daje broj!!!

str.slice(1, 6); // "otato"
str.slice(-1); //d

str.substring(1, 6); // "otato"

str.split(" "); // ["Potato", "head"]
str.split(" ", 1);//[ 'Potato' ]
str.split("o"); //[ 'P', 'tat', ' head' ]



//Array Methods


//push
var someArray = [12, 33, 44]
var newLength = someArray.push(22, 33, 44);
console.log(someArray); //[ 12, 33, 44, 22, 33, 44 ]
console.log(newLength); //6

//pop
var someArray = [12, 33, 44]
var deletedElement = someArray.pop();
console.log(someArray); //[ 12, 33 ]
console.log(deletedElement); //44

//unshift
var someArray = [12, 33, 44]
var newLength  = someArray.unshift(50, 41);
console.log(someArray); //[ 50, 41, 12, 33, 44 ]
console.log(newLength); //5

//shift
var someArray = [12, 33, 44]
var deletedElement  = someArray.shift();
console.log(someArray); //[ 33, 44 ]
console.log(deletedElement); //12

//indexOf
var someArray = [12, 33, 44, 33]
/*if (someArray.indexOf(33) !== -1) {
 	console.log('postoji');
} else {
 	console.log('ne postoji');
 }*/
console.log((someArray.indexOf(33) !== -1) ? 'postoji' : 'ne postoji');

//includes
var someArray = [12, 33, 44, 33]
// if (someArray.includes(123)) {
// 	console.log('postoji');
// } else {
// 	console.log('ne postoji');
// }
console.log((someArray.includes(33) ? 'postoji' : 'ne postoji'));

//slice
var someArray = [12, 33, 44, 33, 333, 55];
var chopped = someArray.slice(2,4);
console.log(chopped); //[ 44, 33 ]
console.log(someArray); //[ 12, 33, 44, 33, 333, 55 ]

//toString
var someArray = [12, 33, 44, 33, 333, 55];
var string = someArray.toString();
console.log(string); //12,33,44,33,333,55

//join
var someArray = [12, 33, 44, 33, 333, 55];
var string = someArray.join(' nesto ');
console.log(string); //12 nesto 33 nesto 44 nesto 33 nesto 333 nesto 55


//map0

var array = [1, 2, 3, 4, 5];

var newArray = array.map (function(item, index, array) { 
	console.log (item, index, array);
    return item+1;
})  

console.log (newArray);


//map1

var someArray = [12, 33, 44, 33, 333, 55];
var mappedArray = someArray
 	//.slice(2, 4)
 	.map(function (number) {
	 	return number + 10;
 	})
console.log(someArray); //[ 12, 33, 44, 33, 333, 55 ]
console.log(mappedArray); //[ 54, 43 ]

//map2 

var x = [2, 4, 7, 11, -2, 1];
   
function duplicateElements(item) {
  var double = [item, item].join(", ");
  return double;
}
   
function myFunction() {
  return x.map(duplicateElements);
}

console.log(myFunction());




//filter

/*4. Write a function that creates an object that represents a culinary recipe. 
Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.*/

function Project (nm, toc, comp, ingredients, ptime, ins) {
    this.name = nm;
    this.typeOfCuisine = toc;
    this.complexity = comp;
    this.listOfIngredients = ingredients;
    this.preparingTime = ptime;
    this.preparingInstuction = ins;
    this.printIngredients = function () {
        console.log (this.listOfIngredients);
    };
    this.is15MinutePrepared = function () {
        return (this.preparingTime <= 15) ? 'meal can be prepared for 15 minutes or less' : 'meal can`t be prepared for 15 minutes';
    };
    this.changeType = function (ntoc) {
        this.typeOfCuisine = ntoc; 
    };
    this.deleteAnIngredient = function (del) {
        function checkIngredient (ing) {    
            return ing !== del;
        }
    this.listOfIngredients = this.listOfIngredients.filter(checkIngredient);
    };
}

var recipe = new Project (
'musaka', 
'mediteran', 
2, 
['potato', 'minsemeat', 'celery'], 
45, 
'some way etc.'
)


console.log (recipe);
recipe.deleteAnIngredient('minsemeat')
console.log (recipe);
console.log (recipe.is15MinutePrepared());



//sort

var points = [40, 100, 1, 5, 25, 10];

function myFunction() {
  var sorPoint = points.sort(function(a, b){return a-b});
  var bigestPoint = sorPoint[0];
  console.log (sorPoint, bigestPoint);
};

myFunction();


//preDifenedFunc map & filter

var array = [1, 2, 3, 4, 5];

var newArray = array.map (function(item) { //sintaksno, posle item nema ')'
   return item+1;
})                                               // ')' je ovde

var filteredArray = array.filter (function(number) {
   return number % 2 === 0;
})

console.log(newArray);
console.log(filteredArray);

//primer

var x = [2, 4, 7, 11, -2, 1];

var y = x.map(function(param) {
	console.log(param);  // => 2  2  2  2  2  2; x = [ 2, 2, 2, 2, 2, 2, 2, 4, 7, 11, -2, 1]
    return x.unshift(param);
})

/*var z = x.map(function(param) {
	console.log(param); // => 2  4  7  11  -2  1; x = [ 2, 4, 7, 11, -2, 1, 2, 4,  7, 11, -2, 1]
    return x.push(param);
})*/

console.log (x);
console.log (y);
//console.log (z);


var q = [1, 8, 3, 6, 2, 44, 2];
var w = q.filter(word => word < 9);
//var b = a.filter(isLess);

console.log (w);