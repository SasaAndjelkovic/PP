/*IIFE = Immediately Invoked Function Expressions

1. Write IIFE that replaces the first and the last element of the given array and prints out its elements. 
	Input array: [4, 5, 11, 9]
	Output array: [ 9, 5, 11, 4]*/

( function (array) {
    var temporary = array [0];
    var last = array.length - 1;
    array [0] = array [last];
    array [last] = temporary;
    console.log (array);
} 

) ([4, 5, 11, 9]);

/*2. Write IIFE that calculates the surface area of the given rectangle with sides a and b. 
Input: 4 5
Output: 20*/

( function (a, b) {
    console.log (a*b);
}

) (4, 5);
 
/*3. Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2*/

( function (a) {
    var newString = '';
    var replacementsNumber = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === 'm' || a[i] === 'M') {
            newString += '*'
            replacementsNumber++;
        } else {
            newString += a[i];
        }
    }
    console.log (newString + ', ' + replacementsNumber);
}

) ('prograMming');


/*4. Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com. 
Input: pera peric
	Output: pera.peric@gmail.com*/

( function (name, surname) {
    console.log (name + '.' +surname + '@gmail.com')
}

) ('pera', 'peric');

/*5. Write a function that returns a function that calculates a decimal value of the given octal number. 
Input: 034
Output: 28*/

( function (octal) {
    var i = 0; a = 10;
    var octalString = octal + '';
    var length = octalString.length
    do {
        var output = octal % a;
        i++;
        a *= 10;
    }
    while (i < length);
   
    console.log (output);
}

) (073743723);



/*6. Write a function that checks if a given string is valid password. The password is valid if 
it is at least 6 characters long and contains at least one digit. 
The function should receive two callbacks named successCallback and errorCallback that 
should be called in case password is correct or invalid. 
Input: JSGuru 
Output: Your password is invalid!

	Input: JSGuru123
	Output: Your password is cool! */

( function (password) {
    var length = password.length;
    if (length < 6) {
        console.log ('Your password is invalid!');
    } else {
        for (var i = 0; i < length; i++) {
            var element = parseFloat(password[i]);
            if (element <=0 || element < 10) { 
                return console.log ('Your password is cool!');
            }    
        } 
        console.log('Your password is invalid!');
        }  
    }
) ('JSGuru');

/*7. Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
Output: [11, 9, 3] */

( function (array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArray[newArray.length] = array [i];
        }
    }
    console.log (newArray);
}

) ([2, 8, 11, 4, 9, 3]);
 
