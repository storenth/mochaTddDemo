// find factorial
// process.stdin.on('data', function (data) {
//     factorial(String(data).trim());
// });

let factorial = (num) => {
    if (num == 1){
        return 1;
    }
    return num*factorial(num-1);
};
module.exports = factorial;
