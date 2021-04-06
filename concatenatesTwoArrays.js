/*  Write a program that concatenates two arrays. */

 var arrayOne = [1, 2, 3, 4];
 var arrayTwo = [11, 22, 33, 44];
 var arrayNew = [];
 
 for (i = 0; i < arrayOne.length; i++) {
        arrayNew [i] = arrayOne [i];
        arrayNew [i+4] = arrayTwo [i];
    }
 
console.log (arrayNew);