/** https://www.hackerrank.com/challenges/js10-bitwise/problem
 * sequenceNumber = {1..sequenceNumber} to be a sequence of distinct sequential integers like 1&sequenceNumber < limitNumber
 * @param {number} sequenceNumber 2 < sequenceNumber < 10^3
 * @param {number} limitNumber 2 < limitNumber < sequenceNumber
 *
 * Sample Input 0
    3
    5 2
    8 5
    2 2
 * Sample Output 0
    1
    4
    0
 */
/**
 * 
 * @param {*} sequenceNumber 
 * @param {*} limitNumber 
 */

const bitwiseNumber = (sequenceNumber, limitNumber) => {
    if (sequenceNumber < 2 || limitNumber < 2 || limitNumber > sequenceNumber) {
        throw new RangeError;
    }
    let bitwiseResult = 0;
    let buffer = 0;
    for (let indexOuter = 1; indexOuter < sequenceNumber; indexOuter++) {
        for (let indexInner = indexOuter + 1; indexInner <= sequenceNumber; indexInner++) {
            buffer = indexOuter & indexInner;
            if (buffer > bitwiseResult && buffer < limitNumber) {
                bitwiseResult = buffer;
            }
        }

    }

    return bitwiseResult;

};

module.exports = bitwiseNumber;