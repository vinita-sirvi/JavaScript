// Primitive data types
// 1. String: Represents a sequence of characters. Strings are immutable.
// 2. Number: Represents numeric values, both integers and floating-point numbers. Numbers are immutable.   
// 3. Boolean: Represents a logical entity and can have two values: true or false. Booleans are immutable.
// 4. Undefined: A variable that has been declared but not assigned a value is of type undefined. Undefined is immutable.
// 5. Null: Represents the intentional absence of any object value. Null is immutable.
// 6. Symbol: A unique and immutable primitive value that can be used as the key of an object property. Symbols are immutable.
// 7. BigInt: Represents integers with arbitrary precision. BigInts are immutable.

const score = 100; //number
const scoreSVal = 100.3; 

const isLoggedIn = true; //boolean
const outsideTemp = null; 
let userEmail;

const id = Symbol('123456'); //symbol (unique and immutable value)
const anotherID = Symbol('123456'); //symbol (unique and immutable value)
console.log(id === anotherID); // false (symbols are unique)

const BigNumber = 2233763324673634532n; //bigint (arbitrary precision integer)
console.log(BigNumber); // bigint (arbitrary precision integer)



// Non-primitive data types
// 1. Object: A collection of properties, where each property is defined as a key-value pair. Objects are mutable.
// 2. Array: A special type of object used for storing ordered collections. Arrays are mutable.
// 3. Function: A block of code designed to perform a particular task. Functions are first-class objects in JavaScript and can be treated like any other object. Functions are mutable.

const heros = ['Vini', "Sirvi", "Ravi", "Sita"]; //array (ordered collection of values)
let myObj = { //object (collection of key-value pairs)
    name: "Vini",
    age: 23,
    isActive: true,
};

const myFunction = function() { //function (block of code designed to perform a particular task)
    console.log("Hello, World!");
};

console.log(typeof myFunction);



// *****************************************************//
// Memory Management in JavaScript
// 1. Stack Memory: Used for static memory allocation. It stores primitive data types and references to objects and functions. Stack memory is automatically managed by JavaScript, and memory is freed when the function call ends.
// 2. Heap Memory: Used for dynamic memory allocation. It stores objects, arrays, and functions. Heap memory is managed by the garbage collector, which automatically frees up memory that is no longer in use.


let MyYoutubeChannel = "Vini"
let anotherName = MyYoutubeChannel
console.log(anotherName); // Vini


let user = {
    email : "ABC@gmail.com",    
    upi: "Abc@ybl",
}

let user2 = user; // reference to the same object in memory
user2.email="vini@gmail.com"
console.log(user.email)
console.log(user2.email) // both will show the updated email