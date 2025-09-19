export function useLanguageSwitchersOn(className)
{
    // Handle language dropdown items
    const languageItems = document.querySelectorAll(className);
    languageItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            //e.preventDefault();
            
            // Toggle active/inactive classes for all language items
            languageItems.forEach(function(langItem) {
                if (langItem === item) {
                    langItem.classList.remove('dropdown-inactive');
                    langItem.classList.add('dropdown-active');
                } else {
                    langItem.classList.remove('dropdown-active');
                    langItem.classList.add('dropdown-inactive');
                }
            });
        });
    });
}