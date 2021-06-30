function Festival () {
    this.listOfAllMovies = [];
    this.listOfPrograms = [];
}

function Movie (title, length, genre) {
    this.title = title;
    this.length = length;  //parseInt(length)
    this.genre = genre;
}

Movie.prototype.getGenreCode = function () {
    var firstLetter = this.genre[0].toUpperCase();
    var lastLetter = this.genre[this.genre.length-1].toUpperCase();
    return firstLetter + lastLetter;
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min, " + this.getGenreCode ();
}

function Program (date) {
    this.date = new Date(date);
    this.listOfMovies;
}

Program.prototype.lengthOfAllMovie = function () {
    var sumOfMinutes = 0;
    this.listOfMovies.forEach(function(item){
        sumOfMinutes += item.length;
    })
    return sumOfMinutes;
}

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
}

Program.prototype.getTotalMovies = function () {
    return this.listOfMovies.length;
}

Program.prototype.getData = function () {
    var day = this.date.getData();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    var date = day + "." + month + "." + year;
    var resultStr = date;
    return resultStr;
}


