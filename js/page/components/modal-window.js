
// Exported
export function showPopupWithImage(image) {
    recreateWithImage(image);
    
    const modalBackground = document.getElementsByClassName('modal-window')[0];
    (modalBackground ?? { style : {display : '' }}) .style.display = 'block';

    modalBackground.addEventListener('click', function(e) {
        modalBackground.remove();
    })
}

export function showPopup(event_handler, text, buttons) {
    recreate(text, buttons);
    
    const modalBackground = document.getElementsByClassName('modal-window')[0];
    (modalBackground ?? { style : {display : '' }}) .style.display = 'block';
    appendPopupButtonHandlers();
    let delegate = redirects[event_handler];
    console.warn("Handler = %j", delegate);
    if(delegate == null) Exception.Throw(`redirects[${event_handler}] is NULL`)

    appendPopupYesHandler(() => { delegate() })
}

export function appendPopupYesHandler(onYes)
{
    let yesBtn = document.getElementsByClassName('modal-window__yes-btn')[0];
    yesBtn.addEventListener('click', function(e) {
        e.preventDefault();
        onYes(e);
    })
}

export function appendPopupNoHandler(onNo)
{
    let yesBtn = document.getElementsByClassName('modal-window__no-btn')[0];
    yesBtn.addEventListener('click', function(e) {
        onNo(e);
    })
}

function dropExisting()
{
    let modalContainer = document.getElementsByClassName('modal-window')[0];
    if (modalContainer != null) 
        modalContainer.remove()
}

function appendPopupButtonHandlers() {
    let modalBackground = document.getElementsByClassName('modal-window')[0];
    let closeBtn = document.getElementsByClassName('modal-window__close-btn')[0];
    let noBtn = document.getElementsByClassName('modal-window__no-btn')[0];

    const array = [closeBtn, noBtn]
    array.forEach((b) => {
            b.addEventListener('click', function() {
                modalBackground.style.display = 'none';
            })
        }
    );

    window.addEventListener('click', function(event) {
        if (event.target === modalBackground) {
            modalBackground.style.display = 'none';
        }
    });
}

function recreate(text, buttons)
{
    dropExisting();
    document.getElementsByTagName('body')[0].insertAdjacentHTML("afterbegin",
    `
    <!-- Modal Background and Modal -->
    <div class="modal-window">
    <div class="modal-window__background">
        <span class="modal-window__close-btn">&times;</span>
        <p class="modal-window__paragraph">${text}</p>
        <div class="modal-window__buttons">
            <button class="modal-window__button modal-window__yes-btn">
                ${buttons[0]}
            </button>
            <button class="modal-window__button modal-window__no-btn">
                ${buttons[1]}
            </button>
        </div>
    </div>
    </div>
    `);
}

function recreateWithImage(image)
{
    dropExisting();
    document.getElementsByTagName('body')[0].insertAdjacentHTML("afterbegin",
    `
    <!-- Modal Background and Modal -->
    <div class="modal-window">
    <div class="modal-window__background">
        <span class="modal-window__close-btn">&times;</span>
        ${image}
    </div>
    </div>
    `);
}