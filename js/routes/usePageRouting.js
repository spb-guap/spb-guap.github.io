import { renderIndex } from "../page/enumerations/renderIndex.js";
import { renderLms } from "../page/enumerations/renderLms.js";
import { renderRasp } from "../page/enumerations/renderRasp.js";
import { renderPro } from "../page/enumerations/renderPro.js";
import { renderOpenDoors } from "../page/enumerations/renderOpenDoors.js";
import { renderLk } from "../page/enumerations/renderLk.js";

export function usePageRouting()
{
    switch (window.location.pathname)
    {
        case '/':
            renderIndex();
            break;
        case '/lms/':
            renderLms();
            break;
        case '/rasp/':
            renderRasp();
            break;
        case '/pro/':
            renderPro();
            break;
        case '/open-doors/':
            renderOpenDoors();
        break;
        case '/lk/':
            renderLk();
            break;
        default:
            break;
    }
}