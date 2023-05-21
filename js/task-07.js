const fontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

fontSizeControlRef.addEventListener("input", () => {

  let currentValue = parseInt(fontSizeControlRef.value);

  textRef.style.fontSize = `${currentValue}px`
    
});
