// for node based assertion
const assert = require('assert');
const fs = require('fs');

describe('Math', () => {
    describe('.max', () => {

        // A hook is a piece of code that is executed when a certain event happens. 
        afterEach(() => {
            // teardown goes here
        });

        /* Setup, Exercise, and Verify
        
        The phases are defined as follows:
        
            1. Setup - create objects, variables, and set conditions that your test depends on
        
            2. Exercise - execute the functionality you are testing
        
            3. Verify - check your expectations against the result of the exercise phase. 
            You can use the assert library here
        
        Clearly separating each phase makes a test easier to read, change, and validate. 
        */
        it('returns the argument with the highest value', () => {
            // Setup
            const minimum = 1;
            const median = 2;
            const maximum = 3;

            // Exercise
            const result = Math.max(median, minimum, maximum);

            // Verify
            assert.ok(result === maximum);

            // Teardown

        });
        it('returns -Infinity when no arguments are provided', () => {
            const negInfinity = -Infinity;

            const result = Math.max();

            assert.ok(result === negInfinity);
        });
    });
    describe('.fs example', () => {
        /* Setup, Exercise, and Verify
        */
        it('compare file contain Hello string', () => {
            // Setup
            const path = './message.txt';
            const str = 'Hello Node.js';

            // Exercise
            fs.appendFileSync(path, str);

            // Verify
            const contents = fs.readFileSync(path);
            assert.ok(contents.toString() === str);

            // Teardown
            fs.unlinkSync(path);

        });
    });
});