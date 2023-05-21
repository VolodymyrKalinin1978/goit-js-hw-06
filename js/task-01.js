const itemRef = document.querySelectorAll(".item");
console.log(`Number of categories: ` + itemRef.length);

itemRef.forEach((ref) => {
  const categoryName = ref.querySelector("h2").textContent;
  const categoryItems = ref.querySelectorAll("li");
  console.log("Category: " + categoryName);
  console.log("Elements: " + categoryItems.length);
});
