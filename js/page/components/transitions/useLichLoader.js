export function useLichLoader()
{
    return { showLichLoader, hideLichLoader };
}

function showLichLoader() {
    let loader = document.getElementById('page-loader');
    
    if (!loader) {
        // Create loader if it doesn't exist
        const loaderElement = document.createElement('div');
        loaderElement.id = 'page-loader';
        loaderElement.className = 'loader-container';
        loaderElement.innerHTML = `
            <div class="loader-backdrop"></div>
            <img src="/img/loaders/suai-lich-logo.png" class="rotating-loader" alt="Loading...">
        `;
        document.body.insertBefore(loaderElement, document.body.firstChild);
        loader = loaderElement;
        
        // Force reflow to ensure initial state is rendered
        void loader.offsetWidth;
    }
    
    // Show with transition
    loader.classList.add('visible');
}

// Hide loader with fade-out transition
function hideLichLoader(delay) {
    const loader = document.getElementById('page-loader');
    if (!loader) return;
    
    // Hide with transition
    loader.classList.remove('visible');
    
    // Optional: Remove from DOM after hiding
    setTimeout(() => {
        if (!loader.classList.contains('visible')) {
            loader.remove();
        }
    }, delay ?? 200); // Match transition duration
}