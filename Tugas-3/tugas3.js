//  soal 1
var kataPertama = "saya";
var kataKedua   = "senang";
var kataKetiga  = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama + ' ' + kataKedua[0].toUpperCase()+kataKedua.substr(1) + ' ' + kataKetiga + ' ' + kataKeempat.toUpperCase() );

// soal 2
var kataPertama = "1";
var kataKedua   = "2";
var kataKetiga  = "4";
var kataKeempat = "5";

console.log( parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat) );

// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3);
var kataKedua   = kalimat.substr(4, 10);  // do your own! 
var kataKetiga  = kalimat.substr(15, 3);  // do your own! 
var kataKeempat = kalimat.substr(19, 5);  // do your own! 
var kataKelima  = kalimat.substr(25, 6);  // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// soal 4

var nilai;

nilai = 45;

if (nilai >= 80 ) indeksnya = 'A';
else if (nilai >= 70 && nilai < 80) indeksnya = 'B';
else if (nilai >= 60 && nilai < 70) indeksnya = 'C';
else if (nilai >= 50 && nilai < 60) indeksnya = 'D';
else if (nilai < 50) indeksnya = 'E';

console.log('indeksnya ' + indeksnya);

// soal 5
var tanggal = 15;
var bulan   = 3;
var tahun   = 1996;

var bulan_nama;

switch (bulan) {
    case 1:
        bulan_nama = 'Januari';
        break;
    case 2:
        bulan_nama = 'Februari';
        break;
    case 3:
        bulan_nama = 'Maret';
        break;
    case 4:
        bulan_nama = 'April';
        break;
    case 5:
        bulan_nama = 'Mei';
        break;
    case 6:
        bulan_nama = 'Juni';
        break;
    case 7:
        bulan_nama = 'Juli';
        break;
    case 8:
        bulan_nama = 'Agustus';
        break;
    case 9:
        bulan_nama = 'September';
        break;
    case 10:
        bulan_nama = 'Oktober';
        break;
    case 11:
        bulan_nama = 'November';
        break;
    case 12:
        bulan_nama = 'Desember';
        break;

    default:
        bulan_nama = 'Bulan Salah';
        break;
}

console.log(tanggal + ' ' + bulan_nama + ' ' + tahun);