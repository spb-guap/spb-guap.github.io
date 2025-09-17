export function useToggleButton()
{
    const toggleButton = document.getElementById('toggleButton');
    const firstSection = document.getElementById('hfsec');
    const arrow = document.querySelector('.header-first-section__arrow');
    
    // Function to toggle the section
    function toggleSection() {
        firstSection.classList.toggle('collapsed');
        
        // Rotate the arrow
        if (firstSection.classList.contains('collapsed')) {
            arrow.style.transform = 'rotate(0deg)';
        } else {
            arrow.style.transform = 'rotate(180deg)';
        }
    }
    
    // Add click event to the button
    toggleButton.addEventListener('click', toggleSection);
}