let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько филмов вы уже посмотрели?", '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько филмов вы уже посмотрели?", '');
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из просмотренных фильмов: ", ''),
      b = prompt("Насколько оцените его: ", '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический кинозритель');
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы Киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

// detectPersonalLevel();

function showMyDB() {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  } else {
    console.log("Ошибка в коде");
  }
}

// showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const c = prompt(`Ваш любимый жанр под номером ${i}: `, '');
    personalMovieDB.genres.push(c);
  }
}

writeYourGenres();

console.log(personalMovieDB);