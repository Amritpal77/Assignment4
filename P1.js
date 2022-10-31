// Sum of 2 numbers using while loop

const chd=require("readline-sync")
var num1, num2, sum
num1=chd.questionInt("Enter 1st number: ")
num2=chd.questionInt("Enter 2nd number: ")

while(num1>0 && num2>0){
    sum=num1+num2
    console.log("Sum is: ",sum)
    break
}