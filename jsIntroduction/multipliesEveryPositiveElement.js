/* Write a program that multiplies every positive element of a given array by 2.  */

var array = [1, 2, 3, -4, 3];

 for (i = 0; i < array.length; i++) {
     if (array [i] > 0) { 
     array [i] = array [i] * 2;
       }
    }
console.log (array);