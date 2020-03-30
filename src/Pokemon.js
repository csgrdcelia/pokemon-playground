"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, heldObject) {
        if (heldObject === void 0) { heldObject = ""; }
        this.name = name;
        this.speed = speed;
        this.heldObject = heldObject;
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
