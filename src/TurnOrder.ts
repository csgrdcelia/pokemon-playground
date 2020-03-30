import {Pokemon} from "./Pokemon";

export class TurnOrder {
    public firstPokemon: Pokemon;
    public secondPokemon: Pokemon;

    constructor(firstPokemon:Pokemon, secondPokemon:Pokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }

    getAttacker(): Pokemon {
        if(this.firstPokemon.speed > this.secondPokemon.speed)
            return this.firstPokemon;
        else if(this.firstPokemon.speed > this.secondPokemon.speed)
            return Math.round(Math.random()) == 0 ?  this.firstPokemon : this.secondPokemon;
        else
            return this.secondPokemon;
    }
}