import { useNavigationRemappingOnTelegramRedirect } from "../../features/navigation-remapping.js";
import { createInteractiveGrid } from "../components/captcha/createInteractiveGridOn.js";
import { showPopupWithImage, useModalOnAhrefsExceptFor } from "../components/modal-window.js";
import { showModalWithContent, useModalWithContentOn, wrapImageStringIntoContainer } from "../components/popups/useModalWithContentOn.js";
import { fillSubjectNames } from "./schedule-data/subject-filler.js";

export function renderDods()
{
    useModalOnAhrefsExceptFor(['a-logo-img', 'gayshit-lnk', 'lnk-a-jobs', 'tg-chat', 'tg-channel'], false);
    
    useNavigationRemappingOnTelegramRedirect();

    useModalWithContentOn('.lnk-a-jobs', '<p class="text-centered">Эй парень, в приемку не хочешь устроиться?</p><img class="modal-content__image" src="/img/content/application-comission.jpg"/>')

    usePlaybackButton();
}

function usePlaybackButton() {
    const vid1 = document.getElementById('video1');
    const vid1Block = document.getElementById('video1-container');
    const vid2 = document.getElementById('video2');
    const vid2Block = document.getElementById('video2-container');
    const btn = document.getElementById('playBtnSwitchScene');

    btn.addEventListener('click', () => {
        vid1.pause();
        vid1Block.classList.add('hidden');
        
        vid2Block.classList.remove('hidden');
        vid2.play();
    });
}