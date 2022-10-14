function evenOrOdd(arg1){
    if(arg1%2==0){
        console.log(arg1 ," is EVEN");
    }
    else{
        console.log(arg1,"is ODD");
    }
}
evenOrOdd(45);
evenOrOdd(70);
evenOrOdd(67);
evenOrOdd(98);
console.log("-----------------------------------------------------------");
function eligibleForVote(arg2){
    if(arg2>=18){
        console.log(arg2,"The person is eligible for vote");
    }
    else{
        console.log(arg2,"The person is not eligible for vote");
    }
}
eligibleForVote(18);
eligibleForVote(20);
eligibleForVote(17);
eligibleForVote(40);
console.log("-----------------------------------------------------------");
function string(char){
    if(char.length>10){
        console.log("JavaScript-ES6: Yes string characters are more than 10");
    }
    else{
        console.log("JavaScript-ES6: No string characters are not more than 10");
    }
}
string("JavaScript-ES6");
console.log("---------------------------------------------------------------------");
function check(word){
  if(word.startsWith("Java")){
console.log("The given word start with Java");}        }

check("JavaScript");