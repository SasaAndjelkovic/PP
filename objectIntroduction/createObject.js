//Constructor functions create Object




var hero = {
    name: 'Superman',
    sayName: function () {
        return 'Hi I am ' + hero.name;
    }
};


//Using the this Value

var hero = {
    name: 'Superman',
    sayName: function () {
        return 'Hi I am ' + this.name;
    }
};

//Constructor Functions

//first step
function Hero() {
    this.occupation = 'Ninja';
 }

//second step
var hero = new Hero();
hero.occupation;
// "Ninja"
 

function Hero(name) {
    this.name = name;
    this.occupation = 'Ninja';
    this.whoAreYou = function () {
        return "I'm " + this.name +
            " and I'm a " + this.occupation;
    };
}


//Now you can create different objects using the same constructor

var heroOne = new Hero('Michelangelo');
var heroTwo = new Hero('Donatello');

heroOne.whoAreYou();
// "I'm Michelangelo and I'm a Ninja"

heroTwo.whoAreYou();
//"I'm Donatello and I'm a Ninja"


/*1. Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!*/

function Factory (name, strength, flavour, milk, sugar) {
    this.name = name;
    this.strength = strength;
    this.flavour = flavour;
    this.milk = milk;
    this.sugar = sugar;
}

var coffee = new Factory (
    'Pirot Coffee',
    'one bean', 
    'chilly',
    'no milk',
    'two spoon',
) 

console.log (coffee);
console.log (coffee.milk);
coffee.sugar = 'no sugar';
console.log (coffee);


/*2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.*/

function Factory (title, actors, director, genre, popularity) {
    this.title = title;
    this.actors = actors;
    this.director = director;
    this.genre = genre;
    this.popularity = popularity;
}

var movie = new Factory (
    'Black cat, white cat',
    ['Branka Katic', 'Sabri Sulejmani'], 
    'Emir Kusturica',
    'comedy',
    8.1,
)

console.log (movie.actors[0]);

/*3. Write a function that creates an object that represents a project. 
Each project is described by: description,  programming language, git repository, 
boolean status that says if the project is in development or not. 
Add a method that prints out the project's repository,  a method that checks if the project is 
written in JavaScript as well as a method that checks if the project is in development or not.*/

function Factory (description, programmingLanguage, gitRepository, booleanStatus) {
    this.description = description;
    this.programmingLanguage = programmingLanguage;
    this.gitRepository = gitRepository;
    this.booleanStatus = booleanStatus;
    this.printRepository = function () {
        console.log (this.gitRepository);
    }
    this.isProjectJS = function () {
        return this.programmingLanguage === 'JavaScript';
    }
    this.isProjectInDevelopment = function () {
        return booleanStatus ? 'project is in development' : 'project is not in development';
    }
}
    
var project = new Factory (
    'Blog',
    'JavaScript',
    'gitHub',
    false,
)

project.printRepository();
console.log (project.isProjectJS());
console.log (project.isProjectInDevelopment ());

/*4. Write a function that creates an object that represents a culinary recipe. 
Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.*/

function Project (nm, toc, comp, ingredients, ptime, ins) {
    this.name = nm;
    this.typeOfCuisine = toc;
    this.complexity = comp;
    this.listOfIngredients = ingredients;
    this.preparingTime = ptime;
    this.preparingInstuction = ins;
    this.printIngredients = function () {
        console.log (this.listOfIngredients);
    };
    this.is15MinutePrepared = function () {
        return (this.preparingTime <= 15) ? 'meal can be prepared for 15 minutes or less' : 'meal can`t be prepared for 15 minutes';
    };
    this.changeType = function (ntoc) {
        this.typeOfCuisine = ntoc; 
    };
    this.deleteAnIngredient = function (del) {
        function checkIngredient (ing) {    
            return ing !== del;
        }
    this.listOfIngredients = this.listOfIngredients.filter(checkIngredient);
    };
}

var recipe = new Project (
'musaka', 
'mediteran', 
2, 
['potato', 'minsemeat', 'celery'], 
45, 
'some way etc.'
)


console.log (recipe);
recipe.deleteAnIngredient('minsemeat')
console.log (recipe);
console.log (recipe.is15MinutePrepared());




 
