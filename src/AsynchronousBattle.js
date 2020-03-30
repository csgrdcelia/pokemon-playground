"use strict";
exports.__esModule = true;
var TurnOrder_1 = require("./TurnOrder");
var AsynchronousBattle = /** @class */ (function () {
    function AsynchronousBattle(firstPokemon, secondPokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }
    AsynchronousBattle.prototype.launch = function () {
        //setInterval(this.round, 500); -> pas réussi à faire fonctionner en asyncrone dans le temps imparti
        while (!this.aPokemonWon()) {
            this.round();
        }
        return this.getWinner();
    };
    AsynchronousBattle.prototype.round = function () {
        var order = new TurnOrder_1.TurnOrder(this.firstPokemon, this.secondPokemon).get();
        this.attack(order[0], order[1]);
        if (!order[1].isAlive()) {
            //clearInterval()
            return;
        }
        this.attack(order[1], order[0]);
    };
    AsynchronousBattle.prototype.attack = function (attacker, defender) {
        var move = attacker.getRandomMove();
        defender.hp -= move.basePower;
        console.log(attacker.name + " attacks " + defender.name + " with " + move.name + "!");
    };
    AsynchronousBattle.prototype.aPokemonWon = function () {
        if (!this.firstPokemon.isAlive() || !this.secondPokemon.isAlive()) {
            return true;
        }
        return false;
    };
    AsynchronousBattle.prototype.getWinner = function () {
        if (this.firstPokemon.isAlive()) {
            return this.firstPokemon;
        }
        else {
            return this.secondPokemon;
        }
    };
    return AsynchronousBattle;
}());
exports.AsynchronousBattle = AsynchronousBattle;
