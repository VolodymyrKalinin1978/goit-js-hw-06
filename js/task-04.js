let counterValue = 0;
const counterValueRef = document.querySelector("#value") 
const counterValuePlusRef = document.querySelector('[data-action="increment"]')
const counterValueMinusRef = document.querySelector('[data-action="decrement"]')

counterValuePlusRef.addEventListener("click", () => {
   counterValue += 1;
   counterValueRef.textContent = counterValue;
 });
 counterValueMinusRef.addEventListener("click", () => {
  counterValue -= 1;
  counterValueRef.textContent = counterValue;
});



