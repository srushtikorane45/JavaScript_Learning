const bank_sbi={
    bank_name:"SBI Bank",
    Address:"Kolhapur",
    Employees:14,
    Manager:"Mr. K. S. Patil"
}
const bank_location={
    Street:"Tararani Street",
    City:"Pune",
    Pincode:416112
}
const cloned_object1=Object.assign({},bank_sbi);
const cloned_object2=Object.assign({},bank_location);
console.log("====================== Cloned using Object.assign() Method =======================");
console.log(cloned_object1);
console.log(cloned_object2);
console.log("====================== Cloned using Spread Operator =======================");
const using_spreadOperator1={...bank_sbi};
const using_spreadOperator2={...bank_location};
console.log(using_spreadOperator1);
console.log(using_spreadOperator2);

const rate_of_interest={
    home_loan_interest:"10%",
    personal_loan_interest:"9%",
    due_interest:"7%"
}
console.log("====================== Merged object using Object.assign() method =======================");

const sbi_details=Object.assign({},bank_sbi,bank_location,rate_of_interest);
console.table(sbi_details);
console.log("====================== Merged object using Spread Operator =======================");
const sbi_details2={...bank_sbi,...bank_location,...sbi_details};
console.table(sbi_details2);


