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





// Default Parameters = ES6
function intrest(principal, rate = 3.5, years = 5){
    return principal * rate / 100 * years;
}
console.log(intrest(10000));


