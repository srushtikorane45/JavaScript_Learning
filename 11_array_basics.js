var arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
console.log("========== Resize array========");
console.log(arrayOfNumbers.length);
arrayOfNumbers.length = 3;
console.log(arrayOfNumbers.length);
console.log(arrayOfNumbers);
console.log("========== Resize array========");

const array1 = [1, 3, 4];
const array2 = [5, 6, 7];
// const array3 = array1.concat(array2);
const array3 = [...array1, ...array2]
console.log(array3);
console.log("-----------------------------");
