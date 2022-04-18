// Comment because its js and a script js is behaviour


// variables    
        
// Cannot be reserved keyword

/// should be meaningful

// cannot start with a number aka 1number

// cannot container space or hyphen(-)

let intrestRate = 0.3;
intrestRate = 1;


// const are variables that have values that cant change

//primitive value types
let name = "Julienne";
let age = 30;
let isApproved = true;
let firstName = undefined;
let selectedColor = null;


//objects
// input 2 properties here name and age. You can access each property person.name or person.age
let person = {
    name: "Julienne",
    age: 31
}
// Dot Notation is the most commonly used
person.name = "Rossy";

// Bracket Notation
person['name'] = 'Mary';

console.log(person.name);


// array
let selectedColors = ['red', 'blue', 'pink'];
selectedColors[3] = 1;
// dot notation has properties
console.log(selectedColors.length);

// performs a task
// parameter declaration
function greet (name, lastName) {
    console.log('Hello ' + name + ' ' + lastName );
}
//argument is the value supplied by the parameter
greet("John", 'Smith' );
greet('Mary', 'Smith');



// calculates a value

function square(number) {
    return number * number;
}

// let  number = square(3);

console.log(square(3));






