/**
 * ES6 hook для страницы "Paug Ambassadors".
 * Инициализирует обработчики кликов по кнопкам "Подробнее о достижении"
 * и управляет жизненным циклом модального окна с досье.
 *
 * @returns {{ init: Function, destroy: Function }} API для управления хуком.
 */
export function useAmbassadorsPage() {
    'use strict';

    // База данных фейковых достижений с пост-иронией
    const achievementsData = {
        pudge: {
            title: 'Pudge (M450)',
            subtitle: 'Досье Амбассадора: Отдел Крюков и Разрушенных Надежд',
            problems: 'В ходе матча систематически производил забор воздуха с помощью крюка в местах, где не было врагов. Создавал ситуацию, при которой союзники были вынуждены в одиночку защищать мид, пока кандидат исследовал текстуры леса.',
            muteReason: 'Перманентный мут выдан за вежливое, но излишне частое использование фразы «Ну это же Пудж, чего вы хотели» в голосовом чате. (Пост-ирония: система распознала это как пассивную агрессию).',
        },
        zeus: {
            title: 'Zeus (2352)',
            subtitle: 'Досье Амбассадора: Департамент Гроз и Случайных Убийств',
            problems: 'Уничтожал нейтральных крипов ультимейтом, чтобы «быстрее прокачаться». В результате 4 раза забрал Аегис у собственного керри и объяснил это тем, что «так было задумано природой».',
            muteReason: 'Перманентный мут за спам в чат фразой «Я бог, а вы — смертные» после каждого случайного убийства. (Мета-ирония: технически он не врал, но правила сообщества оказались сильнее мифологии).',
        },
        juggernaut: {
            title: 'Juggernaut (2355)',
            subtitle: 'Досье Амбассадора: Кафедра Вращений и Потерянного Времени',
            problems: 'Применял ультимейт исключительно к крипам и вражеским курьерам. Игнорировал тимфайты, предпочитая фармить древних в течение 40 минут. Был замечен в покупке двух Battle Fury для «двойного эффекта».',
            muteReason: 'Перманентный мут за чтение стихов о самураях в микрофон во время боя. (Пост-ирония: стихи были хорошие, но тайминг — ужасный).',
        },
        drow: {
            title: 'Drow Ranger (4315)',
            subtitle: 'Досье Амбассадора: Центр АФК и Холодного Расчета',
            problems: 'Пропала на 10 минут после начала игры из-за «внезапно пришедшей пиццы». Вернувшись, продала все предметы и купила 6 веток, заявив, что «так эффективнее». Выиграла игру случайным критом с базы.',
            muteReason: 'Перманентный мут за отказ отключать микрофон во время поедания пиццы. (Мета-ирония: союзники знали о её рационе больше, чем о её плане на игру).',
        },
        lina: {
            title: 'Lina (4315)',
            subtitle: 'Досье Амбассадора: Институт Огненной Стихии и Сливов',
            problems: 'Сожгла собственного курьера из-за «неправильной траектории движения». Купила Blink Dagger, но ни разу не нажала, объяснив это тем, что «даггер нужен для ауры».',
            muteReason: 'Перманентный мут за угрозы сжечь базу союзников в реальной жизни. (Пост-ирония: она имела в виду виртуальную базу, но модераторы не оценили).',
        },
        axe: {
            title: 'Axe (7341)',
            subtitle: 'Досье Амбассадора: Военная Кафедра Прыжков в Фонтан',
            problems: 'Совершил тактический Блинк на вражеский фонтан на 5-й минуте. Нажал Call, умер, написал «?» в чат. Повторил данную операцию 14 раз за матч, называя это «разведкой боем».',
            muteReason: 'Перманентный мут за бесконечное использование команды «Axe is Axe» в качестве оправдания. (Мета-ирония: он действительно Axe, но это не отменяет фида).',
        },
        invoker: {
            title: 'Invoker (2452)',
            subtitle: 'Досье Амбассадора: Факультет Комбо и Ожидания',
            problems: 'Потратил первые 15 минут игры на чтение гайда по комбо в другом окне. Умер на руне от ганга, так как не заметил, что игра уже началась. Утверждает, что «Торнадо было идеальным».',
            muteReason: 'Перманентный мут за произношение заклинаний на латыни в голосовом чате. (Пост-ирония: латынь — мертвый язык, как и его импакт в этой игре).',
        },
        broodmother: {
            title: 'Broodmother (1435)',
            subtitle: 'Досье Амбассадора: Лесное Хозяйство и Паутина',
            problems: 'Оккупировала весь лес, съела вражеского курьера, но проиграла из-за того, что враги купили 5 Sentry Ward на мид. Обвинила команду в «отсутствии карты».',
            muteReason: 'Перманентный мут за издавание звуков паука в микрофон. (Мета-ирония: биологически она ближе к паукам, но токсичность — чисто человеческая).',
        },
        lycan: {
            title: 'Lycan (1626M)',
            subtitle: 'Досье Амбассадора: Кинологический Центр и Фонтаны',
            problems: 'Активировал ультимейт, но забыл, что играет за него, и побежал в вражеский фонтан, приняв его за свой. Собаки последовали за ним. Погиб смертью храбрых (и собак).',
            muteReason: 'Перманентный мут за лай в микрофон. (Пост-ирония: он пытался отыгрывать роль, но сообщество не было готово к такому уровню погружения).',
        },
    };

    /** @type {Set<HTMLElement>} */
    const boundButtons = new Set();
    /** @type {HTMLElement|null} */
    let activeOverlay = null;
    /** @type {((e: KeyboardEvent) => void)|null} */
    let activeEscHandler = null;

    /**
     * Создаёт DOM-структуру попапа.
     * @param {string} heroKey
     * @returns {{ overlay: HTMLElement, closeBtn: HTMLButtonElement } | null}
     */
    function createPopup(heroKey) {
        const data = achievementsData[heroKey];
        if (!data) return null;

        const overlay = document.createElement('div');
        overlay.className = 'ambassadors-popup';

        const modal = document.createElement('div');
        modal.className = 'ambassadors-popup__modal';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'ambassadors-popup__close';
        closeBtn.innerHTML = '&times;';
        closeBtn.setAttribute('aria-label', 'Закрыть');
        closeBtn.setAttribute('type', 'button');

        const title = document.createElement('h2');
        title.className = 'ambassadors-popup__title';
        title.textContent = data.title;

        const subtitle = document.createElement('p');
        subtitle.className = 'ambassadors-popup__subtitle';
        subtitle.textContent = data.subtitle;

        const problemsTitle = document.createElement('h4');
        problemsTitle.className = 'ambassadors-popup__section-title';
        problemsTitle.textContent = 'Зафиксированные проблемы в ходе матча:';

        const problemsText = document.createElement('p');
        problemsText.className = 'ambassadors-popup__problems';
        problemsText.textContent = data.problems;

        const muteTitle = document.createElement('h4');
        muteTitle.className = 'ambassadors-popup__section-title';
        muteTitle.textContent = 'Причина перманентного мута:';

        const muteText = document.createElement('p');
        muteText.className = 'ambassadors-popup__mute-reason';
        muteText.textContent = data.muteReason;

        modal.appendChild(closeBtn);
        modal.appendChild(title);
        modal.appendChild(subtitle);
        modal.appendChild(problemsTitle);
        modal.appendChild(problemsText);
        modal.appendChild(muteTitle);
        modal.appendChild(muteText);
        overlay.appendChild(modal);

        return { overlay, closeBtn };
    }

    /**
     * Уничтожает активный попап (снимает класс, убирает из DOM, чистит слушатели).
     */
    function destroyActivePopup() {
        if (!activeOverlay) return;

        const overlay = activeOverlay;
        activeOverlay = null;

        if (activeEscHandler) {
            document.removeEventListener('keydown', activeEscHandler);
            activeEscHandler = null;
        }

        overlay.classList.remove('ambassadors-popup--visible');
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 300);
    }

    /**
     * Открывает попап для указанного героя.
     * @param {string} heroKey
     */
    function showPopup(heroKey) {
        // На всякий случай закрываем предыдущий
        destroyActivePopup();

        const built = createPopup(heroKey);
        if (!built) return;

        const { overlay, closeBtn } = built;
        activeOverlay = overlay;
        document.body.appendChild(overlay);

        // Анимация появления
        requestAnimationFrame(() => {
            overlay.classList.add('ambassadors-popup--visible');
        });

        /**
         * @param {KeyboardEvent} e
         */
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                destroyActivePopup();
            }
        };
        activeEscHandler = escHandler;

        closeBtn.addEventListener('click', destroyActivePopup);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) destroyActivePopup();
        });

        document.addEventListener('keydown', escHandler);
    }

    /**
     * Обработчик клика по кнопке "Подробнее о достижении".
     * @param {Event} e
     */
    function handleButtonClick(e) {
        e.preventDefault();
        const btn = /** @type {HTMLElement} */ (e.currentTarget);
        const heroKey = btn.getAttribute('data-ambassadors-hero');
        if (heroKey) showPopup(heroKey);
    }

    /**
     * Привязывает обработчики ко всем кнопкам на странице.
     */
    function bindButtons() {
        const buttons = document.querySelectorAll(
            '.ambassadors-btn--details[data-ambassadors-hero]'
        );

        buttons.forEach((btn) => {
            if (boundButtons.has(btn)) return;
            btn.addEventListener('click', handleButtonClick);
            boundButtons.add(btn);
        });
    }

    /**
     * Отвязывает обработчики от всех кнопок и закрывает попап.
     */
    function unbindButtons() {
        boundButtons.forEach((btn) => {
            btn.removeEventListener('click', handleButtonClick);
        });
        boundButtons.clear();
        destroyActivePopup();
    }

    return {
        /**
         * Инициализация хука. Вызывать после того, как DOM готов.
         */
        init() {
            bindButtons();
        },
        /**
         * Очистка: снимает обработчики, удаляет попап из DOM.
         */
        destroy() {
            unbindButtons();
        },
    };
}