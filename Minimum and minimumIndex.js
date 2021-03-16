/* Write a program that finds the minimum of a given array and prints out its value and index. */

 var array = [1, 2, 3, -4, 3];
 var minimum = Infinity;
 var minimumIndex = 0;

 for (i = 0; i < array.length; i++) {
     if (array [i] < minimum) { 
        minimum = array [i];
        minimumIndex = i;
       }
    }
    
console.log (minimum, minimumIndex);