const findNextSquare = require('../tmp');
const assert = require('assert');

describe('perfect square', () => {
    describe('[positive] perfect square', () => {
        it('positive input square 1', () => {
            let square = findNextSquare(120);
            assert.strictEqual(square, 121);
        });
        it('positive input square 2', () => {
            let square = findNextSquare(143);
            assert.strictEqual(square, 144);
        })
    });

})