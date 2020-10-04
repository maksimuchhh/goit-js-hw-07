const valueEl = document.querySelector("#value");
let counterValue = 0;

const increment = function () {
  valueEl.textContent = counterValue;
  counterValue += 1;
};
const decrement = function () {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};
const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);
const incrementButton = document.querySelector(
  "button[data-action='increment']"
);
decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
