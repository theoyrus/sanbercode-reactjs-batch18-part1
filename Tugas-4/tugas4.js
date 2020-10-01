// soal 1
console.log('LOOPING PERTAMA');
var ke = 2;
var teks = 'I love coding';
while (ke <= 20) {
    console.log(ke + ' - ' + teks);
    ke += 2;
}

console.log('\n');

console.log('LOOPING KEDUA');
var ke = 20;
var teks = 'I will become a frontend developer';
while (ke >= 2) {
    console.log(ke + ' - ' + teks);
    ke -= 2;
}

console.log('\n');
// soal 2
var teks = '';
for (var idx = 1; idx <= 20; idx++) {
    if (idx % 2 !== 0) {
        // ganjil
        teks = 'Santai';
        if (idx % 3 == 0) {
            // kelipatan 3
            teks = 'I Love Coding';
        }
    } else {
        // genap
        teks = 'Berkualitas';
    }
    console.log(idx + ' - ' + teks);
    
}


console.log('\n');
// soal 3
for (var simbol = '#'; simbol.length <= 7; simbol += '#') {
    console.log(simbol);
}

console.log('\n');
// soal 4
var kalimat="saya sangat senang belajar javascript";
console.log(kalimat.split(' '));

console.log('\n');
// soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
for (var index = 0; index <= (daftarBuah.length - 1); index++) {
    console.log(daftarBuah.sort()[index]);
}