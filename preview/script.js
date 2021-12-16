'use strict';

const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      btns = document.querySelectorAll('button');

// btn.onclick = function(){
//     alert('Click');
// };
// let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    e.target.remove();
    // i++;
    // if (i > 0){
    //     btn.removeEventListener('click', deleteElement);
    // }
}; 
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);


const link = document.querySelector('a');

link.addEventListener('click', function(event){
    event.preventDefault();

    console.log(event.target);
});

btns.forEach((elem) => {
    elem.addEventListener('click', deleteElement);
});