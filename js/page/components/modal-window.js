import { createInteractiveGrid } from "./captcha/createInteractiveGridOn.js";
import { getCaptchaHtml } from "./captcha/useCaptcha.js";
import { containsAnyClassFromArray } from "./helpers/helpers.js";
import { wrapImageStringIntoContainer } from "./popups/useModalWithContentOn.js";
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
                //switcher = (switcher < 0) ? END_INDEX : switcher;
                switchOnPopup_Level2(isReversed);
            },
            getCaptchaHtml(),
            ['Я не робот','Я робот'],
                () => document.querySelector('.modal-window__background')?.classList.add('modal-window__vertical-content')
        );
    } else {
        switchOnPopup_Level2(isReversed);
    }
}

function switchOnPopup_Level2(isReversed)
{
    switch (switcher) {
        case 0: {    
            showPopup(
                () => showPopupWithImage('<img class="modal-window__image modal-window__vertical-content" src="/img/500.jpg">',
                    () => document.querySelector('.modal-window__background')?.classList.add('modal-window__horizontal-content')),
                `<p style="text-align: center; margin-bottom: 20px; color: #333;">Это точно, ты не врёшь?</p>`,
                ['Не вру', 'Вру'],
                    () => document.querySelector('.modal-window__background')?.classList.add('modal-window__vertical-content')
            );
        } break;
        case 1: {
            showPopup(
                () => showPopupWithImage('<img class="modal-window__image modal-window__vertical-content" src="/img/500.jpg">',
                    () => document.querySelector('.modal-window__background')?.classList.add('modal-window__horizontal-content')),
                wrapImageStringIntoContainer('<img class="modal-window__image-adjusted" src="/img/rofls/captcha-peach.jpg"/>'),
                ['Не пропускать', 'Пропустить'],
                () => setTimeout(() => createInteractiveGrid('.modal-window__image-adjusted', 3, 3), 250),
            );
        } break;
        case 2: {
            showPopup(
                () => showPopupWithImage('<img class="modal-window__image modal-window__vertical-content" src="/img/500.jpg">',
                    () => document.querySelector('.modal-window__background')?.classList.add('modal-window__horizontal-content')),
                '<img class="modal-window__image" src="/img/rofls/reestr.jpg">',
                ['Не предоставлять', 'Предоставить'], 
                () => document.querySelector('.modal-window__background')?.classList.add('modal-window__large-scale', 'modal-window__horizontal-content')
            );
        } break;
        case 3: {
            showPopup(
                () => showPopupWithImage('<img class="modal-window__image modal-window__vertical-content" src="/img/500.jpg">',
                    () => document.querySelector('.modal-window__background')?.classList.add('modal-window__horizontal-content')),
                '<p>Попався. Лабы где?</p><img class="modal-window__image" src="/img/rofls/no-labs.jpg">',
                ['С лабами', 'Без лаб']
            );
        } break;
    }
    
    switcher = isReversed ? switcher - 1 : switcher + 1;
    if (switcher >= END_INDEX || (switcher) < 0) {
        switcher = (isReversed ? END_INDEX : 0);
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

export function showPopup(event_handler, text, buttons, next = () => {}, noHandler = () => {}) {
    recreate(text, buttons);
    
    const modalBackground = document.getElementsByClassName('modal-window')[0];
    (modalBackground ?? { style : {display : '' }}) .style.display = 'block';
    appendPopupButtonHandlers();

    if (buttons?.length) {
        appendPopupYesHandler(() => { event_handler() });
        if (buttons?.length > 1)
            appendPopupNoHandler(noHandler);
    }
    next();
    dropModalOnEsc();
}

let added = false;
function dropModalOnEsc() {
    if (added) return;
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape')
            dropExisting();
    });
    added = true;
}

export function appendPopupYesHandler(onYes)
{
    let yesBtn = document.getElementsByClassName('modal-window__yes-btn')[0];
    if (!yesBtn ) { console.log("Error appending an action to absent yes button"); return; }
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
        if (!b) return;
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
        ${wrapImageStringIntoContainer(image)}
    </div>
    </div>
    `);
}