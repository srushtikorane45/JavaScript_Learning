 var wordLengthSquare=function string(arg1){
    console.log(arg1);
    var leng=arg1.length;
    console.log("Length of word: ",leng);
    console.log("--------------------------------------");
    return leng*leng;
    }
    wordLengthSquare("JavaScript");
    wordLengthSquare("Google");
    wordLengthSquare("Developer");
    
    var sen="I am Angular Developer";
   
     var stringLength=sen.length;
     console.log("Length of string:",stringLength);
     var numberOfWords=sen.split(" ");
     var count=numberOfWords.length;
     console.log("Number of words in string: ",count);
     console.log( "After deviding with number of words:",stringLength/count);
     console.log("After multiplying with number of words:",stringLength*count);
     console.log("==================================Assignment 02=============================");
     function fun(arg1,arg2){
      console.log("Greater Value:",arg1>arg2?arg1:arg2);
     }
   
     fun(10,-10);
     fun(800,899);
    function evenOrOdd(v1){
      console.log(v1,v1%2==0);
    }
    evenOrOdd(29);
    evenOrOdd(44);
    evenOrOdd(0);
    evenOrOdd(101);
    console.log("-------------------------------------------------------");
   
    function word(w1){
      var check=w1.length;
      console.log("Number of words:",w1.length);
      
   console.log(check%2==0?"EVEN":"ODD"); }
    word("JavaScript");
    word("Google");
    word("Developer");

