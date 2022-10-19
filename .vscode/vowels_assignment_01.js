

// Count the total number vowels using includes() for string → “Good Morning IT Champ”
var countVowels = function(myString) {
    console.log("Count the total number vowels using includes()");
    //var myString = "Good Morning IT Champ";
    var vowelsLoweCase = "aeiou";
    var vowelUpperCase = "AEIOU";
    var vowelsCount=0;
    for (let index = 0; index < myString.length; index++) {
       var char =  myString.charAt(index);
       var isLowerAvailable =  vowelsLoweCase.includes(char);
       var isUpperAvailable =  vowelUpperCase.includes(char);
       if (isLowerAvailable || isUpperAvailable) {
            vowelsCount = vowelsCount + 1;
       }
    }
    console.log(`Good Morning IT Champ : ${vowelsCount}`);
}
countVowels("Good Morning IT Champ");

var countvowel=function(myStrings) {
var lowercase = myStrings.toLowerCase();
var vowels="aeiou";
var count=0;
for(let j=0;j<myStrings.length;j++){
    var check=lowercase.charAt(j);
    var isAvailable=vowels.includes(check);
    if(isAvailable){
        count=count+1;
    }
} 
console.log(`I Love JavaScript : ${count}`);
}
countvowel("Good Morning IT Champ");
console.log("---------------------------------------------------------------------------");
var sum=function(arg1){
    var total=0;
    for(let j=0;j<=10;j++){
        total=total+j;

    }
    console.log(`sum of all numbers from 1 to 10 : ${total}`);
}
sum(10);
console.log("---------------------------------------------------------------------------");
var square=function(arg2){
    var squaresum=0;
    for(let k=0;k<=arg2;k++){
        Squares=k*k;
        squaresum=squaresum+Squares;
    }
    console.log(`square of numbers from 1 to 5: ${squaresum}`);
}
square(5);
console.log("-----------------------------------------------------------------------------");
var evenPositionChars=function(arg3){
    
    for(let i=0;i<arg3.length;i++){
        if(i%2==0){
            console.log(arg3.charAt(i));
        }
    }
}
evenPositionChars("Hard work always pays back")
console.log("------------------------------------------------------------------------------");
