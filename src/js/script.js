window.addEventListener('DOMContentLoaded', () => {
    // TIME
    const time = () => {
        const hours = document.querySelector('#hours');
        const minutes = document.querySelector('#minutes');
        const seconds = document.querySelector('#seconds');

        hours.innerHTML = addZero(new Date().getHours());
        minutes.innerHTML = addZero(new Date().getMinutes());
        seconds.innerHTML = addZero(new Date().getSeconds());
    };

    function addZero(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    time();

    setInterval(time, 1000)
    
    
    // SECONDOMER
    
    const buttonSec = document.querySelector('.setTimer__button');
    const secSelector = document.querySelector('#seconds1');
    const minSelector = document.querySelector('#minutes1');
    const breakSec = document.querySelector('.setTimer__break');
    let sec = 0;
    let min = 0;

    secSelector.innerHTML = addZero(sec);
    minSelector.innerHTML = addZero(min);

    function secondomer() {
        if (sec == 60) {
            sec = 0;
            min++;
            secSelector.innerHTML = addZero(sec);
            minSelector.innerHTML = addZero(min);
        } else {
            sec++;
            secSelector.innerHTML = addZero(sec);
            minSelector.innerHTML = addZero(min);
        }
    }
    buttonSec.addEventListener('click', () => {
        buttonSec.classList.toggle('setTimer__button_active');
        if (buttonSec.classList.contains('setTimer__button_active')) {
            buttonSec.innerHTML = `Пауза`;
            secondom = setInterval(secondomer, 1000); // Изменить что бы была не глобальной
            breakSec.style.display = 'none';
            breakSec.addEventListener('click', () => {
                sec = 0;
                min = 0;
                secSelector.innerHTML = addZero(sec);
                minSelector.innerHTML = addZero(min);
                breakSec.style.display = 'none';
            });
        } else {
            buttonSec.innerHTML = `Запустить`;
            clearInterval(secondom);
            breakSec.style.display = 'block';
        }
    });
});