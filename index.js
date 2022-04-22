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









