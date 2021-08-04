const prompt = require("prompt-sync")();
let number = prompt("Enter he number ");
let numberOfDigits = number.length;
switch (numberOfDigits) {
  case 1:
    console.log("unit");
    break;
  case 2:
    console.log("tens");
    break;
  case 3:
    console.log("hundred");
    break;
  case 4:
    console.log("Thousand");
    break;
  default:
      console.log("Invalid value");
    break;
}
