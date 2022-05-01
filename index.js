// Arrays

// // Adding elements to an array
// const numbers = [3, 4];
// // arrays are also objects

// // End the .push method wil append new elements to the end of an array
// numbers.push(5, 6);


// // Beginning .unshift method will append new elements to the beginning of an array
// numbers.unshift(1, 2);

// // Middle .splice method removes and inserts new elements, first parameters will be index, then follow the rest, '0' you dont want to delete
// numbers.splice(2, 0, 'a', 'b');
// console.log(numbers);







// Finding Elements in an array(PRIMITIVES)
// const numbers = [1, 2, 3, 1, 4];
// // console.log(numbers.indexOf(1));


// // console.log(numbers.lastIndexOf(1));


// console.log(numbers.includes(1));









// Finding Elements in an array (Reference Types)
// const courses =[
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'},
// ];


// // These are 2 different obejcts, hence why it console logs false
// // console.log(courses.includes({id: 1, name: 'a'}));
// const course = courses.find(function(course) {
//     return course.name === 's';
// });

// // It will show up as undefined because there is no 's' in the object

// console.log(course);









// Arrow Functions
// You can use arrow functions to pass a function as an argument to a method
// const courses =[
//     {id: 1, name: 'a'},
//     {id: 2, name: 'b'},
// ];
// // if only 1 parameter you dont need parethesis, if none, use empty parenthesis
// const course = courses.find(course => course.name === 'a');
// console.log(course);




// Regular function vs Arrow function es6 2015
// function greet(who) {
//     return `Hi, ${who}`
// }
// console.log(greet('Julienne'));

// const greeting = who => {
//     return `Hi, ${who}`
// }
// console.log(greeting('Garcia'));








// Removing Elements
// const numbers = [1, 2, 3, 4, 5]

// // remove last element in an array and also return it
// // const last = numbers.pop();


// // // add begining of an array
// // const first = numbers.shift();

// // // // add in between middle an array SPLICE METHOD
// const mid = numbers.splice(1, 3)
// console.log(numbers);













// // Emptying an array
// let numbers = [1, 2, 3, 4];
// let another = numbers;


// // solution 1... its good but wont work if theres another reference to the array
// // numbers = [];

// // solution 2... the preffered solution
// // numbers.length = 0;



// // solution 3... too noisy
// // numbers.splice(0,numbers.length);

// // solution 4... too noisy
// // while (numbers.length > 0)
// // numbers.pop();


// console.log(another);
// console.log(numbers);






const greet = who =>{
    return `Hi, friend ${who}`
}

console.log(greet('Julienne'));



function greeting(who) {
    return `Hi, friend ${who}`

}
console.log(greeting('Garcia'));





















