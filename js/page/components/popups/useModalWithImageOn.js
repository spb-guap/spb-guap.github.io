import { showPopupWithImage } from "../modal-window.js";
import { useLoader } from "../transitions/useLoader.js";

const loader = useLoader();

export function useModalWithImageOn(elementQuery, imagePath, delay = 1700)
{
    const element = document.querySelector(elementQuery);
    element.addEventListener('click', (e) => {
        e.preventDefault();
        loader.showLoader();
        setTimeout( () => { 
            showPopupWithImage(`<img class="modal-window__image" src="${imagePath}">`, 
                () => {
                    document.querySelector('.modal-window__background')?.classList.add('modal-window__large-scale');
                }
            );
            loader.hideLoader(delay);
        } , delay); 
    });
}