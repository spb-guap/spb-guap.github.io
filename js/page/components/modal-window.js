import { getCaptchaHtml } from "./captcha/useCaptcha.js";
import { containsAnyClassFromArray } from "./helpers/helpers.js";
import { useLoader } from "./transitions/useLoader.js";

let switcher = 0;
let MAX_OPTIONS = 4;
let index = 0;
const END_INDEX = MAX_OPTIONS - 1;
const loader = useLoader();

export function useModalOnAhrefsExceptFor(aHrefSkippedClasses, isReversed = false)
{
    switcher = (isReversed ? END_INDEX : 0);
    const elements = document.querySelectorAll('a');
    elements.forEach(function(element) {
        if (!containsAnyClassFromArray(element, aHrefSkippedClasses)) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                switchOnPopup_Level1(isReversed);
            });
        }
    });
}

function switchOnPopup_Level1(isReversed) {
    if ( switcher <= 1 ) {
        showPopup(
            () => {
                switchOnPopup_Level2();
            },
            getCaptchaHtml(),
            ['Я не робот','Я робот']
        );
    } else {
        switchOnPopup_Level2();
    }

    switcher = (switcher >= MAX_OPTIONS || switcher < 0) ? (isReversed ? END_INDEX : 0) : (isReversed ? switcher - 1 : switcher + 1);
}

function switchOnPopup_Level2()
{
    switch (switcher) {
        case 0: {    
            showPopup(
                () =>  showPopupWithImage('<img class="modal-window__image" src="/img/500.jpg">'),
                `<p style="text-align: center; margin-bottom: 20px; color: #333;">Это точно, ты не врёшь?<p/>`,
                ['Не вру', 'Вру']
            );
        } break;
        case 1: {
            showPopup(
                () => showPopupWithImage('<img class="modal-window__image" src="/img/500.jpg">'), 
                '<img class="modal-window__image" src="/img/rofls/captcha-peach.jpg">',
                ['Не пропускать', 'Пропустить']
            );
        } break;
        case 2: {
            showPopup(
                () => showPopupWithImage('<img class="modal-window__image" src="/img/500.jpg">'), 
                '<img class="modal-window__image" src="/img/rofls/reestr.jpg">',
                ['Не предоставлять', 'Предоставить'], 
                () => document.querySelector('.modal-window__background')?.classList.add('modal-window__large-scale')
            );
        } break;
        case 3: {
            showPopup(
                () => showPopupWithImage('<img class="modal-window__image" src="/img/500.jpg">'), 
                '<p>Попався. Лабы где?</p><img class="modal-window__image" src="/img/rofls/no-labs.jpg">',
                ['С лабами', 'Без лаб']
            );
        } break;
    }
}

// Exported
export function showPopupWithImage(image, next = () => {}) {
    recreateWithImage(image);
    
    const modalBackground = document.getElementsByClassName('modal-window')[0];
    (modalBackground ?? { style : {display : '' }}) .style.display = 'block';

    modalBackground.addEventListener('click', function(e) {
        modalBackground.remove();
    });
    
    next();
}

export function showPopup(event_handler, text, buttons, next = () => {}) {
    recreate(text, buttons);
    
    const modalBackground = document.getElementsByClassName('modal-window')[0];
    (modalBackground ?? { style : {display : '' }}) .style.display = 'block';
    appendPopupButtonHandlers();

    appendPopupYesHandler(() => { event_handler() })
    next();
}

export function appendPopupYesHandler(onYes)
{
    let yesBtn = document.getElementsByClassName('modal-window__yes-btn')[0];
    yesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        onYes(e);
    })
}

export function appendPopupNoHandler(onNo)
{
    let yesBtn = document.getElementsByClassName('modal-window__no-btn')[0];
    yesBtn.addEventListener('click', function(e) {
        onNo(e);
    })
}

function dropExisting()
{
    let modals = document.getElementsByClassName('modal-window');
    if (!modals) return;
    for (let i = 0; i < modals.length; i++) {
        const element = modals[i];
        element.remove();
    }
}

function appendPopupButtonHandlers() {
    let modalBackground = document.getElementsByClassName('modal-window')[0];
    let closeBtn = document.getElementsByClassName('modal-window__close-btn')[0];
    let noBtn = document.getElementsByClassName('modal-window__no-btn')[0];

    const array = [closeBtn, noBtn]
    array.forEach((b) => {
            b.addEventListener('click', function() {
                modalBackground.style.display = 'none';
            })
        }
    );

    window.addEventListener('click', function(event) {
        if (event.target === modalBackground) {
            modalBackground.style.display = 'none';
        }
    });
}

function recreate(text, buttons)
{
    dropExisting();
    let buttonsText = buttons == null ? "" :
    `<div class="modal-window__buttons">
        <button class="modal-window__button modal-window__yes-btn">
            ${buttons[0]}
        </button>
        <button class="modal-window__button modal-window__no-btn">
            ${buttons[1]}
        </button>
    </div>`;
    document.getElementsByTagName('body')[0].insertAdjacentHTML("afterbegin",
    `
    <!-- Modal Background and Modal -->
    <div class="modal-window">
    <div class="modal-window__background">
        <span class="modal-window__close-btn">&times;</span>
        ${text}
        ${buttonsText}
    </div>
    </div>
    `);
}

function recreateWithImage(image)
{
    dropExisting();
    document.getElementsByTagName('body')[0].insertAdjacentHTML("afterbegin",
    `
    <!-- Modal Background and Modal -->
    <div class="modal-window">
    <div class="modal-window__background">
        <span class="modal-window__close-btn">&times;</span>
        ${image}
    </div>
    </div>
    `);
}