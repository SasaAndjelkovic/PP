var book = {
    title: "A Game Of Thrones",
    author: author
};
    
var author = {
    name: "George R.R. Martin",
    quotes: ["Sleep is good but books are better."]
};
    
console.log(book.author.name);  // -> TypeError: Cannot read property 'name' of undefined


///


var author = {
    name: "George R.R. Martin",
    quotes: ["Sleep is good but books are better."]
};
        
var book = {
    title: "A Game Of Thrones",
    author: author
};
        
console.log(book.author.name);   // -> George R.R. Martin


///


var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    age: function () {
        2018 - author.yearOfBirth;
    }
};
    
var yearsOld = author.age;
    
console.log(yearsOld);   // -> [Function: age]
console.log(yearsOld()); // -> undefined   nema return!!!


///


var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    quotes: ["Sleep is good but books are better."],
    age: function () {
        return 2018 - author.yearOfBirth;
    }
};
    
var quote = author.quotes[1];   // -> 1 is undefined, 0 is OK
console.log(quote);


///


var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    quotes: ["Sleep is good but books are better."]
};
    
author.country = "US";
author.gender = "male";
    
console.log(author.gender);   // -> male


///


var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    write: (function () {
        console.log("Writing....");
    })()
};
    
author.write;   // -> samopozivajuca


///


var author = {
    name: "George R.R. Martin",
    yearOfBirth: 1948,
    write: (function () {
        return function () {
        console.log("Writing....");
        }
    })()
};
    
author.write;  // -> samo smo je pozvali


///


var author = {
    name: "George R.R. Martin",
    gender: "male",
    country: "US",
    quotes: ["Sleep is good but books are better."]
};
    
delete quotes[0];   // -> ReferenceError: quotes is not defined
delete country;       // -> nista se ne desava
console.log(author);


///


var author = {
    name: "George R.R. Martin",
    gender: "male",
    country: "US",
    quotes: ["Sleep is good but books are better."]
};
    
delete author.quotes[0];
delete author.country;
    
console.log(author.country);    // -> undefined
console.log(author.quotes);     // -> [ <1 empty item> ]