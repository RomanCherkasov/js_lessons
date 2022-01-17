// Тут мы можем на прямую обратиться и изменить значения переменных
// function User(name, age){
//     this.name = name;
//     this.age = age;

//     this.say = function(){
//         console.log(`Имя пользователя: ${this.name}, возраст пользователя: ${this.age}`);
//     };
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name);
// console.log(ivan.age);

// ivan.age = 30;
// ivan.name = 'Alex';

// ivan.say();

// // В этом случае мы не можем не изменить ни получить значения переменных
// function User(name, age){
//     let userName = name;
//     let userAge = age;

//     this.say = function(){
//         console.log(`Имя пользователя: ${userName}, возраст пользователя: ${userAge}`);
//     };
// }

// const ivan2 = new User('Ivan', 27);
// console.log(ivan2.name);
// console.log(ivan2.age);

// ivan2.age = 30;
// ivan2.name = 'Alex';

// ivan2.say();

// В этом случае мы реализуем методы для получения и изменения значений
// Приемущество такого подхода в том что мы можем "валидировать" входящие значения
// function User(name, age){
//     this.name = name;
//     let userAge = age;

//     this.say = function(){
//         console.log(`Имя пользователя: ${this.name}, возраст пользователя: ${userAge}`);
//     };
//     this.getAge = function(){
//         return userAge;
//     };

//     this.setAge = function(age){
//         if (typeof age === 'number' && age > 0 && age < 110){
//             userAge = age;
//         } else {
//             console.log('Недопустимое значение');
//         }
//     };
// }

// const ivan3 = new User('Ivan', 27);
// console.log(ivan3.name);
// console.log(ivan3.getAge());

// ivan3.setAge(30);
// ivan3.setAge(300);
// ivan3.name = 'Alex';

// ivan3.say();

// Тут пока так же как в python. Поля с нижними подчеркиваниями - "неизменяемые",
// но если очень хочется то изменяемые.
// Есть эксперементальный синтаксис с #varName но ещё не везде поддерживается.
// К переменным имена которых начинаются с "#" действительно нельзя получить доступ не из класса
// А для их получения и изменения необходимо описывать функции ("getter" и "setter")
// Nodejs 12 + и chrome 92+ работает точно, в других хз
class User {
    constructor(name, age){
        this.name = name;
        this._age = age;
    }
    #varname = 213

    say() {
        console.log(`Имя пользователя: ${this.name} ${this.#varname}, возраст пользователя: ${this._age}`);
    }
    get age(){
        return this._age;
    }

    set age(age){
        if (typeof age === 'number' && age > 0 && age < 110){
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.age);
ivan.age = 130;
console.log(ivan.age);
ivan.say();
