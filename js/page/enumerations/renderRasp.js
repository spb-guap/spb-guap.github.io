import { createInteractiveGrid } from "../components/captcha/createInteractiveGridOn.js";
import { showPopupWithImage, useModalOnAhrefsExceptFor } from "../components/modal-window.js";
import { addSeveralModalsWithContentOn, useModalWithContentOn, wrapImageStringIntoContainer } from "../components/popups/useModalWithContentOn.js";
import { useLoader } from "../components/transitions/useLoader.js"

const loader = useLoader();

export function renderRasp()
{
    useModalOnAhrefsExceptFor(['rasp-logo-a', 'gayshit-lnk'], true);
    addSeveralModalsWithContentOn(['.rasp-logo-a', '.gayshit-lnk'], 
        `<p>Переход в основной раздел: <p/><a class="rasp-logo-a" href="/">${window.location.origin}</a>`
    );
    
    useModalWithContentOn('.btn-new-search',
        '<p class="modal-window__captcha-title">Select all images with 220 Ω resistors</p>' +
        wrapImageStringIntoContainer('<img class="modal-window__image-adjusted" src="/img/rofls/220-resistors.jpg"/>'),
        ['Далее', 'Пропустить'],
        () => showPopupWithImage('<img class="modal-window__image" src="/img/animated/u-piter.webp"/>'),
        () => createInteractiveGrid('.modal-window__image-adjusted', 4, 4)
    );

    document.querySelector('.rasp-fourth-section__today').innerHTML = getTodayString();
    document.querySelector('.rasp-fourth-section__text2').innerHTML = getAcademicWeekParity().symbol;
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

function getAcademicWeekParity() {
    const today = new Date();
    const currentYear = today.getFullYear();
    
    // Начало учебного года (1 сентября)
    let academicYearStart = new Date(currentYear, 8, 1); // 8 = сентябрь
    
    // Если сейчас до сентября, берем предыдущий учебный год
    if (today < academicYearStart) {
        academicYearStart = new Date(currentYear - 1, 8, 1);
    }
    
    // Разница в неделях
    const diffTime = today - academicYearStart;
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    
    const isOddWeek = (diffWeeks + 1) % 2 !== 0; // +1 потому что первая неделя = №1
    
    return {
        isOdd: isOddWeek,
        parity: isOddWeek ? 'нечетная' : 'четная',
        weekNumber: diffWeeks + 1,
        symbol: isOddWeek 
            ? `<div style="color: red;>▲ ${diffWeeks + 1} верхняя (нечетная) неделя</div>` 
            : `<div style="color: blue;">▼ ${diffWeeks + 1} нижняя (четная) неделя</div>`
    };
}