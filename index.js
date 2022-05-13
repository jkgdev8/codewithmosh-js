// // Function Declarations vs Expressions

// // Function Declaration, no need for ;
// function walk() {
//     console.log('walk');
// }

// // Function Expression, remember function are objects, since its a variable close with ;
// let run = function() {
//     console.log('run');
// };

// // Named function declaration
// let run1 = function walk() {
//     console.log('run 1');
// };

// let move = run;
// run();
// move();








// // Hoisting - process of moving function declarations to the top of the file

// // In run time functions will execute first and put it on top
// walk();
// function walk() {
//     console.log('walk');
// }

// // Function Expression
// // will cause an error due to the function is called first before variable
// //run();
// const run = function(){
//     console.log('run');
// };






// // Arguments
// // function sum (a, b) {
// //     console.log(arguments);
// //     return a + b;
// // }

// // console.log(sum(1, 2, 3, 4, 5));

// // Iterate arguments values
// function sum () {
//     let total = 0;
//     for (let value of arguments)
//      total += value;
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5));







// // Rest operator(DONT get confused for spread... operator, this is only for parameters)

// // Rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent
// // Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments
// // function sum (...args) {
// //     return args.reduce((a, b) => a + b);
// // }
// // console.log(sum(1, 2, 3, 4, 5));

// function sum (discount, ...prices) {
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30, 1));





// // Default Parameters = ES6
// function intrest(principal, rate = 3.5, years = 5){
//     return principal * rate / 100 * years;
// }
// console.log(intrest(10000));






// // Getters and Setters

// getters => access properties
// setters => change (mutate) them

// const person = {
//     firstName: 'Julienne',
//     lastName: 'Garcia',

//     get fullName(){
//         return `${person.firstName} ${person.lastName}`
//     },

//     set fullName(value){
//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];

//     } 
// };

// person.fullName = 'Julienne Garcia'

// console.log(person);







// // Try and Catch
// const person = {
//     firstName: 'Julienne',
//     lastName: 'Garcia',

//     set fullName(value){
//         if(typeof value !== 'string') 
//          throw new Error('Value is not a string!');

//         // split method only used for strings
//         const parts = value.split(' ');
//         if (parts.length !== 2)
//          throw new Error('Enter a first and last name!')
//         this.firstName = parts[0];
//         this.lastName = parts[1];

//     } 
// };

// try {
//     person.fullName = '';

// }

// catch (e){
//     alert(e);
// }

// console.log(person);












// // Local vs Global scrope
// // best practice try not to declare globally. Toothbrush analogy
// const color = 'red';

// function start() {
//     const message = 'hi';
//     const color = 'blue';
//     console.log(message);
//     console.log(color);
// }

// function stop(){
//     const message = 'bye'
//     console.log(message);
//     console.log(color);
// }

// start();

// stop();








// Let vs Var
// Var => function scoped
// ES6 let => block-scoped

// Var global variable will attach it to the window object in browser
// Not good if ur using 3rd party libraries, as this global variable can overide it
// var color = 'red';

// // let
// let age = 30;

// function sayHi(){
//     console.log('hi');
// }






// // This Keyword
// // The object that is executing the current function
// // Method -> obj
// // Function -> global (window, global)

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c', 'd'],
//     showTags(){
//         // function will reference the gloabl object window
//         this.tags.forEach(function(tag){
//             console.log(this.title, tag);
//         },this);
//     }
// };

// video.showTags();





// // video.stop = function(){
// //     console.log(this);
// // };

// // constructor function, this by default represents the global object
// // function Video(title){
// //     this.this = title;
// //     console.log(this);

// // }

// // // {} calling a function with the new operator, this will reference the new empty object not on the window
// // const v = new Video('b'); 











// // Changing This 3 ways
// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c', 'd'],
//     showTags(){
        
//         // Arrow functions inherit the 'this' from the containing function
//         this.tags.forEach((tag) => {
//             console.log(this.title, tag);
//         });
//     }
// };

// video.showTags();


// // function playVideo(a,b){
// //     console.log(this);
// // }
// // playVideo.call({name: 'Julienne'}, 1, 2);
// // playVideo.apply({name: 'Julienne'}, [1,2]);
// // const fn = playVideo.bind({ name: 'Josh'}) ();

// // playVideo();











// // Exercise 1 - Sum Of Arguments
// // sum(1, 2, 3, 4) =>10
// // My method
// // function sum(a, b, c, d){
    
// //     return a+b+c+d;
// // }
// // console.log(sum(1, 2, 3, 4));
// // console.log(Array);


// //Mosh Method
// function sum(...items){
//     if (items.length === 1 && Array.isArray(items[0]))
//      items = [...items[0]];
    
//     return items.reduce((a, b) => a + b); 
// }

// console.log(sum(1, 2, 3, 4));







// Exercise 2 - Area of Circle

const circle = {
    radius: 1,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

console.log(circle.area);




