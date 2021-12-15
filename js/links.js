'use strict';

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // Произошла передача по ссылке.

copy.a = 10;
console.log(copy);
console.log(obj);

function copyFnc(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};

const newNumbers = copyFnc(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(numbers);
console.log(newNumbers);

const add = {
    d: 15,
    e: 20
};

const clone = Object.assign({}, add);
clone.d = 1212;
console.log(add);
console.log(clone);

const oldArray = ['a','b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'asd';

console.log(oldArray); // не изменен
console.log(newArray); // копия массива с измененииями

const video = ['yt', 'vimeo', 'twitch'],
      blog = ['wp', 'lj', 'blogger'],
      internet = [...video, ...blog, 'vk', 'fb'];
console.log(internet);

function log (a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const nm = [2, 5, 7];

log(...nm);

const arr1 = ['a', 'b'];
const newArr1 = [...arr1];

const q = {
    one: 1,
    two: 2,
};

const newObj = {...q};