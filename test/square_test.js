const findNextSquare = require('../square');
const assert = require('assert');

describe('perfect square', () => {
    describe('[positive] perfect square', () => {
        it('Input partition value square ', () => {
            // Setup
            const expected = 121;
            const inputValue = 120;
            // Exersice
            let square = findNextSquare(inputValue);
            // Verify
            assert.strictEqual(square, expected);
        });
        it('positive input square 2', () => {
            let square = findNextSquare(143);
            assert.strictEqual(square, 144);
        })
    });

})