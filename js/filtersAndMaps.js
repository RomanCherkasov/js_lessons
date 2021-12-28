'use strict';

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Volandemort', 'Roman'];

const shortNames = names.filter(function(name){
    return name.length < 5;
});

console.log(shortNames);

// map

const answers = ['IvAn', 'aNNa', 'HelLoO'];

const result = answers.map(item => item.toLowerCase());

console.log(result);



let answersTwo = ['IvAn', 'aNNa', 'HelLoO'];

answersTwo = answersTwo.map(item => item.toLowerCase());

console.log(result);

// every | some

const someArr = [4, 'somestr', 'somestr2'];

// Возвращает true если хотябы один из элеметов выполняет условие
console.log(someArr.some(item => typeof(item) === 'number'));
// Возвращает true если все элементы выполняют условие
console.log(someArr.every(item => typeof(item) === 'number'));

// reduce
// это метод перебора (первый элемент в collback функции пустой
// второй- текущий элемет)
const arr = [4, 5, 6, 1, 2, 4, 3];
const res = arr.reduce((sum, current) => sum + current);
console.log(res);
// вторым аргументом (после callback функции) 
// можно указать значение для первого аргумента callback функции
const arrTwo = ['apple', 'pear', 'plum'];
const resTwo = arrTwo.reduce((sum, current) => `${sum}, ${current}`, 3);
console.log(resTwo);

// цепочка перебирающих методов возвращающая имена с "типом" 'persone'
const obj = {
    ivan: 'persone',
    ann: 'persone',
    bobic: 'animal',
    pushock: 'animal'
};

const objsArray = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(objsArray);

