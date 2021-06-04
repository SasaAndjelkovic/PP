//prvi korak

// function Person (name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.getData = function () {
//         console.log (this.name + ' ' + this.surname);
//     }
// }

// var person = new Person ('Pera', 'Peric');

// //person.getData();  // => Pera Peric

// console.log(person);


//drugi korak

function Person (name, surname) {
    this.name = name;
    this.surname = surname;
}

// Person.prototype.getData = function () {               //metod getData je izmestena iz Konstruktora/ veza je Person.prototype
//     console.log(this.name + ' ' + this.surname);
// }

Person.prototype.fullName = function () {
    return this.name + ' ' + this.surname;
}

Person.prototype.printInfo = function () {
    console.log (this.fullName());
}

//var person = new Person ('Pera', 'Peric');

// console.log (person);
// console.log (person.toString());

var pera = new Person ('Pera', 'Peric');
pera.printInfo();

//treci korak   konstrutkor Programmer nasledjuje od Person 
function Programmer (name, surname, favoriteLanguage) {
    Person.call(this, name, surname);                         //this koji je sada nas this
    this.favoriteLanguage = favoriteLanguage;
}

//nesto se pregazilo pa vracamo: proto: Person, i vracamo u dete proto: fullName i printInfo
Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;  // i tu smo nesto dodali... ili vratili

var peraProgramer = new Programmer ('Pera', 'Peric', 'js');
console.log (peraProgramer);

//console.log(Programmer.prototype); => Person { constructor: [Function: Programmer] }
//console.log(Person.prototype); => { fullName: [Function (anonymous)], printInfo: [Function (anonymous)] }

// Programmer.prototype.printInfo = function () {
//     var fullName = this.fullName ();
//     console.log(fullName + ' ' + this.favoriteLanguage);
// }

// var laza = new Programmer('Laza', 'Lazic', 'c+');
// laza.printInfo();  => Laza Lazic c+

function BackEndProgrammer (name, surname, favoriteLanguage, database) {
    Programmer.call (this, name, surname, favoriteLanguage);
    this.database = database;
}

BackEndProgrammer.prototype = Object.create(Programmer.prototype);
BackEndProgrammer.prototype.constructor = BackEndProgrammer

var peraBProgrammer = new BackEndProgrammer ('pera', 'peric', 'c#', 'mongoDb');
console.log(peraBProgrammer);