import { showPopup } from "../modal-window.js";
import { useLoader } from "../transitions/useLoader.js";

const loader = useLoader();

export function useModalWithContentOn(elementQuery, content, buttons)
{
    const element = document.querySelector(elementQuery);
    element.addEventListener('click', (e) => {
        e.preventDefault();
        showPopup(
            () => { },
            `${content}`,
            buttons,
            () => {
                document.querySelector('.modal-window__background')?.classList.add('modal-window__large-scale');
            }
        );
    });
}