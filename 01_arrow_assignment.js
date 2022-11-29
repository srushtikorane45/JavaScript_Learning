console.log("Name- Srushti Korane");
console.log("Assignment-Arrow Function");
console.log(                                                                              );
console.log("----------------------------------------------------------------------------");
let show =  () => {
    console.log("1.Good Evening, Today is Friday");
}
show();

console.log("-----------------------------------------------------------------------------");
let show1 =  (a1,a2,a3) => {
    console.log(`Multiplication of ${a1}, ${a2}, ${a3}, is: ${a1*a2*a3}`);
}
show1(5,5,2);
show1(10,4,2);
console.log("-----------------------------------------------------------------------------");
let show3=(v1,v2,v3,v4,v5)=>{
    console.log(`Addition of given values: ${v1+v2+v3+v4+v5}`);
  return v1+v2+v3+v4+v5;
}
show3(100,100,200,349,756);
show3("I am ","learning ","ES6 ","features ","in depth")