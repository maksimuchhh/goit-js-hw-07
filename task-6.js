const inputEl = document.querySelector("#validation-input");
const validation = function () {
  if (inputEl.value.length == inputEl.dataset.length) {
    if (!inputEl.classList.contains("valid")) {
      inputEl.classList.add("valid");
      inputEl.classList.remove("invalid");
    }
  } else if (!inputEl.classList.contains("invalid")) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
};
inputEl.addEventListener("change", validation);
