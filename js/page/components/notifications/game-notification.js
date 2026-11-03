
const NOTIFICATION_DURATION_SECONDS = 6;
const NOTIFICATION_EXIT_DURATION_MS = 400;

let notificationContainer = null;

function getNotificationContainer() {
    if (notificationContainer?.isConnected) {
        return notificationContainer;
    }

    notificationContainer = document.createElement("div");
    notificationContainer.className = "notification-container";
    notificationContainer.setAttribute("aria-live", "polite");
    notificationContainer.setAttribute("aria-atomic", "false");

    document.body.appendChild(notificationContainer);

    return notificationContainer;
}

/**
 * Displays a game-style notification in the bottom-right corner.
 *
 * @param {string} imagePath   Path or URL to the image.
 * @param {string} title       Notification title.
 * @param {string} middleText  Secondary text.
 * @param {string} bottomText  Highlighted bottom text.
 * @returns {HTMLElement} The created notification element.
 */
export function showGameNotification(
    imagePath,
    title,
    middleText,
    bottomText
) {
    const container = getNotificationContainer();

    const notification = document.createElement("div");
    notification.className =
        "notification notification--entering";

    const image = document.createElement("img");
    image.className = "notification__image";
    image.src = imagePath;
    image.alt = "";
    image.draggable = false;

    const accent = document.createElement("div");
    accent.className = "notification__accent";
    accent.setAttribute("aria-hidden", "true");

    const content = document.createElement("div");
    content.className = "notification__content";

    const titleElement = document.createElement("div");
    titleElement.className = "notification__title";
    titleElement.textContent = title;

    const middleElement = document.createElement("div");
    middleElement.className = "notification__middle";
    middleElement.textContent = middleText;

    const bottomElement = document.createElement("div");
    bottomElement.className = "notification__bottom";
    bottomElement.textContent = bottomText;

    content.append(
        titleElement,
        middleElement,
        bottomElement
    );

    notification.append(image, accent, content);

    // The newest notification appears at the bottom.
    container.appendChild(notification);

    // Remove the entering modifier after the animation finishes.
    notification.addEventListener("animationend", (event) => {
        if (
            event.animationName === "notification-roll-in"
        ) {
            notification.classList.remove(
                "notification--entering"
            );
        }
    }, { once: true });

    // Begin dismissal after the configured duration.
    window.setTimeout(() => {
        if (!notification.isConnected) {
            return;
        }

        notification.classList.remove(
            "notification--entering"
        );

        notification.classList.add(
            "notification--leaving"
        );

        window.setTimeout(() => {
            notification.remove();

            // Avoid leaving an empty container in the DOM.
            if (
                container.isConnected &&
                container.childElementCount === 0
            ) {
                container.remove();
                notificationContainer = null;
            }
        }, NOTIFICATION_EXIT_DURATION_MS);
    }, NOTIFICATION_DURATION_SECONDS * 1000);

    return notification;
}
