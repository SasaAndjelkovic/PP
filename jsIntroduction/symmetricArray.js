// Write a program that checks if a given array is symmetric. 
//   An array is symmetric if it can be read the same way both from the left and the right hand side.   

var array = [1, 2, 3, 1];
 result = "The array is symmetric.";
 
 for (i = 0; i < array.length/2; i++) {
    
     if (array [i] !== array [array.length -1 - i]) { 
        result = "The array isn`t symmetric.";
       }
    }
console.log (result);
    
// Dario solution

var arr = [22, 2, 5, 55, 5, 4, 22];
var isSym = true;
for (var start = 0, end = arr.length - 1; start < end; start++, end--) {
	if (arr[start] !== arr[end]) {
		isSym = false;
	}
}
console.log(isSym ? 'The array is symmetric.' : 'The array isn`t symmetric.')
