const prompt = require("prompt-sync")();
let number = prompt("Enter a number to check ");
let numNotPrime = 0
for (let count = 2; count <number ; count++) {
    if (number % count  == 0) {
        numNotPrime++
        break;
    }
}
if (numNotPrime) {
    console.log("Number is not prime");
} else {
    console.log("Number is prime");
}