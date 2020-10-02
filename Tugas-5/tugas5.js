// soal 1
console.log("---- Soal 1 ----");
function halo() {
    return "Halo Sanbers!";
}

console.log(halo());

// soal 2
console.log();
console.log("---- Soal 2 ----");
function kalikan(num1, num2) {
    return num1 * num2;
}

var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

// soal 3
console.log()
console.log("---- Soal 3 ----");
function introduce(name, age, address, hobby) {
    return "Nama saya " + name
    + " umur saya " + age + " tahun"
    + ", alamat saya di " + address
    + ", dan saya punya hobby yaitu " + hobby + "!"
    ;
}
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)

// soal 4
// ubahlah array di bawah ini menjadi object dengan property nama, 
// jenis kelamin, hobi dan tahun lahir 
// (var arrayDaftarPeserta harus di olah menjadi object)
console.log();
console.log("---- Soal 4 ----");
// apakah dibuat function mas?
function convertToObject(array) {
    return {
        nama : array[0],
        "jenis kelamin" : array[1],
        hobi : array[2],
        "tahun lahir" : array[3],
    }
}
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var objectDaftarPeserta = convertToObject(arrayDaftarPeserta);
// atau langsung dikonversi manual ke objek seperti ini mas?
// var objectDaftarPeserta = {
//     nama : arrayDaftarPeserta[0],
//     "jenis kelamin" : arrayDaftarPeserta[1],
//     hobi : arrayDaftarPeserta[2],
//     "tahun lahir" : arrayDaftarPeserta[3],
// }
console.log(objectDaftarPeserta);

// soal 5
console.log();
console.log("---- Soal 5 ----");
var buaahh = [
    {nama: "strawberry", warna: "merah", "ada bijinya" : "tidak", harga: 9000},
    {nama: "jeruk", warna: "oranye", "ada bijinya" : "ada", harga: 8000},
    {nama: "Semangka", warna: "Hijau & Merah", "ada bijinya" : "ada", harga: 10000},
    {nama: "Pisang", warna: "Kuning", "ada bijinya" : "tidak", harga: 5000},
];
console.log(buaahh[0]);

// soal 6
console.log();
console.log("---- Soal 6 ----");
var dataFilm = [];
function addFilm(nama, durasi, genre, tahun) {
    dataFilm.push(
        {nama: nama, durasi: durasi, genre: genre, tahun: tahun,}
    )
}
addFilm("Titanic", "3h30m", "Romance/Drama", 1997);
addFilm("Detective K: Secret of the Bloodsucking Demon", "2h0m", "Comedy/Crime", 2018);

console.log(dataFilm);