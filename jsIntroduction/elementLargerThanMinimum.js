// 4.	Write a program that finds the first element larger than minimum and prints out its value.   

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
   

// Write a program that finds the first element larger than minimum and prints out its value. Dario advanced solutions
// Input array: [4, 2, 2, -1, 6]
// Output: 2
//



var arr = [4, 2, 2, -1, 6]
var min = arr[0]
var nextMin = arr[0];

for (var i = 1; i < arr.length; i++) {
	if (min > arr[i]) {
		min = arr[i];
	}
}
for (var i = 1; i < arr.length; i++) {
	if (nextMin > arr[i] && arr[i] !== min) {
		nextMin = arr[i];
	}
}
console.log(nextMin)   
