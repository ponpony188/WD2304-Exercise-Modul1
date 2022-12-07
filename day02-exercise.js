//Write a code to convert celsius to fahrenheit.
let c = 64;
const f = (c * 9/5) + 32;
console.log (`${c} derajat celcius = ${f} derajat fahrenheit`);

//Write a code to check whether the number is odd or even
let num9 = 3;
if (num9 % 2){
    console.log(`${num9} is odd`);
} else {
    console.log(`${num9} is even`)
}

//Write a code to check whether the number is prime number or not
let num2 = 8;
let bool1 = true;
for (let i = 2; i < num2; i++){
    if (num2 % i == 0){
        bool1 = false
        break;
    }
}
console.log(bool1 ? `${num2} is prime number` : `${num2} is not a prime number`)

//Write a code to find the sum of the numbers 1 to N.
//Example : 5 → 1 + 2 + 3 + 4 + 5 = 15
let num8 = 10;
let sum = 0;
let message5 ="";
let o = 0;
    for (i = 1; i <= num8; i++){
    sum += 1;
    if (i != 1){
        message5 += '->'
    }
    message5 += `${i}`;
    console.log(i)
}
console.log (`sum of the numbers ${message5} = ${sum}`)

//Write a code to find factorial of a number.
function factorial(n){
    let answer =1;
    if (n == 0 || n == 1){
        return answer;
    }else{
        for (var i = n; i >= 1; i--){
            answer = answer * i ;
        }
        return answer;
    }
    }
    let n =4;
    answer = factorial(n)
    console.log ("the factorial of " + n + " is " + answer);

//Write a code to print the first N fibonacci numbers.
let N = 8;
let A = 0;
let b = i;
let str = "";
for (let i = 0; i< N; i++){
 temp = A + b;
 if (i != 0){
     str += "."
 }
str += A.toString()

A =b;
b =temp;
}
console.log(`${N}=  ${str}`)