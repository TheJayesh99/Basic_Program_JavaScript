const prompt = require("prompt-sync")()
let number  = prompt("Enter day of a week ")
//assuming day 1 as Sunday i.e 1st day of week
if (number == 1) {
    console.log("Sunday");
}else if (number == 2 ) {
    console.log("Monday");
}else if (number == 3 ) {
    console.log("Tuesday");
} else if (number == 4 ) {
    console.log("Wednessday");
} else if (number == 5 ) {
    console.log("Thrusday");
} else if (number == 6 ) {
    console.log("Friday");
} else if (number == 7 ){
    console.log("Saturday");
}else{
    console.log("Invalid input");
}