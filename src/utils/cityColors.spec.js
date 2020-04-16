import {getCityColor} from "./cityColors.js"


describe("City colors", () => {
    it("Should return a color even if it's arguement is undefined", () => {
        const color = getCityColor()
        expect(typeof color).toMatch(/string/)
    })
})