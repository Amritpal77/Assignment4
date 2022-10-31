// Adddition of first and last digit of a number 
const chd=require("readline-sync")
var n,sum, firstdigit, lastdigit
n=chd.questionInt("Enter a number: ")
lastdigit=n%10

while(n>=10){
    n=n/10
}
firstdigit=~~n
console.log("First digit is",firstdigit)
console.log("Last digit is",lastdigit)
sum=firstdigit+lastdigit
console.log("Sum of first and last disgit is:",sum)