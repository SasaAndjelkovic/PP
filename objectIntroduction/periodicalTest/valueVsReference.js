var arrRef = ["Hi!"];

var arrRef2 = arrRef;

console.log(arrRef === arrRef2); // -> true



var arr1 = ["Hi!"];

var arr2 = ["Hi!"];

console.log(arr1 === arr2); // -> false



var john = { occupation: 'programmer' };

var mark = { occupation: 'programmer' };

// Comparing them returns false:

john === mark;   // false

john == mark;    // false

var coder = mark;

coder === mark;  // true

coder == john;   // false