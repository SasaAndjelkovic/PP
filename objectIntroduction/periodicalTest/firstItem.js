var user = {
    username: 'pera', 
    password: '12345',
    email: 'pera@gmail.com',
    age: 25, 
    isAdmin: false
};

var propertyName = 'email';
console.log(user[propertyName]); // => pera@gmail.com
console.log(user.propertyName); // => undefined
console.log(user.email); // => pera@gmail.com

user.password = 'abcde';
user.address = 'Neka ulica 34';

console.log(user);

user.address = {
    street: 'Neka ulica',
    streetNumber: 34, 
    city: 'Beograd'
}

console.log(user.address.city);