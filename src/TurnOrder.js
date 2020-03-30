"use strict";
exports.__esModule = true;
var TurnOrder = /** @class */ (function () {
    function TurnOrder(firstPokemon, secondPokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }
    TurnOrder.prototype.getAttacker = function () {
        if (this.firstPokemon.speed > this.secondPokemon.speed)
            return this.firstPokemon;
        else
            return this.secondPokemon;
    };
    return TurnOrder;
}());
exports.TurnOrder = TurnOrder;
