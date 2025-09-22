import { useModalOnAhrefsExceptFor } from "../components/modal-window.js";
import { useModalWithContentOn } from "../components/popups/useModalWithContentOn.js";
import { useLoader } from "../components/transitions/useLoader.js"

const loader = useLoader();

export function renderRasp()
{
    useModalOnAhrefsExceptFor(['.rasp-logo-a'], true)
    useModalWithContentOn(
        '.rasp-logo-a', 
        `<p>Переход в основной раздел: <p/><a class="rasp-logo-a" href="/">${window.location.origin}</a>`
    );
}