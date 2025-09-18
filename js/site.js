import { useModalOnAhrefs } from './page/components/modal-window.js'
import { useModalRegistratura } from './page/components/popups/useModalRegistratura.js';
import { useImageTransition } from './page/components/togglers/imageTransitioning.js';
import { useLanguageSwitchersOn } from './page/components/togglers/languageList.js';
import { useToggleButton } from './page/components/togglers/useToggleButton.js';

document.addEventListener('DOMContentLoaded', function() {
    useModalOnAhrefs(); 
    useToggleButton();
    useImageTransition('central-big-image');
    useLanguageSwitchersOn('.language-dropdown__item');
    useModalRegistratura('.scan-qr-and-go');
    useModalRegistratura('.go-win-yourself');
});