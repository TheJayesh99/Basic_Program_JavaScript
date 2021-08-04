const prompt = require("prompt-sync")()
let number = prompt("Enter he number ")
if (number < 10 ) {
    console.log("Unit");
} else if (number < 100){
    console.log("Tens")
} else if (number < 1000){
    console.log("Hundred")
} else if (number < 100){
    console.log("Thousand")
}else{
    console.log("Invalid input");
}