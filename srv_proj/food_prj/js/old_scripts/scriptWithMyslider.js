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

    // Slider
    const sliderElem = document.querySelectorAll('.offer__slide'),
          leftArrow = document.querySelector('.offer__slider-prev'),
          rightArrow = document.querySelector('.offer__slider-next'),
          totalSliderPositions = document.querySelector('#total');
    let currentSliderPosition = document.querySelector('#current');
    

    function hideSliderElem() {
        sliderElem.forEach(item =>{
            item.classList.add('hide');
        });
    }
    
    function showSliderElem(i = +currentSliderPosition.textContent){
        if (i <= 0){
            i = +totalSliderPositions.textContent;
            currentSliderPosition.textContent = `0${i}`;
        }
        if (i > sliderElem.length){
            i = 1;
            currentSliderPosition.textContent = `0${i}`;
        }
        sliderElem[i-1].classList.add('show', 'fade');
        sliderElem[i-1].classList.remove('hide');
    }

    hideSliderElem();
    showSliderElem();

    leftArrow.addEventListener('click', () => {
        const intSlPos = +currentSliderPosition.textContent; 
        currentSliderPosition.textContent = `0${intSlPos - 1}`;
        hideSliderElem();
        showSliderElem(intSlPos - 1);
    });

    rightArrow.addEventListener('click', () => {
        const intSlPos = +currentSliderPosition.textContent; 
        currentSliderPosition.textContent = `0${intSlPos + 1}`;
        hideSliderElem();
        showSliderElem(intSlPos + 1);
    });

    const deadline = '2021-12-31';
    
    // ?????????????????? ?????????????????????? ?????????????? ???? ????????????????
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

    // ?????????????? ?????? ???????????????????? ???????? ?????????? ?????????????????????? ????????????
    function getZero(num) {
        if (num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    // ?????????????????????????? ??????????????
    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        
        updateClock();
        
        // ???????????????????? ?????????????? ???? ????????????????
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
          buttonForModalWindow = document.querySelectorAll('[data-modal]');

    function modalWindowHide(modalWindowForHide){
        // ?????? ?? ??????????
        modalWindowForHide.classList.add('hide');
        modalWindowForHide.classList.remove('show');
        // ?????? ?????? ????????????????
        // modalWindow.style.display = 'none';
        document.body.style.overflow = '';
    }

    function modalWindowShow(modalWindowForShow){
        // ?????? ?? ??????????
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        // ?????? ?????? ????????????????
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

    // buttonClose.addEventListener('click', () => {
    //     modalWindowHide(modalWindow);
    // });
    

    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow || event.target.getAttribute('data-close') == '') {
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

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 74;
            this.changeToRUB();
        }

        changeToRUB () {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0){
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">????????:</div>
                    <div class="menu__item-total"><span>${this.price}</span> ??????/????????</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    const getResource = async (url) => {
        const res = await fetch(url);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}. Status: ${res.status}`);
        }
        return await res.json();
    };

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) =>{
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));
    // function createCard(data) {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');
    //         element.classList.add('menu__item');
    //         element.innerHTML = `
    //             <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">????????:</div>
    //                 <div class="menu__item-total"><span>${price}</span> ??????/????????</div>
    //             </div>
    //         `;

    //         document.querySelector('.menu .container').append(element);
    //     });
    // }
    // Forms
    const forms = document.querySelectorAll('form');
    
    const message = {
        loading: 'img/form/spinner.svg',
        success: '?????? ?????????? ??????????????',
        failure: '?????? ???? ??????...'
    };

    forms.forEach(item => {
        bindpostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };

    function bindpostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            postData('http://localhost:3000/requests', json)
            .then(data => {
                // console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() =>{
                form.reset();
            });
        });
    }

    function showThanksModal (message){
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');

        modalWindowShow();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>x</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            // modalWindowHide(thanksModal);
            modalWindowHide(modalWindow);
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
});