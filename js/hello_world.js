'use strict';
let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}


function detectPersonalLevel (){
    if (numberOfFilms <= 10) {
        alert('Маловато');
    } else if (numberOfFilms <= 30) {
        alert('Классика');
    } else if (numberOfFilms >= 31) {
        alert('Киноман');
    } else {
        alert('Херню написал');
    }
}


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const lastFilm = prompt('Один из посмотренных недавно фильмов', '');
        const filmRating = prompt('Оцените фильм по 10ти бальной шкале', '');
        if (lastFilm == null || 
            filmRating == null ||
            lastFilm.length == 0 ||
            lastFilm.length >= 50 ||
            filmRating.length == 0){
            alert('Название фильма и рейтинг должны быть!');
            i--;
        } else {
            personalMovieDB.movies[lastFilm] = filmRating;
        } 
    }
}


function showMyDB (hidden) {
   if (!hidden) {
       console.log(personalMovieDB);
   }
}

function writeYourGenres () {
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

start();
detectPersonalLevel();
rememberMyFilms();
writeYourGenres();
showMyDB(personalMovieDB.privat);

console.log(personalMovieDB);
