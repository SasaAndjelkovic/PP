/*  Write a program that deletes a given element e from the array a. */

 var arrayOne = [4, 6, 8, 2, 2];
 var elementGiven = 2;
 var arrayNew = [];
 var j = 0;
 
 for (i = 0; i < arrayOne.length; i++) {
       if (elementGiven !== arrayOne [i]) {
           arrayNew [j] = arrayOne [i];
           j = j+1;
       } 
    }
 
console.log (arrayNew);