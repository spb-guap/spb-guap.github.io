import { initScrollTopArrow } from './features/scroll-top-arrow.js';
import { usePageRouting } from './routes/usePageRouting.js';

document.addEventListener('DOMContentLoaded', function() {
    usePageRouting();
    initScrollTopArrow();
});