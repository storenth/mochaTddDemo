const find_average = require('../average_number');
const assert = require('assert');


describe('find_average()', () => {
    describe('positive test suit', () => {
        it('returns 0 when array [0]', () => {
            // Setup
            const inputValue = [0];
            const expected = 0;
            // Exersice
            let actual = find_average(inputValue);
            // Verify
            assert.strictEqual(actual, expected);
        });
        it('returns 0 when array [0,0,,,]', () => {
            // Setup
            const inputValue = [0, 0, 0];
            const expected = 0;
            // Exersice
            let actual = find_average(inputValue);
            // Verify
            assert.strictEqual(actual, expected);
        });
        it('returns 1 when array [1]', () => {
            // setup
            const expected = 1;
            const testData = [1];
            // Exercise
            const actual = find_average(testData);
            // Verify
            assert.strictEqual(actual, expected);
        });
        it('returns 1 when array [1,1]', () => {
            // Setup
            const inputValue = [1, 1];
            const expected = 1;
            // Exersice
            let actual = find_average(inputValue);
            // Verify
            assert.strictEqual(actual, expected);
        });
        it('returns 1 when array [0,1,2]', () => {
            // Setup
            const inputValue = [0, 1, 2];
            const expected = 1;
            // Exersice
            let actual = find_average(inputValue);
            // Verify
            assert.strictEqual(actual, expected);
        });
        it('returns 21 when array [2,50,11]', () => {
            // Setup
            const inputValue = [2, 50, 11];
            const expected = 21;
            // Exersice
            let actual = find_average(inputValue);
            // Verify
            assert.strictEqual(actual, expected);
        });
        it('returns 10.666666666666666 when array [1,21,10]', () => {
            // Setup
            const inputValue = [1, 21, 10];
            const expected = 10.666666666666666;
            // Exersice
            let actual = find_average(inputValue);
            // Verify
            assert.strictEqual(actual, expected);
        });
    });
    describe('negative test suit', () => {
        it('throw exception when no array', () => {
            // Setup
            const inputValue = 0;
            // Exersice
            // Verify
            assert.throws(() => {
                find_average(inputValue);
            }, TypeError);
        });
        it('throw exception when empty array []', () => {
            // Setup
            const inputValue = [];
            // Exersice
            // Verify
            assert.throws(() => {
                find_average(inputValue);
            }, TypeError);
        });

        it('throw when array `["strVal"]`', () => {
            // Setup
            const inputValue = ["strVal"];
            // Exersice
            // Verify
            assert.throws(() => {
                find_average(inputValue);
            }, TypeError);
        });
        it('throw when array `[1, 21, "wefwe"]`', () => {
            // Setup
            const inputValue = [1, 21, 'wefwe'];
            // Exersice
            // Verify
            assert.throws(() => {
                find_average(inputValue);
            }, TypeError);
        });
        it('throw when array `["1234lala", 1, 21]`', () => {
            // Setup
            const inputValue = ["1234lala", 1, 21];
            // Exersice
            // Verify
            assert.throws(() => {
                find_average(inputValue);
            }, TypeError);
        });
        it('throw when array `[null]`', () => {
            // Setup
            const inputValue = [null];
            // Exersice
            // Verify
            assert.throws(() => {
                find_average(inputValue);
            }, TypeError);
        });
        it('throw when array `[Infinity]`', () => {
            // Setup
            const inputValue = [Infinity];
            // Exersice
            // Verify
            assert.throws(() => {
                find_average(inputValue);
            }, TypeError);
        });
        it('throw when array `[NaN]`', () => {
            // Setup
            const inputValue = [NaN];
            // Exersice
            // Verify
            assert.throws(() => {
                find_average(inputValue);
            }, TypeError);
        });

    });

});