/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики

'use strict';
document.addEventListener('DOMContentLoaded', () =>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        submitButton = document.querySelector('button'),
        inputArea = document.querySelector('.adding__input'),
        checkBox = document.querySelector('[type="checkbox"]'),
        // checkBox = document.querySelector('.yes').previousElementSibling,
        deleteIcons = document.querySelectorAll('.delete');
        
    const sortArr = (arr) => {
        arr.sort();
    };

    const addFilm = (e) => {
        e.preventDefault();
        if (inputArea.value) {
            let filmName = inputArea.value;
            movieDB.movies.push((filmName.length > 21) ? filmName.slice(0, 20) + '...' : filmName);
            sortArr(movieDB.movies);
            filmListShower(movieDB.movies, movieList);
            if (checkBox.checked){
                console.log('Добавляем любимый фильм');
            }
        }
        
    };

    const makeChanges = () => {
            genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    const dellAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const filmListShower = function(films, parent){
        parent.innerHTML = '';
        sortArr(movieDB.movies);
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item"> ${i + 1}: ${film}
            <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) =>{
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                // метод(splice) принимающий в себя порядковый номер элемента массива 
                // и сколько элементов нужно удалить начиная с этого номера
                movieDB.movies.splice(i, 1); 
                filmListShower(movieDB.movies, movieList);
            });
        });
    };
    
    submitButton.addEventListener('click', addFilm);
    
    makeChanges();
    
    filmListShower(movieDB.movies, movieList);
    dellAdv(adv);
});