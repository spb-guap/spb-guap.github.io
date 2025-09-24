import { useNavigationLnkRemapping, useNavigationRemappingOnTelegramRedirect } from "../../features/navigation-remapping.js";
import { useModalOnAhrefsExceptFor } from "../components/modal-window.js";
import { useModalForSchoolboys } from "../components/popups/useModalForSchoolboys.js";
import { useModalRegistratura } from "../components/popups/useModalRegistratura.js";
import { useModalWithContentOn } from "../components/popups/useModalWithContentOn.js";
import { useModalWithImageOn } from "../components/popups/useModalWithImageOn.js";
import { useImageTransition } from "../components/togglers/imageTransitioning.js";
import { useLanguageSwitchersOn } from "../components/togglers/languageList.js";
import { useToggleButton } from "../components/togglers/useToggleButton.js";

export function renderIndex()
{
    useModalOnAhrefsExceptFor( ['language-dropdown__item',
        'scan-qr-and-go', 'lnk-schoolboys', 'university-lnk',
        'education-lnk', 'tg-link', 'go-win-yourself', 'lnk-a-jobs', 'nav-rasp-lnk', 'news-lnk-rasp'
    ] );
    useToggleButton();
    useImageTransition('central-big-image', [
        './img/slide-out/slide-out1.png', './img/slide-out/slide-out-2.jpg',
        './img/slide-out/slide-out-3.jpg', './img/slide-out/slide-out-4.jpg', './img/slide-out/slide-out-5.jpg'], 0, true);
    useLanguageSwitchersOn('.language-dropdown__item');
    useModalRegistratura('.scan-qr-and-go');    
    useModalRegistratura('.go-win-yourself');
    useModalWithImageOn('.university-lnk', './img/content/data-satanism.png');
    useModalRegistratura('.education-lnk');
    useModalForSchoolboys('.lnk-schoolboys');

    useNavigationRemappingOnTelegramRedirect();

    useModalWithImageOn('.nav-lng-korean', './img/rofls/kim-chen-un.webp', 900);
    useModalWithImageOn('.nav-lng-japan', './img/rofls/kojima.jpg', 900);
    useModalWithImageOn('.nav-lng-china', './img/rofls/lgd-team.jpg', 900);
    useImageTransition('logo-main-img', [
        './img/paug.jpg', './img/paug2.png',
        './img/paug3.png', './img/paug4.png', './img/paug5.png'], 3000, false);
    useImageTransition('priority-img', null, 0, true);
    useNavigationLnkRemapping();

    useModalWithContentOn('.lnk-a-jobs', '<p class="text-centered">Эй парень, в приемку не хочешь устроиться?</p><img class="modal-content__image" src="/img/content/application-comission.jpg"/>')
}