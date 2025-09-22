import { renderIndex } from "../page/enumerations/renderIndex.js";
import { renderLms } from "../page/enumerations/renderLms.js";
import { renderRasp } from "../page/enumerations/renderRasp.js";

export function usePageRouting()
{
    switch(window.location.pathname)
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
        default:
            break;
    }
}