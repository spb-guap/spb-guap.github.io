import { initScrollTopArrow } from './features/scroll-top-arrow.js';
import { useNotifications } from './page/components/notifications/index.js';
import { usePageRouting } from './routes/usePageRouting.js';

document.addEventListener('DOMContentLoaded', function() {
    useNotifications();
    usePageRouting();
    initScrollTopArrow();
});
