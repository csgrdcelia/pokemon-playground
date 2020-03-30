import {Pokemon} from "../Pokemon";
import {Move} from "../Move";
import {Battle} from "../Battle";

describe('battle', () => {
    it('should lower hp', () => {
        const charizard = new Pokemon("Charizard", 100, "fire");
        const blaziken = new Pokemon("Blaziken", 80, "fire", "Quick Claw");

        const firePunch = new Move("Fire Punch", "fire", 75)
        const ember = new Move("Ember", "fire", 40)

        const battle = new Battle(charizard, blaziken);
        battle.addAttack(charizard, blaziken, ember);
        battle.addAttack(blaziken, charizard, firePunch);
        battle.attack();

        expect(charizard.hp).toBe(25);
        expect(blaziken.hp).toBe(60);
    })
});