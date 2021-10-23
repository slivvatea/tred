"use strict";

let numberOfFilms; // = +prompt('Сколько фильмов вы уже посмотрели?', '');

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMoviesDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};


function rememberFilms(params) {
    for (let i = 0; i < 2; i++) {
        const a1 = prompt('Один из последних просмотренных фильмов?',''),
            b1 = prompt('НАсколько оцените его?','');
        if ((a1 != '') && (b1 != '') && (a1 != null) && (b1 != null) && (a1.length < 50) && (b1.length < 50)) {
            
            personalMoviesDB.movies[a1] = b1; 
        }else{
            console.log('error');
            i--; 
        }
    }
}
rememberFilms();

function detectedPerslevel(params) {
    if (personalMoviesDB.count < 10) {
        alert('просмотренно мало фильмов');
    }else if ((personalMoviesDB.count > 10) && (personalMoviesDB.count < 30)) {
        alert('Вы классический зритель');
    }else if (personalMoviesDB.count > 30) {
        alert('Вы киноман');
    }else{
        alert('Произошла ошибка');
    }
}
detectedPerslevel();

function showMyDB() { 
    if (personalMoviesDB.privat == false){
        console.log(personalMoviesDB);
    }
 }
 showMyDB();

 function writeYourGenres() {
     for (let i = 0; i < 3; i++) {
        let p = prompt(`Ваш любимый жанр по номеру ${i+1}?`);
        personalMoviesDB.genres[i] = p;
     }   
     console.log(personalMoviesDB);
 }
 writeYourGenres();