let a = 11
let b = 3
let c = 5
let exp1 = a+b*c
let exp2 = a%b+c
let exp3 = c+a/b
let exp4 = a*b+c

let maximum = 0
let minimum = 0
// For maximum
if (exp1 > exp2 && exp1 > exp3 && exp1 > exp4) {
    maximum = exp1
}else if (exp2 > exp3 && exp2 > exp4){
    maximum = exp2
}else if (exp3 > exp4){
    maximum = exp3
}else{
    maximum = exp4
}

// For minimum
if (exp1 < exp2 && exp1 < exp3 && exp1 < exp4) {
    minimum = exp1
}else if (exp2 < exp3 && exp2 < exp4){
    minimum = exp2
}else if (exp3 < exp4){
    minimum = exp3
}else{
    maximum = exp4
}

console.log(`Minimum value ${minimum} and Maximum value ${maximum}`);