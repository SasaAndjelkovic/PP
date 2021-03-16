/* Write a program that intertwines two arrays. You can assume the arrays are of the same length. */

 var arrayOne = [1, 2, 3, 4];
 var arrayTwo = [11, 22, 33, 44];
 var arrayNew = [];
 
 for (i = 0; i < arrayOne.length; i++) {
        arrayNew [2*i] = arrayOne [i];
        arrayNew [2*i+1] = arrayTwo [i];
    }
 
console.log (arrayNew);