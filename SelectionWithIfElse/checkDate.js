const prompt = require("prompt-sync")();
let month = prompt("Enter month in number ");
let day = prompt("Enter day ");

if ((month) => 3 && month < 7 && day > 0 && day <= 32) {
  if (day > 20 && month == 3) {
    console.log("True");
  } else {
    if (month == 4 || month == 5) {
      console.log("True");
    } else {
      if (day < 20) {
        console.log("True");
      } else {
        console.log("False");
      }
    }
  }
} else {
  console.log("False");
}
