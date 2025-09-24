import { showPopup } from "../modal-window.js";

export function useModalWithContentOn(elementQuery, content, buttons, yesHandler = () => { }, then = () => { })
{
    const element = document.querySelector(elementQuery);
    element.addEventListener('click', (e) => {
        e.preventDefault();
        showPopup(
            yesHandler,
            `${content}`,
            buttons
        );
        then();
    });
}

export function useModalsWithContentOnAllOf(elementQuery, content, buttons, yesHandler = () => { }, then = () => { })
{
    for (let element of document.querySelectorAll(elementQuery)) {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            showPopup(
                yesHandler,
                `${content}`,
                buttons
            );
            then();
        });
    }
}

export function showModalWithContent(content, buttons, yesHandler = () => { }, noHandler = () => { })
{
    showPopup(
        yesHandler,
        `${content}`,
        buttons,
        () => {  },
        () => { noHandler() }
    );;
}

export function wrapImageStringIntoContainer(input)
{
    if ( input.indexOf('modal-window__image-container' < 0) )
        return `<div class="modal-window__image-container">${input}</div>`;
    return input;
}