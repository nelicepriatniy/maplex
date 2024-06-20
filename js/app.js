document.addEventListener('DOMContentLoaded', () => {
    let keyses = document.querySelectorAll('.keys-item');
    if (keyses.length > 0) {
        let showAllKeyses = document.querySelector('.keys-all-text')
        if (keyses.length > 2) {
            keyses[0].classList.add('active')
            keyses[1].classList.add('active')
            showAllKeyses.onclick = () => {
                for (let i = 0; keyses.length > i; i++) {
                    keyses[i].classList.add('active')
                    showAllKeyses.classList.remove('active')
                }
                showAllKeyses.classList.remove('active')

            }
        } else {
            for (let i = 0; keyses.length > i; i++) {
                keyses[i].classList.add('active')
                showAllKeyses.classList.remove('active')
            }
        }
    }

    const rewSlider = new Swiper('.rew-slider', {
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 2,
        navigation: {
            nextEl: '.rew-arrow-next',
            prevEl: '.rew-arrow-prev'
        }
    });

    const rewBtns = document.querySelectorAll('.rew-slide-original');
    const rewPopupImg = document.querySelector('.rew-popup-img')
    const rewPopup = document.querySelector('.rew-popup')
    if (rewBtns.length > 0) {
        for (let i = 0; rewBtns.length > i; i++) {
            rewBtns[i].onclick = () => {
                let dataImg = rewBtns[i].getAttribute('data-href');
                rewPopupImg.setAttribute('src', dataImg);
                rewPopup.classList.add('active')
                document.querySelector('.closePopups').classList.add('active')
            }
        }
    }

    const closePopupsBtns = document.querySelectorAll('.closePopupsBtn')

    if(closePopupsBtns.length > 0) {
        for(let i = 0; closePopupsBtns.length > i; i++) {
            closePopupsBtns[i].onclick = ()=>{
                const popups = document.querySelectorAll('.popup')
                for(let j = 0; popups.length > j; j++) {
                    popups[j].classList.remove('active')
                }
                for(let j = 0; closePopupsBtns.length > j; j++) {
                    closePopupsBtns[j].classList.remove('active')
                }
            }
        }
    }

    const mashinTextBlock = document.querySelector('#pechatMashin');

    if(mashinTextBlock) {
        var typed = new Typed('#pechatMashin', {
          strings: ['ЕЖЕМЕСЯЧНАЯ', 'КОМПЛЕКСНАЯ', 'АБОНЕНТСКАЯ'],
          typeSpeed: 100,
          loop: true,
          backSpeed: 20,
        });
    }

    const formBtns = document.querySelectorAll('.form-btn')

    if(formBtns.length > 0) {
        const formPopup = document.querySelector('.form-popup')
        for(let i = 0; formBtns.length > i; i ++) {
            formBtns[i].onclick = ()=>{
                formPopup.classList.add('active')
                document.querySelector('.closePopups').classList.add('active')
            }
        }
    }
    const mapBtns = document.querySelectorAll('.map-popup-btn')

    if(mapBtns.length > 0) {
        const mapPopup = document.querySelector('.finde-us-popup')
        for(let i = 0; mapBtns.length > i; i ++) {
            mapBtns[i].onclick = ()=>{
                mapPopup.classList.add('active')
                document.querySelector('.closePopups').classList.add('active')
            }
        }
    }


})
