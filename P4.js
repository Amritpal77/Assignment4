// Reverse a number 
const chd=require("readline-sync")
var n, rev=0, n2
n=chd.questionInt("Enter a number: ")
while(n>0){
    n2=n%10
    rev=rev*10+n2
    n=~~(n/10)
}
console.log("Reverse number is",rev)