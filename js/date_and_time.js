const timeStamp = new Date(0); // таймстамп
const strDate = new Date('2021-10-21'); // преобразует в дату из строки

 // преобразуем из чисел в дату (месяца начинаются с нуля, 
 // часы учитывают часовой пояс)
const numberDate = new Date(2021, 10, 21, 10);

// получаем текущую дату
const now = new Date(); 

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate()); // дата(день)
console.log(now.getDay()); //  день недели
console.log(now.getUTCHours());
console.log(now.getTimezoneOffset()); // разница между текущим временем и UTC

console.log(now.getTime()); // таймстамп
// easy benchmark
let start = new Date();

for (let i = 0; i < 900000000; i++){
    let some = i ** 3;
}
let end = new Date();
console.log(end - start);