import { Pokemon } from "../Pokemon";

describe('pokemon name', () => {
    it('should return Charizard', () => {
        const name = "Charizard";
        const charizard = new Pokemon(name, 100, "fire")
        expect(charizard.name).toEqual(name);
    })
});