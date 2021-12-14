'use strict';
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

if (numberOfFilms <= 10) {
    alert('Маловато');
} else if (numberOfFilms <= 30) {
    alert('Классика');
} else if (numberOfFilms >= 31) {
    alert('Киноман');
} else {
    alert('Херню написал');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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

console.log(personalMovieDB);