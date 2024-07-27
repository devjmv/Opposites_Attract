import { describe, it, expect } from "vitest";
import { controlPetals } from "../src/app";

describe('controlPetals', () => {
    it('return true when Timmy has 1 petal and Sarah has 4 petals', () => {
        expect(controlPetals(1, 4)).toBe(true);
    });

    it('return false when Timmy has 2 petals and Sarah has 2 petals', () => {
        expect(controlPetals(2, 2)).toBe(false);
    });

    it('return true when Timmy has 0 petals and Sarah has 1 petal', () => {
        expect(controlPetals(0, 1)).toBe(true);
    });

    it('return false when Timmy has 0 petals and Sarah has 0 petals', () => {
        expect(controlPetals(0, 0)).toBe(false);
    });
});