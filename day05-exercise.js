//Nomor1
let a1 = [11,15,19,20]; //a1=array

//cara WITH no sort 
function value(arr) {
    let highest = a1[0]; //buat ngasih value dari array tsb
    let lowest = a1[0]; //saya buat lowest = a1 index ke 0 
    let sum = a1[0];
    let average = a1[0]; //changed from original post
    for (let i = 1; i < a1.length; i++) { 
        if (a1[i] > highest){
            highest = a1[i];
        }
        if (a1[i] < lowest) {
            lowest = a1[i];
        }
        sum = sum + a1[i];
        average = sum / a1.length;
    }
    return ["max : " + highest,"min : " + lowest, "average :" + average] //changed from original post
}

console.log(value(a1));

//cara WITH SORT (kalo pake sort udah lgsg ascending , tapi jangan lupa length 1)
//pake foreach juga bisa 
function value2(arr) {
    let lowest = "";
    let highest = "";
    let average = 0;
    let sum = 0;
    arr.sort();
    console.log(arr);
    lowest = arr[0];
    highest = arr[arr.length - 1]; //pake length - 1 karena index itu cuman sampe 5. 
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      average = sum / arr.length;
    }
    return ["highest : " + highest,"lowest : " + lowest, "average :" + average]
  }
  
  console.log(value2(a1));

  //Nomor2
  //Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
  const vehicles = ['Hiu', 'Paus', 'Ikan Pari', 'Belut'];

    const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
    console.log(formatter.format(vehicles));

  //Nomor3
  //buatkan fungsi untuk menghitung setiap elemen pada posisi yang sama dari dua array bilangan bulat.
  let array1 = [1,2,3,4];
  let array2 = [5,6,7,8];
  Array.SumArray = function (arr) {

        var sum = this.map(function (num, idx) {
          return num + arr[idx];
        });
 
        return sum;
    }
  let sum = array1.SumArray(array2);
  console.log(sum); // [6,8,10,12]

  let sumTwoArray = (arr1, arr2) => {
    let newArr = [];
    let length = arr1.length > arr2.length ? arr1.length : arr2.length;
    for (let i = 0; i < length; i++){
      let numb1 = arr1[i] ? arr1[i] : 0;
      let numb2 = arr2[i] ? arr2[i] : 0;
      newA
    }
  }

//Nomor 4
//function to remove all odd numbers in an array and 
//return a new array that contains even numbers only

let provided = ['Jeruk', 'Apel', 'Anggur'];

function comparison (val,Arr){
for (i = 0 ;i< Arr.length)
}