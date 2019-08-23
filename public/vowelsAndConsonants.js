/**
 * Execute node loop.js
 * stdin number and get stdout 
 */
process.stdin.on('data', function (data) {
    main(String(data).trim());
});
// received lowercase string and parse for vowels and consonants
function main(input) {
    let regVowel = /[aeiouy]/g;
    let regConsonants = /[^aeiouy]/g;
    let consonants = input.replace(regVowel, '');
    let vowels = input.replace(regConsonants, '');
    console.log(vowels);
    console.log(consonants);
    
    // for (const letter of vowels) {
        
    // }

    // console.log(array_parser(array));
};
// Clean-up each item in array 
const array_parser = arr => {
    let cleanArr = [];
    for (const item of arr) {
        cleanArr.push(item.replace(/[.&%*+?^${}()|[\]\\]/g, ''));
        
    }
    return cleanArr;
}