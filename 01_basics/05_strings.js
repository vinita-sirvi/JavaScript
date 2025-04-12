const name = "Vini"
const repoCount = 10

// console.log("Hello " + name + " your repo count is " + repoCount) // string concatenation
console.log(`Hello ${name} your repo count is ${repoCount}`) // string interpolation (template literals)

const gameName = new String ('Vinita')
// console.log(gameName[0]);
// console.log(gameName.__proto__); // String.prototype
// console.log(gameName.length); // 6 (length of the string)
// console.log(gameName.charAt(0)); // V (character at index 0)
// console.log(gameName.indexOf('i')); // 2 (index of the first occurrence of 'i')

const newString = gameName.substring(0, 3) // substring from index 0 to 3 (exclusive)
console.log(newString); // Vin (substring from index 0 to 3)

const anotherString = gameName.slice(-5, 3) // slice from index 0 to 3 (exclusive)
console.log(anotherString); // Vin (slice from index 0 to 3)

const newStringOne = "   vini   "
console.log(newStringOne); 
console.log(newStringOne.trim()); // "vini" (removes whitespace from both ends of the string)

const url = "https://www.vin#20ita.com/learn/javascript"
console.log(url.replace("#20", "-")); // "https://www.vinita.com/learn/javascript" (replaces "#20" with "20")
console.log(url.includes("vin")); // true (checks if "vin" is present in the string)