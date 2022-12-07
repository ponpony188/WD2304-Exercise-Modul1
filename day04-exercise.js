// Exercise Day-04
//1. Create a function that can create a triangle 
// pattern according to the height we provide like the following :
// 01
// 02 03
// 04 05 06 
// 07 08 09 10
let pyramid = 6; //limit seharusnya output 5 baris
function Triangle(height) {
  let value = 1;
  let result = ""; //nampung jawaban string
  //[i] itu buat array aja
  for (let i = 0; i < height; i++) {
    for (let j = 0; j <= i; j++) {     // j<=1 supaya dinamis
      // result += value++ + " ";
      // console.log(result);
      if (value > 9) {
        result += value++ + " ";
        console.log(result);
      } else {
        result += "0" + value++ + " ";
        console.log(result);
      }
    }
    result += "\n";
  }

  return result;
}
let heightAQ1 = Triangle(4); //atauheightQ1
console.log(heightAQ1);

//buat deklarasi variable dulu 
//memasukan fungsi namanya itungBMI dengan parameter bmi.
//lalu disini memakai nested loop dimana pengulangan for (i...)
//lalu return untuk mengeluarkan value dari dalam fungsi ke luar fungsi

//2.Create a function that can loop the number of times according to the input we provide, and will
//replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
//Parameters : n → total looping
function a(n){
    for (let i = 0; i <= n; i++){
        console.log(i % 15 ? ( i % 5 ? (i % 3 ? i : 'fizz') :'buzz') : 'fizzbuzz' );
    }
  }
  console.log(a(65));

  //3.Create a function to calculate Body Mass Index (BMI)
//Formula : BMI = weight (kg) / (height (meter))2
//Parameters : weight & height
//Return values :
//< 18.5 return “less weight”
//18.5 - 24.9 return “ideal”
//25.0 - 29.9 return “overweight”
//30.0 - 39.9 return “very overweight”
//> 39.9 return “obesity”
//`${} ==> memasukan variable langsung kedalam "" string

let tinggi = 1.62; //buat deklarasi variable dulu 
let berat = 60;
let bmi = berat / tinggi **2;
console.log(bmi)

function itungBMI (bmi){ //memasukan fungsi namanya itungBMI dengan parameter bmi.
      if (bmi > 39.9){
      kategori = "obesity";
      console.log(kategori);
      } else if (bmi >= 30.0){
      kategori = "very overweight"
      console.log(kategori);
      } else if (bmi >= 25.0){
      kategori = "overweight"
      console.log(kategori);
      }  else if (bmi >= 18.5){
      kategori = "Ideal"
      console.log(kategori);
      } else if (bmi < 18.5){
      kategori = "Less Weight"
      console.log(kategori);
      }
      return kategori;
      }
      let bmic = itungBMI(bmi);
      console.log(` Kategori =  ${bmic}.`)

      //4. Write a function to remove all 
      //odd numbers in an array and return a new array that contains even numbers only
      let angka = [56,57,58,59,60]; //buat array nya dulu 
      let onlyEven = angka.filter(function (num){ // Function to filter even numbers
      return num % 2 === 0
      });
      console.log(onlyEven)

      //5.Write a function to split a string and convert it into an array of words
      // Example : “Hello World” → [“Hello”, “World”]
      let kalimat = "Hello World";
      let j = kalimat.split(" ").sort();
       console.log(j)

    //Fungsi adalah satu blok (kumpulan) perintah coding (statemens) 
//yang mempunyai tujuan atau fungsi tertentu. 
//Fungsi diproses atau dieksekusi apabila dipanggil oleh coding yang lain.

// return => value yang tersimpan dalam sebuah variabel kepada kode yang akan memanggil function tersebut.

// bahasa c dia harus menyiapkan block memory. 