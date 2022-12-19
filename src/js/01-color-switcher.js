const body = document.querySelector("body");
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
let timerId = null;

btnStart.addEventListener("click", onStart);
btnStop.addEventListener("click", onStop);

function onStart() {
    btnStart.setAttribute("disabled", true);
    btnStop.removeAttribute("disabled");
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStop() {
    btnStop.setAttribute("disabled", true);
    btnStart.removeAttribute("disabled");
    clearInterval(timerId);
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