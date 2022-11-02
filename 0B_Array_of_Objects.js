class Bank{
    constructor(bank_name,location,account_no,IFSC,interest_rate){
        this.bank_name=bank_name;
        this.location=location;
        this.account_no=account_no;
        this.IFSC =IFSC;
        this.interest_rate=interest_rate
    }

}
let axis_bank=new Bank("Axis Bank","Kolhapur",203500765434,"UTIB0000278","9%");
let sbi_bank=new Bank("SBI Bank","Pune",204500765434,"SBIN0000300","8%");
let icici_bank=new Bank("ICICI Bank","Ruikar colony",205500765434,"ICIC0002634","10%");
let kotak_bank=new Bank("Kotak Bank","Tarabai Park",206500765434,"KKBK0000191","5%");
let hdfc_bank=new Bank("HDFC Bank","Alexa Park",207500765434,"HDFC0000001","8%");
let punjab_bank=new Bank("Punjab_Bank","Vasant Plaza",208500765434,"PUNB0006700","6%");

console.log("======================================== Bank name and Location =========================================");
const array=[axis_bank,sbi_bank,icici_bank,kotak_bank,hdfc_bank,punjab_bank];
for(let i=0;i<array.length;i++){
    const element=array[i];
}
for (const Bank of array) {
    console.log(`${Bank.bank_name}: ${Bank.location}`);

    
}
console.log("======================================== Object having name Kotak =========================================");
for (const Bank of array) {
    if(Bank.bank_name=="Kotak Bank"){
        console.log(Bank);
    }
}
console.log("================================================ Bank Details =========================================");
for (const Bank of array) {
    console.log(Bank);
}