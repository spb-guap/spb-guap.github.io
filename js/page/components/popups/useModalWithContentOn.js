import { showPopup } from "../modal-window.js";

export function useModalWithContentOn(elementQuery, content, buttons, yesHandler = () => { }, then = () => { })
{
    const element = document.querySelector(elementQuery);
    element.addEventListener('click', (e) => {
        e.preventDefault();
        showPopup(
            yesHandler,
            `${content}`,
            buttons,
            () => {
                document.querySelector('.modal-window__background')?.classList.add('modal-window__large-scale');
            }
        );
        then();
    });
}

export function wrapImageStringIntoContainer(input)
{
    return `<div class="modal-window__image-container">${input}</div>`;
}