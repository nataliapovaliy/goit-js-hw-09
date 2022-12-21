import Notiflix from 'notiflix';

const formPromis = document.querySelector("form");
const btn = formPromis.querySelector("button");

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
