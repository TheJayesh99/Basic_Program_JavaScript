const prompt = require("prompt-sync")();
let number = prompt("Enter day of a week ");
//assuming day 1 as Sunday i.e 1st day of week
switch (number) {
  case "1":
    console.log("sunday");
    break;
  case "2":
    console.log("monday");
    break;
  case "3":
    console.log("tuesday");
    break;
  case "4":
    console.log("wednessday");
    break;
  case "5":
    console.log("thrusday");
    break;
  case "6":
    console.log("friday");
    break;
  case "7":
    console.log("saturday");
    break;
  default:
      console.log("Invalid input");
    break;
}
