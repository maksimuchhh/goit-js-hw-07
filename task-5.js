const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const output = function () {
  if (inputEl.value.length > 0) {
    console.log(1);
    outputEl.textContent = inputEl.value;
  } else {
    outputEl.textContent = "незнакомец";
  }
};
inputEl.addEventListener("input", output);
