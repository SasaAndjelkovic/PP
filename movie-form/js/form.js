var festival = new Festival ();

 var createMovieButton = document.querySelector("#create-movie"),
    createProgramButton = document.querySelector("#create-program"),
    addMovieToProgramButton = document.querySelector("#add-movie"),
    inputTitleElement = document.querySelector("#title"),
    inputLengthElement = document.querySelector("#length"),
    selectGenreElement = document.querySelector("#genre"),
    movieSelectElement = document.querySelector("#movie-select"),
    ulMovieListeElement = document.querySelector("#movie-list")
    inputDateElement = document.querySelector("#date"),
    ulProgramListElement = document.querySelector("#program-list"),
    programSelectElement = document.querySelector("#program-select"),
    selectMovieElement = document.querySelector("#movie-select"),
    selectProgramElement = document.querySelector("#program-select");

    function addMovie() {
    var titleValue = inputTitleElement.value;
    var lengthValue = inputLengthElement.value;
    var genreValue = selectGenreElement.value;
    

    var movie = new Movie (titleValue, lengthValue, genreValue);
    var index = festival.listOfAllMovies.push(movie) - 1;
    console.log(index);

    var movieDataLi = document.createElement("li");
    movieDataLi.textContent = movie.getData();
    ulMovieListeElement.appendChild(movieDataLi);

    var movieOption = document.createElement("option");
    movieOption.textContent = movie.title;
    movieOption.setAttribute("value", index);
    movieSelectElement.appendChild(movieOption);

    inputTitleElement.value = "";
    inputLengthElement.value = "";
    selectGenreElement.value = "";

}

function addProgram() {
    var date = new Date (inputDateElement.value) ;

    var program = new Program (date);
    var index = festival.listOfPrograms.push(program) - 1;

    var li = document.createElement("li");
    li.textContent = program.getData();
    ulProgramListElement.appendChild(li);

    var option = document.createElement("option");
    option.setAttribute("value", index);
    option.textContent = program.getData();
    programSelectElement.appendChild(option);

}

function addMovieToProgram () {
    var programListElement = document.querySelectorAll("#program-list li");
    var programSelectOption = document.querySelectorAll("#program-select option");

    var movieValue = selectMovieElement.value;
    var programValue = selectProgramElement.value;

    var movie = festival.listOfAllMovies[movieValue];
    var program = festival.listOfPrograms[programValue];
    var oldProgramData = program.getData();

    program.addMovie(movie);

    programListElement.forEach(function (li) {
        if (li.textContent === oldProgramData) {
            li.textContent = program.getData();
        }
    });

    programSelectOption.forEach(function (option) {
        if (option.textContent === oldProgramData) {
            option.textContent = program.getData();
        }
    });
}

createMovieButton.addEventListener("click", addMovie);
createProgramButton.addEventListener("click", addProgram);
addMovieToProgramButton.addEventListener("click", addMovieToProgram);