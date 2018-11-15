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

// const obj1 = {
//   name: 'Ben'
// };

// const obj2 = {
//   name: 'Ben'
// };

// const arr1 = ['Cat'];
// const arr2 = ['Cat'];


// const age = prompt('How old are you?');

// console.log(age <= 21);

// const num = '42.3';
// console.log(num);
// console.log(+num);


// Try it out! https://geekwiseacademy.github.io/intro-to-javascript/three.html

/* Day Three
const str1 = 'You are my brother Anikan';
const str2 = new String(str1);

// loose equals don't care about data type
console.log(str1 == str2);
// strict equals does
console.log(str1 === str2);

// PEMDAS rules apply to math operations, order of operations

// fizzBuzz Test is a really popular interview question

// weird JS math things

console.log(0.1 + 0.2) // -> 0.300000000000004
console.log(.99999999999999999999) // -> 1


console.log(0 / 0); // -> NaN (Not a Number)




// console.log('number', number);
// number++;
// console.log('number', number);
// number++;
// console.log('number', number);
// number--;
// console.log('number', number);

let cartTotal = 0;

const item = 9.99;
const item2 = 7.99;
const discount = .5;

console.log(cartTotal += item);
console.log(cartTotal += item2); // adding item totals to a cart
console.log(cartTotal *= discount); // 50% discount using *=

// prompt('Give me a number', 10);


// const prompt1 = +prompt('Give me num 1', 10);
// const prompt2 = +prompt('Give me num 2', 10);

// alert(prompt1 + prompt2);




// Control Flow


const firstName = 'Ben';

if (firstName === 'Jacob') {
  // If statement evaluates true, this runs
  // Indent within the curly braces

  console.log('Your name is Jacob');
} else if (firstName === 'Ben') {
  // If statement evaluates false, this runs

  console.log('Your name is Ben');
} else {
  // All other cases run this.

  console.log('Your name is not Ben or Jacob');
}


const magicNumber = 4;

if (magicNumber === 1) {
  console.log(1);
} else if (magicNumber === 2) {
  console.log(2);
} else {
  console.log('No magic number for you');
}


// && -> both sides must equate to true
// || -> either side can be true
if (false || false) {
  console.log('Great success!');
}

const age = 80;

if(age === 21 || age === 80) {
  console.log('You are 21 or 80');
}


const lastName = '';

// Looking for truthy or falsy values
if(!lastName) {
  console.log(`You did not provide a last name.`);
}


 * in class:
 * prompt user for name
 * if they provide a name alert their name
 * if they provide no value alert that you need a valid name


// const userName = prompt('What is your name?');

// if(userName) {
//   alert(userName);
// } else {
//   alert('Invalid name');
// }


// Refactored the above example to ternary statment
// const userName = prompt('What is your name?');

// userName ? alert(userName) : alert('Invalid name');

   evaluation ? true : false;


 false ? console.log(true) : console.log(false);


//  const superHero = prompt('What is your fav super hero?');

//  switch (superHero) {
//    case 'Batman':
//     console.log('Batman is awesome');
//     break;
//   case 'Superman':
//     console.log('Superman is not better than Batman');
//     break;
//   case 'Robin':
//     console.log('gtfo');
//     break;
//   default:
//     console.log('Sorry, not a superhero.');
//  }

*/

// In class ex:

// Convert string to num
/*
const userAge = +prompt('What is your age?');

if(userAge) {
  if (userAge >= 18 && userAge <= 80) {
    const likesStarWars = confirm('Do you like Star Wars?');

    if(likesStarWars) {
      alert('May the force be with you!');
    }
  } else if (userAge > 80) {
    const likesPrunes = confirm('Do you like Prunes?');

    likesPrunes ? alert('Gross') : alert('I guess you are alright');
  } else {
    alert('You are not old enough');
  }
}
*/

(function() {
  const colors = ["orange", "red", "blue", "yellow", "green", "pink", "black", "white", "purple", "grey"];
  const name = prompt("what is your name?");

  if(!name) return;

  const favoriteColor = prompt("What is your favorite color? Please")
}
