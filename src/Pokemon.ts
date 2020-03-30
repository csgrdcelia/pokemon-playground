export class Pokemon {
    public name: string;
    public speed: number;
    public type: string;
    public heldObject: string;
    public hp: number;

    constructor(name: string, speed: number, type: string, heldObject: string = "") {
        this.name = name;
        this.speed = speed;
        this.type = type;
        this.heldObject = heldObject;
        this.hp = 100;
    }
}