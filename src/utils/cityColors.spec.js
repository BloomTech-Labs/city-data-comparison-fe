import {getCityColor, lightenOrDarken} from "./cityColors.js"


describe("City colors", () => {
    it("Should return a color even if it's arguement is undefined", () => {
        const color = getCityColor()
        expect(typeof color).toMatch(/string/)
    })
})

describe('lightenOrDarken', () => {
    it('Should take a Hex Value String and convert it to a lighter Hex Value String', () => {
        let blue = '#0000FF';
        let lighterColor = lightenOrDarken(blue, '15');
        expect(typeof lighterColor).toMatch(/string/);
        expect(lighterColor).toMatch('#2626ff');
    })
    it('Should take a Hex Value String and convert it to a darker Hex Value String', () => {
        let green = '#008000';
        let darkerColor = lightenOrDarken(green, '-15');
        expect(typeof darkerColor).toMatch(/string/);
        expect(darkerColor).toMatch('#005a00');
    })
})