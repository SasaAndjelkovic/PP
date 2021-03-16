/* Write a program that inserts a given element e on the given position p in the array a. 
    If the value of the position is greater than the array length, print the error message. */

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