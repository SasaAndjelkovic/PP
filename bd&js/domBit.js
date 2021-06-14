
var htmlNode = document.documentElement;

//console.log(htmlNode);  // => na konzoli se vidi ceo html document
//console.log(htmlNode.tagName); // => HTML
//console.log(htmlNode.hasChildNodes()); // => true
//console.log(htmlNode.childNodes.length); => 3
//console.log(htmlNode.childNodes[0]); // => <head></head>

var bodyNode = htmlNode.childNodes[2];

// console.log(bodyNode);  // => <body>...</body>
// console.log(bodyNode.tagName); // => BODY
// console.log(bodyNode.hasChildNodes()); // => true
// console.log(bodyNode.childNodes.length); //=> 14
// console.log(bodyNode.childNodes);
// console.log(bodyNode.childNodes[0]);

var formNode = bodyNode.childNodes[7];

// console.log(formNode);
// console.log(formNode.parentNode);

var titleInputNode = document.getElementById('title-input'); //ovako je preciznije

//var titleInputNode = document.querySelector('#title-input'); //npr. 'header img' izvdojice samo prvog koji ispunjava taj uslov

var movieListNode = document.getElementById('movie-list');
var nodeList1 = document.getElementsByTagName('li');  //Methods that return more than one element:
var nodeList2 = document.getElementsByClassName ('table-row-red')
var nodeList3 = document.querySelectorAll ('li a');

//console.log(nodeList1, nodeList2, nodeList3); // => HTMLCollection(4) [li, li, li, li] 
                                                // => HTMLCollection(3) [tr.table-row-red, tr.table-row-red, tr.table-row-red] 
                                                // => NodeList(4) [a, a, a, a]

var nodeList4 = document.getElementsByClassName('lista');
var bodyNode = document.querySelector('body');

//console.log (bodyNode.children);

//-----------traversing the DOM--------
var htmlNode = bodyNode.parentElement;  // previousElementSibling, nextElementSibling, children, firstElementChild, lastElementChild,


var thNode = document.querySelector('th');
thTextNode = thNode.childNodes[0];
// console.log(thTextNode);
// console.log (document.querySelector('th').childNodes[0]);
thTextNode.nodeValue = 'nesto drugo';

//thTextNode.textContent = 'nesto drugo';
//console.log(thTextNode);

//console.log (bodyNode.innerHTML); u formi stringa, ceo bodyNode

//bodyNode.innerHTML = '<h1>NEMA NISTA VISE</h>'; //ili:

var titleValue = titleInputNode.value;
var liNode = document.createElement('li');
liNode.textContent = titleValue;
movieListNode.appendChild(liNode);

console.log(movieListNode);  //  <ul id="movie-list" class="movie-list active bold"><li>defoltna vrednost</li></ul>
console.log(movieListNode.className);  // movie-list active bold
console.log(movieListNode.classList);  //DOMTokenList(3) ["movie-list", "active", "bold", value: "movie-list active bold"]
                                            // 0: "movie-list"  
                                            // 1: "active"
                                            // 2: "bold"
                                            // length: 3
                                            // value: "movie-list active bold"
                                            // __proto__: DOMTokenList
movieListNode.classList.toggle('active');






