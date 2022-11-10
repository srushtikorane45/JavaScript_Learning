const array_numbers=[2,3.5,8,6,6];
 const newArray=array_numbers.filter((element)=>{
    return element>=4;
 }
 );
 console.log(newArray);
 console.log(array_numbers);
 console.log("===================reduce() ===============================");

 const arrayOfnumbers=[2,3.5,8,6,6];
 const sum=array_numbers.reduce((value,runningValue)=>{
    return value+runningValue;
 }
 );
 console.log(sum);
 