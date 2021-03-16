/*   Write a program to sum the multiples of 3 and 5 under 1000. */
 
 var sum = 0;
 
 for (i = 0; i < 1000; i++) {
     if (i % 3 == 0 && i % 5 == 0) {
         sum = sum +i;
     }
    } 

console.log (sum);