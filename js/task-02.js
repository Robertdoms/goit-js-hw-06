const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector(`ul`);
ingredients.textContent = "Ingredients:";

const items = ingredients.map(ingredient => {
  const item = document.createElement(`li`);
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});

console.log(items);
ingredientsList.append(...items);
