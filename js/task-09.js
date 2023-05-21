function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");
const backgroundColorRef = document.querySelector(".color");
const changeColorBtnRef = document.querySelector(".change-color");

changeColorBtnRef.addEventListener("click", () => {
  bodyRef.style.backgroundColor = getRandomHexColor();

  backgroundColorRef.textContent = getRandomHexColor();
});
