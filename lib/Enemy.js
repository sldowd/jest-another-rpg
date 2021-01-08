const Potion = require('../lib/Potion');
const Character = require('../lib/Character');
class Enemy {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
        this.potion = new Potion();

        this.health = Math.floor(Math.random() * 10 + 85);
        this.strength = Math.floor(Math.random() * 5 + 5);
        this.agility = Math.floor(Math.random() * 5 + 5);
    
    }
    //get enemy description
    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    };
}

module.exports = Enemy;