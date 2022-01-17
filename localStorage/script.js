// localStorage.setItem('number', 5);

// localStorage.removeItem('number');
// console.log(localStorage.getItem('number'));

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      changeButton = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}
if (localStorage.getItem('bg') === 'changed'){
    form.style.backgroundColor = 'red';
} 


checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

changeButton.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed'){
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: 25
};
// Нам необходимо сериализовать объект перед помещением его в localstorage
const serializedPersone = JSON.stringify(persone);
localStorage.setItem('alex', serializedPersone);

console.log(localStorage.getItem('alex'));