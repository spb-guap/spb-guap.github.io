import { showPopupWithImage, useModalOnAhrefsExceptFor } from "../components/modal-window.js";
import { useModalWithContentOn } from "../components/popups/useModalWithContentOn.js";
import { useModalWithImageOn } from "../components/popups/useModalWithImageOn.js";
import { useLoader } from "../components/transitions/useLoader.js"

const loader = useLoader();

export function renderRasp()
{
    useModalOnAhrefsExceptFor(['.rasp-logo-a'], true)
    useModalWithContentOn(
        '.rasp-logo-a', 
        `<p>Переход в основной раздел: <p/><a class="rasp-logo-a" href="/">${window.location.origin}</a>`
    );
    useModalWithImageOn('.btn-new-search', '/img/animated/u-piter.webp');
}