const removeDublicates = require('../public/removeStringDublicates');
const assert = require('assert');


describe('removeStringDublicates', () => {
    it(' returns array with one string of two same', () => {
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