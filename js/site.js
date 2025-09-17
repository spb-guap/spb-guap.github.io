import { useModalOnAhrefs } from './page/components/modal-window.js'
import { useImageTransition } from './page/components/togglers/imageTransitioning.js';
import { useToggleButton } from './page/components/togglers/useToggleButton.js';

document.addEventListener('DOMContentLoaded', function() {
    useModalOnAhrefs(); 
    useToggleButton();
    useImageTransition('central-big-image');
});