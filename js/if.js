'use strict';

if (1 == 1) {
    console.log('true');
} else {
    console.log('false');
}

const a = 50;

if (a > 100) {
    console.log('a > 100');
} else if (a < 50) {
    console.log('a < 50');
} else {
    console.log('a < 100 but a >= 50');
}

(a == 50) ? console.log('ok!') : console.log('error');

const num = 50;
// switch проверяет стогое ( === ) сравнение, учитывая типы
switch(num) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 50:
        console.log('верно');
        break;
    default:
        console.log('не в этот раз');
        break;
}