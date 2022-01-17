// new RegExp('pattern', 'flags');


// const ans = prompt('Введите ваше имя');
// const reg = /n/ig;
// console.log(reg.test(ans));
const str = 'My Name is R2D2';
console.log(str.match(/\w\d\w\d/i));

// \D - не цифры
// \W - не буквы

// \d - цифры 
// \w - буквы
// \s - символы

// flags
// i - регистронезависимый поиск
// g - все вхождения
// m - многострочный режим

// search возвращает позицию первого вхождения регулярного выражения
// если не найдено - возвращает -1 не работает с флагом "g"
// console.log(ans.search(reg));

// console.log(ans.match(reg));

// const pass = prompt('PWD');
// console.log(pass.replace(/./g, "*"));
// console.log('123-123-123'.replace(/-/g, ''));

