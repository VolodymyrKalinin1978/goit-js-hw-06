const numberDivRef = document.querySelector('[type="number"]');
const btnDataCreateRef = document.querySelector("[data-create]");
const btnDataDestroyRef = document.querySelector("[data-destroy]");
const denamicDivBoxesRef = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let divBox = document.createElement("div");
    divBox.style.width = 30 + i * 10 + "px";
    divBox.style.height = 30 + i * 10 + "px";
    divBox.style.backgroundColor = getRandomHexColor();
    divBox.classList.add("box");
    denamicDivBoxesRef.appendChild(divBox);
  }
}

function destroyBoxes() {
  denamicDivBoxesRef.innerHTML = "";
}

btnDataCreateRef.addEventListener("click", () => {
  let amount = parseInt(numberDivRef.value);

  createBoxes(amount);
});

btnDataDestroyRef.addEventListener("click", destroyBoxes);
