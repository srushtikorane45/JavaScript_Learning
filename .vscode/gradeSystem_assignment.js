function gradeSystem(score){
    if(score<35 && score>0){
        console.log(`Marks: ${score} You are Failed`);
        console.log("----------------------------");
    }
    if(score>=35 && score<60){
        console.log(`Marks: ${score} Passed with grade 'C'`);
        console.log("------------------------------------");
    }
    if(score>60 && score<75){
        console.log(`Marks: ${score} You are passed with Grade 'B'`);
        console.log("---------------------------------------");
    }
    if(score>=75 && score<=90){
        console.log(`Marks: ${score} You are passed with Grade 'A'`);
        console.log("----------------------------------------");
    }
    if(score>=90 && score<100){
        console.log(`Marks: ${score} You are passed with Grade 'A+'`);
        console.log("----------------------------------------");
    }
    if(score<0 || score>100 || score==String || score==null || score==undefined){
        console.log(`Marks: ${score} Invalid input`);
        console.log("-----------------------------------------");
    }
}
gradeSystem(66);
gradeSystem(13);
gradeSystem("");
gradeSystem(98);
gradeSystem("fifty five");
gradeSystem(35);
gradeSystem(75);
gradeSystem(null);
gradeSystem(undefined);
gradeSystem(-20);
gradeSystem(55);
gradeSystem(82);