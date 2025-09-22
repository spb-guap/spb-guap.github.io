import { useLoader } from "../components/transitions/useLoader.js"


const loader = useLoader();

export function renderRasp()
{
    document.querySelector('.rasp-logo-a').addEventListener('click', (e) => {
        e.preventDefault();
        loader.showLoader();
        setTimeout(
            () => {
                loader.hideLoader();
                window.location.href = '/';
            }
        , 1000 );
        
    });
    setTimeout();
    console.log('Rendering rasp...')
}