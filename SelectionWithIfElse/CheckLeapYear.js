const prompt = require("prompt-sync")();
let year = prompt("Enter the yaer to be checked ");
if (year > 999 && year < 10000) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log("Its a leap year");
    } else {
        console.log("its not a leap year");
    }
} else {
    console.log("Enter 4 digit number");
}
