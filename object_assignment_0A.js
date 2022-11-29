let teacher={
    fullName: "Pooja Khopkar",
    city: "Kolhapur",
    "age": 38,
   
    "Subject": "Computer Science",
    "is_married": true,
     'degrees' :{
        degree: "Computer Science and UI Developer"
    },
     'Certificates' :{
        certificate1: 'Hacker Rank Participation',
        certificate2 : 'IFE course',
        certificate3:  'Adv Programming'
    }
   


}

console.log("Teacher degrees are:",teacher.degrees.degree);
console.log("-----------------------After adding Pincode--------------------------------");
teacher.Email = "khopkarpooja@gmail.com";
console.log("Added one new property named 'Email' ");
console.log(teacher.Email);
console.log("---------------------------------------------------------------------------");
console.log(`Before modification the subject was: ${teacher.Subject}`);
teacher.Subject="React";

console.log(`After modification the subject is: ${teacher.Subject}`);
console.log(teacher);
console.log("----------------------------------------------------------------------------");
console.log(`Before deletion of certificate2: ${teacher.Certificates.certificate2}`);
delete teacher.Certificates.certificate2;
console.log(`after deletion of certificate2: ${teacher.Certificates.certificate2}`);
console.log("-----------------------------------------------------------------------------");
teacher.Certificates.certificate4="Leetcode paticipation";
console.log(`Added new certificate in nested loop certificate4: ${teacher.Certificates.certificate4}`);
console.log(teacher.Certificates);

