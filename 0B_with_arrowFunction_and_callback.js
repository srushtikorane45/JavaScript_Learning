const array_numbers=[1,-7,40,502,-77,91,0,108,89,-601];
array_numbers.forEach((current_value,index)=>{
    console.log(current_value ,index);
})
console.log("============== Positive Numbers ==========================");
array_numbers.forEach((current_value)=>{
    if(current_value>0){
        console.log(current_value);
    }
})
console.log("============== Negative Numbers ==========================");
array_numbers.forEach((current_value)=>{
    if(current_value<0){
        console.log(current_value);
    }
})
console.log("============== Even Numbers ==========================");
array_numbers.forEach((current_value)=>{
   if(current_value%2==0){
    console.log(current_value);
   }
})
console.log("============== sum of all numbers ==========================");
let sum=0;
array_numbers.forEach(current_value=>{
   
    sum+=current_value;
    
});console.log(sum)
console.log("============== Even Position Numbers ==========================");
array_numbers.forEach((current_value,index)=>{
  if(index%2==0){
    console.log(current_value);
  }
})
console.log("============== Odd Position Numbers ==========================");
array_numbers.forEach((current_value,index)=>{
    if(index%2!=0){
        console.log(current_value);
    }
})