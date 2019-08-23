const removeDublicates = require('../public/removeStringDublicates');
const assert = require('assert');


describe('removeStringDublicates', () => {
    describe('return one string of dublicated strings in array', () => {
        it('throw TypeErro when array `[NaN]`', () => {
            // Setup
            // const inputValue = ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"];
            const inputValue = ["Mike", "Mike"];
            const expected = ['Mike'];
            // Exersice
            const actual = removeDublicates(inputValue);
            // Verify
            assert.deepStrictEqual(actual, expected)
        });

    });

});