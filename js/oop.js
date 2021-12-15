'use strict';

let str = 'some';
// let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3,4]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Soldier say HELLO');
    }
};

const johnSoldier = {
    health: 100
};

// johnSoldier.__proto__ = soldier; // deprecated!!!
Object.setPrototypeOf(johnSoldier, soldier);

console.log(johnSoldier);
console.log(johnSoldier.armor);
johnSoldier.sayHello();

const alexSoldier = Object.create(soldier);
alexSoldier.sayHello();
