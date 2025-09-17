import { showPopupWithImage } from './page/components/modal-window.js'

const elements = document.querySelectorAll('a'); // Selects all elements with the class 'my-class'
// Or:
// const elements = document.getElementsByClassName('my-class');

elements.forEach(function(element) {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        // This function will be executed when an element is clicked
        console.log('Element clicked:', element);
        // You can add more logic here, e.g., modify the element's style or content
        showPopupWithImage('<img class="modal-window__image" src="./img/500.jpg">');
    });
});