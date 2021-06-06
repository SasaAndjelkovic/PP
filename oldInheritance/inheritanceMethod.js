/*Employees and Managers
1. Create constructor functions with properties representing the following:
○ Person: name, surname*/


function Person (name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.fullName = function () {
    return this.name + ' ' + this.surname;
}

var sass = new Person ('sasa', 'andjelkovic');

//console.log (sass.fullName());

//○ Employee: inherits Person and has job and salary

function Employee (name, surnname, job, salary) {
    Person.call (this, name, surnname);
    this.job = job;
    this.salary = salary;
}
 
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Person; 

//○ getSalary which prints out the salary

Employee.prototype.getSalary = function () {
    return this.salary;
}

/*All employees should inherit methods:
○ getData which returns the name, surname and salary*/

Employee.prototype.getData = function () {
    return this.fullName() + ' ' + this.getSalary();
}

//○ increaseSalary which increases the salary by 10%

Employee.prototype.increaseSalary = function () {
    return this.salary * 1.1;
}

var sassEmployee = new Employee ('sasa', 'andjelkovic', 'salesman', 1000 );
// console.log (sassEmployee.fullName());
// console.log (sassEmployee.getData());
// console.log (sassEmployee.increaseSalary());


//○ Developer: inherits from Employee and has specialization

function Developer (name, surname, job, salary, specialization) {
    Employee.call (this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype = Object.create(Developer.prototype);
Developer.prototype.constructor = Employee; 

/*2. All developers should inherit method:
○ getSpecialization which prints out the name of the specialization*/

Developer.prototype.getSpecialization = function () {
    console.log (this.specialization);
}

var sassDeveloper = new Developer ('sasa', 'andjelkovic', 'salesman', 1000, 'digitalsale');

// console.log (sassDeveloper.specialization);
//sassDeveloper.getSpecialization();

//○ Manager: inherits from Employee and has department

function Manager (name, surname, job, salary, specialization, department) {
    Developer.call (this, name, surname, job, salary, specialization)
    this.department = department;
}

Manager.prototype = Object.create(Manager.prototype);
Manager.prototype.constructor = Developer; 

/*
3. All managers should inherit methods:
○ getDepartment which prints out the name of the department*/

Manager.prototype.getDepartment = function () {
    console.log (this.department);
}

//○ changeDepartment which sets the department value on the given value

Manager.prototype.changeDepartment = function (param) {
    return this.department = param;
}

var sassManager = new Manager ('sasa', 'andjelkovic', 'salesman', 1000, 'digitalsale', 'maindepartment');

// console.log (sassManager);
// sassManager.changeDepartment('filijala');
// console.log (sassManager);

/*
Applications:
1. Create constructor functions with properties representing the following:
○ WebApp: name, url, technologies, licence, stars*/

function WebApp (name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
}

/*2. All web applications should inherit methods:
○ getData which prints out all the information*/

WebApp.prototype.getData = function () {
    return this.name + ' ' + this.url + ' ' + this.technologies + ' ' + this.licence + ' ' + this.stars;
}

//○ reactBased which checks if one of the used technologies is React

WebApp.prototype.reactBased = function () {
    return this.technologies = 'React';
}

//○ isCCLicence which checks if the licence of the application is CC (Creative Commons)

WebApp.prototype.isCCLicence = function () {
    return (this.licence === 'Creative Commons') ? 'jeste' : 'nije';
};
//○ like which increases the number of stars by one

WebApp.prototype.increasesLike = function () {
    return this.stars + 1;
}
//○ showStars which prints out the number of stars*/

WebApp.prototype.showStars = function () {
    console.log (this.stars);
}

var meeting = new WebApp ('sass', 'www.newnow.rs', 'the best', 'for ever', 11);

//console.log (meeting);
//console.log (meeting.name);
//console.log (meeting.getData());
//meeting.reactBased();
//console.log (meeting);
//console.log (meeting.increasesLike());
meeting.showStars();

//○ MobileApp: name, platforms, licence, stars

function MobileApp (name, platforms, licence, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars; 
}

/*
3. All mobile applications should inherit methods:
○ getData which prints out all the informations*/

MobileApp.prototype.getData = function () {
    console.log (this.name + this.platforms + this.licence + this.stars);
}

//○ forAndroid which checks if one of the platforms the application is developed for is Android

MobileApp.prototype.forAndroid = function () {
    return (this.platforms === 'Adroid') ? 'jeste' : 'nije';
}

//○ isCCLicence which checks if the licence of the application is CC (Creative Commons)

MobileApp.prototype.isCCLicence = function () {
    return (this.licence === "Creative Commons") ? 'jeste' : 'nije';
}
//○ like which increases the number of stars by one

MobileApp.prototype.increasesLike = function () {
    return this.stars + 1;
}
//○ showStars which prints out the number of stars*/

MobileApp.prototype.showStars = function () {
    console.log (this.stars);
}

var mmeeting = new MobileApp ('msass', 'any', 'for ever', 11);

//console.log (mmeeting);
//console.log (mmeeting.forAndroid());


//4. Both web and mobile applications should inherit methods:

