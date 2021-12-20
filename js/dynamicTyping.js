'use strict';

// To string

console.log(typeof(String(null)));

const num = 5;
console.log('https://vk.com/catalog/' + num); // String

//To number

console.log(typeof(Number('4')));
console.log(typeof(+'5'));
console.log(typeof(parseInt('4px', 10))); // second arg - scale of notation

// let answer = +prompt('hello', '');

// To boolean

// 0, '', null, undefined, NaN -> false

let switcher = null;

if (switcher) {
    console.log('working...');
}

switcher = 1;

if (switcher) {
    console.log('working... now!');
}

console.log(typeof(Boolean('4')));
console.log(typeof(!!'4444')); // -> boolean to
