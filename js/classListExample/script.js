'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
console.log(btns[0].classList.item(1));
console.log(btns[1].classList.add('red'));
console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')){
    // console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[0].classList.contains('red')) {
    //     btns[0].classList.add('red');
    // } else{
    //     btns[0].classList.remove('red');
    // }
    btns[0].classList.toggle('red');
});

wrapper.addEventListener('click', (event) => {
    // тут мы проверяем не только на наличие target.tagName, но и то что 
    // target в принципе существует, потому что есть такие элементы которые
    // в принципе не содержат target(например <br> тег)
    // if(event.target && event.target.classList('blue'))
    if(event.target && event.target.matches('button.red')){
        console.log('hello');
    }
});

// стандартный способ навешать обработчик на группу элементов.
// элементы которые был добавлены после того как был навешан обработчик
// не получили этот обработчик. Что в целом нормальное и логичное поведение
// но если нам надо что 
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);