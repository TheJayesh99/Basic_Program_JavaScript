number1 = (Math.floor(Math.random() * 100) % 900) + 100
number2 = (Math.floor(Math.random() * 100) % 900) + 100
number3 = (Math.floor(Math.random() * 100) % 900) + 100
number4 = (Math.floor(Math.random() * 100) % 900) + 100
number5 = (Math.floor(Math.random() * 100) % 900) + 100
console.log(number1,number2,number3,number4,number5)
//for maximum
if (number1 > number2 && number1 > number3 && number1 > number4 && number1 > number5 )
{
    console.log("maximum number "+number1)
}
if (number2 > number1 && number2 > number3 && number2 > number4 && number2 > number5 )
{
    console.log("maximum number "+number2)
}
if (number3 > number2 && number3 > number1 && number3 > number4 && number3 > number5 )
{
    console.log("maximum number "+number3)
}
if (number4 > number2 && number4 > number3 && number4 > number1 && number4 > number5 )
{
    console.log("maximum number "+number4)
}
if (number5 > number2 && number5 > number3 && number5 > number1 && number5 > number4 )
{
    console.log("maximum number "+number5)
}

//for minimum
if (number1 < number2 && number1 < number3 && number1 < number4 && number1 < number5 )
{
    console.log("minimum number "+number1)
}
if (number2 < number1 && number2 < number3 && number2 < number4 && number2 < number5 )
{
    console.log("minimum number "+number2)
}
if (number3 < number2 && number3 < number1 && number3 < number4 && number3 < number5 )
{
    console.log("minimum number "+number3)
}
if (number4 < number2 && number4 < number3 && number4 < number1 && number4 < number5 )
{
    console.log("maximum number "+number4)
}
if (number5 < number2 && number5 < number3 && number5 < number1 && number5 < number4 )
{
    console.log("minimum number "+number5)
}