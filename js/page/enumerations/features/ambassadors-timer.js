/**
 * Обратный отсчёт в стиле фейковых giveaway-сайтов.
 * @param {HTMLElement|null} root   корневой элемент .ambassadors-timer
 * @returns {{ destroy: Function }}
 */
export function useAmbassadorsTimer(root) {
    'use strict';

    if (!root) return { destroy() {} };

    const numEls = {
        days:    root.querySelector('[data-unit="days"]'),
        hours:   root.querySelector('[data-unit="hours"]'),
        minutes: root.querySelector('[data-unit="minutes"]'),
        seconds: root.querySelector('[data-unit="seconds"]'),
    };
    const onlineEl = root.querySelector('#ambassadorsTimerOnline');

    const deadline = new Date(root.dataset.deadline || 0).getTime();
    if (Number.isNaN(deadline)) return { destroy() {} };

    /** @type {number|null} */
    let tickId = null;
    /** @type {number|null} */
    let onlineId = null;
    let destroyed = false;

    /** @param {number} n */
    const pad = (n) => String(n).padStart(2, '0');

    /** Перерисовка цифр и переключение состояний */
    function render(msLeft) {
        if (msLeft <= 0) {
            root.classList.remove('ambassadors-timer--urgent');
            root.classList.add('ambassadors-timer--ended');
            const hurry = root.querySelector('#ambassadorsTimerHurry');
            if (hurry) hurry.textContent = '⛔ Голосование завершено. Следующий сезон — через год.';
            if (tickId) { clearInterval(tickId); tickId = null; }
            return;
        }

        const totalSec = Math.floor(msLeft / 1000);
        const days    = Math.floor(totalSec / 86400);
        const hours   = Math.floor((totalSec % 86400) / 3600);
        const minutes = Math.floor((totalSec % 3600) / 60);
        const seconds = totalSec % 60;

        if (numEls.days)    numEls.days.textContent    = pad(days);
        if (numEls.hours)   numEls.hours.textContent   = pad(hours);
        if (numEls.minutes) numEls.minutes.textContent = pad(minutes);
        if (numEls.seconds) numEls.seconds.textContent = pad(seconds);

        // Ургентный режим за 10 секунд до конца
        root.classList.toggle('ambassadors-timer--urgent', msLeft <= 10_000);
    }

    function tick() {
        if (destroyed) return;
        render(deadline - Date.now());
    }

    /** Имитация живого счётчика "онлайн" */
    function bumpOnline() {
        if (destroyed || !onlineEl) return;
        const current = parseInt(onlineEl.textContent.replace(/\s/g, ''), 10) || 1337;
        // Небольшой дрейф в диапазоне ±5, чтобы выглядело «живо», но не подозрительно
        const delta = Math.floor(Math.random() * 11) - 5;
        const next = Math.max(1000, current + delta);
        onlineEl.textContent = next.toLocaleString('ru-RU').replace(/,/g, ' ');
    }

    // Первый рендер + интервал
    tick();
    tickId = window.setInterval(tick, 1000);
    onlineId = window.setInterval(bumpOnline, 3200);

    return {
        destroy() {
            destroyed = true;
            if (tickId)   { clearInterval(tickId);   tickId = null; }
            if (onlineId) { clearInterval(onlineId); onlineId = null; }
        },
    };
}