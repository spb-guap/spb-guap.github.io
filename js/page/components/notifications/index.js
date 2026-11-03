import { showGameNotification } from "./game-notification.js";

let nextNotificationIndex = 0;

const timeoutMs = 4400;

export function useNotifications()
{
    showNextModal(
        "/offers/img/cat-distorted-1.jpg", "Ваш декан",
        "только что купил", "«Новую машину на ваш контракт»"
    );

    showNextModal(
        "/img/rofls/burger-aerospace.jpg", "Вы выиграли!",
        "ужин", "с ректором"
    );

    showNextModal(
        "/img/rofls/no-labs.jpg",
        "Ваш преподаватель",
        "Только что поставил вам «неуд»..",
        "Прямо сейчас."
    );

    showNextModal(
        "/img/paug2.png", "Твой друг ", "Сейчас получает стипендию", "А ты нет"
    );

    showNextModal(
        "/img/rofls/burger-aerospace.jpg", "Вам одобрена стипендия!",
        "Введите номер карты, чтобы получить", "Ввести номер банковской карты"
    );

    showNextModal(
        "/offers/img/cat-distorted-2.jpg", "Заведующий кафедрой",
        "потерял вашу", "«Курсовую работу»"
    );

    showNextModal(
        "/offers/img/background.png",  "Ваш сертификат",
        "об успешном окончании", "«Курса выживания»"
    );

    showNextModal(
        "/img/rofls/straw-photo.png", "ГУАП",
        "поздравляет вас с", "«Просмотром 50 уведомлений»"
    );
}

function showNextModal(imagePath, title, middleText, bottomText)
{
    setTimeout(
        () => {
            showGameNotification(
                imagePath,
                title,
                middleText,
                bottomText
            );
        }
    , timeoutMs * nextNotificationIndex);

    nextNotificationIndex++;
}