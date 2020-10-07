// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
// soal 1
console.log('----- Soal 1 -----')
function membacaBuku(jatahwaktu, ke) {
    readBooks(jatahwaktu, books[ke], function (sisaWaktu) {
        // console.log(books[ke], jatahwaktu) 
        if (sisaWaktu > 0) {
            membacaBuku(sisaWaktu, ke+1)
        }
    })
}

let jatahwaktu = 10000
let bukuke = 0
membacaBuku(jatahwaktu, bukuke)