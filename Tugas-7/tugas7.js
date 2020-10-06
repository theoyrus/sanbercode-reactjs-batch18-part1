// soal 1
console.log('----- Soal 1 -----')
// Release 0
class Animal {
    // Code class di sini
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blooded = false;
    }

    get name() {
        return this._name;
    }

    get legs() {
        return this._legs;
    }

    set legs(value) {
        this._legs = value;
    }

    get cold_blooded() {
        return this._cold_blooded;
    }

    set cold_blooded(bool) {
        this._cold_blooded = bool;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

// Release 1

// Code class Ape dan class Frog di sini

class Ape extends Animal {
    constructor(name) {
        super(name)
        this.legs = 2;
    }

    yell() {
        console.log("Auooo")
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name)
        this.legs = 2;
        this.cold_blooded = true; // amfibi berdarah panas
    }

    jump() {
        console.log("hop hop")
    }
}
 
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

// soal 2
console.log()
console.log('----- Soal 2 -----')

class Clock {
    // Code di sini
    constructor({template}) {
        this._template = template;
        this._timer;
    }

    render() {
        const date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = this._template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer)
    }

    start() {
        this.render();
        this._timer = setInterval( () => this.render(), 1000);
    };
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  