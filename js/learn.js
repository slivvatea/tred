"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMoviesDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
};

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
console.log(personalMoviesDB);



if (personalMoviesDB.count < 10) {
    alert('просмотренно мало фильмов');
}else if ((personalMoviesDB.count > 10) && (personalMoviesDB.count < 30)) {
    alert('Вы классический зритель');
}else if (personalMoviesDB.count > 30) {
    alert('Вы киноман');
}else{
    alert('Произошла ошибка');
}
