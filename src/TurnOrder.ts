import {Pokemon} from "./Pokemon";

export class TurnOrder {
    public firstPokemon: Pokemon;
    public secondPokemon: Pokemon;

    constructor(firstPokemon: Pokemon, secondPokemon: Pokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }

    getFirstAttacker(): Pokemon {
        const quickGriever = this.getQuickGrieverIfExists();

        if (quickGriever != undefined)
            return quickGriever;

        return this.getFastest();
    }

    private getQuickGrieverIfExists() : Pokemon | undefined {
        const firstPokemonIsQuickGriever = this.firstPokemon.heldObject == "QuickClaw" && Math.random() <= 0.20;
        const secondPokemonIsQuickGriever = this.secondPokemon.heldObject == "QuickClaw" && Math.random() <= 0.20;

        if (firstPokemonIsQuickGriever && !secondPokemonIsQuickGriever)
            return this.firstPokemon;
        else if (secondPokemonIsQuickGriever && !firstPokemonIsQuickGriever)
            return this.secondPokemon;
        else
            return undefined
    }

    private getFastest() : Pokemon {
        if(this.firstPokemon.speed > this.secondPokemon.speed)
            return this.firstPokemon;
        else if(this.firstPokemon.speed > this.secondPokemon.speed)
            return Math.round(Math.random()) == 0 ?  this.firstPokemon : this.secondPokemon;
        else
            return this.secondPokemon;
    }


}