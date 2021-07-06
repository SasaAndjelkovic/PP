//var x = 5;

function change (obj) {
    obj.x += 10;
    console.log(obj.x)  // -> 15
}

var obj = {x:5};
change(obj);
console.log(x);  // -> ReferenceError: x is not defined