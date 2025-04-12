"use strict"; //treat all JS code as strict mode by default (helps catch common coding errors and "unsafe" actions such as defining global variables)
//  code readability, maintainability, and performance should be highest priority

let name = "John Doe"; //string
let age = 30; //number
let isEmployed = true; //boolean
let salary = null; //null (no value)
let address; //undefined (no value assigned yet)
let symbol = Symbol("unique"); //symbol (unique and immutable value)

// Object data type

console.log(typeof undefined); // undefined
console.log(typeof null); // object (this is a known bug in JS)