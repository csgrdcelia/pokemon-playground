import { Pokemon } from "../Pokemon";
import { TurnOrder } from "../TurnOrder";

describe('turn order', () => {
    it('should begin with Charizard', () => {
        const charizard = new Pokemon("Charizard", 100, "fire", []);
        const blaziken = new Pokemon("Blaziken", 80, "fire", []);
        const turnOrder : TurnOrder = new TurnOrder(charizard, blaziken);
        const order = turnOrder.get();
        expect(order[0]).toBe(charizard);
    }),
    it('should begin with Blaziken', () => {
        const charizard = new Pokemon("Charizard", 100, "fire", []);
        const blaziken = new Pokemon("Blaziken", 80, "fire", []);
        const turnOrder : TurnOrder = new TurnOrder(charizard, blaziken);
        const order = turnOrder.get();
        expect(order[0]).toBe(charizard);
    })
});