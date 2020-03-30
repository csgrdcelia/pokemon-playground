"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, type, moves, heldObject) {
        if (heldObject === void 0) { heldObject = ""; }
        this.name = name;
        this.speed = speed;
        this.type = type;
        this.moves = moves;
        this.heldObject = heldObject;
        this.hp = 100;
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
