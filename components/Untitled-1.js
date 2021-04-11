// Create your array
let fourItemArray = ['one', 'two', 'three', 'four'];

// Check the length of an array
console.log('the length of my array is', fourItemArray.length()); // 4

// Accessing items of an array
let firstNumber = fourItemArray[0]; // "one"
console.log(firstNumber);

let lastNumber = fourItemArray[-1]; // "four"
console.log(lastNumber);

// Add an item to an array
let fiveItemArray = fourItemArray.push('five'); // ["one", "two", "three", "four", "five"]

// Remove the last item of an array
let backToFourItemArray = fiveItemArray.pop();
console.log(backToFourItemArray === fourItemArray);

// Add an item to the start of an array
let addZero = fourItemArray.unshift('zero');

// Remove the last item of an array
let backToFourItemArrayAgain = addZero.shift();
console.log(
  (backToFourItemArrayAgain === backToFourItemArray) === fourItemArray,
);

// Find index/position of an array item
let positionOfTwo = fourItemArray.indexOf('two'); // 1
console.log(positionOfTwo);

// Remove one or more items by its/their index/position in an array
let removeTwo = fourItemArray.splice(1, 1); // removeNumberTwo = ["one", "three", "four"]
console.log(removeTwo);

let removeTwoAndThree = fourItemArray.splice(1, 2); // removeNumberTwo = ["one", "four"]
console.log(removeTwoAndThree);

// Copy an array
let fourItemArrayCopy = fourItemArray.slice();
console.log(fourItemArrayCopy);
