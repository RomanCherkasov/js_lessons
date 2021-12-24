'use strict';
//1
// function showThis(a, b) {
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

//2
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout(){
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

//3
// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log(`Hello ${this.name}`);
//     };
// }
// const roman = new User('Roman', 24);
// roman.hello();

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(12));


const btn = document.querySelector('button');

// btn.addEventListener('click', () =>{
//     console.log(this);
// });

// btn.addEventListener('click', function(){
//     console.log(this);
// });

btn.addEventListener('click', function(){
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function(){
        const say = () => {
            console.log(this); // parent fnc
            console.log(this.num);
        };
        const sayFnc = function(){ 
            console.log(this); // undefined
            console.log(this.num); // error
        };
        say();
        sayFnc();
    }
};

obj.sayNumber();


const double = a => a * 2;
console.log(double(4));

// 1 обычная функция: this == window, но если 'use strict' - то undefined
// 2 Контекст у методов объекта - сам объект
// 3 this в конструкторах и классах - это новый экземпляр объекта
// 4 Ручная привязка this: call, apply, bind