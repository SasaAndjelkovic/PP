function countRabbits () {
    for (var i = 1; i <=3; i++) {
        console.log('Rabbit number ' + i);
    }
}


var timeoutHandler = function () {
    console.log ('ustaaaaaj');
}

setTimeout (timeoutHandler, 5000);

var buttonNode = document.getElementById('button-1');
var clickHandler = function () {  
//buttonNode.onclick = function () {
    console.log('caoooo');
    console.log(this.value);

}

buttonNode.addEventListener('click', clickHandler);


