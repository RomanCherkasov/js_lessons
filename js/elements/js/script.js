'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button')[1];
console.log(btns);
console.log(btns[0]); // get access to specific (one) item

const circles = document.getElementsByClassName('circle');
console.log(circles);
console.log(circles[0]); // get access to specific (one) item

const hearts = document.querySelectorAll('.heart');

console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHart = document.querySelector('button');
console.log(oneHart);
