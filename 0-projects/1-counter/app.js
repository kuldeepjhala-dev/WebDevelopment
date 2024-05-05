const counterValue = document.querySelector(".counter-value");
const incrBtn = document.querySelector(".incr-btn");
const decrBtn = document.querySelector(".decr-btn");
const incrDecrBy = document.querySelector("#incr-decr-input");
const resetBtn = document.querySelector(".reset-btn");

let increaseDecreaseBy = 1;

incrDecrBy.addEventListener("change", (event) => {
    increaseDecreaseBy = incrDecrBy.value;
    counterValue.innerText = 0;
    console.log(increaseDecreaseBy);
});

incrBtn.addEventListener("click", () => {
    counterValue.innerText = Number(counterValue.innerText) + Number(increaseDecreaseBy);
});

decrBtn.addEventListener("click", () => {
    counterValue.innerText = Number(counterValue.innerText) - Number(increaseDecreaseBy);
})

resetBtn.addEventListener("click", () => {
    counterValue.innerText = 0;
    incrDecrBy.value = 1;
})