/*1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no*/

function checkGivenElement (e, a) {
	var test;
	for (var i = 0; i < a.length; i++ ) {
		if (e == a[i]) {
			test++;
		}
	}
	//Ternary operator => variablename = (condition) ? value1:value2 
	return test > 0 ? 'yes':'no';
}

console.log (checkGivenElement(3, [5, -4.2, 18, 7]));

/*2.	Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/

function multipliesPositiveElement (a) {
	for (var i = 0; i < a.length; i++) {
		if (a[i] > 0) {
			a[i] = a[i] * 2;
		}
	}
	return a;
}
console.log (multipliesPositiveElement([-3, 11, 5, 3.4, -8]));

/*3.	Write a program that finds the minimum of a given array and prints out its value and index. 
Input array: [4, 2, 2, -1, 6]
Output: -1, 3*/

function minimumArray (a) {
	var min = Infinity;
	var index = 0;
	for (var i = 0; i < a.length; i++) {	
		if (a[i] < min) {
			min = a[i];
			index = i;
		}
	}
	return min + ' ' + index;
}

console.log (minimumArray([4, 2, 2, -1, 6]));

/*4.	Write a program that finds the second smallest number and prints out its value. 
Input array: [4, 2, 2, -1, 6]
Output: 2*/

function secondSmallest (a) {
	var min = Infinity;
	var secSma = Infinity;
	for (var i = 0; i < a.length; i++) {
		if (a[i] < min) {
			min = a[i];
		}
	}
	for (var i = 0; i < a.length; i++) {
		if (a[i] > min && a[i] < secSma) {
			secSma = a[i];
		}
	}
	return secSma;
}

console.log (secondSmallest([4, 2, 2, -1, 6]));

/*5.	Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/

function sumPositive (a) {
	var sum = 0;
	for (var i = 0; i < a.length; i++) {
		if (a[i] > 0) {
			sum += a[i];
		}
	}
	return sum;
} 

console.log (sumPositive([3, 11, -5, -3, 2]));

/*6.	Write a program that checks if a given array is symmetric. 
An array is symmetric if it can be read the same way both from the left and the right hand side.   
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
	Output: The array isn’t symmetric.*/

function isArraySymetric (a) {
	var test = 0;
	for (var i = 0; i < (a.length-1)/2; i++) {
		if (a[i] !== a[a.length-1-i]) {   
		test++;
	    }
	}
	return test > 0 ? 'The array isnt symmetric' : 'The array is symmetric'
}

console.log (isArraySymetric([2, 4, -2, 7, -2, 4, 2]));

/*7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]*/

function interwinesArrays (a, b) {
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
			newArr[2*i] = a[i];  
			newArr[2*i+1] = b[i]; 
	}
	return newArr;
}

console.log (interwinesArrays([4, 5, 6, 2],[3, 8, 11, 9]));

/*8.	Write a program that concatenates two arrays. 
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]*/

function concatenatesArrays (a, b) {
	var newArr = [];
	var len = 0; 
	if (a.length > b.length) {
		len = a.length;
	} else {
		len = b.length;
	}
	for (var i = 0; i < len; i++) {
		newArr [i] = a[i];
		newArr [i+a.length] = b[i]
	}
	return newArr;
}

console.log (concatenatesArrays ([4, 5, 6, 2], [3, 8, 11, 9]));

/*9.	Write a program that deletes a given element e from the array a. 
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]*/

function deleteGivenElement (e, a) {
	var newArr = [];
	var j = 0;
	for (var i = 0; i < a.length; i++) {
		if (e !== a[i]) {
			newArr [j] = a [i];
			j++;
		}
	}
	return newArr;
}

console.log (deleteGivenElement (2, [4, 6, 2, 8, 2, 2]));

/*10.	Write a program that inserts a given element e on the given position p in the array a. 
If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/

function insertGivenElement (e, p, a) {
	if (p > a.length) {
		return 'error message';
	}
	newArr = [];
	for (var i = 0; i < p; i++) {
		newArr [i] = a [i];
	}
	newArr [p] = e; 
	for (var j = p + 1; j < a.length+1; j++) { 
	newArr [j] = a[j-1];
	}
	return newArr;
}

console.log (insertGivenElement (78, 3, [2, -2, 33, 12, 5, 8]));
