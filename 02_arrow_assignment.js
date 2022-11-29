console.log("Name- Srushti Korane");
console.log("Assignment 02");
console.log("----------------------------------------------------------------------------");
class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil= new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha= new Employee(33,"Radha","HR","74000","Wipro");
const emp_rishi= new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali= new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika= new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny= new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy");

const arr=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

for (const Employee of arr) {
    if(Employee.emp_company=="TCS"){
        console.log(`Employee Name:${Employee.emp_name}, Company Name: ${Employee.emp_company}` );
    }
    
}
console.log("                                                                                        ");
console.log("--------------------------- Employee from Finance Dept ---------------------------------");
for (const Employee of arr) {
    if(Employee.emp_dept=="Finance"){
        console.log(`Employee Name:${Employee.emp_name}, Department Name: ${Employee.emp_dept}` );
    }
    
}
console.log("                                                                                        ");
console.log("--------------------------- Employee name starts with 'R' ---------------------------------");
for (const Employee of arr) {
    const char='R'; 
    if(Employee.emp_name.startsWith(char)){
        console.log(Employee );
    }
    
}
console.log("                                                                                        ");
console.log("--------------------------- Employee Salary greater than '70000' ---------------------------------");
for (const Employee of arr) {
    if(Employee.emp_salary>70000){
        console.log(`Employee Name:${Employee.emp_name}, Company Name: ${Employee.emp_company}, Salary:${Employee.emp_salary}` );
    }
    
}
console.log("                                                                                        ");
console.log("--------------------------- Employee Salary greater than and equal to '50000' ---------------------------------");
for (const Employee of arr) {
    if(Employee.emp_salary>=50000 && Employee.emp_dept=="IT"){
        console.log(Employee );
    }
    
}
console.log("                                                                                        ");
console.log("--------------------------- Employees from company 'Infy' ---------------------------------");
for (const Employee of arr) {
    if(Employee.emp_company=="Infy"){
        console.log(Employee );
    }
    
}