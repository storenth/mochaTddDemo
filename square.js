const findNextSquare = (sq) => {
  // Return the next square if sq is a perfect square, -1 otherwise
  if (typeof sq == 'number' && Number.isInteger(sq) && sq > 0) {
    if (sq === 1) {
      return sq;
    }
    else {
      let operand = Math.sqrt(sq);
      if (Number.isInteger(operand)) {
        return sq;
      }
      else {
        let roundedNumber = Math.ceil(operand);
        return roundedNumber * roundedNumber;
      };
    }
  }

  return -1;
}
module.exports = findNextSquare;