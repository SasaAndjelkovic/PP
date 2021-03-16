/* Write a program that finds the first element larger than minimum and prints out its value. */

 var array = [1, 2, 3, -4, -3];
 var minimum = Infinity;
 var minimumIndex = 0;
 var elementLarger = Infinity;

 for (i = 0; i < array.length; i++) {
     if (array [i] < minimum) { 
        minimum = array [i];
        minimumIndex = i;
       }
    }
    array [minimumIndex] = Infinity;

    console.log (array);

for (i = 0; i < array.length; i++) {
     if (array [i] < elementLarger) { 
        elementLarger = array [i];
        }
    }

console.log (elementLarger);