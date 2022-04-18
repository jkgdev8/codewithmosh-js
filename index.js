// Hour(IF STATEMENTS)
// If hour is between 6am and 12pm: Good Morning!
// If it is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good evening!
// let hour = 18;
// if (hour >= 6 && hour < 12) 
//     console.log('Good Morning!');
// else if (hour >= 12 && hour < 18 )
//     console.log('Good Afternoon!');
// else
//     console.log('Good Evening!');


// Switch and Case, you compare the value of the variable vs other variables
// let role;
// switch statement
// switch(role){
//     case 'guest':
//         console.log('Guest User');
//         break;
//     case 'moderator':
//         console.log('Moderator User');
//         break;
//     default:
//         console.log('Unknown User');    
// }
// you can also compare vs an if statement, if statement is used more commonly
// if (role === 'guest')
//  console.log('Guest');
// else if (role === 'moderator')
//  console.log('moderator'); 
// else  
//  console.log('Unknown User');



// For Loops
// for (let i = 0; i < 5; i++){
//     statement
//     statement
//     statement
// }
// for (let i = 0; i <= 5; i++){
//     if (i % 2 !==0) console.log(i);
// }


// While Loops
// let i = 0;
// while (i <= 5) {
//     if (i % 2 !==0) console.log(i);
//     i++;
// }

// infinite while loop
// let i = 0;
// while (i <5) {
//     console.log(i);
//     i++;
// }
// infinite for loop
// for (let i = 0; i < 10; i++){
//     console.log(i);
// }


// // for-in loop(to iiterate the properties of an object)
// const person = {
//     name: 'Julienne',
//     age: 31
// };
// for (let key in person)
// console.log(key, person[key]);
// // dot notation
// // person.name
// // // bracket notaion
// // person['name']
// const colors =['red', 'green', 'blue'];
// for (let index in colors)
// console.log(index, colors[index]);

// for-of loop, starting ES6 Scripts(to iterate over the elements or itens in an array)
// const colors =['red', 'green', 'blue'];
// for (let color of colors)
// console.log(color);


// Exercise 1 Max of 2 numbers
// let number = max(5, 22);
// console.log(number);
// function max(number1, number2 ) {

//     return (number1 > number2) ? number1 : number2;
// }
// max();



// Exercise 2 Landscape or Portrait
// console.log(isLandscape(300,600));

// function isLandscape (width, height) {
//     //  if(width > height) return true;
//     //  return false;   

//     // or
//     // return (width > height) ? true : false;

//     // or best way
//     return(width > height);
// }




// Exercise Fizzbuzz 3
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => Fizzbuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'
// const output = fizzBuzz(false);
// console.log(output);
// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//         return NaN;
//     if ((input % 3 === 0) && (input % 5 === 0))
//         return 'Fizzbuzz';
//     if (input % 3 === 0)
//     return 'Fizz';
//     if (input % 5 === 0)
//     return 'Buzz';
//     return input;
// }


// Exercise Demerit Points 4
// Speed limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspended
// checkSpeed(80);
// function checkSpeed(speed) {
//     const checking = 70;
//     const kmPerPoint = 5
//     if (speed < checking + kmPerPoint){
//         console.log('Ok');
//         return;
//     }
//     const points = Math.floor((speed - checking) / kmPerPoint);
//     if (points >= 12)
//         console.log('License suspended');
//     else
//     console.log('Points', points);    
// }




// Exercise 5 Even and Odd Numbers
// showNumbers(10);
// function showNumbers(limit){

//     for (let i = 0; i <= limit; i++) {
//         // if (i % 2 === 0) console.log(i, 'EVEN');
//         //  else console.log(i, 'ODD');
//         // Or, second one looks cleaner

//         const message = (i % 2 === 0) ? 'EVEN': 'ODD';
//         console.log(i, message);
        
        
//     }
// };




// Exercise 6 - Count Truthy
// const isActive = true;
// const name = 'Julienne'; //Truthy (true)
// const firstName = ''; // Falsy(false)
// if (name) console.log('Hello');
// List of Falsy values:
// Falsy
// Undefined
// null 
// ''
// 0
// NaN
// const array = [0, null, undefined, '', 2, 3];
// console.log(countTruthy(array));
// function countTruthy(array) {
//    let count = 0; 
//    for (let value of array)  
//         if (value)
//              count++;
//     return count;         
// }




// Excercise 7 - String Properties
// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };
// showProperties(movie);
// function showProperties(obj){
//     for (let obj in movie)
//     console.log(obj, movie[obj]);   
// }




// Exercise 8 Sum of multiples of 3 and 5
// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10
// console.log(sum(10));

// function sum(limit) {
//     let sum = 0;

//     for (let i = 0; i <= limit; i++)
//         if (i % 3 === 0 || i % 5 === 0)
//          sum += i;


//     return sum;     

// };





// Exercise 9 Grade
const marks =[80, 80, 50];

console.log(calculateGrade(marks));


function calculateGrade(marks) {
    
}










     