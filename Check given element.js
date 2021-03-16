/* Write a program that checks if a given element e is in the array a. */
 
 var array = [1, 2, 3, 4, 3];
 var result = "No";
 var check = 3;


 for (i = 0; i < array.length; i++) {
     if (array [i] == check) {
         result = "Yes";
     }
 }
console.log (result);