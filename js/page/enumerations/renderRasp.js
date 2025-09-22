import { showPopupWithImage, useModalOnAhrefsExceptFor } from "../components/modal-window.js";
import { useModalWithContentOn } from "../components/popups/useModalWithContentOn.js";
import { useModalWithImageOn } from "../components/popups/useModalWithImageOn.js";
import { useLoader } from "../components/transitions/useLoader.js"

const loader = useLoader();

export function renderRasp()
{
    useModalOnAhrefsExceptFor(['.rasp-logo-a'], true)
    useModalWithContentOn(
        '.rasp-logo-a', 
        `<p>Переход в основной раздел: <p/><a class="rasp-logo-a" href="/">${window.location.origin}</a>`
    );
    useModalWithImageOn('.btn-new-search', '/img/animated/u-piter.webp');

    document.querySelector('.rasp-fourth-section__today').innerHTML=getTodayString();
}

function getTodayString() {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    
    const today = new Date();
    const dayOfWeek = days[today.getDay()];
    const day = today.getDate();
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    
    return `Сегодня <nobr>${dayOfWeek}, ${day} ${month} ${year} г.</nobr><br>`;
}