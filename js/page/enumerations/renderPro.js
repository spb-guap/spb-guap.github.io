import { useNavigationRemappingOnTelegramRedirect } from "../../features/navigation-remapping.js";
import { createInteractiveGrid } from "../components/captcha/createInteractiveGridOn.js";
import { showPopupWithImage, useModalOnAhrefsExceptFor } from "../components/modal-window.js";
import { showModalWithContent, useModalWithContentOn, wrapImageStringIntoContainer } from "../components/popups/useModalWithContentOn.js";
import { fillSubjectNames } from "./schedule-data/subject-filler.js";

export function renderPro()
{
    useModalOnAhrefsExceptFor(['a-logo-img', 'gayshit-lnk', 'lnk-a-jobs', 'tg-chat', 'tg-channel'], false);
    
    useNavigationRemappingOnTelegramRedirect();
}
