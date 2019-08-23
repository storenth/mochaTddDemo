const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];


/*The forEach() method executes a provided function once for each array element, mean .forEach() takes an argument of callback function. Remember, a callback function is a function passed as an argument into another function.*/
artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

/*When .map() is called on an array, it takes an argument of a callback function and returns a new array!*/
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);


/* Like .map(), .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. Take a look at the following example:*/

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});



const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
