//TASK 1
let mynumber = 10;
let mystring = "Hello, javavscript!";

console.log(mynumber);
console.log(mystring);

//TASK 2
for (let i = 0; i < 11; i += 1) {
    console.log(i);
};

for (let x = 1; x <= 5; x++) {
    let number = 3 * x;
    console.log(number);
};

//TASK 3
function addnumbers(num1, num2) {
    return num1 + num2;
}
const result = addnumbers(4, 5);
console.log(result);

function multiplynumbers(num1, num2){
    return num1 * num2;
}
const product = multiplynumbers(8, 9);
console.log(product);