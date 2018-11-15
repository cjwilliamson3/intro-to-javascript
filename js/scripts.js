// var name = "Curtis";
// a string is text or message to create a response "curtis"

// var nameTwo = new string("Williamson");

// var luckyNumber = 42;
// number

// var boolean = true;
// boolean are yes or

// let name = "Curtis";

// {
  // let name = "Paige";
  // console.log(name);
// }

// console.log(name);

// const greeting = "Hello my name is: ";
//const name = "Bob";

// console.log(`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ${name} tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

// const date = new Date("09/27/89");

// console.log(date);

// console.log("asdlkfjalkfjalkrfmlkrcmlkerfmerfjaklsfkareklfare;klcmael;rfafj" .length)

// const num = new Number(42);
// const num2 = 42;

// const array = [1, 2, 3];
// const array2 = new Array(1, 2, 3)

// console.log(array2);

// const arrayMixed = ["ben", 29, true];

// console.log(arrayMixed);

// const obj = {
  // name: "Curtis",
  // age: 29
// };

// console.log(obj);

// alert("Danger Will Robinson!!!");

// const response = confirm("Are you sure?");

// console.log(response);
// records the response in the console

// const favMovie = prompt("What is your favorite movie?");

// console.log(favMovie);
// records answer

// const favNum = prompt("What is youyr favorite number?");
// const realNum = parseInt(favNum);
// console.log(typeof(realNum));
// parseInt converts it to a real number

/*
const firstName = prompt("First Name:");
const lastName = prompt("Last Name:");
console.log(firstName);
alert(lastName);
const birthday = prompt("Date of Birth?");
const date = new Date (birthday)
const birthdayResponse = confirm("Is this correct: " + date);
alert(birthday);

*/

//array always start at 0 not 1.

// const myFirstArray = ["Curtis", 31, true, "Clovis", ["Paige", "Lily"]];

// console.log(myFirstArray[4][1]);

/*
const geekwise = [["Web For Beginners", true], ["Mobile Friendly", true], ["Intro to JS", false]];

console.log(geekwise[1][0]); //mobile Friendly
console.log(geekwise[0][0]); //web for beginners
console.log(geekwise[2][1]); //false
console.log(geekwise[1]); //mobile friendly array

const favoriteMovie = ["Inception", 7, true, 2005];


console.log(favoriteMovie, favoriteMovie.length, favoriteMovie[1]);
*/

// const arr = ["cat"];

// console.log(arr[10]); // wont show anything

/*
const names = ["Curtis", "Paige", "Lily", "Logan", "Luke"];

// important!!!
names.push("Cali"); //adds name to end

names.unshift("Carona"); //adds name to front

// names.pop(); // removes last item in list

console.log(names);

names.splice(6, 1, "California"); //corrects name
// names.splice(first number is start point, second number is number of items that follow);
console.log(names);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

nums.splice(2); //deletes everything after the first two items
console.log(nums);
*/

/*
const names = ["Curtis", "Paige", "Lily", "Logan", "Luke"];

names.slice(3);

const kids = names.slice(2);
const parents = names.slice(0, 2);

console.log(names);
console.log(kids);
console.log(parents);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 18, 80, "Curtis", 100];

console.log(nums);

console.log(nums.indexOf("Curtis"));
*/

/*
const favMovie1 = ["Dark Knight", "Joker"];
const favMovie2 = ["The Rock", "Stanley Goodspeed"];
const favMovie3 = ["Inception", "Cobb"];
const favMovie4 = ["Big Daddy", "Sonny Koufax"];
const favMovie5 = ["Rogue One", "Jin Urso"];

const favoriteMovies = [favMovie1, favMovie2, favMovie3, favMovie4, favMovie5];
alert(favoriteMovies);

console.log(favoriteMovies);

const movieTitles = [favMovie1[0], favMovie2[0], favMovie3[0], favMovie4[0], favMovie5[0]];
alert(movieTitles);
console.log(movieTitles);

console.log("least fav:", favMovie4[0]);
console.log("most fav:", favMovie3[0]);
alert(favoriteMovies.length);
*/

/* DO NOT DO WHILE LOOPS
let counter = 0

while(counter <= 10) {
  console.log(counter);

  counter++;
}
*/

// for loops are good for working with numbers
// for(let i = 1; i <= 3; i++) {
//   console.log(i);
// }

// const names = ["Luke", "Leia", "Aniken", "Padame"];
//
// // for(let i = 0; i < names.length; i++) {
// //   console.log(names[i]);
// // }
//
// const albums = ["alpha", "bravo", "charlie", "delta"];
//
// // for(let i = 0; i < albums.length; i++) {
// //   console.log(albums[i]);
// // }
//
// for(let name of names) {
//   console.log(name);
// }
//
// names.forEach(name => console.log(name)); //much less work as above
//
// for(let album of albums) {
//   console.log(album);
//
//
// // albums.forEach(album => console.log(album));
//
//   if(album === "charlie") {
//     break;
//   }
// }

// const person = {
//   name: "curtis",
//   age: 31,
// };
//
// for(let key in person) {
//   console.log(person[key]);
// }
//
// console.log(person);
// console.log(person.age);

/* IMPORTANT!!!!!
const user = {};

console.log(user);

user.name = prompt("Give me your name.");
user.age = +prompt("How old are you?");

console.log(user);
*/

// const favMovie1 = ["Dark Knight", "Joker"];
// const favMovie2 = ["The Rock", "Stanley Goodspeed"];
// const favMovie3 = ["Inception", "Cobb"];
// const favMovie4 = ["Big Daddy", "Sonny Koufax"];
// const favMovie5 = ["Rogue One", "Jin Urso"];

const movies = [["Infinity Wars", 2018], ["Black Panther", 2018], ["Fantasic Beasts 2", 2018]];
console.log(movies);

for(let movie of movies) {
  console.log(movie);

  if(movie[0] === "Infinity Wars") {
    alert(movie);
  }
}

// for(let i = 0; i < movies.length; i++) {
//   if(movies[i][0] === "Black Panther") {
//     alert(`Your favorite movie is ${movies[i][0]} and it was made in ${mvoies[i][1]}`);
//   }
// }
