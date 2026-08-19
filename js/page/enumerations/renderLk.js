import { useNavigationRemappingOnTelegramRedirect } from "../../features/navigation-remapping.js";
import { useModalOnAhrefsExceptFor } from "../components/modal-window.js";
import { useModalWithContentOn } from "../components/popups/useModalWithContentOn.js";
import { useModalWithVideoOn } from "../components/popups/useModelWithVideoOn.js";

export function renderLk()
{
    useModalOnAhrefsExceptFor(['lk-links-heroes', 'lk-links-profile', 'lk-links-backpack', 'lk-links-achievements', 'lk-links-quests', 'lk-links-rating', 'lk-links-guild', 'lk-links-settings', 'a-logo-img',
        'gayshit-lnk', 'lnk-a-jobs', 'tg-chat', 'tg-channel'],
    false);
    
    useNavigationRemappingOnTelegramRedirect();

    useModalWithContentOn('.lnk-a-jobs', '<p class="text-centered">Эй парень, в приемку не хочешь устроиться?</p><img class="modal-content__image" src="/img/content/application-comission.jpg"/>')

    useModalWithVideoOn('.lk-links-profile', './video/devil.mp4', 900);
    useModalWithVideoOn('.lk-links-heroes', './video/frodo-waking-up.mp4', 900)
    useModalWithVideoOn('.lk-links-backpack', './video/vaz-sk-crack.mp4', 900);
    useModalWithVideoOn('.lk-links-achievements', './video/flaming-head-man.mp4', 900);

    useModalWithVideoOn('.lk-links-quests', './video/who-was-admin.mp4', 900);
    useModalWithVideoOn('.lk-links-rating', './video/santa-hole-in-the-wall.mp4', 900);
    useModalWithVideoOn('.lk-links-guild', './video/shaman-blan.mp4', 900);
    useModalWithVideoOn('.lk-links-settings', './video/towel-strike.mp4', 900);
}
