"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMoviesDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};
const a1 = prompt('Один из последних просмотренных фильмов?',''),
    b1 = prompt('НАсколько оцените его?','');
personalMoviesDB.movies[a1] = b1;
const a2 = prompt('Один из последних просмотренных фильмов?',''),
    b2 = prompt('НАсколько оцените его?','');
personalMoviesDB.movies[a2] = b2;
console.log(personalMoviesDB);

