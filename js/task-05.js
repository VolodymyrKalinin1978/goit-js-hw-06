const nameInputRef = document.querySelector('[id="name-input"]');
const nameOutputRef = document.querySelector('[id="name-output"]');

nameInputRef.addEventListener("input", (e) => {
  nameOutputRef.textContent =
    e.target.value !== "" ? e.target.value : "Anonymous";
});
