export class Pokemon {
    public name: string;
    public speed: number;
    public heldObject: string;

    constructor(name: string, speed: number, heldObject: string = "") {
        this.name = name;
        this.speed = speed;
        this.heldObject = heldObject;
    }
}