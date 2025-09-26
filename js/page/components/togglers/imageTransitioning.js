
var _iterator = 0;
const _imageSet = {};

function showNextImageOf(image, imageSelector) {
    if (_imageSet[imageSelector]?.length) {
        if (++_iterator >= _imageSet[imageSelector].length)
            _iterator = 0;

        image.src = `${(_imageSet[imageSelector])[_iterator]}`;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function useImageTransition(imageSelector, imageNameArray = [], addedDelay, shouldReverse = true)
{
    _imageSet[imageSelector] = [...(imageNameArray ?? [])];
    let image = document.querySelector(imageSelector);
    
    // Animation timing constants
    const TRANSITION_DURATION = 1500; // 0.3 seconds
    const INITIAL_DELAY = 3500;      // 1.5 seconds before fade out
    const VISIBLE_DURATION = 7000;   // 3 seconds visible after flip
    
    // Set transition properties
    image.style.transition = `all ${TRANSITION_DURATION}ms ease`;
    image.addEventListener('click', () => { 
        showNextImageOf(image, imageSelector);
    });
    
    while (true) {
        // Reset to initial state - visible, normal orientation
        image.style.opacity = '1';
        image.style.transform = 'scaleX(1)';
        
        // Phase 1: Initial visible state
        await delay(INITIAL_DELAY + addedDelay);
        
        if (shouldReverse) { // Phase 2: reverse
            // Phase 3: Fade out
            image.style.opacity = '0';
            await delay(TRANSITION_DURATION);
            
            if (_iterator == 0)
            {
                // Phase 4: Flip and fade in
                image.style.transform = 'scaleX(-1)';
                image.style.opacity = '1';
                await delay(TRANSITION_DURATION);
                
                // Phase 5: Visible with flip applied
                await delay(VISIBLE_DURATION);
            }
        }

        showNextImageOf(image, imageSelector);
    }
}