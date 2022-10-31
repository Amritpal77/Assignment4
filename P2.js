// infinite loop to add numbers 

const chd=require("readline-sync")
var num1, sum=0

do
{
    num1=chd.questionInt("Enter number: ")
    sum+=num1 
    console.log("Sum is:",sum)
}
while(num1>0)


