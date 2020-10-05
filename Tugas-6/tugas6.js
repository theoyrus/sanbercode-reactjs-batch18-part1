// soal 1
console.log("---- Soal 1 ----");
let r = 7
const luas_lingkaran = (r) => {
    let phi = (r % 7 == 0) ? (22/7) : 3.14;
    return phi * r * r;
}

const keliling_lingkaran = (r) => {
    let phi = (r % 7 == 0) ? (22/7) : 3.14;
    return phi * 2 * r
}

console.log(`Luas Lingkaran berjari-jari ${r}cm adalah ${luas_lingkaran(r)}cm2, memiliki keliling sebesar ${keliling_lingkaran(r)}cm`);

// soal 2
console.log("---- Soal 2 ----");

let kalimat = ""
const fungsiku = (kata) => {
    kalimat += `${kata} `
}
fungsiku("saya")
fungsiku("adalah")
fungsiku("seorang")
fungsiku("frontend")
fungsiku("developer")
console.log(kalimat)

// soal 3
console.log("---- Soal 3 ----");
const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(`${firstName} ${lastName}`)
        }
    }
}
newFunction("William", "Imoh").fullName()

// soal 4
console.log("---- Soal 4 ----");
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation, spell} = newObject
console.log(firstName, lastName, destination, occupation)

// soal 5
console.log("---- Soal 5 ----");
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]

console.log(combined)