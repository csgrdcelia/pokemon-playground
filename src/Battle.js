"use strict";
exports.__esModule = true;
var TurnOrder_1 = require("./TurnOrder");
var Battle = /** @class */ (function () {
    function Battle(firstPokemon, secondPokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
        this.roundMoves = [];
    }
    Battle.prototype.addAttack = function (from, to, move) {
        if (this.getRoundMove(from) != undefined) {
            throw "Attack already defined for this round and this Pokemon";
        }
        this.roundMoves.push([from, to, move]);
    };
    Battle.prototype.attack = function () {
        if (this.roundMoves.length != 2) {
            throw "Please define all attacks";
        }
        var order = new TurnOrder_1.TurnOrder(this.firstPokemon, this.secondPokemon).get();
        for (var _i = 0, order_1 = order; _i < order_1.length; _i++) {
            var pokemon = order_1[_i];
            var roundMove = this.getRoundMove(pokemon);
            var attacker = roundMove[0];
            var defender = roundMove[1];
            var move = roundMove[2];
            defender.hp -= move.basePower;
        }
        this.roundMoves = [];
    };
    Battle.prototype.getRoundMove = function (pokemon) {
        for (var _i = 0, _a = this.roundMoves; _i < _a.length; _i++) {
            var roundMove = _a[_i];
            if (roundMove[0] == pokemon)
                return roundMove;
        }
        return undefined;
    };
    Battle.prototype.getWinner = function () {
        if (this.firstPokemon.hp > 0) {
            return this.firstPokemon;
        }
        else {
            return this.secondPokemon;
        }
    };
    return Battle;
}());
exports.Battle = Battle;
