function find_average(array) {
  // your code here
  if (Array.isArray(array) && array.length > 0) {
    const numberCount = array.length;

    // reduce's initialValue equal to zero need to properly test currentValue
    let sum = array.reduce((accumulator, currentValue) => {
      if (typeof currentValue !== 'number' || !isFinite(currentValue)) {
        throw new TypeError('Array value are not number.');
      }
      else
        return accumulator + currentValue;
    }, 0)
    const averageNumber = sum / numberCount;
    return averageNumber;
  }
  throw new TypeError('Array value are not number.');
}
// console.log(find_average(0));
module.exports = find_average;