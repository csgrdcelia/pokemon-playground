import {Pokemon} from "../Pokemon";
import {Move} from "../Move";
import {AsynchronousBattle} from "../AsynchronousBattle";

describe('battle', () => {
    it('should make Charizard won', () => {
        const charizard = new Pokemon("Charizard", 100, "fire", [new Move("Fire Punch", "fire", 75)]);
        const blaziken = new Pokemon("Blaziken", 80, "fire",[new Move("Ember", "fire", 40)] ,"Quick Claw");

        const battle = new AsynchronousBattle(charizard, blaziken);
        const winner: Pokemon = battle.launch();

        expect(winner).toBe(charizard);
    })
});