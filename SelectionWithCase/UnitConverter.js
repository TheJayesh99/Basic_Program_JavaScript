const prompt = require("prompt-sync")();
let value = prompt("Enter A Unit to convert : ");
let choice = prompt(
  "What you have to do 1) feet to inch 2) Inch to Feet 3) Feet to Meter 4) Meter to Feet : "
);

switch (choice) {
  case "1":
    result = value * 12;
    break;
  case "2":
    result = value * 0.3048;
    break;
  case "3":
    result = value * 0.0833;
    break;
  case "4":
    result = value * 3.28;
    break;
  default:
      result = "Invaid Choice"
    break;
}
console.log("Result "+result);
