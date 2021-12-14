'use strict';
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
const lastFilm = prompt('Один из посмотренных недавно фильмов', '');
const filmRating = prompt('Оцените фильм по 10ти бальной шкале', '');

personalMovieDB.movies[lastFilm] = filmRating;
console.log(personalMovieDB);