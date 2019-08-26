const modifyArray = require('../public/even_odd_numbers');
const assert = require('assert');


describe('modifyArray', () => {
    it('returns array with one string', () => {
        // Setup
        const inputValue = [1, 2];
        const expected = [3, 4];
        // Exersice
        const actual = modifyArray(inputValue);
        // Verify
        assert.deepStrictEqual(actual, expected)
    });


});