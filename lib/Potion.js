//below is the code in ES5 constructor form
// function Potion(name) {
//     this.types = ['strength', 'agility', 'health'];
//     this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

//     if (this.name === 'health') {
//         this.value = Math.floor(Math.random() * 10 + 30);
//     } else {
//         this.value = Math.floor(Math.random() * 5 + 7);
//     }
// }

//this is the same code but refactored into ES6 class form!
class Potion {
    constructor(name) {
        this.types = ['strength', 'agility', 'health'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

        if (this.name === 'health') {
            this.value = Math.floor(Math.random() * 10 + 30);
        } else {
            this.value = Math.floor(Math.random() * 5 + 7);
        }
    }
}

module.exports = Potion;