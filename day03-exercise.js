//1. Write a code to display the multiplication table of a given integer.
let angka = 7;
for(let i = 1; i <= 10; i++){
const hasil = i * angka;
console.log(`${angka} x ${i} = ${hasil}.`);
}

//2. Write a code to check whether a string is a palindrome or not.
let kata = 'madam';
let reverseString = kata.split("").reverse().join("");
if (kata === reverseString){
console.log('kata ' + kata + ' = palindrome');
} else {
console.log('kata ' + kata + ' = bukan palindrome');
};

//3. Write a code to convert centimeter to kilometer.
let cm2 = 1000;
let cmToKm = cm2 / 100000.0;
console.log(cmToKm + ' km');

//4. Write a code to format number as currency (IDR)
//Example : 1000 → “Rp. 1.000,00”
const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
      }).format(number);
    }
  
  console.log(rupiah(1000))

//5.Write a code to remove the first occurrence of a given “search string” from a string
//Example : string = “Hello world”, search string = “ell” → “Ho world”
let text = "Hello World!";
let result = text.slice(0, 1) + text.slice(4);

console.log(result)

//6.Write a code to capitalize the first letter of each word in a string
//Example : “hello world” → “Hello World”
let kalimat = "Hello World";
let kata3 = kalimat.split(" "); 
console.log(kata3);

for (let i = 0; i < kata3.length; i++) {
console.log(kata3[i],kata3[i][0], i)
kata3[i] = kata3[i][0].toUpperCase() + kata3[i].substr(1); 
}

console.log(kata3.join(" ")); 

//7.Write a code to reverse a string.
let temp2 ="";
let str3 = "hello"
console.log(str3.length)

for (let i = 0 ; i< str3.length; i++){
  console.log(str3[str3.length - 1 - i]);
  console.log(str3.length - 1 - i)
  temp2 += str3[str3.length - 1 - i];
  console.log(temp2)
}
console.log(temp2); 