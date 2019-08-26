let removeDublicates = array => {
    // let buffer = array.reduce((acc, cur, i) => {
    //     if (acc[cur]) {
    //         console.log('kick them out!');
    //         return acc;
    //     } else {
    //         console.log('let them vote!');
    //         acc[cur] = true;
    //         return acc;
    //     }
    // }, {});
    // return buffer;
    return array.filter((element, index) => {
        return array.indexOf(element) === index;
    });
};
// console.log(removeDublicates(['mike', 'kirill', 'mike']));
module.exports = removeDublicates;
