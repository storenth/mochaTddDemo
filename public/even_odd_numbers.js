/**
 * Midify input array by check if entries odd or even numbers
 * @param {array} nums 
 */
function modifyArray(nums) {
    return nums.map(
        number => (number % 2) == 0 ? number * 2 : number * 3
    );
};
module.exports = modifyArray;
