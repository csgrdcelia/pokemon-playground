"use strict";
exports.__esModule = true;
var TurnOrder = /** @class */ (function () {
    function TurnOrder(firstPokemon, secondPokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }
    TurnOrder.prototype.getFirstAttacker = function () {
        var quickGriever = this.getQuickGrieverIfExists();
        if (quickGriever != undefined)
            return quickGriever;
        return this.getFastest();
    };
    TurnOrder.prototype.getQuickGrieverIfExists = function () {
        var firstPokemonIsQuickGriever = this.firstPokemon.heldObject == "QuickClaw" && Math.random() <= 0.20;
        var secondPokemonIsQuickGriever = this.secondPokemon.heldObject == "QuickClaw" && Math.random() <= 0.20;
        if (firstPokemonIsQuickGriever && !secondPokemonIsQuickGriever)
            return this.firstPokemon;
        else if (secondPokemonIsQuickGriever && !firstPokemonIsQuickGriever)
            return this.secondPokemon;
        else
            return undefined;
    };
    TurnOrder.prototype.getFastest = function () {
        if (this.firstPokemon.speed > this.secondPokemon.speed)
            return this.firstPokemon;
        else if (this.firstPokemon.speed > this.secondPokemon.speed)
            return Math.round(Math.random()) == 0 ? this.firstPokemon : this.secondPokemon;
        else
            return this.secondPokemon;
    };
    return TurnOrder;
}());
exports.TurnOrder = TurnOrder;
