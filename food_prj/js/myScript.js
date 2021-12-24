window.addEventListener('DOMContentLoaded', () => {
    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent () {
        tabsContent.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    const deadline = '2021-12-31';
    
    // получение оставшегося времени до дедлайна
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / 86400000),
              hours = Math.floor((t / 3600000) % 24),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
        return{
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // функция для добовления нуля перед однозначным числом
    function getZero(num) {
        if (num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    // инициализация таймера
    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();
        
        // обновление таймера на странице
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.t <= 1){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // modal window

    const modalWindow = document.querySelector('.modal'),
          buttonForModalWindow = document.querySelectorAll('[data-modal]'),
          buttonClose = document.querySelector('[data-close]');

    function modalWindowHide(modalWindowForHide){
        // как в уроке
        modalWindowForHide.classList.add('hide');
        modalWindowForHide.classList.remove('show');
        // как сам придумал
        // modalWindow.style.display = 'none';
        document.body.style.overflow = '';
    }

    function modalWindowShow(modalWindowForShow){
        // как в уроке
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        // как сам придумал
        // modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
        window.removeEventListener('scroll', scrollListenr);
    }

    buttonForModalWindow.forEach((item) =>{
        item.addEventListener('click', () =>{
            modalWindowShow(modalWindow);
        });
    });

    buttonClose.addEventListener('click', () => {
        modalWindowHide(modalWindow);
    });
    

    modalWindow.addEventListener('click', (event) => {
        if (event.target == modalWindow) {
            modalWindowHide(modalWindow);
        }
    });
    document.addEventListener('keydown', (event) =>{
        //  console.log(event);
        if (event.code == 'Escape' && modalWindow.classList.contains('show')) {
            modalWindowHide(modalWindow);
        }
    });

    const modalTimerId = setTimeout(modalWindowShow, 3000);
    clearInterval(modalTimerId);
    
    function scrollListenr(){
        if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalWindowShow(modalWindow);
        }
    }

    window.addEventListener('scroll', scrollListenr);

    // div food menu

    // удаляем существующие элементы на странице
    const menuItems = document.querySelectorAll('.menu__item'),
          menuContainer = document.querySelector('.menu__field .container');
    
    menuItems.forEach((e) => {
        e.remove();
    });

    // создаем класс для формирования карточки товара
    class FoodCard{
        constructor(imgSrc, title, description, price) {
            this.imgSrc = imgSrc;
            this.title = title;
            this.description = description;
            this.price = price;
        }

        createFoodCard(){
            const mDiv = document.createElement('div'),
                  img = document.createElement('img'),
                  h3Title = document.createElement('h3'),
                  descriptionDiv = document.createElement('div'),
                  dividerDiv = document.createElement('div'),
                  priceDiv = document.createElement('div'),
                  priceCostDiv = document.createElement('div'),
                  priceTotalDiv = document.createElement('div');
            mDiv.className = 'menu__item';

            img.src = this.imgSrc;
            h3Title.className = 'menu__item-subtitle';
            h3Title.innerText = `Меню "${this.title}"`;
            
            descriptionDiv.className = 'menu__item-descr';
            descriptionDiv.innerText = this.description;

            dividerDiv.className = 'menu__item-divider';

            priceDiv.className = 'menu__item-price';

            priceCostDiv.className = 'menu__item-cost';
            priceCostDiv.innerText = 'Цена:';

            priceTotalDiv.className = 'menu__item-total';
            priceTotalDiv.innerHTML = `<span>${this.price}</span> грн/день`;
            
            mDiv.append(img);
            mDiv.append(h3Title);
            mDiv.append(descriptionDiv);
            mDiv.append(dividerDiv);
            priceDiv.append(priceCostDiv);
            priceDiv.append(priceTotalDiv);
            mDiv.append(priceDiv);
            menuContainer.append(mDiv);
        }
    }

    const fitnesElem = new FoodCard('img/tabs/vegy.jpg', 'Фитнес', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 229);
    const premiumElem = new FoodCard('img/tabs/elite.jpg', 'Премиум', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 550);
    const postElem = new FoodCard('img/tabs/post.jpg', 'Постное', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 430);
    fitnesElem.createFoodCard();
    premiumElem.createFoodCard();
    postElem.createFoodCard();

});