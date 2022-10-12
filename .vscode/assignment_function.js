function square(value){
    console.log("square of given number is:",value*value);
}
square(5);
square(6);
square(25);
square(100);
console.log("--------------------------------------------------------");
function area(height,base){
    console.log("Area of Triangle:",1/2*height*base);
}
area(34,45);
console.log("--------------------------------------------------------");
function rectangle(length,width){
    console.log("Area of rectangle:",length*width);
}
rectangle(499,917);
console.log("--------------------------------------------------------");
function swap_values(arg1,arg2){
    console.log("Before Swap:",arg1,arg2);
    console.log("After Swap:",arg2,arg1);
}
swap_values("Virat","Anushka");
swap_values(1000,2000);
console.log("---------------------------------------------------------");
var name="JavaScript the most popular language";
var count=name.length;
console.log("Total character of string:",count);
var char=name.indexOf('S');
console.log("Index of char 'S':",char);
var ch=name.indexOf('lang');
console.log("Index of char 'lang':",ch);
var lindex= name.length-1;
var result=name.charAt(lindex);
console.log("Last character of string:",result);
var ltindex=name.length-3;
var r=name.charAt(ltindex);
console.log("Third last character of string:",r);
