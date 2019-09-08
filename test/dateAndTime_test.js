const assert = require('assert');
const getDayName = require('../public/dateAndTime');


describe('getDayName', () => {
  it('returns Sunday from 10/11/2009', () => {
    // setup
    const inputData = '10/11/2009';
    const expected = 'Sunday';
    // exercise
    const actual = getDayName(inputData);
    // verify
    assert.strictEqual(actual, expected);
  });
  it('returns Wednesday from 12/07/2016 ', () => {
    // setup
    const inputData = '12/07/2016 ';
    const expected = 'Wednesday';
    // exercise
    const actual = getDayName(inputData);
    // verify
    assert.strictEqual(actual, expected);
  });
  it('returns Wednesday from 12/07/2016 ', () => {
    // setup
    const inputData = '12/07/2016 ';
    const expected = 'Wednesday';
    // exercise
    const actual = getDayName(inputData);
    // verify
    assert.strictEqual(actual, expected);
  });
});