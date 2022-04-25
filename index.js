// Object-oriented Programming(OOP)
// const circle = {
//     // Properties
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,


//     // If a function is part of an object it is called a draw 'Method'
//     draw: function(){
//         console.log('draw');
//     }
// };
// circle.draw(); // Method




// // Factory Function; uses Camel Notation; uses return
// function createCircle(radius) {
//     return {
//         // Properties
//         // Key: radius, Value: radius. In modern js if the key and value the same just use the word
//         radius: radius,
//         // If a function is part of an object it is called a draw 'Method'
//         draw() {
//             console.log('draw');
//         }
//     };
// }
// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);

// // // function draw() {}
// // // is the same as draw() {  } especially if its a function within a function}


// // Camel Notation: oneTwoThreeFour
// // Pascal Notation: OneTwoThree


// Constructor Function; construct or creates an object. uses Pascal Notation, use the this keyword
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }
// // the new operator creates a new empty object, it basically returns it
// const circle = new Circle(1);
// console.log(circle.draw());


// My own factory function practice
// function circle(radius) {
//     return{
//         radius: radius,
//         draw(){
//             console.log('Practice Makes Perfect Bro!');
//         }
//     }
// }
// const circle1 = circle(5);
// console.log(circle1);
// console.log(circle1.draw());





// Dynamic Nature of Objects
// const circle = {
//     // Property
//     radius: 1
// };
// // you can dynamically add properties as well as methods(functions in an object)
// circle.color = "yellow";
// // Method
// circle.draw = function(){
// };

// // you can also delete properties with the delete operator
// // delete circle.color;
// // delete circle.draw;

// console.log(circle);






// Constructor Property
// TAKEAWAY: Every object has a constructor property and references the function that was used to create that object

// Factory Function
// function createCircle(radius) {
//     return {
        
//         radius: radius,
        
//         draw() {
//             console.log('draw');
//         }
//     };
// }
// const circle = createCircle(1);

// // Constructor Function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const another = new Circle(1);










// // Functions are Objects... function are basically objects
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// // Blues are properties, and purples are methods
// Circle.apply;
// Circle.arguments;

// // The argument empty object will refer to 'this' new const
// Circle.call({},1);

// // With multiple arguments, you pass them in as an array
// Circle.apply({}, [1, 2, 3, 4] )


// const another = new Circle(1);










// Value vs Reference Types
// Primitievs are copied by their value
// Objects are copied by their reference

// let x = 10;
// let y = x;
// x = 20;

// let x = {  //properties
//             value: 10
// };
// // y will equal 10 due to, the object is not primarily stored in the variable, its stored somewhere else in memory
// let y = x;
// x.value = 20;

// objects are copied by their reference
// let obj = { value: 10 };
// function increase(obj){
//     obj.value++;

// }

// increase(obj);
// console.log(obj);






// // Enumerating Properties of an Object

// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw'); 
//     }
// };

// // Simplest way to enumerate the properties in an object for in
// for (let key in circle)
// console.log(key, circle[key]);


// // for of loop can only be used by iterables like arrays and maps, this will throw an error
// // for (let key of circle)
// // console.log(key);
 










// // Cloning an Object
// const circle = {
//     radius: 1,
//     draw() {
//         console.log('draw'); 
//     }
// };

// // clonding an object to a new empty object
// // const another = {};
// // for (let key in circle)
// // another[key] = circle[key];


// // This version is much cleaner and updated, the circle object will be cloned into a empty object by assigning
// // You can also add properties within the cloned object
// // const another = Object.assign({
// //     color: 'red'
// // }, circle)
// // const another = Object.assign({}, circle)

// // Cleanest and most simplest way to clone an object is the ...Spread operator, as well as you can add more properties
// const another = { ...circle, 
//     // color: 'red'
// }

// console.log(another);







// Garbage collection
// Javascript engine has a garbage collector, its job is to find the variables and consts that are no longer in use and then dealocate the memory that wasw allocated to them earlier
// let circle = {};
// console.log(circle);









// Built in Objects: MATH
// Mozilla has alot of properties and methods used for math constants and functions
// ex 
// function getRandomNum (min, max) {
//     return Math.random() * (max-min) +min;
// }

// getRandomNum();

// const number1 = getRandomNum(1, 10);

// console.log(number1);











// Built In Objects: STRING(Primitive Type)

// String Primitive
const message = 'This is my first message';

// Property example is length
message.length

// Method example
message.concat


// String Object
const another = new String('Hi');

























