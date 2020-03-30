import { Pokemon } from "../Pokemon";
import { TurnOrder } from "../TurnOrder";

describe('turn order', () => {
    it('should begin with Charizard', () => {
        const charizard = new Pokemon("Charizard", 100);
        const blaziken = new Pokemon("Blaziken", 80);
        const turnOrder : TurnOrder = new TurnOrder(charizard, blaziken);
        const attacker: Pokemon = turnOrder.getFirstAttacker();
        expect(attacker).toBe(charizard);
    })
});