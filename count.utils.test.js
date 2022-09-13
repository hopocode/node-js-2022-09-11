const {secti, odecti} = require('./count.utils')

describe("matika", () => {

    beforeEa

    test.skip("sect musi scitat", () => {
        expect(secti(2, 3)).toBe(5);
        expect(odecti(2, 1)).toBe(1);
        expect(2).toBeGreaterThan(3);
    })
})

const sectiWithPromise = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return secti(a, b);
        }, 2000);
    })
}

test("async test", () => {
    expect.asercatrions(2);
    expect(sectiWithPromise(1, 2)).toBe(5);
    expect(sectiWithPromise(1, 2)).toBe(5);
})