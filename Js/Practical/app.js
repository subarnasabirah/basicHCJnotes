var number = prompt("Please enter a number");
var fact = 1;
if (number == 0) {
    console.log(`The factorial of ${number} is 1`);
} else if(number <= 0){
    console.log('The factorial of -ive number is not possible');
} else {
    for (i = 1; i <= number; i++){
        fact = fact * i;
    }
    console.log(`The factorial of ${number} is ${fact}`);
}
