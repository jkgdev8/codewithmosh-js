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

const greet = (who, when, what) => {
    return `Hi, ${who} ${when} ${what}`
}

console.log(greet('Julienne', 'Kristopher', 'Garcia'));







