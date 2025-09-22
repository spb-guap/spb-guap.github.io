import { showPopupWithImage } from "../modal-window.js";
import { useLoader } from "../transitions/useLoader.js";

const loader = useLoader();

export function useModalRegistratura(elementQuery)
{
    const element = document.querySelector(elementQuery);
    element.addEventListener('click', (e) => {
        e.preventDefault();
        loader.showLoader();
        setTimeout( () => { 
            showPopupWithImage('<img class="modal-window__image" src="/img/rofls/registratura.jpg">',
                () => {
                    document.querySelector('.modal-window__background')?.classList.add('modal-window__huge-scale');
                }
            );
            loader.hideLoader(1000);
        } , 1000); 
    });
}