/* Complete the reverseString function
    * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        let sArr = [];
        sArr = s.split('');
        sArr.reverse();
        console.log(sArr.join(''));
    }
    catch (e) {
        console.log(e.message);
        console.log(s);

    }
}