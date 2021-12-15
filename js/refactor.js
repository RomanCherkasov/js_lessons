'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count <= 10) {
            alert('Маловато');
        } else if (personalMovieDB.count <= 30) {
            alert('Классика');
        } else if (personalMovieDB.count >= 31) {
            alert('Киноман');
        } else {
            alert('Херню написал');
        }
    },

    rememberMyFilms: function() {
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
    },

    showMyDB: function(hidden) {
        if (!hidden){
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++){
            const genereInput = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genereInput == null || genereInput == ''){
                alert('Нужно ввести жанр');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genereInput;
            }
            
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
};

personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);

console.log(personalMovieDB);