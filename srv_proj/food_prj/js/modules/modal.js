function modal() {
    const modalWindow = document.querySelector('.modal'),
        buttonForModalWindow = document.querySelectorAll('[data-modal]');

    function modalWindowHide(modalWindowForHide) {
        // как в уроке
        modalWindowForHide.classList.add('hide');
        modalWindowForHide.classList.remove('show');
        // как сам придумал
        // modalWindow.style.display = 'none';
        document.body.style.overflow = '';
    }

    function modalWindowShow(modalWindowForShow) {
        // как в уроке
        modalWindow.classList.add('show');
        modalWindow.classList.remove('hide');
        // как сам придумал
        // modalWindow.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
        window.removeEventListener('scroll', scrollListenr);
    }

    buttonForModalWindow.forEach((item) => {
        item.addEventListener('click', () => {
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
    document.addEventListener('keydown', (event) => {
        //  console.log(event);
        if (event.code == 'Escape' && modalWindow.classList.contains('show')) {
            modalWindowHide(modalWindow);
        }
    });

    const modalTimerId = setTimeout(modalWindowShow, 3000);
    clearInterval(modalTimerId);

    function scrollListenr() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalWindowShow(modalWindow);
        }
    }

    window.addEventListener('scroll', scrollListenr);



}

module.exports = modal;