const findNextSquare = require('../square');
const assert = require('assert');

describe('Square', () => {
    describe('findNextSquare()', () => {
        it('returns 1 when square 1', () => {
            // Setup
            const inputValue = 1;
            const expected = 1;
            // Exersice
            let square = findNextSquare(inputValue);
            // Verify
            assert.strictEqual(square, expected);
        });
        it('returns 9 when square 9', () => {
            // Setup
            const inputValue = 9;
            const expected = 9;
            // Exersice
            let square = findNextSquare(inputValue);
            // Verify
            assert.strictEqual(square, expected);
        });
        it('returns 121 next square to 120', () => {
            // Setup
            const expected = 121;
            const inputValue = 120;
            // Exersice
            let square = findNextSquare(inputValue);
            // Verify
            assert.strictEqual(square, expected);
        });
        it('returns 144 next square to 143', () => {
            // Setup
            const inputValue = 143;
            const expected = 144;
            // Exersice
            let square = findNextSquare(inputValue);
            // Verify
            assert.strictEqual(square, expected);
        });
        it('returns -1 while invalid input `p1zH 0_`', () => {
            // Setup
            const inputValue = 'p1zH 0_';
            const expected = -1;
            // Exersice
            let square = findNextSquare(inputValue);
            // Verify
            assert.strictEqual(square, expected);
        });
    });

})