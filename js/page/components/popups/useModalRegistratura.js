import { showPopupWithImage } from "../modal-window.js";

export function useModalRegistratura(elementQuery)
{
    const element = document.querySelector(elementQuery);
    element.addEventListener('click', (e) => {
        e.preventDefault();
        showPopupWithImage('<img class="modal-window__image" src="./img/rofls/registratura.jpg">', 
            () => {
                document.querySelector('.modal-window__background')?.classList.add('modal-window__large-screen');
            }
        );
    });
}