// Add all number of a digit
const chd=require("readline-sync")
var num, sum=0
num=chd.questionInt("Enter a number: ")
while(num>0){
    sum+=num%10
    num=~~(num/10)
    
}
console.log(sum)