'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '5%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Some text');

div.classList.add('black');

// document.body.append(div);

wrapper.append(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[1].after(div);

// circles[1].remove();

// hearts[0].replaceWith(circles[0]);

// __deprecated methods__

// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[0]); // div засовывается перед hearts[0]
// wrapper.removeChild(hearts[1]); // удаляется дочерний элемент hearts[1] у родителя wrapper
// wrapper.replaceChild(circles[0], hearts[1]); // меняется дочерний элемент (circles[0]) у родителя, на hearts[1]

div.innerHTML = '<h1>Hello world</h1>';
// div.textContent = 'Hello';

div.insertAdjacentHTML('afterbegin', '<h2>Hellow</h2>');