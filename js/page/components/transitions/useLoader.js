export function useLoader()
{
    return { showLoader, hideLoader };
}

function showLoader() {
    let loader = document.getElementById('page-loader');
    
    if (!loader) {
        // Create loader if it doesn't exist
        const loaderElement = document.createElement('div');
        loaderElement.id = 'page-loader';
        loaderElement.className = 'loader-container';
        loaderElement.innerHTML = `
            <div class="loader-backdrop"></div>
            <img src="./img/loaders/loader.png" class="rotating-loader" alt="Loading...">
        `;
        document.body.insertBefore(loaderElement, document.body.firstChild);
        loader = loaderElement;
    }
    
    // Show with transition
    loader.classList.add('visible');
}

// Hide loader with fade-out transition
function hideLoader(delay) {
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