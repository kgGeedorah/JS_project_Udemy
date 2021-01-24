"use strict";
// let number = 5;
// const leftBorderWidth = 1;

// number = 12;
// console.log(number);

// let number = 4.6;

// const person = 'Alex';

// const bool = true; 

// Объект
// const obj = {
//     name: 'Yauhen',
//     age: 25,
//     isMarried: false
// };
// console.log(obj.age);
// console.log(obj["age"]);

// Массив
// let arr = ['plum.png', 1, 'orange.jpg', {}];
// console.log(arr[0]);

// let result = confirm('Are you here?');
// console.log(result);

// let answer = prompt('Вам есть 18 лет?', '18');
// console.log(typeof(answer));

//Запись в Масив
// const answers = [];
// answers[0] = prompt('Ваше имя', '');
// answers[1] = prompt('Ваша фамилия', '');
// answers[2] = prompt('Ваш возраст', '');
// document.write(answers);

//Интерполяция
// const category = 'toys';
//  console.log(`http://someurl.com/${category}/5`);
//  const userName = 'Ilai';
//  alert(`Hi, ${userName}`);

//Операторы
// ==, ===, @, &&, ||, !=, !==,

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов?', ''),
      b = prompt('Оцените его', ''),
      c = prompt('Один из просмотренных фильмов?', ''),
      d = prompt('Оцените его', '');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);