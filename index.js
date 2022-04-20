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



function circleCreate(radius) {
    return{
        radius: radius,
        draw(){
            console.log("Practice again makes perfect");
        }
    }
}
const circle1 = circleCreate(1);
console.log(circle1);
console.log(circle1.draw());

