import {Pokemon} from "./Pokemon";
import {Move} from "./Move";
import {TurnOrder} from "./TurnOrder";

export class Battle {
    public firstPokemon: Pokemon;
    public secondPokemon: Pokemon;
    public roundMoves: [Pokemon, Pokemon, Move][]; // from, to, move

    constructor(firstPokemon: Pokemon, secondPokemon: Pokemon) {
        this.firstPokemon = firstPokemon;
        this.secondPokemon = secondPokemon;
        this.roundMoves = [];
    }

    addAttack (from: Pokemon, to: Pokemon, move: Move) {
        if (this.getRoundMove(from) != undefined) {
            throw "Attack already defined for this round and this Pokemon"
        }
        this.roundMoves.push([from, to, move]);
    }

    attack() {
        if (this.roundMoves.length != 2) {
            throw "Please define all attacks";
        }

        const order = new TurnOrder(this.firstPokemon, this.secondPokemon).get();

        for (let pokemon of order) {
            const roundMove: [Pokemon, Pokemon, Move] = <[Pokemon, Pokemon, Move]> this.getRoundMove(pokemon);
            const attacker: Pokemon = roundMove[0];
            const defender: Pokemon = roundMove[1];
            const move: Move = roundMove[2];

            defender.hp -= move.basePower;
        }

        this.roundMoves = [];
    }

    private getRoundMove(pokemon: Pokemon) : [Pokemon, Pokemon, Move] | undefined {
        for (let roundMove of this.roundMoves) {
            if (roundMove[0] == pokemon)
                return roundMove;
        }
        return undefined;
    }
}