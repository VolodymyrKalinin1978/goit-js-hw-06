const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = el;
  itemRef.className = "item";
  ingredientsRef.appendChild(itemRef);
});

console.log(ingredientsRef);
