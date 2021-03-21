// Write a program that inserts a given element e on the given position p in the array a. 
//   If the value of the position is greater than the array length, print the error message.     
 
 var arrayOne = [2, -2, 33, 12, 5, 8];
 var elementGiven = 78;
 var posiotionNew = 3;
 var arrayNew = [];

 for (i = 0; i < posiotionNew; i++) {
     arrayNew [i] = arrayOne [i];
    } 

    arrayNew [posiotionNew] = elementGiven;

 for (j= posiotionNew + 1; j < arrayOne.length +1; j++) {
     arrayNew [j] = arrayOne [j-1];
 }

console.log (arrayNew);

// Dario solution

var arr = [22, 2, 5, 55, 5];
var e = 78;
var p = 3;
var newArray = [];

for (var i = 0; i < arr.length; i++) {
	if (i === p) {
		newArray[p] = e;
	}

    //Bas lepo resenje!!! 
	newArray[newArray.length] = arr[i];
    
}
console.log(newArray);