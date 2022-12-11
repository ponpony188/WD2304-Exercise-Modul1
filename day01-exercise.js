//Exercise1:
let panjang = 4;
let lebar = 7;
let area = panjang * lebar;
console.log(area);

//Exercise2:
let panjang1 = 5;
let lebar2 = 9;
const luas = panjang * lebar;
console.log (2 * area)

//Evercise3;
let d5 = 7;
let pi = 3.14;
let area1 = pi * d5 * d5
console.log(0,25 * area1);

//Exercise4:
//mencari sudut segitiga dari segitiga
let a = 90;
let b = 65;
let c = 180 - (a+b);
console.log('sudut c adalah :' + c);

//Exercise5;
//untuk mendapatkan perbedaan antara tanggal dalam hari.========
let tanggal1 = new Date ("2020-01-06");
let tanggal2 = new Date ("2022-05-02");
let perbedaanTanggal = Math.abs(tanggal2 - tanggal1);
// 1.math.abs: Math.abs() di JavaScript berfungsi untuk menghasilkan nilai absolut 
// 2. atau nilai positif dari nilai negatif yang di tentukan didalam argumen angka didalam fungsi tersebut.
// 3. syntax nya math.abs(value);

let perbedaanHari = Math.round (perbedaanTanggal/ (1000 * 3600 * 24));
//math.round : object math di javascript yang dimana fungsi tersebut untuk 
//mengembalikan nilai yang sudah ditentukan 
//ke nilai integer atau nilai bulat yang paling terdekat , dan biasanya nilai 
//yang ditentukan tersebut adalah nilai yang memiliki koma.
//math.round syntaxnya math.round(x) --> x nya harus number /variable.

console.log(`Perbedaan tanggal1 dan tanggal 2 adalah ${perbedaanHari} hari `)

//Exercise6: mengubah hari menjadi tahun, bulan, dan hari.;
//Example : 400 days → 1 year, 1 month, 5 days
//○ 1 year : 365 days, 1 month : 30 days
let Hari = 3600;
let tahun = Math.floor(Hari/365);
let bulan = Math.floor((Hari % 365) / 30);
let tanggal = Math.floor ((Hari % 365) % 30);
console.log(tahun + "tahun, " + bulan + "bulan, " + tanggal + "hari ");