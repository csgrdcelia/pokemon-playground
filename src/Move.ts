export class Move {
    public name: string;
    public type: string;
    public basePower: number;

    constructor(name: string, type: string, basePower: number) {
        this.name = name;
        this.type = type;
        this.basePower = basePower;
    }
}