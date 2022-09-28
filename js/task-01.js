const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

const categoriesList = document.querySelector("ul");
// console.log(itemList);

const firstItem = categoriesList.firstElementChild;
// console.log(firstItem);

const firstItemTitle = firstItem.firstElementChild;
console.log(`Category: ${firstItemTitle.textContent}`);

const firstItemCount = firstItem.querySelectorAll("li");
console.log(`Elements: ${firstItemCount.length}`);

const secondItem = firstItem.nextElementSibling;
// console.log(secondItem);
const secondItemTitle = secondItem.firstElementChild;
console.log(`Category: ${secondItemTitle.textContent}`);
const secondItemCount = secondItem.querySelectorAll("li");
console.log(`Elements: ${secondItemCount.length}`);

const lastItem = secondItem.nextElementSibling;
// console.log(lastItem);
const lastItemTitle = lastItem.firstElementChild;
console.log(`Category: ${lastItemTitle.textContent}`);
const lastItemCount = lastItem.querySelectorAll("li");
console.log(`Elements: ${lastItemCount.length}`);
