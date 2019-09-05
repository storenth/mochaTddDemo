const bitwiseNumber = require('../public/bitwiseOperators');
const assert = require('assert');


describe('bitwiseNumber', () => {
    it('rised RangeError when 0 given', () => {
        // Setup
        const inputValue = 0;
        const limitNumber = 1;
        // Exersice
        // Verify
        assert.throws(() => {
            bitwiseNumber(inputValue, limitNumber);
        }, RangeError);
    });
    it('returns 0 (base 10) of biwise operator & when sequence 1..2 given', () => {
        // Setup
        const inputValue = 2;
        const limitNumber = 2;
        const expected = 0;
        // Exersice
        const actual = bitwiseNumber(inputValue, limitNumber);
        // Verify
        assert.deepStrictEqual(actual, expected)
    });
    it('returns 1 (base 10) of biwise operator & when sequence 1..4 given', () => {
        // Setup
        const inputValue = 4;
        const limitNumber = 2;
        const expected = 1;
        // Exersice
        const actual = bitwiseNumber(inputValue, limitNumber);
        // Verify
        assert.deepStrictEqual(actual, expected)
    });
    it('returns 1 (base 10) of biwise operator & when sequence 1..5 given', () => {
        // Setup
        const inputValue = 5;
        const limitNumber = 2;
        const expected = 1;
        // Exersice
        const actual = bitwiseNumber(inputValue, limitNumber);
        // Verify
        assert.deepStrictEqual(actual, expected)
    });
    it('returns 4 (base 10) of biwise operator & when sequence 1..8 given', () => {
        // Setup
        const inputValue = 8;
        const limitNumber = 5;
        const expected = 4;
        // Exersice
        const actual = bitwiseNumber(inputValue, limitNumber);
        // Verify
        assert.deepStrictEqual(actual, expected)
    });
});