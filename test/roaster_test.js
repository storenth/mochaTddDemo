const assert = require('assert');
const Rooster = require('../index');

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
      // setup
      const expected = '4';
      const testData = 4;
      // exercise
      const actual = Rooster.timeAtDawn(testData);
      // verify
      assert.strictEqual(actual, expected);
    });
        it('throws an error if passed a number less than 0', () => {
      // setup
      const testData = -1;
      // exercise
      
      // verify
      assert.throws(() =>{
        Rooster.timeAtDawn(testData);
      }, RangeError);
    });
        it('throws an error if passed a number grater than 23', () => {
      // setup
      const testData = 24;
      // exercise
      
      // verify
      assert.throws(() =>{
        Rooster.timeAtDawn(testData);
      }, RangeError);
    });
  });
});
