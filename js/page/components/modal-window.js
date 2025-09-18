import { getCaptchaHtml } from "./captcha/useCaptcha.js";
import { containsAnyClassFromArray } from "./helpers/helpers.js";

const aHrefSkippedClasses = ['language-dropdown__item', 'scan-qr-and-go', 'schoolboys-lnk']

export function useModalOnAhrefs()
{
    const elements = document.querySelectorAll('a');
    elements.forEach(function(element) {
        // Skip language dropdown items
        if (!containsAnyClassFromArray(element, aHrefSkippedClasses)) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                showPopup(
                    () => {
                        showPopupWithImage('<img class="modal-window__image" src="./img/500.jpg">'); appendPopupButtonHandlers(); 
                    },
                    getCaptchaHtml(),
                    ['Я не робот','Я робот']
                );
            });
        }
    });
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
    document.getElementsByTagName('body')[0].insertAdjacentHTML("afterbegin",
    `
    <!-- Modal Background and Modal -->
    <div class="modal-window">
    <div class="modal-window__background">
        <span class="modal-window__close-btn">&times;</span>
        ${text}
        <div class="modal-window__buttons">
            <button class="modal-window__button modal-window__yes-btn">
                ${buttons[0]}
            </button>
            <button class="modal-window__button modal-window__no-btn">
                ${buttons[1]}
            </button>
        </div>
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