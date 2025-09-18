
export function getCaptchaHtml() 
{
    const captchaHtml = `<style>
        .captcha-container { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); text-align: center; width: 300px; }
        .captcha-title { margin-bottom: 20px; color: #333; }
        .buttons-container { display: flex; justify-content: space-between; margin-bottom: 20px; }
        .captcha-btn { padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; transition: all 0.3s; width: 48%; }
        .robot-btn { background-color: #ff4757; color: white; }
        .robot-btn:hover { background-color: #ff6b81; }
        .human-btn { background-color: #2ed573; color: white;  }
        .human-btn:hover { background-color: #7bed9f; }
        .popup-robot-result { height: 50px; display: flex; justify-content: center; align-items: center; font-size: 24px; font-weight: bold; }
        .approved { color: #2ed573; }
        .denied { color: #ff4757; }
        .hidden { display: none; }
    </style><div class="captcha-container">
        <h4 class="captcha-title">Подтвердите, что вы не робот</h2>
        <div class="popup-robot-result" id="popup-robot-result">
        </div>
    </div>`;

    return captchaHtml;
}

export function appendCaptchaButtonsAction()
{
    const robotBtn = document.querySelector('.robot-btn');
    const humanBtn = document.querySelector('.human-btn');
    robotBtn?.addEventListener(e => {
        const resultElement = document.getElementById('popup-robot-result');
        resultElement.innerHTML = '✗ <span class="denied">Доступ запрещен</span>';
    });
    humanBtn?.addEventListener(e => {
        const resultElement = document.getElementById('popup-robot-result');
        resultElement.innerHTML = '✓ <span class="approved">Доступ разрешен</span>';
    });
}