'use strict';

// console.log(document.head); // получаем тег head
// console.log(document.body); // получаем тег body
// console.log(document.documentElement); // получаем весь html тег

// console.log(document.body.childNodes); // получить DOM ноды(узлы)

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

console.log(document.querySelector('#current').parentNode);
console.log(document.querySelector('#current').parentNode.parentNode);
console.log(document.querySelector('#current').parentElement);

console.log(document.querySelector('[data-current="3"]').previousSibling);
console.log(document.querySelector('[data-current="3"]').nextSibling);

console.log(document.querySelector('[data-current="3"]').previousElementSibling);
console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// write analog childNodes for elements (something like childElements)
const someElement = document.body.childNodes;
console.log(typeof(someElement));

const childElements = function(elem){
    let elems = [];
    for (let node of elem) {
        if (node.nodeName == '#text' || node.nodeName == '#comment'){ continue; }
        elems.push(node);
    }
    return elems;
};

const a = childElements(someElement);
console.log(a);
