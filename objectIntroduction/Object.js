// Object

var hero = {

    name: 'Leonardo',
    
    kind: 'Turtle',
    
    occupation: 'Ninja'
    
    };

// Accessing a property with the dot notation

hero.name;

// Accessing a property with bracket notation

hero['name']

//Properties that point to funcions are called Methods

var dog = {

    name: 'Rex',
    
    talk: function () {
    
    console.log('Woof, woof!');
    
    }
    
    };

var book = {

    name: 'Na Drini cuprija',
        
    published: 1945,
        
    author: {
        
        firstname: 'Ivo',
        
        lastname: 'Andric'
        
        }
        
    };

    book.author.firstname;

    // "Ivo"



/*1. Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!*/

var favouriteCoffe = {
    name: 'Grand kafa',
    strength: 'strong',
    flavour: 'chilly',
    milk: 'without',
    sugar: 'two spoon',
};

/*2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.*/

var favouriteMovie = {
    title: 'Crna macka, beli macor',
    actors: {
        firstActor: 'Sabri Sulejman',
        secondActor: 'Branka Katic',
    },
    director: 'Emir Kusturica',
    genre: 'comedy',
    popularity: 'medium',
};

console.log (favouriteMovie.actors)

/*3. Write a function that creates an object that represents a project. 
Each project is described by: description,  programming language, git repository, 
boolean status that says if the project is in development or not. 
Add a method that prints out the project's repository,  a method that checks if the project is 
written in JavaScript as well as a method that checks if the project is in development or not.*/

/*var project = {
    description: function () {
        return 'New challenge'
    },
    programmingLanguage: function () {

    }
    gitRepository:
    booleanStatus:
}

function represents (description, programmingLanguage, gitRepository, booleanStatus) {

}

var project = {} 
function represents (a, b, c, d) {
    project.description = 'newChallenge';
    project.programmingLanguage = 'JS';
    project.gitRepository = 'sasa';
}*/

function createProject (desc, lang, url, dev) {
    var project = {
        description: desc,
        language: lang,
        gitUrl: url,
        isInDiv: dev,
        printRepository: function () {
            console.log (url); //gitUrl je kljuc, nije vrednost
        },
        isJavaScript: function () {
            return lang === 'JavaScript';
        },
        isDevelopment: function () {
            return dev ? 'project is in development' : 'project is not in development';
        }
    }
    return project;
}

console.log (createProject ('blog', 'JavaScript', 'github', false));

/*4. Write a function that creates an object that represents a culinary recipe. 
Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients.*/

function createRecipe (nm, toc, comp, ingredients, ptime, ins) {
    var recipe = {
        name: nm,
        typeOfCuisine: toc,
        complexity: comp,
        listOfIngredients: ingredients,
        preparingTime: ptime,
        preparingInstuction: ins,
        printIngredients: function () {
            console.log (recipe.listOfIngredients);
        },
        is15MinutePrepared: function () {
            return (ptime <= 15) ? 'meal can be prepared for 15 minutes or less' : 'meal can`t be prepared for 15 minutes';
        },
        changeType: function (ntoc) {
            return typeOfCuisine = ntoc; 
        },
        deleteAnIngredient: function (del) {
            function checkIngredient (ing) {    
                return ing !== del;
            }
        return listOfIngredients.filter(checkIngredient);

        /*Array filter() Method

        var a = [1, 2, 3, 4, 5];

        function deleteAnIngredient (del) {
            function checkIngredient (ing) {    
                return ing !== del;
            }
            return a.filter(checkIngredient);
        };

        console.log (deleteAnIngredient(4));  => [1, 2, 3, 5]*/

        },

    }
    return recipe;
}

console.log (createRecipe ('musaka', 'mediteran', 2, ['potato', 'minsemeat', 'celery'], 45, 'some way etc.'));

//Kako pozvati jedan element ili funkciju?

/*Ovako: :)

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
console.log (recipe.is15MinutePrepared());*/
  
