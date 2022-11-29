var arrayOfNames=['Kamat','Memon','Nashpati','Taimur','Menon','Kamat','Andy','Taimur'];
console.log("============================= Original Array ============================");
console.log(arrayOfNames);
function removeDuplicate(arrayOfNames){
    return [...new Set(arrayOfNames)];
}
console.log("============================= After removing duplicates ============================");
console.log(removeDuplicate(arrayOfNames));
var count=arrayOfNames.length-(removeDuplicate(arrayOfNames).length);
console.log("============================= Length of duplicates removed ============================");
console.log(count);
console.log("===================== Total number of elements after removing duplicates ============================");
console.log(removeDuplicate(arrayOfNames).length);