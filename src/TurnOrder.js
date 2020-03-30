"use strict";
exports.__esModule = true;
var TurnOrder = /** @class */ (function () {
    function TurnOrder(firstPokemon, secondPokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }
    TurnOrder.prototype.get = function () {
        var quickClawOrder = this.getOrderIfQuickClawActivated();
        if (quickClawOrder != undefined)
            return quickClawOrder;
        return this.getOrderBySpeed();
    };
    TurnOrder.prototype.getOrderIfQuickClawActivated = function () {
        var firstPokemonIsQuickGriever = this.firstPokemon.heldObject == "Quick Claw" && Math.random() <= 0.20;
        var secondPokemonIsQuickGriever = this.secondPokemon.heldObject == "Quick Claw" && Math.random() <= 0.20;
        if (firstPokemonIsQuickGriever && !secondPokemonIsQuickGriever)
            return [this.firstPokemon, this.secondPokemon];
        else if (secondPokemonIsQuickGriever && !firstPokemonIsQuickGriever)
            return [this.secondPokemon, this.firstPokemon];
        else
            return undefined;
    };
    TurnOrder.prototype.getOrderBySpeed = function () {
        if (this.firstPokemon.speed > this.secondPokemon.speed)
            return [this.firstPokemon, this.secondPokemon];
        else if (this.firstPokemon.speed > this.secondPokemon.speed)
            return Math.round(Math.random()) == 0 ? [this.firstPokemon, this.secondPokemon] : [this.secondPokemon, this.firstPokemon];
        else
            return [this.secondPokemon, this.firstPokemon];
    };
    return TurnOrder;
}());
exports.TurnOrder = TurnOrder;
