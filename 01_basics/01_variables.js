const accountId = 1234567890;
let accountName = "JohnDoe";
var accountBalance = 1000.50;
const isActive = true;
let AccountStatus;

console.log(accountId);

/*
Prefer not to use var, as it has function scope and can lead to unexpected behavior.
Use let or const instead.
*/
console.table([accountId, accountName, accountBalance, isActive, AccountStatus]);
// console.log("Hello, World!");