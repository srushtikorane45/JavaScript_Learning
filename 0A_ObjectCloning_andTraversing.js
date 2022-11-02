const bank_sbi={
    Name:"SBI Bank",
    Branch:"Kolhapur",
    Contact: 9789067865,
    Manager:"Mohit Sharma"

}
const bank_location={
    Street:"Alexa Park",
    City:"Kolhapur",
    Pin_code:416112
}
let merge_element =Object.assign({},bank_sbi,bank_location);
 let merge1={...bank_sbi,...bank_location};
console.log("========================= Cloning using object.assign() method =======================");
console.table(merge_element);
console.log("========================= Cloning using spread operator method =======================");
console.table(merge1);
const rate_of_interest={
    home_loan_interest:10000,
    personal_loan_interest:5000,
    due_interest:3000
}
const sbi_details={...bank_sbi,...bank_location,...rate_of_interest}
console.log("========================= sbi details =======================");
console.table(sbi_details);

