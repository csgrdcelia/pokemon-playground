import { Pokemon } from "../Pokemon";

describe('pokemon name', () => {
    it('should return Dracaufeu', () => {
        const name = "Dracaufeu";
        const dracaufeu = new Pokemon(name)
        expect(dracaufeu.name).toEqual(name);
    })
});