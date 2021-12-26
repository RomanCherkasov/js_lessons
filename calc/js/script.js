'use strict';

const inputRUB = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');

inputRUB.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // method, url, async(default=true), login, password
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () =>{
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputRUB.value / +data.current.usd).toFixed(2);
        } else {
            inputUSD.value = 'Что то пошло не так';
        }
    });
});