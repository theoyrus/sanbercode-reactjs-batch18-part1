var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
// soal 2
console.log('----- Soal 2 -----')
function janjiMembacaBuku(jatahwaktu, ke) {
    readBooksPromise(jatahwaktu, books[ke])
    .then(function (sisaWaktu) {
        ke++;
        // console.log(ke, books[ke])
        if (ke < books.length) {
            janjiMembacaBuku(sisaWaktu, ke)
        }
    })
    .catch(function (sisaWaktu) { 
        console.log('waktu habis')
    })
}

let jatahwaktu = 10000
let bukuke = 0
janjiMembacaBuku(jatahwaktu, bukuke)