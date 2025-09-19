import { useModalOnAhrefs } from './page/components/modal-window.js'
import { useModalForSchoolboys } from './page/components/popups/useModalForSchoolboys.js';
import { useModalRegistratura } from './page/components/popups/useModalRegistratura.js';
import { useModalWithContentOn } from './page/components/popups/useModalWithContentOn.js';
import { useModalWithImageOn } from './page/components/popups/useModalWithImageOn.js';
import { useImageTransition } from './page/components/togglers/imageTransitioning.js';
import { useLanguageSwitchersOn } from './page/components/togglers/languageList.js';
import { useToggleButton } from './page/components/togglers/useToggleButton.js';

document.addEventListener('DOMContentLoaded', function() {
    useModalOnAhrefs( ['language-dropdown__item',
        'scan-qr-and-go',
        'schoolboys-lnk',
        'university-lnk',
        'education-lnk',
        'tg-link']
    ); 
    useToggleButton();
    useImageTransition('central-big-image', [
        './img/slide-out/slide-out1.png',
        './img/slide-out/slide-out-2.jpg',
        './img/slide-out/slide-out-3.jpg',
        './img/slide-out/slide-out-4.jpg']);
    useLanguageSwitchersOn('.language-dropdown__item');
    useModalRegistratura('.scan-qr-and-go');    
    useModalRegistratura('.go-win-yourself');
    useModalWithImageOn('.university-lnk', './img/content/data-satanism.png');
    useModalRegistratura('.education-lnk');
    useModalForSchoolboys('.schoolboys-lnk');
    useModalWithContentOn('.tg-channel', 
        `<p style="text-align: center;">Собираешься перейти или не являешься тобой?<p/><a target="_blank" rel="me nofollow noopener noreferrer" href="https://t.me/spbguap">https://t.me/spbguap</a>`
    , ['        ', '        ']);
    useModalWithContentOn('.tg-chat', 
        
        `<p style="text-align: center;">Собираешься перейти или не являешься тобой?<p/><a target="_blank" rel="me nofollow noopener noreferrer" href="https://t.me/spbguap_chat">https://t.me/spbguap_chat</a>`
    , ['        ', '        ']);

    useModalWithImageOn('.nav-lng-korean', './img/rofls/kim-chen-un.webp', 900);
    useModalWithImageOn('.nav-lng-japan', './img/rofls/kojima.jpg', 900);
    useModalWithImageOn('.nav-lng-china', './img/rofls/lgd-team.jpg', 900);
});