'use strict';
// Разные области видимости.
const number = 1;

(function(){
    let number = 2;
    console.log(number);
}());

console.log(number);

// Объектный интерфейс возвращаюищй "приватный" объект
const user = (function(){
    const privat = function() {
        console.log('Provat fnc!!!')
    };
    return {
        sayHello: privat
    };
}());

user.sayHello();