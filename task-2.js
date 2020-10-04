const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const list = document.querySelector("#ingredients");
ingredients.map((el) => {
  const item = document.createElement("li");
  item.textContent = el;
  list.appendChild(item);
});
