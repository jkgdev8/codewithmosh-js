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










// Combining and Slicing Arrays
// const first = [1, 2, 3];
// const second = [4, 5, 6];


// // combine 2 arrays with concat method
// const combined = first.concat(second);

// // slice array for slice method
// const slice = combined.slice(2)




// console.log(combined);
// console.log(slice);









// Spread Operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];


// // spread operator ... adding the individual elements of the 1st and 2nd array
// const combined = [...first, 'a', ...second, 'b'];

// const copy = combined.slice();

// const copy2 = [...combined];

// console.log(combined);
// console.log(copy);
// console.log(copy2);





// Iterating an Array
// const numbers = [1, 2, 3];

// for (let number of numbers)
//     console.log(number);


// // you can also iteratate the index with the forEach method   
// numbers.forEach((number, index) => {
//     console.log(number, index)
// });    






// Joining Arrays
// const numbers = [1, 2, 3, 4];

// const joined = numbers.join(',');
// console.log(joined);


// const message = 'This is my first message';
// const parts = message.split(' ');
// console.log(parts);


// const combined = parts.join('-');

// console.log(combined);








// Sorting Arrays
// const numbers = [2, 3, 1];

// numbers.sort();

// console.log(numbers);

// numbers.reverse();

// console.log(numbers);

// const courses = [
//     {
//         id: 1,
//         name: 'Node.js '
//     },
//     {
//         id: 2,
//         name: 'Javascript '
//     },
// ];

// // To sort objects alphabetically use sort function method and pass in another function with 2 parameters
// courses.sort(function(a, b) {
//     // a < b => -1
//     // a > b => 1
//     // a ===b => 0
//     // if it doesnt sort right double check the ascii table
//     const  nameA = a.name.toUpperCase();
//     const  nameB = b.name.toUpperCase();
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });

// console.log(courses);









// Testing the elements of an array
// const numbers = [1, 2, 3, -1];

// // every() checks to see if every element in a given array matches the given criteria
// const allPostive = numbers.every(function(value){
//     return value >=0;
// });

// // some() checks to see if you have at least one element that matches the given criteria
// const atLeastOnePositive = numbers.some(function(value){
//     return value >=0;
// });

// console.log(allPostive);

// console.log(atLeastOnePositive);







// Filtering an array
// const numbers = [1, 2, 3, 4, -1];

// // you can use the arrow function since theres only 1 paramater and 1 expression
// const filtered = numbers.filter(value => {
//     return value >= 0
// });

    
// console.log(filtered);












// // mapping an array
// const numbers = [1, -1, 2, 3];

// // const filtered = numbers.filter(n => n >= 0);

// // you can also chain it all together like this chain methods
// const item = numbers
// .filter(n => n >= 0)
// .map(n => ({value: n}))
// .filter(obj => obj.value > 1)
// .map(obj => obj.value);

// console.log(item);

// // we are mapping the array into html strings, we can map method to map each element in an array into something else
// // const html = '<ul>' + items.join('') + '</ul>';


// // when doing a callback funcion and were returning an object we need to put it a parenthesis
// // without parenthesis the engine will look at it as a code block rather than object
// // const items = filtered.map(n =>  ({value: n})  );
// // console.log(items);

// //vs
// // const items1 = filtered.map(n => {return {value:n};
// // });
// // console.log(items1);


// my map method chain practice
// const numbers = [1, 2, 3, 4];
// const item = numbers.filter(n => n >=0).map(n => ({value: n}));
// console.log(item);


// function circle(radius){
//     return{
//         radius,
//         draw(){
//             console.log('This still works');
//         }
//     }
// };

// const circle1 = circle(1);
// console.log(circle1.draw());





// // Reducing an Array
// const numbers = [1, 2, 3, 4];

// // older method
// // let sum = 0;
// // for (let n of numbers)
// //  sum += n;
// //  console.log(sum);

// // method 1 with an initiator
// // a = 0, c = 1 => a = 1
// // a = 1, c = -1 => a = 0
// // a = 0, c = 2 => a = 2
// // a = 2, c = 3 => a = 5
// // const sum = numbers.reduce((accumulator, currentValue) => {
// //      return accumulator + currentValue;
// // }, 0 )


// // method 2 without the initiator, 1st element in array will be used as initial value
// // a = 1, c = 2 => a = 3
// // a = 3, c = 3 => a = 6
// // a = 6, c = 4 => a = 10
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
//  console.log(sum);







// // Exercise 1 - Array from Range
// const numbers = arrayFromRange(1, 4);
// console.log(numbers);

// // Mosh method
// function arrayFromRange(min, max) {
//     const output =[];
//     for(let i = min; i <= max; i++)
//     output.push(i)
//     return output;

// }; 







// // Exercise 2 - Includes
// const numbers = [1, 2, 3, 4];

// // Mosh Example
// console.log(numbers.includes(5));

// function inclues(array, searchElement){
//     for (let element of array)
//      if (element === searchElement)
//       return true;
//     return false;  

// }








// Exercise 3 - Except
// const numbers = [1, 2, 3, 4];

// const output = except(numbers, [1]);

// console.log(output);

// // Mosh example
// function except(array, excluded) {
//    const output =[];
//    for (let element of array)
//     if(!excluded.includes(element))
//      output.push(element);
//      return output;
// };

// my practice
// const numbers = [1, 2, 3, 4];
// function except(array, excludes){
//     const output = [];
//     for(let key of array)
//      if(!excludes.includes(key))
//       output.push(key)
//       return output;
// }
// const output = except(numbers, [1]);
// console.log(output);









// excercise 4 - moving an element
// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 0, 1);

// console.log(output);


// function move(array, index, offset){
//     const output = [...array];
//     const element = output.splice(index, 1)[0];
//     output.splice(index + offset, 0, element);
//     return output
    
// }












