var my_number = 100;
var your_number = 200;
var temp= my_number;
my_number=your_number;
your_number=temp;
console.log(my_number,your_number);

var temp= your_number;
your_number=my_number;
my_number=temp;
console.log(my_number,your_number);