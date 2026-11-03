import { useNavigationRemappingOnTelegramRedirect } from "../../features/navigation-remapping.js";
import { useModalOnAhrefsExceptFor } from "../components/modal-window.js";
import { useModalWithContentOn } from "../components/popups/useModalWithContentOn.js";

import { useAmbassadorsPage } from './features/ambassadors-features.js';
import { useAmbassadorsTimer } from "./features/ambassadors-timer.js";

export function renderAmbassadors()
{
    useModalOnAhrefsExceptFor(['lk-links-heroes',
        'lk-links-profile',
        'lk-links-backpack',
        'lk-links-achievements',
        'lk-links-quests', 'lk-links-rating', 'lk-links-guild', 'lk-links-settings', 'a-logo-img',

        'gayshit-lnk',
        
        'lnk-a-offers', 'lnk-a-jobs', 'lnk-a-lk', 'lnk-a-onlyfans', 'lnk-a-opendoors', 'lnk-a-pro',
        'tg-chat', 'tg-channel', 'exit-lk-nav-lnk', 'ambassadors-back-link', 'ambassadors-header__link'],
    false);
    
    useNavigationRemappingOnTelegramRedirect();

    useAmbassadorsPage().init();

    useAmbassadorsTimer(document.getElementById('ambassadorsTimer'));

    useModalWithContentOn('.ambassadors-btn',
        '<img class="modal-content__image" src="/img/content/hello-authorize-paug.jpg"/>')
    useModalWithContentOn('.ambassadors-btn--large',
        '<img class="modal-content__image" src="/img/content/hello-authorize-paug.jpg"/>')



    // useModalWithVideoOn('.lk-links-profile', './video/devil.mp4', 900);
    // useModalWithVideoOn('.lk-links-heroes', './video/frodo-waking-up.mp4', 900)
    // useModalWithVideoOn('.lk-links-backpack', './video/vaz-sk-crack.mp4', 900);
    // useModalWithVideoOn('.lk-links-achievements', './video/flaming-head-man.mp4', 900);

    // useModalWithVideoOn('.lk-links-quests', './video/who-was-admin.mp4', 900);
    // useModalWithVideoOn('.lk-links-rating', './video/santa-hole-in-the-wall.mp4', 900);
    // useModalWithVideoOn('.lk-links-guild', './video/shadow-racer.mp4', 900);
    // useModalWithVideoOn('.lk-links-settings', './video/towel-strike.mp4', 900);
}
