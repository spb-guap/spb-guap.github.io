
export function initScrollTopArrow() {
    const scrollToTopBtn = document.querySelector('.scroll-top-arrow__button');
    if (!scrollToTopBtn) {
        console.warn('Scroll to top button element not found');
        return;
    }

    const scrollThreshold = 200; // Pixels to scroll before button appears
    let isScrolling;
    
    // Function to show/hide button based on scroll position
    function toggleScrollButton() {
        if (window.pageYOffset > scrollThreshold) {
            scrollToTopBtn.classList.add('scroll-top-arrow__button--visible');
        } else {
            scrollToTopBtn.classList.remove('scroll-top-arrow__button--visible');
        }
    }
    
    // Function to scroll to top smoothly
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Hide button after click
        scrollToTopBtn.classList.remove('scroll-top-arrow__button--visible');
    }
    
    // Event listeners
    window.addEventListener('scroll', function() {
        // Clear timeout if user is still scrolling
        window.clearTimeout(isScrolling);
        
        // Set timeout to run after scrolling stops
        isScrolling = setTimeout(function() {
            toggleScrollButton();
        }, 100);
    });
    
    scrollToTopBtn.addEventListener('click', scrollToTop);
    
    // Initial check in case page loads with scroll position
    toggleScrollButton();
}