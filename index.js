// /* Write a for loop that will log only the even numbers in 0 through 200. */
let x = 0; x <= 200; x++ 
   if (x % 2 === 0) {
     console.log(x);
  }


// /* Write a javascript application that logs all numbers from 1 - 100. */
 var i = 1; i <= 100; i++ 
   console.log(i);

// /* If a number is divisible by 3 log "Fizz" instead of the number. */
for (var i = 1; i <= 100; i++) {
   if (i % 3 === 0) {
     console.log('Fizz');
   } else {
    console.log(i);
   }
 }


// /* If a number is divisible by 5 log "Buzz" instead of the number. */
 for (var i = 1; i <= 100; i++) {
   if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
     console.log('Fizz');
  } else {
     console.log(i);
   }
}
// /* If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number. */
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
     console.log('FizzBuzz');
   } else if (i % 5 === 0) {
    console.log('Buzz');
   } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
     console.log(i);
   }
 }


// /* Plantee just had her birthday; change Plantee's array to reflect her being a year older. */
 var plantee = {
   name: 'Plantee',
  age: 1,
   birthday: function() {
     this.age++;
   }
 };
 plantee.birthday();

// /* Change Wolfy's hometown from "Yukon Territory" to "Gotham City". */
var wolfy = {
  name: 'Wolfy',
   hometown: 'Yukon Territory'
 };
 wolfy.hometown = 'Gotham City';


// /* Give D'Art a second hometown by adding "Hawkins" */
var dArt = {
   name: 'D/Art',
  hometown: 'Hawkins'
};


// /* Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy". */
 var wolfyArray = ['Wolfy', 'Gameboy'];
 wolfyArray.splice(0, 1);




// /* Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo) */
var ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// /* Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result. */

for (var turtle of ninjaTurtles) {
   console.log(turtle.toUpperCase());
 }



// /* Console log: the index of Titanic */
const faveMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
 console.log(faveMovies.indexOf('Titanic'));
// /* use the .sortmethod */
// console.log((favemovies.sort();
// /* Use the method pop */
// favemovies.pop();

// /* splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array? */
faveMovies.splice(faveMovies.indexOf('Django Unchained'), 1, 'Avatar');
console.log(faveMovies); 


