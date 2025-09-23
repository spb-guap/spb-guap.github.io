import { useModalWithContentOn } from "../page/components/popups/useModalWithContentOn.js";

export function useNavigationLnkRemapping()
{
    useModalWithContentOn(
        '.lnk-abiture',
        ` <img class="modal-content__image" src="/img/content/index/abiture.jpg"/>
        <p class="modal-content__paragraph">🔍 Топ вопросов от абитуриентов — собрали всё в одном месте!<br>
        1️⃣ Если я в рейтинге 17 из 32, что это значит? У меня есть шанс?
        — Нету.<br>
        2️⃣ Когда выходят приказы о зачислении?
        — Никогда.<br>
        3️⃣ Подал согласие — значит, поступил?
        — Нет. Расслабься, ты в любом случае в полете.<br>
        4️⃣ Не попал на бюджет. Что дальше?
        — А ничего, идёшь работаешь на стройку в Узбекистане.<br>
        spb-guap.github.io — это про выбор. Твой выбор! 🏫</p>`
    );
    
    document.querySelector('.modal-window__background')?.classList.add('modal-window__huge-scale');
}

export function useNavigationRemappingOnTelegramRedirect()
{
    useModalWithContentOn('.tg-channel', 
        `<p class="text-centered">Собираешься перейти или не являешься тобой?<p/><a target="_blank" rel="me nofollow noopener noreferrer" href="https://t.me/spbguap">https://t.me/spbguap</a>`
    , ['        ', '        ']);
    useModalWithContentOn('.tg-chat', 
        `<p class="text-centered">Собираешься перейти или не являешься тобой?<p/><a target="_blank" rel="me nofollow noopener noreferrer" href="https://t.me/spbguap_chat">https://t.me/spbguap_chat</a>`
    , ['        ', '        ']);
    useModalWithContentOn('.tg-channel-sidebar', 
        `<p class="text-centered">Собираешься перейти или не являешься тобой?<p/><a target="_blank" rel="me nofollow noopener noreferrer" href="https://t.me/spbguap">https://t.me/spbguap</a>`
    , ['        ', '        ']);
    useModalWithContentOn('.tg-chat-sidebar', 
        `<p class="text-centered">Собираешься перейти или не являешься тобой?<p/><a target="_blank" rel="me nofollow noopener noreferrer" href="https://t.me/spbguap_chat">https://t.me/spbguap_chat</a>`
    , ['        ', '        ']);
}