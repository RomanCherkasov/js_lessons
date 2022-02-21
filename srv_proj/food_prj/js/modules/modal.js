function modalWindowHide(modalSelector) {
    const modalWindowForHide = document.querySelector(modalSelector)
    // как в уроке
    modalWindowForHide.classList.add('hide');
    modalWindowForHide.classList.remove('show');
    // как сам придумал
    // modalWindow.style.display = 'none';
    document.body.style.overflow = '';
}

function modalWindowShow(modalSelector, modalTimerId) {
    const modalWindow = document.querySelector(modalSelector)
    // как в уроке
    modalWindow.classList.add('show');
    modalWindow.classList.remove('hide');
    // как сам придумал
    // modalWindow.style.display = 'block';
    document.body.style.overflow = 'hidden';
    console.log(modalTimerId)
    if (modalTimerId){
        clearInterval(modalTimerId);
    }
}


function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalWindow = document.querySelector(modalSelector),
        buttonForModalWindow = document.querySelectorAll(triggerSelector);

    buttonForModalWindow.forEach((item) => {
        item.addEventListener('click', () => 
            modalWindowShow(modalSelector, modalTimerId)
        );
    });

    // buttonClose.addEventListener('click', () => {
    //     modalWindowHide(modalWindow);
    // });


    modalWindow.addEventListener('click', (event) => {
        if (event.target === modalWindow || event.target.getAttribute('data-close') == '') {
            modalWindowHide(modalSelector);
        }
    });
    document.addEventListener('keydown', (event) => {
        //  console.log(event);
        if (event.code == 'Escape' && modalWindow.classList.contains('show')) {
            modalWindowHide(modalSelector);
        }
    });

    clearInterval(modalTimerId);

    function scrollListenr() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalWindowShow(modalSelector, modalTimerId);
        }
    }

    window.addEventListener('scroll', scrollListenr);



}

export default modal;
export {modalWindowHide};
export {modalWindowShow};