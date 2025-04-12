// const score = 100; //number
// console.log(score); // 100


// const balance = new Number(100); //object wrapper for number
// console.log(balance); // [Number: 100] (object wrapper for number)

// console.log(balance.toString()); // "100" (converts number to string)

// const otherN = 23.1745848
// console.log(otherN.toPrecision(2)); // 23.574 (converts number to string with 5 decimal places)

// const hundred = 1000000
// console.log(hundred.toLocaleString('en-IN')); // 10,00,000 (converts number to string with Indian locale formatting)



// *************** Math Object ******************

// console.log(Math.PI); // 3.141592653589793 (value of PI)
// console.log(Math.E); // 2.718281828459045 (value of Euler's number)     
// console.log(Math.sqrt(25)); // 5 (square root of 25)
// console.log(Math.abs(-5)); // 5 (absolute value of -5)
// console.log(Math.ceil(5.2)); // 6 (rounds up to the nearest integer)
// console.log(Math.floor(5.8)); // 5 (rounds down to the nearest integer)

console.log(Math.random());
console.log(Math.random()*10 + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // generates a random number between min and max (inclusive)