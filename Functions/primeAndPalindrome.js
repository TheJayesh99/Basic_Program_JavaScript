const prompt = require("prompt-sync")();

function checkPalindrome(number) {
  let temp = number;
  let reverse = 0;
  while (number > 0) {
    let remainder = Math.round(number % 10);
    reverse = reverse * 10 + remainder;
    number = Math.round(number / 10);
  }
  if (temp == reverse) {
    return 1;
  } else {
    return 0;
  }
}

function checkPrime(number) {
  let numNotPrime = 0;
  for (let count = 2; count < number; count++) {
    if (number % count == 0) {
      numNotPrime++;
      break;
    }
  }
  if (!numNotPrime) {
    return 1;
  } else {
    return 0;
  }
}

let number = prompt("Enter the number ");
if (checkPrime(number)) {
  console.log("number is prime");
  if (checkPalindrome(number)) {
    console.log("number is plaindrome");
    if (checkPrime) {
      console.log("palindrome is also prime");
    } else {
      console.log("palindrome is not palindrome");
    }
  } else {
    console.log("not a plaindrome");
  }
} else {
  console.log("Number is not prime");
}
