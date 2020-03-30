import {Pokemon} from "./Pokemon";

export class TurnOrder {
    public firstPokemon: Pokemon;
    public secondPokemon: Pokemon;

    constructor(firstPokemon: Pokemon, secondPokemon: Pokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }

    get(): Pokemon[] {
        const quickClawOrder = this.getOrderIfQuickClawActivated();

        if (quickClawOrder != undefined)
            return quickClawOrder;

        return this.getOrderBySpeed();
    }

    private getOrderIfQuickClawActivated() : Pokemon[] | undefined {
        const firstPokemonIsQuickGriever = this.firstPokemon.heldObject == "Quick Claw" && Math.random() <= 0.20;
        const secondPokemonIsQuickGriever = this.secondPokemon.heldObject == "Quick Claw" && Math.random() <= 0.20;

        if (firstPokemonIsQuickGriever && !secondPokemonIsQuickGriever)
            return [this.firstPokemon, this.secondPokemon];
        else if (secondPokemonIsQuickGriever && !firstPokemonIsQuickGriever)
            return [this.secondPokemon, this.firstPokemon];
        else
            return undefined
    }

    private getOrderBySpeed() : Pokemon[] {
        if(this.firstPokemon.speed > this.secondPokemon.speed)
            return [ this.firstPokemon, this.secondPokemon ];
        else if(this.firstPokemon.speed > this.secondPokemon.speed)
            return Math.round(Math.random()) == 0 ?  [this.firstPokemon, this.secondPokemon] : [this.secondPokemon, this.firstPokemon];
        else
            return [this.secondPokemon, this.firstPokemon];
    }


}