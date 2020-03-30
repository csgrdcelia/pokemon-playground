import {Pokemon} from "./Pokemon";
import {Move} from "./Move";
import {TurnOrder} from "./TurnOrder";
import {setInterval} from "timers";

export class AsynchronousBattle {
    public firstPokemon: Pokemon;
    public secondPokemon: Pokemon;

    constructor(firstPokemon: Pokemon, secondPokemon: Pokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
    }

    launch() : Pokemon {
        //setInterval(this.round, 500); -> pas réussi à faire fonctionner en asyncrone dans le temps imparti
        while(!this.aPokemonWon()) {
            this.round();
        }
        return this.getWinner();
    }

    round() {
        const order = new TurnOrder(this.firstPokemon, this.secondPokemon).get();

        this.attack(order[0], order[1]);

        if(!order[1].isAlive()) {
            //clearInterval()
            return;
        }

        this.attack(order[1], order[0]);
    }

    attack(attacker: Pokemon, defender: Pokemon) {
        const move = attacker.getRandomMove();
        defender.hp -= move.basePower;
        console.log(attacker.name + " attacks " + defender.name + " with " + move.name + "!")
    }

    aPokemonWon() : boolean {
        if (!this.firstPokemon.isAlive() || !this.secondPokemon.isAlive()) {
            return true;
        }
        return false;
    }

    getWinner() : Pokemon {
        if (this.firstPokemon.isAlive()) {
            return this.firstPokemon;
        } else {
            return this.secondPokemon;
        }
    }
}