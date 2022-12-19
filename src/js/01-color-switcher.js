const body = document.querySelector("body");
const btnStart = document.querySelector([data-start]);
const btnClose = document.querySelector([data-close]);

btnStart.addEventListener("click", onStart);
btnClose.addEventListener("click", onClose);

function onStart(event) {
    setTimeout(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
}

function onClose(event) {
    
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// HTML містить кнопки «Start» і «Stop».
// Напиши скрипт, який після натискання кнопки «Start», 
// раз на секунду змінює колір фону < body > на випадкове значення,
// використовуючи інлайн стиль.
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. 
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною(disabled).