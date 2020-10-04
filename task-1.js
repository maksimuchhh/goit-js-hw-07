console.log(`В списке ${categories.children.length} категории`);
const itemHeaders = document.querySelectorAll("#categories li.item h2");

Array.from(itemHeaders).map((el) => {
  console.log(`Категория: ${el.textContent}`);
  console.log(`Количество элементов: ${el.nextElementSibling.children.length}`);
});
