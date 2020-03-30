import {Move} from "./Move";

export class Pokemon {
    public name: string;
    public speed: number;
    public type: string;
    public moves : Move[]
    public heldObject: string;
    public hp: number;


    constructor(name: string, speed: number, type: string, moves: Move[], heldObject: string = "") {
        this.name = name;
        this.speed = speed;
        this.type = type;
        this.moves = moves;
        this.heldObject = heldObject;
        this.hp = 100;
    }
}