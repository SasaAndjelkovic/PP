function User (username, password) {
    // this = {}
    this.username = username;
    this.password = password;

    this.changePassword = function (newPassword) {
        this.password = newPassword
    }

    //return this;
}

var user = new User ('pera', '123');
console.log(user);
user.changePassword('abcd');
console.log(user);

////

var hero = Hero('Leonardo'); // nedostaje new   ... window.name -> Leonardo
typeof hero;

// "undefined"