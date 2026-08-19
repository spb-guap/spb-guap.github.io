import { showPopupWithImage } from "../modal-window.js";
import { useLichLoader } from "../transitions/useLichLoader.js";

const loader = useLichLoader();

export function useModalWithVideoOn(elementQuery, videoPath, delay = 1700)
{
    const element = document.querySelector(elementQuery);
    element.addEventListener('click', (e) => {
        e.preventDefault();
        loader.showLichLoader();
        setTimeout( () => { 
            showPopupWithImage(`
                <video id="video1" class="modal-window__image" autoplay playsinline width="100%">
                    <source src="${videoPath}" type="video/mp4">
                </video>
                `
            );
            loader.hideLichLoader(delay);
        } , delay); 
    });
}