const assert = require('assert');
const Rooster = require('../public/rooster');

describe('Roaster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // setup
      const expected = 'moo!';
      // exercise
      const actual = Rooster.announceDawn();
      // verify
      assert.strictEqual(actual, expected);
    });
  });
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // Setup
      const expected = '4';
      const testData = 4;
      // Exercise
      const actual = Rooster.timeAtDawn(testData);
      // Verify
      assert.strictEqual(actual, expected);
    });
    it('throws an error if passed a number less than 0', () => {
      // Setup
      const testData = -1;
      // Exercise

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(testData);
      }, RangeError);
    });
    it('throws an error if passed a number grater than 23', () => {
      // Setup
      const testData = 24;
      // Exercise
      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(testData);
      }, RangeError);
    });
  });
});
