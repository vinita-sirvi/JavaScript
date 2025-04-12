// Dates

let date = new Date(); // Current date and time
// console.log(date); // Current date and time

// console.log(date.toString()); // Convert to string
// console.log(date.toDateString()); // Convert to date string
// console.log(date.toTimeString()); // Convert to time string
// console.log(date.toISOString()); // Convert to ISO string
// console.log(date.toUTCString()); // Convert to UTC string
// console.log(date.toLocaleString()); // Convert to locale string     

// console.log(typeof date); // Object

let Cdate = new Date(2023, 0, 1); // January 1, 2023
// console.log(Cdate.toDateString()); // 2023-01-01T00:00:00.000Z

let Cdate2 = new Date("2023-01-01"); // January 1, 2023
// console.log(Cdate2.toLocaleString()); // 2023-01-01T00:00:00.000Z

let myTime = Date.now(); // Current timestamp in milliseconds
// console.log(myTime); // Current timestamp in milliseconds
// console.log(Cdate.getTime()); // Timestamp of Cdate in milliseconds

// console.log(Math.floor(myTime / 1000)); // Current timestamp in seconds 

let newDate = new Date();
console.log(newDate); // Current date and time
console.log(newDate.getMonth() + 1); // Current month (0-11)

newDate.toLocaleString('default', { weekday: 'long' }); // Current month in long format
console.log(newDate.toLocaleString('default', { weekday: 'long' })); // Current month in long format







