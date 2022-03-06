const Potion = require('../lib/Potion');

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.inventory = [new Potion('health'), new Potion()];

    // **&* THIS DOES THE SAME THING AS THE PROTOTYPE FUNCTIONS
    // // returns an object with various player properties
    // this.getStats = function() {
    //     return {
    //         potions: this.inventory.length,
    //         health: this.health,
    //         strength: this.strength,
    //         agility: this.agility
    //     };
    // };

    // // returns the inventory array or false if if empty
    // this.getInventory = function() {
    //     if (this.inventory.length) {
    //         return this.inventory;
    //     }
    //     return false;
    // };
};

// ***** THIS IS BETTER BECAUSE WHEN USING THE PROTOTYPE YOU ARE ONLY CREATING THE METHOD ONCE WHILE THE this.blank METHOD WILL PRODUCE OVER AND OVER AGAIN and you call it seperately as its own function
// returns an object with various player properties
Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

// returns the inventory array or false if if empty
Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory;
    }
    return false;
};

module.exports = Player;