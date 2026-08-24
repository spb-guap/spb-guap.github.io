import { useNavigationRemappingOnTelegramRedirect } from "../../features/navigation-remapping.js";
import { createInteractiveGrid } from "../components/captcha/createInteractiveGridOn.js";
import { showPopupWithImage, useModalOnAhrefsExceptFor } from "../components/modal-window.js";
import { showModalWithContent, useModalWithContentOn, wrapImageStringIntoContainer } from "../components/popups/useModalWithContentOn.js";
import { fillSubjectNames } from "./schedule-data/subject-filler.js";

var firstImage = true;

export function renderOffers()
{
    useModalOnAhrefsExceptFor(['a-logo-img', 'lnk-a-lk', 'lnk-a-home', 'gayshit-lnk', 'lnk-a-jobs', 'tg-chat', 'tg-channel'], false);
    
    useNavigationRemappingOnTelegramRedirect();

    let randomImg = () => { 
        firstImage = !firstImage;
        console.log(firstImage)
        return firstImage ? 2 : 1;
    };

    useModalWithContentOn('.offers-page__button',
        `<img class="modal-content__image"/>`, null, () => {}, 
        () => document.querySelector('.modal-content__image').src = `/offers/img/cat-distorted-${randomImg()}.jpg`)
    

    useModalWithContentOn('.lnk-a-jobs', '<p class="text-centered">Эй парень, в приемку не хочешь устроиться?</p><img class="modal-content__image" src="/img/content/application-comission.jpg"/>')
}