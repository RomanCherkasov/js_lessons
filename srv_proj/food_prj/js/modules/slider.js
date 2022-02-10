function slider() {
    const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        widthWindow = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = widthWindow;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function dotsOpacityChanger(slideIndex) {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    function transformSlider(offset) {
        slidesField.style.transform = `translateX(-${offset}px)`;
    }

    function zeroChecker(slideIndex) {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = `${slideIndex}`;
        }
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(widthWindow) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(widthWindow);
        }

        transformSlider(offset);
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }
        zeroChecker(slideIndex);
        dotsOpacityChanger(slideIndex);
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(widthWindow) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(widthWindow);
        }

        transformSlider(offset);

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }
        zeroChecker(slideIndex);
        dotsOpacityChanger(slideIndex);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = deleteNotDigits(widthWindow) * (slideTo - 1);
            transformSlider(offset);
            dotsOpacityChanger(slideIndex);
            zeroChecker(slideIndex);
        });
    });
}

module.exports = slider;