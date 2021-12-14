'use strict';

const someStr = 'Some length str with many words';

console.log(someStr.length); // return str length
console.log(someStr.toUpperCase()); // return new string in upper case
console.log(someStr.toLowerCase()); // some thing, but lower case
console.log(someStr.indexOf('word')); // return index of first entry ('word')

// return slice of string (startIndex, endIndex)
console.log(someStr.slice(someStr.indexOf('word')));
console.log(someStr.slice(someStr.indexOf('word'), someStr.indexOf('word')+4));
console.log(someStr.substr(5, 3)); // r

const someNum = 12.49;
console.log(Math.round(someNum));

const num = '124.90px';
console.log(parseInt(num));