'use strict';

function showMessage (text) {
    console.log(text);
}

showMessage('Hello world'); 

console.log(calc(3,4));

function calc (a, b) {
    return (a + b);
}

const logger = function () {
    console.log('hello');
};

logger();

const arrowFunc = (a, b) => a + b;
console.log(arrowFunc(5, 6));
