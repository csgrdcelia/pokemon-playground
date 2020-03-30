import {Pokemon} from "../Pokemon";
import {Move} from "../Move";
import {Battle} from "../Battle";

describe('battle', () => {
    it('should lower hp', () => {
        const charizard = new Pokemon("Charizard", 100, "fire", [new Move("Fire Punch", "fire", 75)]);
        const blaziken = new Pokemon("Blaziken", 80, "fire",[new Move("Ember", "fire", 40)] ,"Quick Claw");

        const battle = new Battle(charizard, blaziken);
        battle.addAttack(charizard, blaziken, charizard.moves[0]);
        battle.addAttack(blaziken, charizard, blaziken.moves[0]);
        battle.attack();

        expect(charizard.hp).toBe(60);
        expect(blaziken.hp).toBe(25);
    })
});