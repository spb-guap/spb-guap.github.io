import { showPopup, showPopupWithImage } from "../modal-window.js";
import { useLoader } from "../transitions/useLoader.js";

const loader = useLoader();

export function useModalForSchoolboys(elementQuery)
{
    const element = document.querySelector(elementQuery);
    element.addEventListener('click', (e) => {
        e.preventDefault();
        loader.showLoader();
        setTimeout( () => { 
            showPopup(
                () => { showPopupWithImage(
                    `<img class="modal-window__image" src="./img/500.jpg">`
                )},
                `<div style="width: 100%; display: flex; flex-direction: column;">
                    <a target="_blank" rel="me nofollow noopener noreferrer" href="https://GDZ.RU">ГДЗ: готовые домашние задания за 1-11 класс</a>
                    <img src="./img/rofls/cock-kick.jpg">
                </div>`,
                ['Ок', 'Отмена'], 
                () => {
                    document.querySelector('.modal-window__background')?.classList.add('modal-window__standard-scale');
                },
            );
            loader.hideLoader(1000);
        } , 1000); 
    });
}
