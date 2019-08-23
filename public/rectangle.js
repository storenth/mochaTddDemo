/*
 * Complete the Rectangle function
 */
let rectangle = {};
/**
* Factory function used to represent rectangle
* @param {number} a Represent lenght of the rectangle
* @param {number} b Represent width of the rectangle
* @return {object} Object with parameters while called with new keyword returned
*/
rectangle.rectangleFactory = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number' || a <= 0 || b <= 0) {
        throw new TypeError('Wrong argument received.')
    }
    let perimeterTmp = 2 * (a + b);
    let areaTmp = a * b;
    return {
        length: a,
        width: b,
        perimeter: perimeterTmp,
        area: areaTmp

    };
};
/**
 * Define the object by writing a constructor function. 
 * @param {number} a Represent lenght of the rectangle
 * @param {number} b Represent width of the rectangle
 * @return {object} Object with parameters while called with new keyword returned
 */
rectangle.rectangleObject = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number' || a <= 0 || b <= 0) {
        throw new TypeError('Wrong argument received.')
    }
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
};

module.exports = rectangle;




