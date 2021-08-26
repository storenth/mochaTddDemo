function find_average(array) {
    var sum = 0;
    const length = array.length;
    for (i = 0; i < length; i++) {
        sum += array[i];
    }
    return sum / length;
}

console.log(find_average(0));
// expected output: NaN