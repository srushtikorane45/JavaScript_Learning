function leap_year(year){
    if(year%4==0 && year%100!=0|| year%400==0){
        console.log(`${year}:this is leap year`);
    }
    else{
        console.log(`${year}:this is not leap year`);
    }
}
leap_year(2022);
leap_year(2000);
leap_year(2024);
leap_year(null);


var number=(0%0)
console.log(number);