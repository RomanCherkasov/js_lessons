'use strict';
// const timerId = setTimeout(logger, 2000);
const btn = document.querySelector('.btn');
const buttonCreate = document.createElement('button');
let tId,
    i = 0;
let pos = 0;
const elem = document.querySelector('.box');

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300){
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
function myAnimation() {
    pos++;
    elem.style.top = pos + 'px';
    elem.style.left = pos + 'px';
    
    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    } else {
        elem.style.top = 0;
        elem.style.left = 0;
        pos = 0;
        // cancelAnimationFrame(animationID)
    }
}
// let animationID = requestAnimationFrame(myAnimation);
btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// function logger(){
//     if (i == 3) {clearInterval(tId);}
//     console.log('text');
//     i++;
// }

// btn.addEventListener('click', () =>{
//     console.log('Таймер сброшен');
//     clearInterval(timerId);
// });

// buttonCreate.classList.add('myBtn', 'btn');
// document.body.append(buttonCreate);
// const mybtn =  document.querySelector('.myBtn');
// mybtn.addEventListener('click', () =>{
//     i = 0;
//     tId = setInterval(logger, 2000);
// });

// let id = setTimeout(function log(){
//     console.log('hello');
//     id = setTimeout(log, 1);
// }, 1);
