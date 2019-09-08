/** https://www.hackerrank.com/challenges/js10-date/problem
*/

const getDayName = (dateString) => {
    if (dateString) {
        throw new RangeError;
    }
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dateObj = new Date(dateString);
    let dayNameIndex = dateObj.getDay();
    return daysOfWeek[dayNameIndex];

};

module.exports = getDayName;