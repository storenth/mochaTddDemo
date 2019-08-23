/**
 * trenary version
 */
// function isPositive(a) {
//     if (a > 0) return "YES";
//     throw new Error((a) ? "Negative Error" : "Zero Error");
// };

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a == 0) {
        throw new Error('Zero Error');
    }
    if (a < 0) {
        throw new Error('Negative Error');
        
    }
    return 'YES';
};

isPositive(-22);