'use strict';

const arr = [1, 2, 3, 4, 5, 6];

arr.pop();

console.log(arr);

arr.push(10);

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr){
    console.log(value);
}

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

const str = 'aaa, dsd, dfsf, ertdfg';
const product = str.split(', ');
product.sort(compareNum);
function compareNum(a, b) {
    return a - b;
}
console.log(product.join(';'));
