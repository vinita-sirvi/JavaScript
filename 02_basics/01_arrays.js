// Arrays

const myArray = [1, 2, 3, 4, 5]; // Array of numbers
// const myArray2 = ['a', 'b', 'c', 'd', 'e']; // Array of strings
// const myArray3 = [1, 'a', true, null]; // Array of mixed types

// console.log(myArray); // [1, 2, 3, 4, 5]
// console.log(myArray2); // ['a', 'b', 'c', 'd', 'e']
// console.log(myArray3); // [1, 'a', true, null]
// console.log(myArray.length); // 5 (length of the array)
// console.log(myArray[0]); // 1 (first element of the array)

myArray.push(6); // Add an element to the end of the array
myArray.pop()
myArray.unshift(0); // Add an element to the beginning of the array
myArray.shift(); // Remove the first element of the array
// console.log(myArray.includes(9)); // [1, 2, 3, 4, 5]
// console.log(myArray.indexOf(3)); // 2 (index of the element 3 in the array)

const newArray = myArray.join(); // Create a new array from index 1 to 4 (not included)
// console.log(newArray); // 1,2,3,4,5 (string representation of the array)
// console.log(typeof newArray); // string (type of the new array)
// console.log(myArray); // [1, 2, 3, 4, 5, 6]




// Slice , splice
console.log("A", myArray)
const myn1 = myArray.slice(1, 4); // Create a new array from index 1 to 4 (not included)
console.log(myn1); // [2, 3, 4] (new array)



console.log("B", myArray) // [2, 3, 4] (new array)
const myn2 = myArray.splice(1, 4); // Remove elements from index 1 to 4 (not included) and return them
console.log(myn2); // [2, 3, 4] (removed elements)










