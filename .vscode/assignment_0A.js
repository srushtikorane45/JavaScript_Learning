function maleMarriageEligibility(gender,age,boyName){
 var check=(gender=="Male" && age>=21 ?`Hey ${boyName} your eligible for Marriage`:`Hey ${boyName}your not eligible for Marriage`);
 console.log(check);  
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");
console.log("-------------------------------------------------------------------------");
function femaleMarriageEligibility(gender,age,girlName){
    if(gender=="Female" && age>=18){
        console.log(`Hey ${girlName} you are eligible for Marriage`);
    }
    else{
        console.log(`Hey ${girlName} your not eligible for Marriage`);
    }
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates")
