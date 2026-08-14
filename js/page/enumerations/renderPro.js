import { useNavigationRemappingOnTelegramRedirect } from "../../features/navigation-remapping.js";
import { createInteractiveGrid } from "../components/captcha/createInteractiveGridOn.js";
import { showPopupWithImage, useModalOnAhrefsExceptFor } from "../components/modal-window.js";
import { showModalWithContent, useModalWithContentOn, wrapImageStringIntoContainer } from "../components/popups/useModalWithContentOn.js";
import { fillSubjectNames } from "./schedule-data/subject-filler.js";

export function renderPro()
{
    useModalOnAhrefsExceptFor(['a-logo-img', 'gayshit-lnk', 'lnk-a-jobs', 'tg-chat', 'tg-channel'], false);
    
    useModalWithContentOn('.btn-new-search',
        '<p class="modal-window__captcha-title"> Выберите все фото с резисторами на 220 Ω </p>' +
            wrapImageStringIntoContainer('<img class="modal-window__image-adjusted" src="/img/rofls/220-resistors.jpg"/>'),
        ['Далее', 'Пропустить'],
        () => showPopupWithImage('<img class="modal-window__image" src="/img/animated/u-piter.webp"/>',
            () => document.querySelector('.modal-window__background')?.classList.add('modal-window__horizontal-content')),
        () => {
            createInteractiveGrid('.modal-window__image-adjusted', 4, 4);
        }
    );
}
