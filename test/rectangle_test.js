const rectangle = require('../public/rectangle');
const assert = require('assert');


describe('Rectangle', () => {
    describe('.rectangleFactory', () => {
        it('returns object = {1, 1, 4, 1} ', () => {
            // Setup
            const length = 1;
            const width = 1;
            const expected = {
                length: 1,
                width: 1,
                perimeter: 4,
                area: 1
            };
            // Exersice
            let actual = rectangle.rectangleFactory(length, width);
            // Verify
            assert.deepStrictEqual(actual, expected); /* instead of code bellow */
            // assert.strictEqual(actual.length, expected.length);
            // assert.strictEqual(actual.width, expected.width);
            // assert.strictEqual(actual.perimeter, expected.perimeter);
            // assert.strictEqual(actual.area, expected.area);

        });

    });

    describe('negative test suit', () => {

        it('.rectangleFactory throw TypeError when given length=0, width=1', () => {
            // Setup
            const length = -1;
            const width = 1;
            // Exersice
            // Verify
            assert.throws(() => {
                rectangle.rectangleFactory(length, width);
            }, {
                    name: 'TypeError',
                    message: 'Wrong argument received.'
                }
            );
        });
        

    });

});