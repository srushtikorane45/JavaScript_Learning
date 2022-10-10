function my_function(){
console.log("I have completed my diploma in electronics and telecommunications");
console.log("I love javascript");
}
my_function();
console.log("==================================================================");

function my_name(firstName,lastName){
    console.log(firstName,lastName);
}
my_name("Srushti","Korane");


function swap_values(v1,v2){
    console.log("==========================Before Swap=============================");
    console.log(v1,v2);
    console.log("==========================After Swap=============================");
    var temp=v1;
    v1=v2;
    v2=temp;
    console.log(v1,v2);
}
swap_values("Virat","Anushka");
swap_values(1000,2000)
console.log("=============================Addition==================================");
 
 function add_three_numbers(num1,num2,num3){
    console.log(num1+num2+num3);
 }
 add_three_numbers(10.23,600,40);
 add_three_numbers("Hello"," Good"," Morning");


