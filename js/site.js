import { useModalOnAhrefs } from './page/components/modal-window.js'
import { useModalForSchoolboys } from './page/components/popups/useModalForSchoolboys.js';
import { useModalRegistratura } from './page/components/popups/useModalRegistratura.js';
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
});